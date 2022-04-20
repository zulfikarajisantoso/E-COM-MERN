import jwt from "jsonwebtoken";

export const verifytoken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token Not Valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Anda belum login");
  }
};

export const verifytokenauthor = (req, res, next) => {
  verifytoken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Anda Tidak Diizinkan");
    }
  });
};

export const verifytokenadmin = (req, res, next) => {
  verifytoken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Anda Bukan Admin");
    }
  });
};
