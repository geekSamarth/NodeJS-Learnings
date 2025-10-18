import jwt from "jsonwebtoken";
export const authenticationMiddleware = async function (req, res, next) {
  try {
    const tokenHeader = req.headers("authorization");
    if (!tokenHeader) {
      return next();
    }
    if (!tokenHeader.startsWith("Bearer")) {
      return res.status(400).josn({
        error: "authorization header must start with Bearer",
      });
    }
    const token = tokenHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body = decoded;
  } catch (error) {
    next();
  }
};

export const ensureAuthenticated = async function (req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: "You must be authenticated" });
  }
  next();
};
