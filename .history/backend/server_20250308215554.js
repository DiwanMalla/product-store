import express from "express";
import { connectDB } from "./config/db";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready 12");
});
connectDB();
app.listen(5001, () => {
  console.log("Server started at https://localhost:5001");
});
