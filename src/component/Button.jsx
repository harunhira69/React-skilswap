import React from "react";
import { NavLink } from "react-router"; 
const NavButton = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        relative px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base 
        transition-all duration-300 ease-in-out w-full sm:w-auto text-center 
        flex items-center justify-center overflow-hidden group
        
        ${
          isActive
            ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg scale-105 hover:scale-110"
            : "bg-white border border-indigo-500 text-indigo-600 hover:bg-linear-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:shadow-xl"
        }
        `
      }
    >
      {/* Smooth animated underline when active */}
      <span className="relative z-10">{children}</span>
      {({ isActive }) =>
        isActive && (
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-t-xl animate-pulse" />
        )
      }
    </NavLink>
  );
};

export default NavButton;
