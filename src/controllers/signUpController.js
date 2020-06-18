require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async store(req, res) {
    const password = await bcrypt.hash(req.body.password, 10);
    req.body.password = password;

    try {
      const userCreate = await User.create(req.body);

      const token = jwt.sign(
        { id: userCreate.id },
        process.env.SECRET_AUTH_KEY,
        {
          expiresIn: 86400,
        }
      );

      return res.status(201).json({
        message: "Usuário criado com sucesso!",
        token: token,
      });
    } catch (err) {
      return res.status(400).json({
        error: {
          message: err.errors[0].message,
        },
      });
    }
  },
};
