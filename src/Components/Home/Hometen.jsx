import React from 'react';
import { Box, Grid, Heading, Text, Image, VStack, HStack, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const MainCard = ({ title, image }) => (
  <Box position="relative" borderRadius="xl" overflow="hidden" height="400px">
    <Image src={image} alt={title} objectFit="cover" w="100%" h="100%" />
    <Box
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      bg="rgba(0,0,0,0.6)"
      p={6}
      color="white"
    >
      <Heading size="xl" mb={2}>{title}</Heading>
      <Link href="#" display="inline-flex" alignItems="center" mt={2} fontWeight="bold">
        READ MORE <ChevronRightIcon ml={1} />
      </Link>
    </Box>
  </Box>
);

const SideCard = ({ title, description, image }) => (
  <HStack spacing={4} align="start">
    <Image src={image} alt={title} objectFit="cover" w="180px" h="120px" borderRadius="xl" />
    <VStack align="start" spacing={1} flex={1}>
      <Heading size="md">{title}</Heading>
      <Text fontSize="sm" color="gray.600" noOfLines={2}>{description}</Text>
      <Link href="#" fontSize="sm" fontWeight="bold" display="inline-flex" alignItems="center">
        READ MORE <ChevronRightIcon ml={1} />
      </Link>
    </VStack>
  </HStack>
);

const USBeachTravelBlogSection = () => {
  return (
    <Box bg="#F7FAFC" py={16}>
      <Box maxWidth="1200px" margin="auto" px={4}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} mb={8}>
          <VStack align="start" spacing={4}>
            <Heading size="2xl" fontWeight="bold">Read Our Latest US Beach Travel Blog & Tips Here</Heading>
            <Text color="gray.600">Discover the best beaches across the United States, from serene coastal escapes to vibrant seaside towns. Get insider tips and inspiration for your next beach getaway.</Text>
          </VStack>
          <VStack spacing={6}>
            <SideCard
              title="Family-Friendly Beach Escapes"
              description="Explore the top 8 family-friendly beaches in the US, perfect for creating lasting memories with your loved ones."
              image="/img/family-friendly.jpg"
            />
            <SideCard
              title="Hidden Coastal Gems"
              description="Uncover 6 lesser-known beach destinations that offer tranquility and unspoiled beauty away from the crowds."
              image="/img/hidden-gem.jpg"
            />
            <SideCard
              title="Tropical Paradise in the US"
              description="Experience the allure of 8 tropical-like beaches right here in the United States, no passport required."
              image="/img/Tropical.jpg"
            />
          </VStack>
        </Grid>
        <MainCard
          title="Romantic Coastal Getaways: Top 5 US Beach Destinations for Couples"
          image="/img/romantic.jpg"
        />
      </Box>
    </Box>
  );
};

export default USBeachTravelBlogSection;