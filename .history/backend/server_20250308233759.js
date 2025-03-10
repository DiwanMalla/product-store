import express from "express";
import { connectDB } from "./config/db.js";

import productRoute from "./routes/productRoute.js";

const app = express();
app.use("/api/products", productRoute);
connectDB();
app.listen(8000, () => {
  console.log("Server started at https://localhost:8000");
});
