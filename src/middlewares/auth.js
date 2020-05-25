const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: {
        message: "Token não encontrado!",
      },
    });
  }

  const authorizationParts = authHeader.split(" ");

  if (!authorizationParts.length === 2) {
    return res.status(401).json({
      error: {
        message: "Erro ao autorizar token!",
      },
    });
  }

  const [scheme, token] = authorizationParts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({
      error: {
        message: "Formato de Token incorreto!",
      },
    });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: {
          message: "Token invalido!",
        },
      });
    }

    req.userId = decoded.id;

    return next();
  });
};
