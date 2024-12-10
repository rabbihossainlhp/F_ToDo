//dependencies...
const {Schema,model} = require("mongoose");


const TaskSchema = Schema({
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
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User_Personal",
        required:true
    }
})


const Task = model("Task",TaskSchema);
module.exports = Task;