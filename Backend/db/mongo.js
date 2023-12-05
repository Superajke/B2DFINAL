import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("** MongoDB connected **")
  } catch (error) {
    console.log(error);
  }
};
