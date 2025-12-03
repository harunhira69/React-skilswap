import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a skill session?",
      answer: "Simply select the skill you want, click 'Book Session', and follow the instructions."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes! You can cancel up to 24 hours before the scheduled session."
    },
    {
      question: "Do you provide certificates?",
      answer: "Some courses provide certificates upon completion. Check the course details."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="px-6 lg:px-24 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-lg p-4 cursor-pointer" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
            {openIndex === idx && <p className="text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
