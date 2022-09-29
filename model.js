const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required :true
    },
    dob : {
        type:String,
        required : true
    } ,
    empid :{
        type : Number,
        required : true
    },
    phonenumber : {
        type : Number,
        required : true
    },
    email : {
        type:String,
        required : true
    },
    address :[
        {
            country : {
                type : String,
                required : true 
                },
            state : {
                type : String,
                required : true 
                },
            city : {
                type : String,
                required : true
                },
            street : {
                type : String,
                required : true
            },
            pincode : {
                type : Number,
                required : true
            }
        }]
    })
module.exports= mongoose.model("User",userSchema)
