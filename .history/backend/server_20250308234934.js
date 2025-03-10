import express from "express";
import { connectDB } from "./config/db.js";

import productRoute from "./routes/productRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use("/api/products", productRoute);
connectDB();
app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${PORT}`);
});
