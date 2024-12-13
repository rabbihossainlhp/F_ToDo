//dependencies.....
const bcrypt = require("bcrypt");
const UserModel = require("../Models/UserSchema");
const jwt = require("jsonwebtoken");

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
                    // res.status(200).json(checkLogin);

                    //create a jwt-token for checking authentic user....
                    const token = jwt.sign( 
                        {
                        userId:checkLogin._id,
                        email:checkLogin.email
                        },
                        process.env.JWT_Scrt,   
                        {expiresIn:"1h"}    
                    );

                    return res.status(200).json({token:token,"uid":checkLogin._id});
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