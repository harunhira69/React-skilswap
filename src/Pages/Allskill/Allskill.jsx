import React, { useEffect, useState } from "react";

const Allskill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch("/allSkill.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading skills:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading skills...</p>;
  }

  return (
    <div className="px-6 lg:px-20 py-12 ">
      <h1 className="text-3xl font-bold text-center mb-10">Explore Skills</h1>

      {/* Skills Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Skill Image */}
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">{skill.skillName}</h2>
              <p className="text-gray-500 text-sm">by {skill.providerName}</p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-indigo-600 font-semibold">${skill.price}</span>
                <span className="text-yellow-500 font-semibold">⭐ {skill.rating}</span>
              </div>

              <div className="flex justify-between text-gray-500 text-sm mt-1">
                <span>{skill.level}</span>
                <span>{skill.duration}</span>
              </div>

              <button
                onClick={() => setSelectedSkill(skill)}
                className="w-full mt-3 py-2 px-4 bg-indigo-600
                 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
    {selectedSkill && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => setSelectedSkill(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={selectedSkill.image}
        alt={selectedSkill.skillName}
        className="w-full h-auto object-contain rounded-lg mb-4"
      />

      {/* Skill Info */}
      <h2 className="text-2xl font-bold mb-2">{selectedSkill.skillName}</h2>
      <p className="text-gray-600 mb-2">
        by {selectedSkill.providerName} | {selectedSkill.providerEmail}
      </p>
      <p className="text-gray-700 mb-4">{selectedSkill.detailedDescription}</p>

      {/* Grid Info */}
      <div className="grid grid-cols-2 gap-4 text-gray-600 mb-4">
        <p><span className="font-semibold">Price:</span> ${selectedSkill.price}</p>
        <p><span className="font-semibold">Rating:</span> ⭐ {selectedSkill.rating}</p>
        <p><span className="font-semibold">Level:</span> {selectedSkill.level}</p>
        <p><span className="font-semibold">Duration:</span> {selectedSkill.duration}</p>
        <p><span className="font-semibold">Category:</span> {selectedSkill.category}</p>
        <p><span className="font-semibold">Location:</span> {selectedSkill.location}</p>
        <p><span className="font-semibold">Language:</span> {selectedSkill.language}</p>
      </div>

      {/* Requirements */}
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {selectedSkill.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h3 className="font-semibold mb-1">Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {selectedSkill.tags.map((tag, idx) => (
            <span key={idx} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedSkill(null)}
          className="flex-1 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-xl text-lg transition-colors duration-300"
        >
          Back
        </button>

        <button
          onClick={() => alert(`Buying ${selectedSkill.skillName} for $${selectedSkill.price}`)}
          className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-lg transition-colors duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Allskill;
