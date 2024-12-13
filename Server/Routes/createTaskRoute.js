//dependenciess...
const Router = require("express").Router();
const {createTask} = require("../Controller/TaskControl/createTask");


Router.post("/",createTask);

module.exports = Router;