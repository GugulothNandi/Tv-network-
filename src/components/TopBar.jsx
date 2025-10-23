import React from "react";

function TopBar() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  return (
    <div className="flex justify-between items-center mb-4 p-2 bg-gray-700 rounded-lg">
      <div>{time}</div>
      <div>Battery: 95%</div>
    </div>
  );
}

export default TopBar;
