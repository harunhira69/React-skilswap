import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "../assets/logom.jpg";
import { AuthContext } from "../Context/AuthContext";

import { FaBars } from "react-icons/fa";
import NavButton from "./Button";
import GlobalLoader from "../Pages/GlobalLoader";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, Logout, setUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    Logout();
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/home");
  };

  const linkClass = ({ isActive }) =>
    `
    px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 
    ${isActive
      ? "bg-indigo-600 text-white shadow"
      : "text-gray-700 hover:bg-indigo-500 hover:text-white"}
  `;

  if (loading) return <GlobalLoader />;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm px-4 sm:px-6 lg:px-12 sticky top-0 z-50">
      <div className="flex items-center justify-between h-16">
        
        {/* Left - Logo + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            <FaBars className="text-gray-700 text-xl" />
          </button>

          {/* Logo */}
          <img
            src={logo}
            alt="SkillSwap Logo"
            className="w-10 h-10 rounded-full shadow-sm"
          />
        </div>

        {/* Center Navigation (Desktop Only) */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
          <li><NavLink to="/home" className={linkClass}>Home</NavLink></li>
  <li><NavLink to="/allSkills" className={linkClass}>Skills</NavLink></li>  {/* NEW */}
  <li><NavLink to="/profile" className={linkClass}>My Profile</NavLink></li>
  <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
  <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Right - Auth Buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* Avatar Tooltip */}
              <div
                className="relative group cursor-pointer"
                title={user.displayName || "User"}
              >
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300 group-hover:ring-2 ring-indigo-500 transition-all"
                />
              </div>

              <button
                onClick={handleLogout}
                className="btn bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <NavButton to="/auth/login">Login</NavButton>
              <NavButton to="/auth/signup">Sign Up</NavButton>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden mt-2 p-4 rounded-xl bg-white shadow-md border border-gray-200">
          <ul className="flex flex-col gap-3">
    <li><NavLink to="/home" className={linkClass}>Home</NavLink></li>
  <li><NavLink to="/allSkills" className={linkClass}>Skills</NavLink></li>  {/* NEW */}
  <li><NavLink to="/profile" className={linkClass}>My Profile</NavLink></li>
  <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
  <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>

            <hr />

            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <NavButton to="/auth/login">Login</NavButton>
                <NavButton to="/auth/signup">Sign Up</NavButton>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
