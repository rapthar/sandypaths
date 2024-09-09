import React, { useState } from 'react';

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', { name, email });
  };

  return (
    <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
      <img
        src="/api/placeholder/1200/300"
        alt="Food background"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-between px-6">
        <div className="text-white">
          <h2 className="text-3xl font-bold">Subscribe</h2>
          <p className="text-xl">&amp; Stay updated</p>
        </div>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 pr-24"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 bg-green-500 text-white px-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;