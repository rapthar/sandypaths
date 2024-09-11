import React from 'react';
import { Box, Grid, Heading, Text, Image, VStack, HStack, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const BlogCard = ({ title, description, image, large = false }) => (
  <Box position="relative" borderRadius="xl" overflow="hidden" height={large ? "400px" : "200px"}>
    <Image src={image} alt={title} objectFit="cover" w="100%" h="100%" />
    <Box
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      bg="rgba(0,0,0,0.6)"
      p={4}
      color="white"
    >
      <Heading size={large ? "xl" : "md"} mb={2}>{title}</Heading>
      {large && <Text fontSize="sm">{description}</Text>}
      <Link href="#" display="inline-flex" alignItems="center" mt={2}>
        READ MORE <ChevronRightIcon />
      </Link>
    </Box>
  </Box>
);

const SideCard = ({ title, description, image }) => (
  <HStack spacing={4} align="start">
    <Image src={image} alt={title} objectFit="cover" w="120px" h="80px" borderRadius="md" />
    <VStack align="start" spacing={1}>
      <Heading size="sm">{title}</Heading>
      <Text fontSize="xs" color="gray.600">{description}</Text>
      <Link href="#" fontSize="xs" fontWeight="bold" display="inline-flex" alignItems="center">
        READ MORE <ChevronRightIcon />
      </Link>
    </VStack>
  </HStack>
);

const TravelBlogSection = () => {
  return (
    <Box bg="#F7FAFC" py={16}>
      <Box maxWidth="1200px" margin="auto" px={4}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          <VStack align="start" spacing={4}>
            <Heading size="2xl" fontWeight="bold">Read Our Latest Travel Blog & Tips Here</Heading>
            <Text color="gray.600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.</Text>
          </VStack>
          <Grid templateColumns="1fr" gap={4}>
            <SideCard
              title="Asia's Thrilling Adventures: Hiking, Trekking, and More"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..."
              image="/img/hidden-gem.jpg"
            />
            <SideCard
              title="Unforgettable Experiences: Asia's Must-Visit Destinations"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..."
              image="/img/family-friendly.jpg"
            />
            <SideCard
              title="Asia for the Soul: Discover Spiritual Retreats and Practices"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo..."
              image="/img/Tropical.jpg"
            />
          </Grid>
        </Grid>
        <Box mt={8}>
          <BlogCard
            title="Tropical Bliss: Rejuvenate in Asia's Idyllic Beaches"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
            image="/img/romantic.jpg"
            large
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TravelBlogSection;