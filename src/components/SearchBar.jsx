import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [vehicleNumber, setVehicleNumber] = useState("");

  const handleSearchClick = () => {
    if (vehicleNumber.trim() !== "") {
      onSearch(vehicleNumber.toUpperCase());
    }
  };

  return (
    <div className="flex gap-2 mb-6 mt-6">
      <input
        type="text"
        placeholder="Enter Vehicle Number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
        className="border p-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSearchClick}
        className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
      >
        <FaSearchengin /> Search
      </button>
    </div>
  );
};

export default SearchBar;
