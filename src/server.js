import express from "express";
import cors from "cors";
import chalk from "chalk";
import routeUser from "./routes/userRoutes.js";
import routeOrder from "./routes/orderRoutes.js"

const app = express();
app.use(cors());
app.use(express.json())
app.use(routeUser)
app.use(routeOrder)
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(chalk.bgBlack.blue(`Server is running in port: ${port}`))
);
