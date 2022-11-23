import { connectionSession } from "../database/connection.js";

export async function createToken(token, username) {
  try {
    const result = await connectionSession.insertOne({ token, username });
    return {status: true}
  } catch (err) {
    console.log(err)
    return {status: false}
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
    console.log(err)
    return
  }
}