const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        error: {
          message: "Usuário não encontrado!",
        },
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        error: {
          message: "Senha incorreta!",
        },
      });
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });

    return res.status(200).json({
      message: "Usuário logado com sucesso!",
      token: token,
    });
  },
};
