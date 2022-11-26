import jwt from "jsonwebtoken";

export function authUserMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const secretKey = process.env.SECRET_KEY;
  try {
    const userInformation = jwt.verify(token, secretKey);
    req.tokenUser = userInformation;
    next();
    return;
  } catch (err) {
    res.status(401).send("Invalid Token");
    return;
  }
}
