import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { PORT } from "./libs/environment_var.js";

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
