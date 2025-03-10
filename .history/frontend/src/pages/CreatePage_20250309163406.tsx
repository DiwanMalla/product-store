/* eslint-disable @typescript-eslint/no-explicit-any */
import { useProductStore } from "@/store/product";
import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the CSS
import { useHistory } from "react-router-dom";

const CreatePage = () => {
  const history = useHistory();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent page refresh
    // Logic to handle the form submission, e.g., save product
    const { success, message } = await createProduct(newProduct);

    // Show toast notification based on result
    if (success) {
      toast.success(message); // Success toast
    } else {
      toast.error(message); // Error toast
    }
    setNewProduct({ name: "", price: "", image: "" });
    redirect("/");
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text uppercase bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        Create New Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter product name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-lg font-semibold">
            Price
          </label>
          <input
            id="price"
            type="number"
            placeholder="Enter product price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-lg font-semibold">
            Image URL
          </label>
          <input
            id="image"
            type="url"
            placeholder="Enter image URL"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors mt-6"
          >
            Create Product
          </button>
        </div>
      </form>

      {/* Toast Container to show notifications */}
      <ToastContainer />
    </section>
  );
};

export default CreatePage;
