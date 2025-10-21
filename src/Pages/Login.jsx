import React from "react";
import { Link, Navigate } from "react-router";
import 'animate.css';

const Login = () => {
  return (


    <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
    
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
               <button
                  type="button"
                  
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
          <p>
     Don't have an account? 
  <Link to="/auth/signup" className="text-blue-600 hover:underline">Sign Up</Link>
</p>

        </fieldset>
      </div>
    </div>

  );
};

export default Login;
