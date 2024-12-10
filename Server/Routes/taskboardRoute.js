//Dependencies....
const Router = require("express").Router();
const checkTaskauthentication = require("../Middleware/authenticationToken");
const {taskBoardGet} = require("../Controller/taskboardControler");

//Decleare some route .......
//____POST/CREATE_____
Router.get("/",checkTaskauthentication, taskBoardGet);


//exporting....
module.exports = Router;    