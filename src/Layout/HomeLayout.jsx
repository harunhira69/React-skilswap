import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";
import Footer from "../component/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen 
    bg-linear-to-b from-indigo-50 via-purple-50 to-pink-50
">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
