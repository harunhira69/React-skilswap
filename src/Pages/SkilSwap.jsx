import React from "react";

const SkilSwap = () => {
  return (
    <section
      className="bg-linear-to-r from-indigo-50 via-blue-50 to-cyan-50 py-24 px-6 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Why Choose <span className="text-indigo-600">SkillSwap?</span>
        </h3>
        <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          We believe learning is more meaningful when it’s shared. SkillSwap bridges the gap between curiosity and expertise — helping people grow together, locally and globally.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
            <h4 className="font-semibold text-xl mb-2 text-gray-900">🎯 Learn Locally</h4>
            <p className="text-gray-700 text-sm">
              Find experts near you and learn skills through real human connection.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
            <h4 className="font-semibold text-xl mb-2 text-gray-900">💰 Earn Easily</h4>
            <p className="text-gray-700 text-sm">
              Share your talents, set your price, and earn from what you love doing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
            <h4 className="font-semibold text-xl mb-2 text-gray-900">⭐ Trusted Reviews</h4>
            <p className="text-gray-700 text-sm">
              Learn from verified providers with genuine community feedback.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
            <h4 className="font-semibold text-xl mb-2 text-gray-900">🌍 Global Reach</h4>
            <p className="text-gray-700 text-sm">
              Connect beyond borders — discover and teach skills from anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilSwap;
