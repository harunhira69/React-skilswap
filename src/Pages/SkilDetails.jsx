import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const SkillDetails = () => {
  const skills = useLoaderData(); 
  const { id } = useParams(); 
  const {user} = useContext(AuthContext) 
  console.log(user)    

  const skill = skills.find(s => s.skillId == id); // find the clicked skill

  if (!skill) {
    return <p className="text-center text-red-500 mt-10">
      ❌ Skill not found!</p>;
  }

  



  const handleSubmit = (e) => {
    e.preventDefault();
   
 const name = e.target.name.value;
const email = e.target.email.value;

 if (!name.trim() || !email.trim()) {
      toast.error("Please fill out all fields.");
      return;
  };
     if (email !== user.email) {
      toast.error("❌ Please enter your registered email.");
      return;
    }
    console.log(name, email);
    toast.success("Booking Successful!");
    e.target.reset()
}

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-linear-to-r from-indigo-200 via-purple-100 to-pink-200 p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-8">
      {/* Skill Details */}
      <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">{skill.skillName}</h1>
        <img 
        src={skill.image} 
        alt={skill.skillName} 
        className="w-full max-h-80 object-cover rounded-lg mb-5" />
        <div className="space-y-3 text-lg">
          <p>💰 Price: ${skill.price}</p>
          <p>⭐ Rating: {skill.rating}</p>
          <p>🏷️ Category:{skill.category}</p>
          <p>📝 Description:{skill.description}</p>
        </div>
      </div>

      {/* Book Session */}
      <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-700">Book Your Session</h2>
        <form onSubmit={handleSubmit} className="space-y-5" >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input 
            type="text" 
            name="name" 
         
             placeholder="Enter your name" 
             className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input 
            type="email" 
            name="email" 
            required
            placeholder="Enter your email" 
            className="input input-bordered w-full" />
          </div>
          <button type="submit" className="btn bg-linear-to-r from-indigo-500 to-pink-500 text-white w-full border-none hover:scale-105 transition-all">
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
