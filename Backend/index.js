import express from "express";
import cors from "cors";
import mainRouter from "./routes/main.routes.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(mainRouter);
app.listen(PORT);

console.log(`Server running on port ` + PORT);
