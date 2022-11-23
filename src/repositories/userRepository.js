import { connectionUser } from "../database/connection.js";

export async function findEmail(email) {
  try {
    const user = await connectionUser.findOne({ email });
    return {user, status: true}
  } catch (err) {
    return {err, status: false}
  }
}

export async function findUsername(username){
  try {
    const user = await connectionUser.findOne({ username });
    return {user, status: true}
  } catch (err) {
    return {err, status: false}
  }
}
