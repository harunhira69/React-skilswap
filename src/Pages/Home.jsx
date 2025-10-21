import React, { useEffect } from "react";
import HeroSlider from "../component/HeroSlider";
import { useLoaderData } from "react-router";
import Aos from "aos";
import SkillsCrad from "./SkillsCrad";
import TopProvider from "./TopProvider";
import HowItWork from "./HowItWork";

const Home = () => {
  const skills = useLoaderData();
    useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, [skills]); 



const topProvider = [...skills].sort((a,b)=>b.rating-a.rating).slice(0,3)


  
  return (
    <div>
      {/* Hero section */}
     <section>
         <HeroSlider />
     </section>

      {/* Welcome Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to SkillSwap</h2>
        <p>Learn new skills, book sessions, and connect with local providers.</p>
      </section>

      {/* Skill Cards Section */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {skills.map((skill) => (
             <SkillsCrad key={skill.skillId} skill={skill}></SkillsCrad>
            
        
        ))}
      </section>
      <section>
        {/* extra section */}
     <div>
         <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
    Top Provider
  </h3>
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          
            {
         topProvider.map((top)=>(
            <TopProvider key={top.skillId} top={top}></TopProvider>
         ))
        }
        </div>
     </div>
     {/* how it works */}
   
      <HowItWork></HowItWork>
      </section>
    </div>
  );
};

export default Home;
