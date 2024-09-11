import React from 'react';
import { Box, Grid, Heading, Text, Image, VStack, HStack, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const MainCard = ({ title, image }) => (
  <Box position="relative" borderRadius="xl" overflow="hidden" height={{ base: "300px", md: "500px" }}>
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
      <Heading size="lg" mb={2}>{title}</Heading>
      <Link href="#" display="inline-flex" alignItems="center" mt={2} fontWeight="bold">
        READ MORE <ChevronRightIcon ml={1} />
      </Link>
    </Box>
  </Box>
);

const SideCard = ({ title, description, image }) => (
  <HStack spacing={4} align="start">
    <Image src={image} alt={title} objectFit="cover" w="120px" h="80px" borderRadius="xl" />
    <VStack align="start" spacing={1} flex={1}>
      <Heading size="sm">{title}</Heading>
      <Text fontSize="xs" color="gray.600" noOfLines={2}>{description}</Text>
      <Link href="#" fontSize="xs" fontWeight="bold" display="inline-flex" alignItems="center">
        READ MORE <ChevronRightIcon ml={1} />
      </Link>
    </VStack>
  </HStack>
);

const TravelBlogSection = () => {
  return (
    <Box py={16}>
      <Box maxWidth="1200px" margin="auto" px={4}>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8} mb={8}>
          <VStack align="start" spacing={4}>
            <Heading size="2xl" fontWeight="bold">Read Our Latest Travel Blog & Tips Here</Heading>
            <Text color="gray.600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.</Text>
          </VStack>
          <VStack spacing={6}>
            <SideCard
              title="Asia’s Thrilling Adventures: Hiking, Trekking, and More"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo..."
              image="/img/adventure.jpg"
            />
            <SideCard
              title="Unforgettable Experiences: Asia’s Must-Visit Destinations"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo..."
              image="/img/destinations.jpg"
            />
            <SideCard
              title="Asia for the Soul: Discover Spiritual Retreats and Practices"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo..."
              image="/img/spiritual.jpg"
            />
          </VStack>
        </Grid>
        <MainCard
          title="Tropical Bliss: Rejuvenate in Asia’s Idyllic Beaches"
          image="/img/beach.jpg"
        />
      </Box>
    </Box>
  );
};

export default TravelBlogSection;
