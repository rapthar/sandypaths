import React, { useState } from 'react';
import { Box, Text, Image, Heading, Flex, Icon, Button } from "@chakra-ui/react";
import { Bookmark } from 'lucide-react';

const cities = [
  { name: 'Paris', places: 15, image: '/img/private.jpg' },
  { name: 'Rome', places: 14, image: '/img/mix-beach.jpg' },
  { name: 'Barcelona', places: 13, image: '/img/romantic.jpg' },
  { name: 'Santorini', places: 12, image: '/img/Tropical.jpg' },
];

const CityCard = ({ city }) => (
  <Box 
    borderRadius="lg" 
    overflow="hidden" 
    position="relative"
    h="100%"
    transition="transform 0.3s ease-in-out"
    _hover={{ transform: "scale(1.05)" }}
  >
    <Image 
      src={city.image} 
      alt={city.name} 
      objectFit="cover" 
      h="100%" 
      w="100%" 
      transition="transform 0.3s ease-in-out"
      _groupHover={{ transform: "scale(1.1)" }}
    />
    <Box 
      position="absolute" 
      inset="0" 
      bg="linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)"
      transition="background 0.3s ease-in-out"
      _groupHover={{ bg: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%)" }}
    />
    <Box 
      position="absolute" 
      top="4" 
      left="4" 
      bg="white/20" 
      backdropFilter="blur(4px)" 
      borderRadius="full" 
      px="3" 
      py="1"
    >
      <Text fontSize="sm" fontWeight="semibold" color="white">EUROPE</Text>
    </Box>
    <Box 
      position="absolute" 
      bottom="4" 
      left="4" 
      color="white"
      transition="transform 0.3s ease-in-out"
      _groupHover={{ transform: "translateY(-5px)" }}
    >
      <Text fontSize="2xl" fontWeight="bold">{city.name}</Text>
      <Text fontSize="sm">{city.places} places</Text>
    </Box>
  </Box>
);

const PopularCities = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Box bg="black" w="100%" pt="30px" pb="8">
      <Box maxW="6xl" mx="auto" px="4">
        <Heading as="h2" size="xl" textAlign="center" mb={2} color="white">
          Popular Cities/Towns
        </Heading>
        <Text textAlign="center" fontSize="lg" mb={4} color="gray.300">
          Discover the most loved beach destinations
        </Text>
        <Box h="2px" w="48px" bg="blue.500" mx="auto" mb={6}></Box>
        
        <Box 
          display="grid" 
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} 
          gap="6" 
          h="363px"
        >
          {cities.map((city, index) => (
            <Box key={index} role="group" h="100%">
              <CityCard city={city} />
            </Box>
          ))}
        </Box>
        
        <Flex justify="center" mt="8" gap="2">
          {[0, 1].map((page) => (
            <Box
              key={page}
              w="2"
              h="2"
              borderRadius="full"
              bg={currentPage === page ? "red.500" : "gray.400"}
              onClick={() => setCurrentPage(page)}
              cursor="pointer"
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default PopularCities;