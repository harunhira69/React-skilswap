import React from "react";

const TermsOfService = () => {
  return (
    <div className="px-6 lg:px-24 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
      <p className="text-gray-700 mb-4">
        By using SkillSwap, you agree to comply with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account.
      </p>
      <p className="text-gray-700 mb-4">
        SkillSwap reserves the right to modify or terminate services at any time. We are not liable for any direct or indirect damages resulting from the use of our platform.
      </p>
      <p className="text-gray-700 mb-4">
        Users are prohibited from sharing copyrighted content without permission. For more details, contact <span className="text-indigo-600 font-semibold">legal@skillswap.com</span>.
      </p>
    </div>
  );
};

export default TermsOfService;
