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
    <Box bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Box position="relative">
        <Image src={country.image} alt={country.name} objectFit="cover" h="200px" w="100%" />
        <Box position="absolute" top="2" left="2" bg="white" borderRadius="full" p="1">
          <Image src="/img/private.png" alt="Europe" boxSize="24px" />
        </Box>
        <Button position="absolute" top="2" right="2" color="white" variant="unstyled">
          <Icon as={Bookmark} boxSize="24px" />
        </Button>
      </Box>
      <Box p="4">
        <Text fontSize="sm" color="gray.600" textAlign="left">EUROPE</Text>
        <Text fontWeight="bold" fontSize="lg" mt="1" textAlign="left">{country.name}</Text>
        <Text fontSize="sm" color="gray.600" mt="2">{country.places} places</Text>
      </Box>
    </Box>
  );

  const PopularCountries = () => {
    const [currentPage, setCurrentPage] = useState(0);
  
    return (
      <Box bg="#193F50" w="100%" pt="30px" pb="8">
        <Box maxW="6xl" mx="auto" px="4">
          <Heading as="h2" size="xl" textAlign="center" mb={2} color="white">
            Popular Countries
          </Heading>
          <Text textAlign="center" fontSize="lg" mb={4} color="white">
            Explore the most sought-after destinations in Europe
          </Text>
          <Box h="2px" w="48px" bg="red.500" mx="auto" mb={6}></Box>
          
          <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="6">
            {countries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </Box>
          
          <Flex justify="center" mt="8" space="2">
            {[0, 1].map((page) => (
              <Button
                key={page}
                w="2"
                h="2"
                borderRadius="full"
                bg={currentPage === page ? "red.500" : "gray.400"}
                onClick={() => setCurrentPage(page)}
                p="0"
                minW="0"
              />
            ))}
          </Flex>
        </Box>
      </Box>
    );
  };

export default PopularCountries;