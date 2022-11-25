import { Router } from "express";
import { seed } from "../seed.js";

const route = Router();

route.get("/seed", seed)

export default route;