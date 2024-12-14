//dependencies....
const {model} = require("mongoose");
const TaskSchema = require("../../Models/TaskSchema");
const UserModel = require("../../Models/UserSchema");



//moudle.scuffholder...
const Controller = {};

//Create task....
Controller.getTask = async(req,res)=>{
    let individualUser = req.headers["uid"];
    let checkUserNameDB = await UserModel.findOne({_id:individualUser});
    // console.log(checkUserNameDB);
    //extract__name from db by this checkUserNameDB....
    let setIndividualUserName = `${checkUserNameDB.name}_'s_Task`;

    const taskModel = model(setIndividualUserName,TaskSchema);
    

    try{
        let taskData = await taskModel.find();
        return res.status(200).json(taskData);
    }catch(er){
        console.log(er);
    }
    
}


module.exports = Controller;
