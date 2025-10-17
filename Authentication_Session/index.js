import express from "express";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import jwt from "jsonwebtoken";
const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(express.json());
app.use(async function (req, res, next) {
  try {
    const tokenHeader = req.headers("authorization");
    if (!tokenHeader) {
      return next();
    }
    if (!tokenHeader.startsWith("Bearer")) {
      return res.status("fail").json({
        message: "Please provide the correct Bearer token to loggedIn!",
      });
    }
    const token = tokenHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.json({ message: "You are not loggedIn!" });
  }
});
app.get("/", (req, res) => {
  return res.json({ status: "Server is up and running." });
});
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
