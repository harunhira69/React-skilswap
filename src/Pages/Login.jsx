import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-600 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-gray-600 font-medium">Password</label>
        <input
          type="password"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </button>

      <p className="text-center text-gray-500 text-sm mt-4">
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
