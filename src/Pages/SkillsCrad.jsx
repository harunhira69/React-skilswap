import React from 'react';

const SkillsCrad = ({skill}) => {
    // console.log({skill})
    return (
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
    );
};

export default SkillsCrad;