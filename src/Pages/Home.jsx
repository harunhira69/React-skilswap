import React, { useEffect } from "react";
import HeroSlider from "../component/HeroSlider";
import { useLoaderData } from "react-router";
import Aos from "aos";

const Home = () => {
  const skills = useLoaderData();
    useEffect(() => {
    Aos.init({ duration: 1000 }); // animation duration 1000ms
  }, []); // get array from loader

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Welcome Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to SkillSwap</h2>
        <p>Learn new skills, book sessions, and connect with local providers.</p>
      </section>

      {/* Skill Cards Section */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {skills.map((skill) => (
          <div key={skill.skillId} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={skill.image}
                alt={skill.skillName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{skill.skillName}</h2>
              <p>Price: ${skill.price}</p>
              <p>Rating: ⭐ {skill.rating}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
