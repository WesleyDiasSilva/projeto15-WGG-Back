import { Router } from "express";
import { signUp } from "../controllers/signUpController.js";
import { connectionUser } from "../database/connection.js";

const route = Router();

route.post("/sign-up", signUp)

export default route;