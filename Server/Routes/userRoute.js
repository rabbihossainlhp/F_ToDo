//Dependencies....
const Router = require("express").Router();
const {createData} = require("../Controller/userRouteController");

//Decleare some route .......
//____POST/CREATE_____
Router.post("/",createData);


//exporting....
module.exports = Router;