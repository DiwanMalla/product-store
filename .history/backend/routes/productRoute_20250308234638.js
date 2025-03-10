import express from "express";
const router = express.Router();
import Product from "../models/product.js";
import {
  createProducts,
  deleteProducts,
  getProducts,
} from "../controllers/productController.js";

router.use(express.json()); //allows us to accept JSON data in the req.body

router.get("/", getProducts);
router.post("/", createProducts);
router.delete("/:id", deleteProducts);
router.put("/:id");
export default router;
