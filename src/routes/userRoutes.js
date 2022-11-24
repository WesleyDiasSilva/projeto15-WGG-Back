import { Router } from "express";
import { login } from "../controllers/userController.js";
import { loginMiddleware } from "../middlewares/loginMiddleware.js";
import { signUp } from"../controllers/signUpController.js"
import { signUpMiddleware } from "../middlewares/signUpMiddleware.js"

const route = Router();

route.post("/sign-up", signUpMiddleware, signUp)

route.post("/sign-in", loginMiddleware, login)

export default route;