const Sequelize = require("sequelize");

const connection = new Sequelize("findmoviedb", "root", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = connection;
