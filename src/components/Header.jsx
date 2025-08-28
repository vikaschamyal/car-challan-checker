import React from "react";

const Header = ({ onHomeClick }) => {
  return (
    <header className="bg-gray-800 text-gray-200 w-full shadow-md">
      <div
        onClick={onHomeClick}
        className="cursor-pointer flex flex-col items-center justify-center py-6 px-4 hover:bg-blue-900 transition-colors duration-200"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center">
           Vehicle Challan Checker
        </h1>
        <p className="text-sm md:text-base text-blue-100 mt-1">
         
        </p>
      </div>
    </header>
  );
};

export default Header;
