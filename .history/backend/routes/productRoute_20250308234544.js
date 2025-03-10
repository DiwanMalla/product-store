import express from "express";
const router = express.Router();
import Product from "../models/product.js";
import { getProducts } from "../controllers/productController.js";

router.use(express.json()); //allows us to accept JSON data in the req.body

router.get("/", getProducts);
router.post("/");
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted succesfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Product cant found" });
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
export default router;
