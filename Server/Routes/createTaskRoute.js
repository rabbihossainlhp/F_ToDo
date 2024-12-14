//dependenciess...
const Router = require("express").Router();
const {createTask} = require("../Controller/TaskControl/createTask");
const {getTask} = require("../Controller/TaskControl/getTask");


Router.post("/",createTask);
Router.get("/",getTask);

module.exports = Router;