import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready 12");
});
app.use(express.json()); //allows us to accept JSON data in the req.body
app.post("/api/products", async (req, res) => {
  const product = req.body; //user will send this data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(`Error in Create Product`, error.message);
    res.status(500).json({ success: false, message: `Server Error` });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.
  } catch (error) {
    
  }
});

connectDB();
app.listen(8000, () => {
  console.log("Server started at https://localhost:8000");
});
