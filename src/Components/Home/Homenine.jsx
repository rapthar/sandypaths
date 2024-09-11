import React from 'react';
import { Box, Grid, Heading, Text, Image, VStack, HStack, Flex } from '@chakra-ui/react';

const InfoCard = ({ title, description, icon }) => (
  <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
    <VStack spacing={4} align="start">
      <Image src={icon} alt={title} boxSize="50px" />
      <Heading size="md" fontWeight="semibold">{title}</Heading>
      <Text fontSize="sm" color="gray.600">{description}</Text>
      <Text color="orange.400" fontSize="sm" fontWeight="medium">
        • Read More
      </Text>
    </VStack>
  </Box>
);

const TravelInfoGrid = () => {
  const infoCards = [
    {
      title: "Hotel & Hostel Information",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/api/placeholder/50/50",
    },
    {
      title: "Local Culinary Recomendation",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/api/placeholder/50/50",
    },
    {
      title: "Tourist Attraction",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/api/placeholder/50/50",
    },
    {
      title: "Travel Tips",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/api/placeholder/50/50",
    },
    {
      title: "How to get a Visa",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/api/placeholder/50/50",
    }
  ];

  return (
    <Box bg="gray.50" py={16}>
      <Box maxWidth="1200px" margin="auto" px={4}>
        <Grid templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]} gap={8}>
          <Box>
            <VStack align="start" spacing={2} mb={8}>
              <Heading size="xl" fontWeight="bold">Complete Traveling</Heading>
              <Heading size="xl" fontWeight="bold">Information</Heading>
              <HStack spacing={1}>
                {[...Array(6)].map((_, i) => (
                  <Box key={i} w="8px" h="8px" borderRadius="full" bg="orange.400" />
                ))}
              </HStack>
            </VStack>
          </Box>
          <InfoCard {...infoCards[0]} />
          <InfoCard {...infoCards[1]} />
        </Grid>
        <Flex mt={8} justify="space-between" flexWrap="wrap">
          <Box flex="1" minWidth="30%" mb={8}><InfoCard {...infoCards[2]} /></Box>
          <Box flex="1" minWidth="30%" mb={8}><InfoCard {...infoCards[3]} /></Box>
          <Box flex="1" minWidth="30%" mb={8}><InfoCard {...infoCards[4]} /></Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TravelInfoGrid;