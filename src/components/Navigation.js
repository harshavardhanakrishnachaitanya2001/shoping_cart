import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className=" bg-gray-200 p-3 min-w-max mr-3 rounded">
        <ul className="flex space-x-3 w-full">
          <li>
            <a href="https://www.google.com">Home</a>
          </li>
          <li>
            <a href="#">Stationary</a>
          </li>
          <li>
            <a href="#">Cloths</a>
          </li>
          <li>
            <a href="#">Food</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Play</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
