import React, { use, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import 'animate.css';
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate()
  const emailRef = useRef()
  const {signIn,setUser,
    resetPassword,
    show,
    setShow
  
  
  
  } = use(AuthContext)
  const handleLogin = (e)=>{
    e.preventDefault()
    console.log('yes its working')
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    signIn(email,password)
    .then((res)=>{
      setUser(res.user)
      toast.success('Login Successful')
      navigate('/')
    }).catch(e=>{
      toast.error(e.message)
    })
  }

  const handleForgetPassword = ()=>{
     const email = emailRef.current.value;
resetPassword(email).then(()=>{
  toast.success('Please check your email')
}).catch(e=>{
  toast.error(e.message)
})
  }
  return (


    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
    
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
    </form>
      </div>
    </div>

  );
};

export default Login;
