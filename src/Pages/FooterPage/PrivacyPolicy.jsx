import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-6 lg:px-24 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        Your privacy is important to us. We collect only the necessary information to provide our services and never share your personal data without consent.
      </p>
      <p className="text-gray-700 mb-4">
        We use industry-standard security measures to protect your information. By using our platform, you agree to the terms outlined in this privacy policy.
      </p>
      <p className="text-gray-700 mb-4">
        For any questions regarding your personal data or privacy concerns, contact us at <span className="text-indigo-600 font-semibold">support@skillswap.com</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
