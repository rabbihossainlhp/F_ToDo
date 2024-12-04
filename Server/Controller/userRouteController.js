//dependencies.....
const UserModel = require("../Models/UserSchema");

//module_scuffholder....
const Controller = {};

//add Controllers.....
//Create and Store data in DB____________________________________________________________-
Controller.createData = async(req,res)=>{

    let {name,phone,email,password} = req.body;
    try{
        if(name && phone && email && password){
            let checkUser = await UserModel.findOne({email});
            if(checkUser){
                return res.status(401).json({err:"user is alreaty exist"});
            }
            let CreateUser = await UserModel({name,phone,email,password});
            await CreateUser.save();
            return res.status(201).json(CreateUser);
        }else{
            return res.status(403).json({err:"something is undefind"});
        }
    }catch(err){
        return res.status(500).json(err);
    }

}
//________________________________________________________________________________________


//________________________________________________________________________________________
//Check data for login from database....
// Controller.checkData = async(req,res)=>{

//         let {email,password} = req.body;
//         try{
//             const checkLogin = await UserModel.findOne({email});
//             if(checkLogin){
//                 if(password == checkLogin.password){
//                     res.status(200).json(checkLogin);
//                 }else{
//                     return res.status(401).json({err:"autentication failur"});
//                 }
//             }else{
//                 return res.status(403).json({err:"user is not exist"});
//             }
//         }catch(err){
//             return res.status(500).json(err);
//         }

// }



//exporting...
module.exports = Controller;