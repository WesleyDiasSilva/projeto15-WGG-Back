import { Router } from "express";
import { login } from "../controllers/user/loginController.js";
import { loginMiddleware } from "../middlewares/loginMiddleware.js";
import { signUpMiddleware } from "../middlewares/signUpMiddleware.js"
import { signUp } from "../controllers/user/signUpController.js";
import { logout } from "../controllers/user/logoutController.js";
import { authUserMiddleware } from "../middlewares/authMiddleware.js";
const route = Router();

route.post("/sign-up", signUpMiddleware, signUp)
route.post("/sign-in", loginMiddleware, login);

route.use(authUserMiddleware);
route.delete("/session", logout);
route

export default route;
