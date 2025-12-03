import React from "react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Tips for Learning New Skills",
      date: "2025-12-03",
      excerpt: "Discover actionable tips to accelerate your learning process effectively..."
    },
    {
      id: 2,
      title: "How to Choose the Right Online Courses",
      date: "2025-11-28",
      excerpt: "Learn how to pick courses that match your goals and skill level..."
    },
    {
      id: 3,
      title: "Boost Your Career with SkillSwap",
      date: "2025-11-20",
      excerpt: "Maximize your potential by learning trending skills efficiently..."
    }
  ];

  return (
    <div className="px-6 lg:px-24 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="space-y-8">
        {posts.map(post => (
          <div key={post.id} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
