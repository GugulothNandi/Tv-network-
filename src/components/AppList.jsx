import React from "react";

function AppList({ apps, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {apps.map((a, i) => (
        <div
          key={i}
          className="flex flex-col items-center cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
          onClick={() => onSelect(a.name)}
        >
          <img src={a.icon} alt={a.name} className="w-12 h-12 mb-2" />
          <p className="text-sm">{a.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AppList;
