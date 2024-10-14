import React from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

export const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            VistaShop
          </h1>
        </Link>
        <nav className="flex space-x-4">
            <ThemeBtn />
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Cart
          </Link>
          <Link
            to="/about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
