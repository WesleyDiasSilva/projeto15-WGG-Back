import { connectionUser } from "../database/connection.js";

export async function findEmail(email) {
  try {
    const user = await connectionUser.findOne({ email });
    if (user) {
      return { user, status: true };
    }
    return { status: false };
  } catch (err) {
    return { err, status: false };
  }
}

export async function findUsername(username) {
  try {
    const user = await connectionUser.findOne({ username });
    if (user) {
      return { user, status: true };
    }
    return { status: false };
  } catch (err) {
    return { err, status: false };
  }
}
