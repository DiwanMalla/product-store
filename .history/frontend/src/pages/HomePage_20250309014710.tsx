import React from "react";
import { useProductStore } from "@/store/product";

const HomePage = () => {
  const { products } = useProductStore(); // Get the products from the store
  const {};
  return (
    <section className="flex justify-center pt-15 h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Product Store
        </h1>
        <p className="text-lg mb-6">
          Discover the best products and shop your favorites.
        </p>

        {products.length === 0 ? (
          <p className="text-xl font-semibold">No products found</p> // Show if no products
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Current Products</h2>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-md">{product.price}</p>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mt-2 rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
