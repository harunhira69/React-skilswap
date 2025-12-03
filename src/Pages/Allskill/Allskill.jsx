import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Allskill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceSort, setPriceSort] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/allSkill.json") // load skills
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

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  let filteredSkills = skills.filter((skill) => {
    const matchesSearch =
      skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.providerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (priceSort === "low") filteredSkills.sort((a, b) => a.price - b.price);
  else if (priceSort === "high") filteredSkills.sort((a, b) => b.price - a.price);

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading skills...</p>;

  return (
    <div className="px-6 lg:px-20 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Explore Skills</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search skills or providers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
          className="w-full md:w-1/5 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <div
              key={skill.skillId}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-48 object-cover"
              />
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
                  onClick={() => navigate(`/allSkill-details/${skill.skillId}`)}
                  className="w-full mt-3 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No skills found.</p>
        )}
      </div>
    </div>
  );
};

export default Allskill;
