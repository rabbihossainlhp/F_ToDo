//dependencies....
const {model} = require("mongoose");
const TaskSchema = require("../../Models/TaskSchema");



//moudle.scuffholder...
const Controller = {};

//Create task....
Controller.createTask = async(req,res)=>{
    const taskModel = model(req.headers["uid"],TaskSchema);
    let {title,subtitle,description} = req.body;

    try{
        if(title&&description){
            let saveTask = await taskModel({title,subtitle,description});
            await saveTask.save();
            return res.status(201).json({msg:"successfull"});
        }else{
            console.log("title/descr is missing");
        }
    }catch(er){
        console.log(er);
    }
    

    


    console.log(req.body);
    console.log(req.headers["uid"]);
}


module.exports = Controller;


