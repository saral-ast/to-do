import React from "react";
import { NavLink } from "react-router";

const NavItem = ({ url, name }) => {
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) =>
          `text-lg font-semibold px-4 py-2 transition-colors duration-300 ${
            isActive ? "text-red-500" : "text-gray-700 hover:text-red-400"
          }`
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;
