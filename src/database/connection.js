import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

  const client = new MongoClient(process.env.MONGO_URI)
  try{
    await client.connect();
    console.log("Database is connected")
  }catch(err){
    console.log(err)
  }
  
  
const database = client.db("wwg")


export const connectionUser = database.collection("users")
export const connectionGames = database.collection("games")
export const connectionImage = database.collection("images")
export const connectionSession = database.collection("sessions")