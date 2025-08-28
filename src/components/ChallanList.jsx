import React from "react";
import ChallanItem from "./ChallanItem";

const ChallanList = ({ challans }) => {
  if (!challans || challans.length === 0) return null;

  return (
    <div className="bg-white shadow-md rounded p-4 w-full max-w-md mb-6">
      <h2 className="text-lg font-semibold mb-2">Challan Records</h2>
      <ul>
        {challans.map((ch) => (
          <ChallanItem key={ch.id} challan={ch} />
        ))}
      </ul>
    </div>
  );
};

export default ChallanList;
