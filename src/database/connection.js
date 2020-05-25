const Sequelize = require("sequelize");
require("dotenv").config({ path: "../../.env" });

const connection = new Sequelize("findmoviedb", "root", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = connection;
