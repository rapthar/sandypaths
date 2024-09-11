import React from 'react'
import Image from 'next/image'
import { Box, Heading, Text, VStack, Button, Input, Flex, SimpleGrid, Container } from '@chakra-ui/react'

export default function AboutPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box position="relative" height="300px">
        <Image
          src="/img/group-of-friends-enjoying-a-picnic-on-the-beach-.jpeg"
          alt="Beach scene with people"
          layout="fill"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.4)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          color="white"
        >
          <Heading size="2xl" mb={2}>About Us</Heading>
          <Text>For explorers everywhere.</Text>
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={12}>
        <VStack spacing={8} align="stretch">
          <Text>
            At SandyPaths, we believe that every beach has a unique story to tell and an experience to offer. Our mission is to connect you with the world's most beautiful beaches, providing detailed insights, local tips, and personalized recommendations to ensure your beach adventures are nothing short of extraordinary.
          </Text>
          <Text>
            Whether you're a sun-seeker, a water sports enthusiast, a family looking for kid-friendly shores, or an explorer in search of hidden coastal gems, SandyPaths is your trusted companion. We combine our firsthand knowledge with up-to-date information from our global community of beach-goers to bring you comprehensive guides, honest reviews, and insider secrets.
          </Text>
          <Text>
            Our commitment goes beyond just finding you the perfect stretch of sand. We're dedicated to promoting responsible tourism, supporting local communities, and preserving the natural beauty of our coastal environments. Through partnerships with conservation organizations and educational initiatives, we strive to ensure that the beaches we love today will be there for generations to come.
          </Text>
          <Text>
            Join us on this exciting journey as we explore the world's coastlines, one sandy path at a time. Let SandyPaths be your guide to unforgettable beach experiences, breathtaking sunsets, and the soothing rhythm of waves that call us all back to the shore.
          </Text>
        </VStack>
      </Container>

      {/* Newsletter Subscription */}
      <Box bg="blue.500" py={12}>
        <Container maxW="container.lg">
          <Box bg="white" borderRadius="md" p={6}>
            <Heading size="lg" mb={4}>Subscribe & Get 20% off</Heading>
            <Text mb={4}>Join our newsletter and discover new beaches to inspire the traveler within. Plus, get 20% off on your first trip. Every week you'll receive expert advice, tips, exclusive offers, and much more.</Text>
            <Flex>
              <Input placeholder="Email address" mr={2} />
              <Button colorScheme="blue">Sign Up</Button>
            </Flex>
          </Box>
        </Container>
      </Box>

      {/* Core Values */}
      <Container maxW="container.lg" py={12}>
        <Heading size="xl" mb={8}>At SandyPaths, our core values guide our evolution:</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Text>We pursue a vision of the world in which all beaches are accessible and preserved. We believe travel can help foster the connection and understanding that makes responsible tourism possible.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Text>We think everyone deserves to experience the joy of beach exploration. Whatever your background or needs and no matter where you want to go, we are here to help you find your perfect sandy paradise.</Text>
          </Box>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Text>We know travel has social, economic, and environmental consequences. We must equip travelers with the knowledge to make informed choices and encourage them to interact with beaches and coastal communities with generosity.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Become a Contributor */}
      <Box position="relative" height="300px">
        <Image
          src="/img/private.jpg"
          alt="Beach landscape"
          layout="fill"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.6)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          px={4}
          color="white"
        >
          <Text fontSize="xl" mb={4}>
            Every month we receive many applications from people keen to share their beach experiences with SandyPaths. It's fantastic to hear from so many inspiring beach lovers, and we're keen to work with a diverse coastal community.
          </Text>
          <Button colorScheme="blue" size="lg">
            Become a contributor
          </Button>
        </Box>
      </Box>
    </Box>
  )
}