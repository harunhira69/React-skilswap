// components/NavButton.jsx
import React from "react";
import { NavLink } from "react-router";

const NavButton = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 text-sm rounded-lg font-medium transition-all duration-300 text-center
         w-full sm:w-auto
         ${isActive
          ? "bg-indigo-600 text-white shadow-lg hover:shadow-xl hover:bg-indigo-700"
          : "bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md"
         }`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
