const routes = require("express").Router();

const registerController = require("./controllers/signUpController");
const loginController = require("./controllers/signInController");

routes.post("/signup", registerController.store);
routes.post("/signin", loginController.store);

module.exports = routes;
