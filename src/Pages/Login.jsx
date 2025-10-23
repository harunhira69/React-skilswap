import React, { use, useRef } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import 'animate.css';
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const form = location.state || "/";
  const emailRef = useRef()
  const {signIn,setUser,
   loginEmail, setLoginEmail,
    show,
    setShow,
    googleSignUp
  
  
  
  } = use(AuthContext)




//  const handleGoogleSignIn = () => {
//     googleSignUp()
//       .then((res) => {
//         setUser(res.user)
//         navigate(form)
//         toast.success('Google Sign Up Successful')
//           navigate(form)
//       }).catch(e => {
//         console.log(e.message)
//       })
//   }



  const handleLogin = (e)=>{
    e.preventDefault()
    console.log('yes its working')
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    signIn(email,password)
    .then((res)=>{
      setUser(res.user)
      navigate(form)
      toast.success('Login Successful')
      
    }).catch(e=>{
      toast.error(e.message)
    })
  }

const handleForgetPassword = () => {
  const email = emailRef.current.value;
  if (email) setLoginEmail(email);
  navigate('/auth/forget-password');
};

  return (


  <div className="">
  <div className="card 
  bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 
  backdrop-blur-xl 
  border border-white/40 shadow-2xl hover:shadow-pink-200
  transition-all duration-500 
  mx-auto w-full max-w-sm p-6 rounded-3xl
  shrink-0">
    
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
    <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" 
          name="email"
          ref={emailRef}
          className="input input-bordered w-full
                            focus:outline-none" 
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
                            focus:outline-none" 
                         
                       />
                     <span onClick={()=>setShow(!show)} className='absolute 
                     right-2 top-9 cursor-pointer z-50'>
                      {show? <FaEye />:<FaEyeSlash />}
                     </span>
                     </div>
          <div><button 
          type="button" 
          onClick={handleForgetPassword}
          className="link link-hover">
            Forgot password?</button></div>
          <button className="btn btn-neutral mt-4">Login</button>
               {/* <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5 "
                  />
                  Continue with Google
                </button> */}
          <p>
     Don't have an account? 
  <Link to="/auth/signup" className="text-blue-600 hover:underline">Sign Up</Link>
</p>

        </fieldset>
    </form>
      </div>
    </div>
  </div>

  );
};

export default Login;
