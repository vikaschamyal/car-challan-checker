import React from "react";
import {
  FaCar,
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mt-6 mx-4 md:mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Left: Hero Icon */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center">
        <FaCar className="text-6xl md:text-8xl text-black-400 mb-4" />
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
          Vehicle Challan Checker
        </h1>
      </div>

      {/* Right: Info */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-gray-700 text-lg mb-4">
          Easily check your traffic challans using your vehicle number. Stay
          informed about pending and paid challans.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            <p className="text-gray-800">
              Step 1: Enter your vehicle number in the search bar above.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaExclamationTriangle className="text-yellow-500" />
            <p className="text-gray-800">
              Step 2: View all challans including paid and pending status.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" />
            <p className="text-gray-800">
              Step 3: Monitor challan history and total amount due.
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-4 flex items-center justify-center md:justify-start gap-2">
          <FaInfoCircle /> Note: Only one vehicle can be checked at a time.
        </p>
        <p className="text-gray-600 mt-4">
          Example vehicle numbers you can try:
          <span className="font-mono bg-gray-100 px-2 py-1 rounded mx-1">
            DL01AB1234
          </span>
          <span className="font-mono bg-gray-100 px-2 py-1 rounded mx-1">
            PB10XY9876
          </span>
          <span className="font-mono bg-gray-100 px-2 py-1 rounded mx-1">
            MH12CD4567
          </span>
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
