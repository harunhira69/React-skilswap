import React from 'react';

const TopProvider = ({top}) => {
    const {providerName,image,description,rating} = top;
    
    return (
 <div
  data-aos="fade-up"
  className="bg-white border border-gray-200 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
>
  {/* Image */}
  <div className="flex justify-center mb-4">
    <img
      src={image}
      alt={providerName}
      className="w-24 h-24 object-cover rounded-full border-4 border-blue-400 shadow-sm"
    />
  </div>

  {/* Provider Name */}
  <h3 className="text-2xl font-bold text-gray-900 mb-2">{providerName}</h3>

  {/* Description */}
  <p className="text-gray-600 text-sm mb-4 px-3 leading-relaxed">
    {description}
  </p>

  {/* Rating */}
  <div className="flex justify-center items-center gap-2 mb-3">
    <span className="text-yellow-500 text-lg">⭐</span>
    <span className="font-medium text-gray-800">{rating}</span>
  </div>

  {/* Action Button */}
  <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
    View Profile
  </button>
</div>

  );

};

export default TopProvider;