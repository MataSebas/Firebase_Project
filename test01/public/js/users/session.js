const jwt = require("jsonwebtoken");

exports.checkjwt = (req, res, next) => {
  const token = req.headers["token"];
  if (!token) {
    return res.status(401).json("Acceso no autorizado");
  }
  let payload;
  try {
    // La función correcta para verificar un token con jsonwebtoken es `jwt.verify`.
    payload = jwt.verify(token, "utnkey1234");
  } catch (error) {
    return res.status(401).json("Acceso no autorizado");
  }

  res.locals.payload = payload;
  const { idUsuario } = payload;
  const newToken = jwt.sign({ idUsuario }, "utnKey1234", { expiresIn: "3m" });
  res.setHeader("token", newToken);
  next();
};
