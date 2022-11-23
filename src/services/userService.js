import bcrypt from "bcrypt";
import { schemaEmail } from "../models/loginModel.js";
import { findEmail, findUsername } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import { createToken, findSession } from "../repositories/sessionsRepository.js";

export async function serviceLogin(emailOrUsername, password) {
  const validationEmail = schemaEmail.validate({ email: emailOrUsername });

  if (!validationEmail.error) {
    const result = await findEmail(emailOrUsername);
    if (result.status) {
      const validationHashUser = bcrypt.compareSync(password, result.user.hash);
      if (validationHashUser) {
        return { status: true, user: result.user };
      } else {
        return { status: false, user: "Password Incorrect" };
      }
    } else {
      return { status: false, user: undefined };
    }
  } else {
    const result = await findUsername(emailOrUsername);
    if (result.status) {
      const validationHashUser = bcrypt.compareSync(password, result.user.hash);
      if (validationHashUser) {
        return { status: true, user: result.user };
      } else {
        return { status: false, user: "Password Incorrect" };
      }
    } else {
      return { status: false, user: undefined };
    }
  }
}

export async function serviceToken(email, username) {
  const data = { email, username };
  const secretKey = process.env.SECRET_KEY;
  const validateToken = { expiresIn: 60 * 60 * 24 };
  const newToken = jwt.sign(data, secretKey, validateToken);
  try {
    const existSessionThisUser = (await findSession(username)).status;
    if (existSessionThisUser) {
      return { status: false };
    }

    const resultCreatedToken = (await createToken(newToken, username)).status
    if(!resultCreatedToken){
      return { status: false }
    }

    return {status: true, token: newToken}

  } catch (err) {}
}