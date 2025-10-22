import React, { use, useContext, useEffect } from "react";
import HeroSlider from "../component/HeroSlider";
import { useLoaderData } from "react-router";
import Aos from "aos";
import SkillsCrad from "./SkillsCrad";
import TopProvider from "./TopProvider";
import HowItWork from "./HowItWork";
import { AuthContext } from "../Context/AuthContext";
import SkilSwap from "./SkilSwap";

const Home = () => {
  const {loading,setLoading}=useContext(AuthContext)

  const skills = useLoaderData();
 useEffect(() => {
  Aos.init({ duration: 1000, once: false });
}, []);

useEffect(() => {
  Aos.refresh();
}, [skills]);



const topProvider = [...skills].sort((a,b)=>b.rating-a.rating).slice(0,3)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      </div>
    );
  }


  
  return (
    <div>
      {/* Hero section */}
     <section>
         <HeroSlider />
     </section>

      {/* Welcome Section */}
          <section
        className="text-center py-16 px-6 max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-blue-600">SkillSwap</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Learn new skills, share your knowledge, and connect with talented
          individuals in your community. Empower growth through collaboration
          and skill exchange.
        </p>
      </section>

      {/* Skill Cards Section */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {skills.map((skill,index) => (
             <SkillsCrad key={skill.skillId}
             
              skill={skill}  aosDelay={index * 100}></SkillsCrad>
            
        
        ))}
      </section>
      <section>
        {/* extra section */}
     <div>
         <h3 className="text-4xl font-bold text-center mb-8 text-gray-800">
    Top Provider
  </h3>
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          
            {
         topProvider.map((top,index)=>(
            <TopProvider key={top.skillId} top={top} aosDelay={index * 150}></TopProvider>
         ))
        }
        </div>
     </div>
     {/* how it works */}
   
      <HowItWork></HowItWork>
      </section>
      <section className="mb-10">
        <SkilSwap></SkilSwap>
      </section>
    </div>
  );
};

export default Home;
