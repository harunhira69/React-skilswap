import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import GlobalLoader from "./GlobalLoader";

const Profile = () => {
    const {user,loading} = useContext(AuthContext)
    const updateProfile = ()=>{
        if (!user) {  toast.error("No user found! Please login to update profile.");
      return;}
    
        toast.success('Profile update feature coming soon!')
    }
    if(loading) return <GlobalLoader></GlobalLoader>
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-gray-50 to-gray-100 px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8 text-center border border-gray-100 transition-all duration-300 hover:shadow-blue-200">
        {/* User Image */}
        <div className="flex justify-center">
          <img
            src={
              user?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="User Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* User Info */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-500 mt-2">{user?.email || "No email found"}</p>
        </div>

        {/* Update Profile Button */}
        <div className="mt-8">
          <button
            onClick={updateProfile}
            className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
