const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["teacher","student"], default:"teacher"
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true
    }
    
})

const UserModel=mongoose.model("User",userSchema)

module.exports={
    UserModel
}