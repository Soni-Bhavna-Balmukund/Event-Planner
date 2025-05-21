const mongoose = require('mongoose')

const location = new mongoose.Schema({
    locationName:{
        type:String,
        unique:true,
    }
},{timestamps:true})

module.exports = mongoose.model('locations',location)