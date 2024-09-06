// src/components/Footer.js
import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-rainready-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">RainReady</h3>
          <p>Keeping you dry, sustainably</p>
        </div>
        <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
          <MapPinIcon className="inline-block w-5 h-5 mr-2" />
          Paderborn, Germany
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
            2024 RainReady. All rights yet to be reserved :)
        </div>
      </div>
    </footer>
  );
};

export default Footer;