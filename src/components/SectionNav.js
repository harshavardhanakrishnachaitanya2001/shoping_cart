import React from "react";
import { Link } from "react-router-dom";

const SectionNav = ({links}) => {
  return (
    <nav>
      <ul className="py-2">
        <li className="flex justify-evenly">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                to={`${link.linkName.toLowerCase()}`}
                className="font-semibold text-xl"
              >
                {link.linkName}
              </Link>
            );
          })}
        </li>
      </ul>
    </nav>
  );
};

export default SectionNav;
