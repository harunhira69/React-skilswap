import React from "react";

const Jobs = () => {
  const jobList = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description: "Work with our team to develop modern web applications using React and TailwindCSS."
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Remote",
      type: "Full-Time",
      description: "Develop and maintain server-side logic and APIs for our platform."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Bangladesh",
      type: "Part-Time",
      description: "Design user interfaces and experiences that delight our users."
    }
  ];

  return (
    <div className="px-6 lg:px-24 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Careers at SkillSwap</h1>
      <div className="space-y-6">
        {jobList.map(job => (
          <div key={job.id} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">{job.title}</h2>
            <p className="text-gray-500 mb-2">{job.location} | {job.type}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
