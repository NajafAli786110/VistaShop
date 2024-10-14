import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto lg:w-2/3">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Feel free to reach out!
        </p>
        <Link to="https://linktr.ee/Najaf_Ali_Balti" target="_blank" className="text-black dark:text-black">Najaf Ali Balti</Link>
      </div>
    </div>
  );
};
