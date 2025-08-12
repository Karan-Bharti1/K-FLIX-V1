import React from "react";
import { FaWifi } from "react-icons/fa"; // ✅ Wi-Fi icon

const OnlineStatusUpdate = () => {
  return (
    <div className="bg-black h-screen w-screen flex flex-col items-center justify-center px-4 text-center">
      
      <h1 className="text-red-600 font-bold text-3xl md:text-5xl lg:text-6xl animate-pulse">
        You are Offline
      </h1>

      <p className="text-red-500 font-semibold mt-4 text-lg md:text-2xl lg:text-3xl">
        Please check your internet connection
      </p>

      <FaWifi className="mt-8 text-red-600 animate-bounce text-5xl md:text-6xl lg:text-7xl" />
    </div>
  );
};

export default OnlineStatusUpdate;
