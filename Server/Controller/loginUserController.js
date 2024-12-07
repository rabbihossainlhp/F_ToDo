//dependencies.....
const bcrypt = require("bcrypt");
const UserModel = require("../Models/UserSchema");

//module_scuffholder....
const Controller = {};

//________________________________________________________________________________________
//Check data for login from database....
Controller.checkData = async(req,res)=>{

        let {email,password} = req.body;
        try{
            const checkLogin = await UserModel.findOne({email});
            if(checkLogin){
                let matchPass = await bcrypt.compare(password,checkLogin.password);
                if(matchPass){
                    res.status(200).json(checkLogin);
                }else{
                    return res.status(401).json({err:"autentication failur"});
                }
            }else{
                return res.status(403).json({err:"user is not exist"});
            }
        }catch(err){
            return res.status(500).json(err);
        }

}



//exporting...
module.exports = Controller;    