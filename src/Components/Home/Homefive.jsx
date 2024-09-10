import React, { useState } from 'react';
import { Box, Text } from "@chakra-ui/react";

const countries = [
    { name: 'France', places: 15, image: '/img/private.jpg' },
    { name: 'Italy', places: 14, image: '/img/mix-beach.jpg' },
    { name: 'Spain', places: 13, image: '/img/romantic.jpg' },
    { name: 'Greece', places: 12, image: '/img/Tropical.jpg' },
  ];

const CountryCard = ({ country }) => (
  <div className="relative rounded-xl overflow-hidden group">
    <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
      EUROPE
    </div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-2xl font-bold">{country.name}</h3>
      <p className="text-sm">{country.places} places</p>
    </div>
  </div>
);

const PopularCountries = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-black">
      <Box textAlign="left" mb="4">
        <Text fontWeight="600" fontSize='2xl'>Popular Countries</Text>
      </Box>
      <div className="h-0.5 w-12 bg-blue-500 mb-8"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        {[0, 1].map((page) => (
          <button
            key={page}
            className={`w-2 h-2 rounded-full ${
              currentPage === page ? 'bg-red-500' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentPage(page)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCountries;