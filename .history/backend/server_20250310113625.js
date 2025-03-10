import express from "express";
import { connectDB } from "./config/db.js";
import path from "path";
import productRoute from "./routes/productRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();
app.use("/api/products", productRoute);
connectDB();
app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${PORT}`);
});
