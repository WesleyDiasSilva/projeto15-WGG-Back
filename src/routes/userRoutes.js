import { Router } from "express";
import { login } from "../controllers/userController.js";
import { loginMiddleware } from "../middlewares/loginMiddleware.js";

const route = Router();

route.post("/sign-up", signUp)

route.post("/sign-in", loginMiddleware, login)

export default route;