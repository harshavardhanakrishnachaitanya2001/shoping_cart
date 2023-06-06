import React from "react";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    name: "Home",
    id: 1,
  },
  {
    name: "Stationary",
    id: 2,
  },
  {
    name: "Cloths",
    id: 3,
  },
  {
    name: "Food",
    id: 4,
  },
  {
    name: "Work",
    id: 5,
  },
  {
    name: "Play",
    id: 6,
  },
];

const Navigation = () => {
  return (
    <div>
      <nav className=" bg-gray-200 p-3 min-w-max mr-3 rounded">
        <ul className="flex space-x-3 w-full">
          <li className="space-x-4 text-lg">
            {NavLinks.map((link, index) => {
              return (
                <Link key={link.id} to={link.name.toLowerCase()}>
                  {link.name}
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
