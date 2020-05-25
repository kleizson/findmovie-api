const routes = require("express").Router();

const registerController = require("./controllers/registerController");

routes.post("/register", registerController.store);

module.exports = routes;
