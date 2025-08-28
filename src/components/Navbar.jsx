import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md ">
        <div className="flex items-center p-4">
          <div className="text-lg font-bold">
            <Link to="/">e-SHOP</Link>
          </div>
          <div className="relative flex-1 mx-4">
            <form action="">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full border py-2 px-4"
              />
              <FaSearch className="absolute top-3 right-3 text-red-500" />
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <FaShoppingCart className="text-lg" />
            </Link>
            <button className="hidden md:block">Login | Register</button>
            <button className="block md:hidden">
              <FaUser />
            </button>
          </div>
        </div>
        <div className="flex items-center  space-x-10  py-4 font-bold text-sm justify-center">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/shop">
            Shop
          </Link>
          <Link className="hover:underline" to="/contact">
            Contact
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
