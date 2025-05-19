const businessCategory = require("../model/businessCategory");
const businessGroup  = require('../model/businessGroup')

const addcategory = async(req,res) =>{
 try{
    const category = req.body;

    if(!category){
        return res.status(400).json({status:false,message:'category not found'})
    }

    const groupname = await businessGroup.findOne({gname:category.gname})
    console.log(groupname)
    if(!groupname){
        return res.status(400).json({status:false,message:'Groupname not found'})
    }

    const categoryfield = {
        cname:category.cname,remark:category.remark,gid:groupname._id
    }

    const dbcategory = new businessCategory(categoryfield)
    await dbcategory.save()

    return res.status(200).json({status:true,data:{message:"category added successfully",data:dbcategory}})
 }
 catch(error){
    return res.status(500).json({status:false,data:{message:'internal server error',data:error}})
}
}

//#region read category
const readAllCategory = async(req,res)=>{
    try{
        catdb = await businessCategory.find()

        return res.status(200).json({status:true,data:{message:"all category",data:catdb}})
    }
    catch(error){
        return res.status(500).json({status:false,data:{message:'internal server error',data:error}}) 
    }
}
//#endregion
module.exports = {addcategory,readAllCategory}