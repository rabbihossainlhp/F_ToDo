//Dependencies.......
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const  cors = require("cors");
const userRouter = require("./Routes/userRoute");
/**
 * 
 * 
 * 
 *///Main application....
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
/**
 * 
 * 
 *///Routing.....

app.use("/signup",userRouter);
app.get("/",(req,res)=>{res.send("<h2>HOME</h2>")});
/**
 * 
 * 
 * 
 *///initialize somting for connecting with db
let pass = encodeURIComponent("123ASDasd@&");
let mongoUrl = `mongodb+srv://hayat:${pass}@cluster0.ardgf.mongodb.net/Todo_People`;
let port = 5000;
/**
 * 
 * 
 * 
 *///Listen & connect.....
mongoose.connect(mongoUrl,{useNewUrlParser:true})
        .then(()=>{
            console.log("Connected_._._._._._");
            app.listen(port,()=>{console.log("Server is running on port___ "+port)})
        })
        .catch(e=>console.log("Something is wrong to connecting with the Dataase....."+e))

