//Dependencies....
const Router = require("express").Router();
const {checkData} = require("../Controller/loginUserController");

//Decleare some route .......
//____POST/CREATE_____
Router.post("/",checkData);


//exporting....
module.exports = Router;    