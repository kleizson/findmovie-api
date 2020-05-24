const Sequelize = require("sequelize");
const sequelize = require("../database/index");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  favs_movies_id: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
});

sequelize.sync();

module.exports = User;
