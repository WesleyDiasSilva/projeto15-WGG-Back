import { Router } from "express";
import { connectionUser } from "../database/connection.js";

const route = Router();

route.post("/sign-up", async (req, res) => {
  const {name, email} = req.body;
 try{
  const result = await connectionUser.insertOne({name, email})
  res.status(201).send({message: "OK", result, status: true})
 }catch(err){
  res.sendStatus(500)
  console.log(err)
 }
})

export default route;