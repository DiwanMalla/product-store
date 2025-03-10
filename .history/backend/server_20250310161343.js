import express from "express";
import { connectDB } from "./config/db.js";
import path from "path";
import productRoute from "./routes/productRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(cors);
app.use("/api/products", productRoute);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

connectDB();
app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${PORT}`);
});
