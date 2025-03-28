import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});
