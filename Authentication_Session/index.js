import express from "express";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import { authenticatedMiddlware } from "./middlewares/auth.middlewares.js";
const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(express.json());
app.use(authenticatedMiddlware);
app.get("/", (req, res) => {
  return res.json({ status: "Server is up and running." });
});
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
