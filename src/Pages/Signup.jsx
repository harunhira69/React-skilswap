import React, { useContext} from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';


const Signup = () => {
  const location = useLocation()
    // console.log(location)
    const form = location.state || "/";

  
  const navigate = useNavigate()
  const { googleSignUp,
    user,
    setUser,
    updateProfiles,
    createUser,
    show,
    setShow
  } = useContext(AuthContext)
  const handleGoogle = () => {
    googleSignUp()
      .then((res) => {
        setUser(res.user)
        toast.success('Google Sign Up Successful')
         navigate(form)
      }).catch(e => {
        // console.log(e.message)
      })
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
  const handleSignUp = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ name, photo, email, password })
    if (!passwordRegex.test(password)) {
      toast.error('Password must contain at least one uppercase, one lowercase, one special character, and be at least 6 characters long.')
      return
    }
createUser(email, password)
  .then((res) => {
      updateProfiles(res.user, {
      displayName: name,
      photoURL: photo
    }).then(()=>{
        setUser(res.user);
    toast.success('Sign up successfully');
    navigate(form);
    })
 
  })
  .catch((e) => {
    toast.error(e.message);
  });

  }
  return (
    <div className="z-10  bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 shrink-0   mx-auto w-full max-w-sm p-6 rounded-3xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <form onSubmit={handleSignUp}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered w-full
                     focus:outline-none "
              name='name'
              placeholder="Your name" />
            {/* photo url */}
            <label className="label">PhotoUrl</label>
            <input
              type="text"
              name='photo'
              className="input input-bordered w-full
                     focus:outline-none "
              placeholder="Photo url" />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name='email'
              required
              className="input input-bordered w-full
                     focus:outline-none  "
              placeholder="Email" />
            {/* password */}
               <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                type={show?'text':'password'}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full
                     focus:outline-none 
                  "
                />
              <span onClick={()=>setShow(!show)} className='absolute 
              right-2 top-9 cursor-pointer z-50'>
               {show? <FaEye />:<FaEyeSlash />}
              </span>
              </div>
           
            <button
       
            
            className="btn btn-neutral mt-4">Register</button>
            <button
              onClick={handleGoogle}
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

            <p>Already have account?
         <Link to="/auth/login" className="text-blue-600 hover:underline">Login</Link>
              </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;