import React from "react";

const HomePage = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Product Store
        </h1>
        <p className="text-lg mb-6">
          Discover the best products and shop your favorites.
        </p>
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors">
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default HomePage;
