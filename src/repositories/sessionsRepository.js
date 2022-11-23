import { connectionSession } from "../database/connection.js";

export async function createToken(token, username) {
  try {
    await connectionSession.insertOne({ token: "Bearer " + token, username });
    return { status: true };
  } catch (err) {
    return { status: false };
  }
}

export async function findSession(username) {
  try {
    const result = await connectionSession.findOne({ username });
    if (result) {
      return { status: true, user: result };
    } else {
      return { status: false };
    }
  } catch (err) {
    console.log(err);
    return;
  }
}

export async function deleteSession(username) {
  try {
    await connectionSession.deleteOne({ username });
    return { status: true };
  } catch {
    return { status: false };
  }
}
