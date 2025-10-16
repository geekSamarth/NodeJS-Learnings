import express from "express";
import db from "../db/index.js";
import { usersTable } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { createHmac, randomBytes } from "crypto";
const router = express.Router();
router.get("/");

// route for signup of user

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required! " });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Please provide password with atleast 8 characters!" });
  }
  const [existingUser] = await db
    .select({ email: usersTable.email })
    .from(usersTable)
    .where((table) => eq(table.email, email));
  if (existingUser) {
    return res
      .status(400)
      .json({ error: `user with email ${email} already exists!! ` });
  }

  const salt = randomBytes(256).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  const [user] = await db
    .insert(usersTable)
    .values({ name, email, password: hashedPassword, salt })
    .returning({ id: usersTable.id });
  if (!user) {
    return res
      .status(500)
      .json({ error: "Error while registering user! Internal Server Error" });
  }
  return res.status(201).json({ status: "Success", data: { userId: user.id } });
});

// route for user login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: `All fields are required!` });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: `Password must be 8 character long! ` });
  }
  //   check if user exists or not
  const [existingUser] = await db
    .select({
      email: usersTable.email,
      salt: usersTable.salt,
      password: usersTable.password,
    })
    .from(usersTable)
    .where((table) => eq(table.email, email));
  if (!existingUser) {
    return res
      .status(401)
      .json({ error: `User not found! Please Register yourself!` });
  }
  const salt = existingUser.salt;
  const existingHash = existingUser.password;
  const newHash = createHmac("sha256", salt).update(password).digest("hex");
  if (newHash != existingHash) {
    return res.status(400).json({ error: `Incorrect Password! ` });
  }
  //   generate a token for user

  const payload = {
    id:existingUser.id,
    name:existingUser.name,
    email:existingUser.email
  }

const token  = jwt.sign(payload,process.env.JWT_SECRET)

  return res
    .status(200)
    .json({ status: "Success", message: "User loggedIn successfully !",token });
});
export default router;
