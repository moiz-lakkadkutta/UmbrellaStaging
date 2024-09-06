// src/components/Contact.js
import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/manwklpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-rainready-700 mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-rainready-50 p-8 rounded-lg shadow-md">
          {['name', 'email', 'message'].map((field) => (
            <div key={field} className="mb-4">
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                {field}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border border-rainready-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rainready-500 ${field === 'message' ? 'h-32' : ''}`}
                {...(field === 'message' && { as: 'textarea' })}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-rainready-600 text-white py-2 px-4 rounded-md hover:bg-rainready-700 transition duration-300 flex items-center justify-center"
            disabled={submitStatus === 'sending'}
          >
            {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
            <EnvelopeIcon className="ml-2 h-4 w-4" />
          </button>
        </form>
        {submitStatus === 'success' && (
          <div className="mt-4 bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Your message has been sent successfully.</span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> There was an error sending your message. Please try again later.</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;