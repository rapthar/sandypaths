import React, { useState } from 'react';
import { Box, Text, Image, Heading, Flex, Icon, Button } from "@chakra-ui/react";
import { Bookmark } from 'lucide-react';

const countries = [
    { name: 'France', places: 15, image: '/img/private.jpg' },
    { name: 'Italy', places: 14, image: '/img/mix-beach.jpg' },
    { name: 'Spain', places: 13, image: '/img/romantic.jpg' },
    { name: 'Greece', places: 12, image: '/img/Tropical.jpg' },
  ];

  const CountryCard = ({ country }) => (
    <Box 
      borderRadius="lg" 
      overflow="hidden" 
      position="relative"
      transition="transform 0.3s ease"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      <Image 
        src={country.image} 
        alt={country.name} 
        objectFit="cover" 
        h="100%" 
        w="100%" 
        transition="transform 0.3s ease"
        _groupHover={{ transform: 'scale(1.05)' }}
      />
      <Box 
        position="absolute" 
        inset="0" 
        bg="linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(0,0,0,0) 50%)" 
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 0.8 }}
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
      >
        <Text fontSize="2xl" fontWeight="bold">{country.name}</Text>
        <Text fontSize="sm">{country.places} places</Text>
      </Box>
    </Box>
  );

  const PopularCountries = () => {
    const [currentPage, setCurrentPage] = useState(0);
  
    return (
      <Box bg="black" w="100%" pt="30px" pb="8">
        <Box maxW="6xl" mx="auto" px="4">
          <Heading as="h2" size="xl" textAlign="center" mb={2} color="white">
            Popular Countries
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
            {countries.map((country, index) => (
              <Box key={index} role="group">
                <CountryCard country={country} />
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
                transition="background-color 0.3s ease"
                _hover={{ bg: currentPage === page ? "red.600" : "gray.500" }}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    );
  };

export default PopularCountries;