import { PlusSquareIcon, ShoppingCartIcon } from "lucide-react"; // Adding cart icon
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md md:px-12 md:py-6">
      {/* Left section: Logo */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
        <Link to={"/"}>Product Store 🛒</Link>
      </h2>

      {/* Right section: Buttons and cart */}
      <div className="flex items-center gap-4">
        <Link to={"/create"} className="block">
          <Button className="flex items-center gap-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
            <PlusSquareIcon size={24} />
            <span className="hidden md:block">Add Product</span>{" "}
            {/* Show "Add Product" text on larger screens */}
          </Button>
        </Link>

        {/* Cart button */}
        <Link to={"/cart"} className="relative">
          <Button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors">
            <ShoppingCartIcon size={24} />
            {/* Add badge to indicate cart item count */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
              3
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
