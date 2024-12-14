//dependencies....
const {model} = require("mongoose");
const TaskSchema = require("../../Models/TaskSchema");
const UserModel = require("../../Models/UserSchema");



//moudle.scuffholder...
const Controller = {};

//Create task....
Controller.createTask = async(req,res)=>{
    let individualUser = req.headers["uid"];
    let checkUserNameDB = await UserModel.findOne({_id:individualUser});
    //extract__name from db by this checkUserNameDB....
    let setIndividualUserName = checkUserNameDB.name;

    const taskModel = model(`${setIndividualUserName}_'s_Task`,TaskSchema);
    let {title,subtitle,description} = req.body;

    try{
        if(title&&description){
            let saveTask = await taskModel({title,subtitle,description});
            await saveTask.save();
            return res.status(201).json(saveTask);
        }else{
            console.log("title/descr is missing");
        }
    }catch(er){
        console.log(er);
    }
    

    


    // console.log(req.body);
    // console.log(req.headers["uid"]);
}


module.exports = Controller;


