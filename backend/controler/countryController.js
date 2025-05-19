const countrymodal = require("../model/countrymodal")

//#region add country
const createCountry = async(req,res)=>{
    try{
        const country = req.body

        if(!country){
        return res.status(400).json({status:false,data:{message:"Country name not found"}})
        }

        countryfield = {countryname:country.countryname}

        const dbcountry = new countrymodal(countryfield)

        dbcountry.save()

        return res.status(200).json({status:true,data:{message:"Country added successfully",data:dbcountry}})
    }
    catch(error){
        return res.status(500).json({status:false,data:{message:"internal server error",data:error}})
    }
}
//#endregion

//#region read counry
const readCountry = async(req,res) =>{
    try{
        const dbcountry = await countrymodal.find()
        return res.status(200).json({status:true,data:{message:"All Countries ",data:dbcountry}})
    }
    catch(error){
        return res.status(500).json({status:false,data:{message:"internal server error",data:error}})
    }
}
//#endregion
module.exports={createCountry,readCountry}