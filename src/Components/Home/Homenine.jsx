import React from 'react';
import { Box, Grid, Heading, Text, Image, VStack, HStack, Center } from '@chakra-ui/react';

const InfoCard = ({ title, description, icon }) => (
  <Box bg="white" p={6} borderRadius="lg" boxShadow="sm" height="100%">
    <VStack spacing={4} align="center">
      <Image src={`/icons/${icon}`} alt={title} boxSize="100px" /> {/* Doubled from 50px to 100px */}
      <Heading size="md" fontWeight="semibold" textAlign="center">{title}</Heading>
      <Text fontSize="sm" color="gray.600" textAlign="center">{description}</Text>
      <Text color="orange.400" fontSize="sm" fontWeight="medium">
        • Read More
      </Text>
    </VStack>
  </Box>
);

const TravelInfoGrid = () => {
  const infoCards = [
    {
      title: "Beachfront Accommodations",
      description: "Discover luxurious resorts and cozy beach houses along the USA's most beautiful coastlines.",
      icon: "beach-house.png",
    },
    {
      title: "Coastal Cuisine Delights",
      description: "Savor fresh seafood and local specialties at the best beachside restaurants across America.",
      icon: "seafood.png",
    },
    {
      title: "Top US Beach Destinations",
      description: "Explore famous beaches from Hawaii to Florida, each offering unique experiences and stunning views.",
      icon: "beach-umbrella.png",
    },
    {
      title: "Beach Trip Planning Tips",
      description: "Learn essential tips for packing, sun safety, and making the most of your American beach vacation.",
      icon: "beach-bag.png",
    },
    {
      title: "Beach Activities Guide",
      description: "Find the best spots for surfing, snorkeling, and beach sports along the US coasts.",
      icon: "surfboard.png",
    }
  ];

  return (
    <Box bg="gray.50" py={8}>
      <Center>
        <Box maxWidth="1200px" width="100%" px={4}>
          <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap={8}>
            <Box p={6} height="100%" display="flex" alignItems="center">
              <VStack align="start" spacing={2}>
                <Heading size="xl" fontWeight="bold">Complete Beach</Heading>
                <Heading size="xl" fontWeight="bold">Travel Information</Heading>
                <HStack spacing={1}>
                  {[...Array(6)].map((_, i) => (
                    <Box key={i} w="8px" h="8px" borderRadius="full" bg="orange.400" />
                  ))}
                </HStack>
              </VStack>
            </Box>
            <InfoCard {...infoCards[0]} />
            <InfoCard {...infoCards[1]} />
            <InfoCard {...infoCards[2]} />
            <InfoCard {...infoCards[3]} />
            <InfoCard {...infoCards[4]} />
          </Grid>
        </Box>
      </Center>
    </Box>
  );
};

export default TravelInfoGrid;