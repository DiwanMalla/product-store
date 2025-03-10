import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.js";
import mongoose from "mongoose";

const app = express();

connectDB();
app.listen(8000, () => {
  console.log("Server started at https://localhost:8000");
});
