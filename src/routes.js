const routes = require("express").Router();

const userController = require("./controllers/userController");
const loginController = require("./controllers/loginController");

routes.post("/register", userController.store);
routes.post("/login", loginController.store);

module.exports = routes;
