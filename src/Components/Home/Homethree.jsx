import React, { useState } from 'react';

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email });
  };

  return (
    <div className="relative w-full h-24 md:h-32 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <img
        src="/api/placeholder/1200/300"
        alt="Food background"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-10">
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">Subscribe</h2>
          <p className="text-lg md:text-xl text-gray-300">&amp; Stay updated</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-full bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 text-gray-800 w-full md:w-1/3"
          />
          <div className="relative flex-grow">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-full bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 text-gray-800 w-full pr-28"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-green-500 text-white px-4 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors duration-300 ease-in-out shadow-md"
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