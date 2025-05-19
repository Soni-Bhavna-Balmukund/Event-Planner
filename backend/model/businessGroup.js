const mongoose =  require('mongoose')

const businessgroup = new mongoose.Schema({
    
    gname:{
        type:String,
        required:true
    },
    remark:{
        type:String
    },
 
},{timestamps:true})

module.exports = mongoose.model('businessgroup',businessgroup)