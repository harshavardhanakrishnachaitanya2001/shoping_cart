import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    /* Container */
    <div className="flex w-screen items-center">
      {/* Icon */}
      <div className="ml-3">
        <Link to={'/'}>Icon</Link>
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
