import jwt from "jsonwebtoken";

const validateBody = (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({
      message: "send body",
    });
  }
  next();
};

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1]; //authHeader &&
    console.log(token, "token");

    if (!token) {
      return res.status(400).send({ message: "token miss!" });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ massage: "invalid token", err });
      } else {
        req.userId = decoded.user[0]._id;
        // console.log(decoded);
        // console.log(req.userId);

        next();
      }
    });
  } catch (error) {
    res.status(500).send({ massage: "server error", error });
  }
};

export const validator = {
  validateBody,
  verifyToken,
};
