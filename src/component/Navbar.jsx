import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "../assets/logom.jpg";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaBars } from "react-icons/fa";
import NavButton from "./Button";
import GlobalLoader from "../Pages/GlobalLoader";

const Navbar = () => {
  const { user, Logout, setUser,loading } = useContext(AuthContext);
  const navigate = useNavigate()
 const handleLogout = ()=>{
  Logout()
  setUser(null)
  toast.success('Logout Successful')
  navigate('/home')
 }

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive ? "bg-indigo-600 text-white" : "hover:bg-indigo-50 hover:text-indigo-700"
    }`;
    if(loading) return <GlobalLoader></GlobalLoader>

  return (
    <div className="navbar bg-white/90 backdrop-blur-md shadow-md px-4 sm:px-6 lg:px-12">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-3">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
            <FaBars className="h-5 w-5 text-gray-700" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-white rounded-xl w-52 animate-fade-in flex flex-col gap-2"
          >
            <li>
              <NavLink to="/home" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={linkClass}>
                Profile
              </NavLink>
            </li>
            {/* Include login/signup for mobile if user not logged in */}
           
          </ul>
        </div>
        {/* Logo */}
        <img src={logo} alt="SkillSwap Logo" className="w-10 h-10 rounded-full shadow-sm" />
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <li>
            <NavLink to="/home" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={linkClass}>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
       
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover border border-gray-300 cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all"
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-indigo-600 text-white hover:bg-indigo-700 transition-all px-4 py-2 rounded-lg text-sm whitespace-nowrap"
            >
              Logout
            </button>
          </>
        ) : (
         
      <div className=" flex lg:gap-3 gap-2">
  <NavButton to="/auth/login">Login</NavButton>
  <NavButton to="/auth/signup">Sign Up</NavButton>
</div>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
