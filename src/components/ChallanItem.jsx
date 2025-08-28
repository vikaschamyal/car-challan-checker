import React from "react";

const ChallanItem = ({ challan }) => {
  return (
    <li className="py-2 flex justify-between items-center border-b">
      <div>
        <p><strong>Date:</strong> {challan.date}</p>
        <p><strong>Offense:</strong> {challan.offense}</p>
      </div>
      <div className="text-right">
        <p><strong>Amount:</strong> ₹{challan.amount}</p>
        <p className={challan.status === "Paid" ? "text-green-600" : "text-red-600"}>
          {challan.status}
        </p>
      </div>
    </li>
  );
};

export default ChallanItem;
