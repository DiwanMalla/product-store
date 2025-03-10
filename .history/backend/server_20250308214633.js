import express from "express";
import { connectDB } from "./config/db";

const app = express();
app.get("/", (req, res) => {
  res.send("Server is Ready 12");
});

app.listen(5001, () => {
  connectDB;
  console.log("Server started at https://localhost:5001 wow");
});
