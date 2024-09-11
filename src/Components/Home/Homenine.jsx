import React from 'react';
import { Box, Grid, Heading, Text, Image, VStack, Flex } from '@chakra-ui/react';

const InfoCard = ({ title, description, icon, readMoreLink }) => (
  <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
    <VStack spacing={4} align="start">
      <Image src={icon} alt={title} boxSize="50px" />
      <Heading size="md" fontWeight="semibold">{title}</Heading>
      <Text fontSize="sm" color="gray.600">{description}</Text>
      <Text color="orange.500" fontSize="sm" cursor="pointer">
        Read More
      </Text>
    </VStack>
  </Box>
);

const TravelInfoGrid = () => {
  const infoCards = [
    {
      title: "Hotel & Hostel Information",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/path/to/hotel-icon.svg",
    },
    {
      title: "Local Culinary Recomendation",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/path/to/culinary-icon.svg",
    },
    {
      title: "Tourist Attraction",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/path/to/tourist-icon.svg",
    },
    {
      title: "Travel Tips",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/path/to/travel-tips-icon.svg",
    },
    {
      title: "How to get a Visa",
      description: "It's very easy to create stylish and beautiful prototypes for your",
      icon: "/path/to/visa-icon.svg",
    }
  ];

  return (
    <Box bg="gray.50" py={16}>
      <Box maxWidth="1200px" margin="auto" px={4}>
        <VStack spacing={12} align="stretch">
          <Flex direction="column" align="start">
            <Heading size="xl" fontWeight="bold" mb={2}>Complete Traveling</Heading>
            <Heading size="xl" fontWeight="bold">Information</Heading>
            <Box width="40px" height="4px" bg="orange.400" mt={2} />
          </Flex>
          <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]} gap={8}>
            {infoCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </Grid>
        </VStack>
      </Box>
    </Box>
  );
};

export default TravelInfoGrid;