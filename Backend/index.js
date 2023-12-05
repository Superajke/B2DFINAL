import express from "express";
import cors from "cors";
import mainRouter from "./routes/main.routes.js";
import { connectDB } from "./db/mongo.js";

const PORT = 3000;
const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use(mainRouter);
app.listen(PORT);

console.log(`Server running on port ` + PORT);
