import express from "express";
import dotenv from "dotenv";
const app = express();
app.get("/", (req, res) => {
  res.send("Server is Ready 12");
});
console.log(process.env.MONGO_URI);
app.listen(5001, () => {
  console.log("Server started at https://localhost:5001 wow");
});
