import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row">
      <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase bg-gradient-to-r from-cyan-400 to-blue-500">
        <Link to={"/"}>Product Store 🛒</Link>
      </h2>
      <div></div>
    </div>
  );
};

export default Navbar;
