import React from "react";

const PressKit = () => {
  const assets = [
    { id: 1, title: "Logo", link: "../../assets/image2.png" },
    { id: 2, title: "Brand Guidelines", link: "../../assets/image1.png" },
    { id: 3, title: "Product Images", link: "../../assets/image3.png" },
  ];

  return (
    <div className="px-6 lg:px-24 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Press Kit</h1>
      <p className="text-gray-700 mb-6 text-center">
        Download official assets for SkillSwap, including logos, brand guidelines, and product images.
      </p>
      <div className="space-y-4">
        {assets.map(asset => (
          <div key={asset.id} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-gray-800 font-medium">{asset.title}</p>
            <a
              href={asset.link}
              download
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressKit;
