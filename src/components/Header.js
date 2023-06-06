import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    /* Container */
    <div className="flex w-screen items-center">
      {/* Icon */}
      <div className="ml-3">
        <a herf="#">Icon</a>
      </div>

      {/* Heading */}
      <div className="w-full">
        <h1 className="text-center font-bold text-4xl">KC stores</h1>
      </div>
      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default Header;
