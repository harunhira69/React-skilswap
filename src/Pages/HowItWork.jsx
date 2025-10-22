import React, { useEffect, useState } from 'react';

const HowItWork = () => {
      const [userData, setUserData] = useState([]);
      useEffect(()=>{
        fetch('/howItwork.json')
         .then(response => response.json())
            .then(data => setUserData(data));
      },[])
      console.log(userData)


    return (
       <section className="py-16 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        How It Works
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {userData.map((step) => (
          <div
            key={step.id}
            data-aos="fade-up"
            className="bg-gray-50 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
          
            <div className="text-6xl mb-4">{step.icon}</div>

         
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>


            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default HowItWork;