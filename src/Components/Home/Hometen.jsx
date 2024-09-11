import React from 'react';
import { Box, Grid, Heading, Text, Image, VStack, HStack, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const MainCard = ({ title, image }) => (
  <Box position="relative" borderRadius="xl" overflow="hidden" height="100%">
    <Image src={image} alt={title} objectFit="cover" w="100%" h="100%" />
    <Box 
      position="absolute" 
      bottom="0" 
      left="0" 
      right="0" 
      bgGradient="linear(to-t, rgba(0,0,0,0.8), rgba(0,0,0,0))"
      p={4} 
      color="white"
    >
      <Heading size="lg" mb={2}>{title}</Heading>
      <Link href="#" display="inline-flex" alignItems="center" fontSize="sm" fontWeight="bold">
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

const TravelBlogSection = () => {
  return (
    <Box bg="white" py={8}>
      <Box maxWidth="1200px" margin="auto" px={4}>
        <VStack align="start" spacing={4} mb={8}>
          <Heading size="2xl" fontWeight="bold">Read Our Latest Travel Blog & Tips Here</Heading>
          <Text color="gray.600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.</Text>
        </VStack>
        
        <Grid templateColumns={{ base: "1fr", lg: "3fr 2fr" }} gap={8}>
          <VStack align="stretch" spacing={4}>
            <Heading size="xl">Tropical Bliss: Rejuvenate in Asia's Idyllic Beaches</Heading>
            <MainCard 
              title=""  // Title moved outside
              image="/img/romantic.jpg"
            />
          </VStack>
          <VStack spacing={8} align="stretch">
            <SideCard 
              title="Asia's Thrilling Adventures: Hiking, Trekking, and More" 
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..." 
              image="/img/family-friendly.jpg"
            />
            <SideCard 
              title="Unforgettable Experiences: Asia's Must-Visit Destinations" 
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..." 
              image="/img/hidden-gem.jpg"
            />
            <SideCard 
              title="Asia for the Soul: Discover Spiritual Retreats and Practices" 
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..." 
              image="/img/Tropical.jpg"
            />
          </VStack>
        </Grid>
      </Box>
    </Box>
  );
};

export default TravelBlogSection;