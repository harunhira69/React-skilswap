import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full md:w-11/12 mx-auto py-4 px-4">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="w-full md:w-11/12 mx-auto flex-grow:1 py-4 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;