const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
    },
    middlename:{
        type:String,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    eventlocation:{
        type:String,
    },
    contry:{
        type:String,
    },
    eventdate:{
        type:Number,
    },
    phonenumber:{
        type:Number,
    }
    
})