import { PlusSquareIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./Theme/mode-toggle";

const Navbar = () => {
  const { products } = useProduc;
  return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md md:px-12 md:py-6">
      {/*Left section : Logo*/}
      <h2 className="text-3xl sm:text-4xl md:text-5xl dont-bold text-transparent bg-clip-text uppercase bg-gradient-to-r from-cyan-400 to-blue-500">
        <Link to={"/"}>Product Store 🛒</Link>
      </h2>
      {/*Right section*/}
      <div className="flex items-center gap-2">
        <Link
          to={"/create"}
          className="block items-center gap-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
        >
          {" "}
          <Button>
            <PlusSquareIcon size={24} />
            <span className="hidden md:block">Add Product</span>
          </Button>
        </Link>
        {/*Theme change*/}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
