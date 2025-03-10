import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready 12");
});
app.post("/products", (req, res) => {});
connectDB();
app.listen(5001, () => {
  console.log("Server started at https://localhost:5001");
});
