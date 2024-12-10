//dependencies....
const jwt = require("jsonwebtoken");


const authenticToken = (req,res,next)=>{
    const token = req.header("Athorization")?.replace("Bearer ","");

    if(token){
        try{
            const decode = jwt.verify(token,process.env.JWT_Scrt);
            req.user = decode;
            console.log(req);
        }
        catch(er){
            return res.status(500).json({Error:"accessing problem from server"})
        }
    }else{
        return res.status(401).json({Error:"access denied"});
    }
    next();
}


module.exports = authenticToken;