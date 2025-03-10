import { PlusSquareIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row">
      <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase bg-gradient-to-r from-cyan-400 to-blue-500">
        <Link to={"/"}>Product Store 🛒</Link>
      </h2>
      <div className="flex items-center gap-2">
        <Link to={"/create"}>
          {" "}
          <Button>
            <PlusSquareIcon />
          </Button>
        </Link>
        {/*Theme change*/}
      </div>
    </div>
  );
};

export default Navbar;
