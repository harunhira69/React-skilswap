import React, { use, useContext, useEffect } from "react";
import HeroSlider from "../component/HeroSlider";
import { useLoaderData } from "react-router";
import Aos from "aos";
import SkillsCrad from "./SkillsCrad";
import TopProvider from "./TopProvider";
import HowItWork from "./HowItWork";
import { AuthContext } from "../Context/AuthContext";
import SkilSwap from "./SkilSwap";
import GlobalLoader from "./GlobalLoader";

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
    return <GlobalLoader></GlobalLoader>
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
  Welcome to{" "}
  <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    SkillSwap
  </span>
</h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Learn new skills, share your knowledge, and connect with talented
          individuals in your community. Empower growth through collaboration
          and skill exchange.
        </p>
      </section>
      
      
      
    
    
       <div data-aos="fade-up" className="text-center my-12">


  <h2 className="text-4xl font-bold mb-4">
    <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Our Most Popular Skills
    </span>
  </h2>

 
</div>


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

<section
 data-aos="fade-up"
 
 className="text-center my-12">
  <h4 className="text-green-600 font-medium mb-2">
    Meet Our Top Provider
  </h4>

  <h2 className="text-4xl font-bold mb-4">
    <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Our Experienced Top Provider
    </span>
  </h2>

  <p className="text-gray-600 max-w-2xl mx-auto">
    At SkillSwap, our top providers are passionate experts who bring their real-world experience 
    into every session. They don’t just teach — they mentor, inspire, and help learners 
    master new skills with confidence. From technology to creativity, they make every lesson 
    meaningful and engaging.
  </p>
</section>





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
