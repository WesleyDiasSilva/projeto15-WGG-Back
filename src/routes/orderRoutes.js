import { Router } from "express";
import { newOrder } from "../controllers/orders/newPostController.js";
import { authUserMiddleware } from "../middlewares/authMiddleware.js";
import { newOrderMiddleware } from "../middlewares/newOrderMiddleware.js";

const route = Router();

route.post("/order", authUserMiddleware, newOrderMiddleware, newOrder);

export default route;
