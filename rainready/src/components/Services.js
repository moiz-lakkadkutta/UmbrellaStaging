// src/components/Services.js
import React from 'react';
import { ShieldCheckIcon, DevicePhoneMobileIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const services = [
  { icon: ShieldCheckIcon, title: "Free Umbrella Borrowing", description: "Access high-quality umbrellas through our strategically placed kiosks" },
  { icon: DevicePhoneMobileIcon, title: "Mobile App (In Progress)", description: "Easily locate kiosks, borrow and return umbrellas with our user-friendly app" },
  { icon: ArrowPathIcon, title: "Eco-Friendly Solution", description: "Reduce waste from disposable umbrellas and promote sustainability" }
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-rainready-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-rainready-700 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <service.icon className="w-16 h-16 text-rainready-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-rainready-700">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;