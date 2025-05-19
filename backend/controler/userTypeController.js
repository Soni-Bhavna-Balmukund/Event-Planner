const usermodal = require("../model/usermodal")
const usertype = require("../model/usertype")

//#region create usertype
const addusertype = async (req, res) => {
    try {
        const type = req.body
        console.log(type, 'type')

        if (!type) {
            return res.status(400).json({ status: false, data: { message: "Type Not Valid" } })
        }

        const typefileds = {
            userrole: type.userrole
        }

        const userdb = new usertype(typefileds)
        await userdb.save()

        return res.status(200).json({ message: "Usertype careated successfully", data: userdb })
    }
    catch (error) {
        return res.status(500).json({ status: false, data: { message: "Internal Server Error", data: error } })
    }
}
//#endregion

//#region read all usertypes
const readusertypes = async(req,res) => {
    try{
        const userdb = await usertype.find()
        return res.status(200).json({status:true,data:{message:"All userstypes",data:userdb }})
    }
    catch(error){
        return res.status(500).json({ststus:false,data:{message:"internal server error",data:error}})
    }
}
// #endregion

//#region get usertype in from user table
const getUsertype = async (req, res) => {
    try {
        //    const userdb = await usertype.find()
        const userdb = await usermodal.aggregate([
            
            {
                $lookup: {
                    from: "usertypes",
                    localField: 'usertype',
                    foreignField: '_id',
                    as: 'usertypes'
                },

            },
             {
                $unwind:'$usertypes'
            },
            {
                $project: {
                    usertypes: '$usertypes.userrole'
                }
            }
           
        ])
        return res.status(200).json({ message: "All Usertypes", data: userdb })
    }
    catch (error) {
        return res.status(500).json({ status: false, data: { message: "Internal server error", data: error } })
    }
}
//#endregion
module.exports = { addusertype, getUsertype ,readusertypes}