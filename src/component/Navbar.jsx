import React, { use } from 'react';
import {  Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,Logout,setUser} = use(AuthContext)
  console.log(user)
   const handleLogout = () => {
    Logout()
      .then(() => {
        toast.success("Logout successful");
        setUser(null)
      })
      .catch((e) => console.log(e.message));
  };
 
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
         fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><NavLink
         className={({ isActive }) =>
         (isActive ? "active" : "")}
        to="/home">Home</NavLink></li>
       
       
      </ul>
    </div>
   <div>
    <img className='w-[40px] h-[40px] rounded-full' src={logo} alt="" />
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><NavLink
         className={({ isActive }) =>
         (isActive ? "active" : "")}
        to="/home">Home</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end">
   {
    user?  <button onClick={handleLogout}>Logout</button>: <Link to="/auth/login" className="btn btn-primary px-4">
            Login
          </Link>
   }
  </div>
</div>
    );
};

export default Navbar;