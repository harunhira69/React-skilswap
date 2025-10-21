import React from 'react';
import { Link } from 'react-router';
import 'animate.css';


const SkillsCrad = ({skill}) => {


    return (
          <Link to={`/card-details/${skill.skillId} `}  
          key={skill.skillId} className="card bg-white shadow-lg rounded-2xl overflow-hidden 
        transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
        animate__animated animate__fadeInUp animate__faster ">
            
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
          </Link>
    );
};

export default SkillsCrad;