import React, { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { resetPassword, loginEmail } = useContext(AuthContext);
  const emailRef = useRef();

  const handleReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value || loginEmail;
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset link sent Your Email!");

        window.open('https://mail.google.com', '_blank');
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-5 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-5">Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          ref={emailRef}
          defaultValue={loginEmail} 
          placeholder="Enter your email"
          className="input input-bordered w-full mb-3"
        />
        <button className="btn btn-primary w-full">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
