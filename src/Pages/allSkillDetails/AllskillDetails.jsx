import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const AllskillDetails = () => {
  const skills = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  // Find skill by ID
  const skill = skills.find((s) => s.skillId === parseInt(id));
  if (!skill) return <p className="text-center mt-10 text-gray-500">Skill not found</p>;

  return (
    <div className="px-6 lg:px-24 py-12">
      {/* Skill Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="flex-1">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{skill.skillName}</h1>
          <p className="text-gray-600 text-lg">
            <strong>Instructor:</strong> {skill.providerName} | {skill.providerEmail}
          </p>
          <p className="text-gray-700 text-base">{skill.detailedDescription}</p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
            <p><strong>Price:</strong> ${skill.price}</p>
            <p><strong>Rating:</strong> ⭐ {skill.rating}</p>
            <p><strong>Level:</strong> {skill.level}</p>
            <p><strong>Duration:</strong> {skill.duration}</p>
            <p><strong>Category:</strong> {skill.category}</p>
            <p><strong>Location:</strong> {skill.location}</p>
            <p><strong>Language:</strong> {skill.language}</p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Requirements:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {skill.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              className="w-full md:w-auto px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-xl text-lg transition-colors duration-300"
            >
              &larr; Back
            </button>

            <button
              onClick={() => navigate(`/book-session/${skill.skillId}`)}
              className="w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-lg transition-colors duration-300"
            >
              Book the Session - ${skill.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllskillDetails;
