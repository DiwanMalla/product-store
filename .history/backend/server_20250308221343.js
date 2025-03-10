import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready 12");
});
app.post("/products", (req, res) => {
  const product = req.body; //user will send this data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
});
connectDB();
app.listen(5001, () => {
  console.log("Server started at https://localhost:5001");
});
