const LocationModal = require("../model/LocationModal")

//#region create location
const createLocations = async(req,res) => {
    try{
       const location= req.body

       if(!location){
        return res.status(400).json({status:false,data:{message:"Location not found"}})
       }

       const locationfield = {locationName:location.locationName}

       const dblocation = new LocationModal(locationfield)
       await dblocation.save()

       return res.status(200).json({status:true,data:{message:"Location Created Successfully",data:dblocation}})

    }
    catch(error){
        return res.status(500).json({status:false,data:{message:"internal server error",data:error}})
    }
}

//#endregion

//#region read all location
const allLocation = async(req,res) =>{
    try{
        dblocation = await LocationModal.find()
       return res.status(200).json({status:true,data:{message:"All Locations",data:dblocation}})
    }
    catch(error){
        return res.status(500).json({status:false,data:{message:"internal server error",data:error}})
    }
}
//#endregion
module.exports ={ createLocations,allLocation}