const businessCategory = require('../model/businessCategory')
const businessGroup = require('../model/businessGroup')
const countrymodal = require('../model/countrymodal')
const LocationModal = require('../model/LocationModal')
const usermodal = require('../model/usermodal')
const usertype = require('../model/usertype')
const { JWT_SECRET } = require('../utility/config')
const { Sendmail1 } = require('../utility/nodemailer')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

//#region add user
const adduser = async(req,res) => {
    try{
        const user = req.body
       console.log(user)
       console.log("Received user.usertype:", user.usertype);

        if(!user){
            return res.status(400).json({status:false,data:{message:'user is null'}})
        }    

        const hashpswd = await bcrypt.hash(user.password,10)

        const usertypes = await usertype.findById(user.usertype)   
            
        if(!usertypes){
            return res.status(400).json({message:"type not found"})
        }

        const existingemail = await usermodal.findOne({email:user.email})
        if(existingemail){
            return res.status(400).json({message:"Email already exists"})
        }

        const country = await countrymodal.findById(user.country)

        if(!country){
            return res.status(400).json({message:"country not found"})
        }

      

        const userfields = {
         firstname:user.firstname,lastname:user.lastname,middlename:user.middlename,username:user.username,email:user.email,password:hashpswd,
        //  eventlocation:locations._id,
         country:country._id,eventdate:user.eventdate,phonenumber:user.phonenumber,businessname:user.businessname,usertype:usertypes._id,
        }

        // if(user.usertype !== '680e689c5b145049fc075b4e' || user.usertype !== '680e68965b145049fc075b4c'){
        if(user.usertype === '680e68895b145049fc075b48'){
            const locations = await LocationModal.findById(user.locationName)
            if(!locations){
                return res.status(400).json({message:"Location not found"})
            }
                userfields.eventlocation=locations._id
            }

        if (user.usertype === '680e68965b145049fc075b4c') {
            if (!user.businessgroup || !user.businesscategory || !user.businessname) {
              return res.status(400).json({status:false, message:'businessgroup and businesscategory are required for vendors'});
            }
            const businessGroups = await businessGroup.findById(user.businessgroup)
            if(!businessGroups){
                return res.status(400).json({message:"Business Group not found"})
            }
    
            const businessCategories = await businessCategory.findById(user.businesscategory)
            if(!businessCategories){
                return res.status(400).json({message:"Business Category not found"})
            }
            userfields.businessgroup = businessGroups._id;
            userfields.businesscategory = businessCategories._id;           
          }

        const dbuser =  new usermodal(userfields)

        await dbuser.save()
          await Sendmail1(user.email,"Welcome","","<h1>Welcome to our EventPlanner Website</h1><p>Hope You Will Like Our Work </p>")
        return res.status(200).json({status:true,data:{message:'user created successfully',data:dbuser}})
    }

    catch(error){
        console.log(error)
        return res.status(500).json({status:false,data:{message:'internal server error',data:error}})
    }
}
//#endregion

//#region update
const updateuser = async(req,res) => {
    try{
        const id = req.params.id
        const user = req.body

        if(!user){
            return res.status(400).json({status:false,data:{message:'user is null'}})
        }    

        const usertypes = await usertype.findOne({userrole:user.userrole})
        
       
        if(!usertypes){
            return res.status(400).json({message:"type not found"})
        }
        
        const dbuser = await usermodal.updateOne({_id:id},{ firstname:user.firstname,lastname:user.lastname,middlename:user.middlename,username:user.username,email:user.email,password:user.password,eventlocation:user.eventlocation,country:user.country,eventdate:user.eventdate,phonenumber:user.phonenumber,businessname:user.businessname,userrole:usertypes._id, })
        
        return res.status(200).json({status:true,data:{messaage:"Updated successfully",data:dbuser}})
    }
    catch(error){
        return res.status(500).json({status:flase,data:{message:"Internal server error",data:error}})
    }
}
//#endregion

//#region login user
const loginuser = async(req,res) =>{
    try{
    const user = req.body
    if(!user) {res.status(400).json({status:false,data:{message:"user not found"}})}

    const dbuser = await usermodal.findOne({email:user.email})
    if(!dbuser) {res.status(400).json({status:false,data:{message:"Email not found"}})}

    const verify = bcrypt.compareSync(user.password,dbuser.password)
    if(!verify){
        return res.status(404).json({status:false,data:{message:'lnvalid password'}})
    }

    const token = JWT.sign({id:dbuser._id},JWT_SECRET)
    console.log(token,'df')
    return res.status(200).json({status:true,data:{messaage:"login successfully",data:dbuser,token:token}})
    }

    catch(error){
        return res.status(500).json({status:false,data:{message:"Internal server error",data:error}})
    }

}
//#endregion

//#region authVerify 
const AuthVerify = async(req,res) =>{
res.status(200).json({status:true,data:{message:'Authentication Verified',data:req.user1}})
}
//#endregion

module.exports = {adduser,loginuser,AuthVerify}