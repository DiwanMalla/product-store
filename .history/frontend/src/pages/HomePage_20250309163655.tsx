import React, { useEffect } from "react";
import { useProductStore } from "@/store/product";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <section className="h-screen flex justify-center pt-15 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
            <div className="grid grid-cols-3 justify-center gap-3">
              {products.map((product) => (
                <ProductCard
                  key={product.name} // Add a unique key for each product
                  product={product}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
