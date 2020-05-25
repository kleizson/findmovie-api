const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async store(req, res) {
    const password = await bcrypt.hash(req.body.password, 10);
    req.body.password = password;

    try {
      const userCreate = await User.create(req.body);

      res.status(201).json({
        message: "Usuário criado com sucesso!",
      });
    } catch (err) {
      res.status(400).json({
        error: {
          message: err.errors[0].message,
        },
      });
    }
  },
};
