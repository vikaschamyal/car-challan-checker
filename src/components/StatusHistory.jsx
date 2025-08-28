import React from "react";

const StatusHistory = ({ challans, vehicleNumber }) => {
  if (!challans || challans.length === 0) return null;

  const totalAmount = challans.reduce((sum, ch) => sum + ch.amount, 0);
  const paid = challans.filter((ch) => ch.status === "Paid").length;
  const pending = challans.filter((ch) => ch.status === "Pending").length;

  return (
    <div className="bg-white shadow-md rounded p-4 w-full max-w-md mt-4">
      <h2 className="text-lg font-semibold mb-2">Status Summary</h2>
      <p><strong>Vehicle Number:</strong> {vehicleNumber}</p>
      <p><strong>Total Challans:</strong> {challans.length}</p>
      <p><strong>Paid:</strong> {paid}</p>
      <p><strong>Pending:</strong> {pending}</p>
      <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
    </div>
  );
};

export default StatusHistory;
