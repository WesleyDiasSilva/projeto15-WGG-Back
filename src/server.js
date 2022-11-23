import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";

const app = express();
dotenv.config();
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(chalk.bgBlack.blue(`Server is running in port: ${port}`))
);
