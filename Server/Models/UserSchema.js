//dependecies...
const {Schema,model} = require("mongoose");

const UserSchema = new Schema({
    name:{
        type:String,
        required:true 
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel = model("User_Personal",UserSchema);
module.exports = UserModel;