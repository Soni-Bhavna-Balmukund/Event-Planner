const LocationModal = require('../model/LocationModal')
const stateModal = require('../model/stateModal')
const countrymodal = require('../model/countrymodal')
const areaModal = require('../model/areaModal')

const addArea = async(req,res)=>{
    try{
    const area = req.body

    const city = await LocationModal.findById(area.city)
    if(!city) return res.status(400).json({status:false,data:{message:"City not found"}})

    const state = await stateModal.findById(area.state)
    if(!state) return res.status(400).json({status:false,data:{message:"State Not Found"}})

    const country = await countrymodal.findById(area.country)
    if(!country) return res.status(400).json({status:false,data:{message:"Country Not Found"}})

    const areafields = {areaName:area.areaName,city:city._id,state:state._id,country:country._id}

    const dbarea = new areaModal(areafields)
    await dbarea.save()
    
    return res.status(200).json({ status: true, data: { message: 'Area added Successfully', data: dbarea } })
}
catch(error){
    return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } })
}
}

const readarea = async(req,res) =>{
    try{
        const dbarea = await areaModal.find()
         if (!dbarea) {
            return res.status(400).json({ status: false, data: { message: "Area not found" } })
        }
        return res.status(200).json({ status: true, data: { message: "All Place ", data: dbarea } })

    }catch(error){
    return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } })
    }
}

module.exports = {addArea,readarea}