//dependencies....
const {model} = require("mongoose");
const TaskSchema = require("../../Models/TaskSchema");
const UserModel = require("../../Models/UserSchema");



//moudle.scuffholder...
const Controller = {};

//Create task....
Controller.deleteTask = async(req,res)=>{
    let individualUser = req.headers["uid"];
    let selectedID = req.params.id;
    let checkUserNameDB = await UserModel.findOne({_id:individualUser});
    // console.log(checkUserNameDB);
    //extract__name from db by this checkUserNameDB....
    let setIndividualUserName = `${checkUserNameDB.name}_'s_Task`;

    const taskModel = model(setIndividualUserName,TaskSchema);
    
    if(selectedID){
        try{
            await taskModel.findOneAndDelete({_id:selectedID});
            let taskData2 = await taskModel.find();
            return res.status(200).json(taskData2);
        }catch(er){
            console.log(er);
        }
    }else{ return res.status(500).json({"err":"not founded the id to detect"})}
    
}


module.exports = Controller;
