// src/components/HowItWorks.js
import React from 'react';

const steps = [
  { step: 1, text: "Locate a kiosk via our app" },
  { step: 2, text: "Scan QR code to unlock umbrella" },
  { step: 3, text: "Use umbrella for up to 48 hours" },
  { step: 4, text: "Return to any kiosk for full refund" }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-rainready-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center">
          {steps.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <div className="bg-white text-rainready-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;