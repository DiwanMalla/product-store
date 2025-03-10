const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-3xl md:text-7xl font-bold">Product Store</h2>
        <div className="space-x-6 hidden md:flex">
          <a href="/" className="text-lg hover:text-gray-300 transition">
            Home
          </a>
          <a href="/about" className="text-lg hover:text-gray-300 transition">
            About
          </a>
          <a href="/shop" className="text-lg hover:text-gray-300 transition">
            Shop
          </a>
          <a href="/contact" className="text-lg hover:text-gray-300 transition">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
