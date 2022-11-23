import { Router } from "express";
import { login } from "../controllers/loginController.js";
import { loginMiddleware } from "../middlewares/loginMiddleware.js";
import { signUp } from "../controllers/signUpController.js"

const route = Router();

route.post("/sign-up", signUp)

route.post("/sign-in", loginMiddleware, login)

export default route;