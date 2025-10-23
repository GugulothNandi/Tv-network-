import React from "react";

function HomeHandle({ onOpen }) {
  return (
    <div className="absolute bottom-4 w-full flex justify-center">
      <div
        onClick={onOpen}
        className="w-32 h-3 bg-gray-600 rounded-full cursor-pointer shadow-lg"
      ></div>
    </div>
  );
}

export default HomeHandle;
