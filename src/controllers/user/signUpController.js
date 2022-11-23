import { signUpSchema } from "../../middlewares/signUpMiddleware.js";
import bcrypt from "bcrypt";
import { connectionUser } from "../../database/connection.js";

export async function signUp(req, res) {
  const user = req.body;

  const validation = signUpSchema.validate(user);
  if (validation.error) {
    return res.sendStatus(422);
  }
  try {
    const hashPassword = bcrypt.hashSync(user.password, 10);
    await connectionUser.insertOne({ ...user, password: hashPassword });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
