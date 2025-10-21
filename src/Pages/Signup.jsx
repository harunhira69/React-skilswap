import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Signup = () => {
    return (
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <fieldset className="fieldset">
            {/* name */}
        <label className="label">Name</label>
          <input
           type="text" 
           className="input" 
           placeholder="Your name" />
           {/* photo url */}
            <label className="label">Email</label>
          <input
           type="text" 
           name='photo'
           className="input" 
           placeholder="Email" />
            {/* email */}
          <label className="label">Email</label>
          <input
           type="email" 
           name='email'
           className="input" 
           placeholder="Email" />
           {/* password */}
          <label className="label">Password</label>
          <input 
          type="password" 
          name='password'
          className="input" 
          placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
       
          <p>Already have account?<Link to='/auth/login'>Login</Link></p>
        </fieldset>
      </div>
    </div>
    );
};

export default Signup;