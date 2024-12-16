//dependenciess...
const Router = require("express").Router();
const {createTask} = require("../Controller/TaskControl/createTask");
const {getTask} = require("../Controller/TaskControl/getTask");
const {deleteTask} = require("..//Controller/TaskControl/deleteTask");


Router.post("/",createTask);
Router.get("/",getTask);
Router.delete("/:id",deleteTask);

module.exports = Router;