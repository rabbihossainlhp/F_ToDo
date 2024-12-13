//dependencies...
const {Schema} = require("mongoose");


const TaskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true
    },
})

module.exports = TaskSchema;