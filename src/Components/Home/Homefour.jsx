import React from 'react'
import { Box, Image, Text, Flex, Icon, Button, Heading } from "@chakra-ui/react"
import { Star, MapPin, Bookmark } from 'lucide-react'

const places = [
  {
    image: '/img/family-friendly.jpg',
    location: 'Barrier Beaches Lyon',
    title: 'Boomtown Festival',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 3.3,
    reviews: 3,
    price: '$$',
    category: 'Festival'
  },
  {
    image: '/img/private.jpg',
    location: 'Lyon',
    title: 'Stay USA Hotel & Suites',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 5.0,
    reviews: 1,
    price: '$$',
    category: 'Hotel'
  },
  {
    image: '/img/family-friendly.jpg',
    location: 'Lyon',
    title: 'New Balance Store',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 5.0,
    reviews: 1,
    price: '$$',
    category: 'Store'
  },
  {
    image: '/img/private.jpg',
    location: 'Lyon',
    title: 'Lacoste Store',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 5.0,
    reviews: 1,
    price: '$$',
    category: 'Store'
  },
  {
    image: '/img/family-friendly.jpg',
    location: 'Cannes',
    title: 'Sunset Beach Resort',
    address: '123 Promenade de la Croisette, 06400 Cannes, France',
    rating: 4.8,
    reviews: 15,
    price: '$$$',
    category: 'Resort'
  },
  {
    image: '/img/private.jpg',
    location: 'Nice',
    title: 'Azure Cove Apartments',
    address: '456 Promenade des Anglais, 06000 Nice, France',
    rating: 4.5,
    reviews: 8,
    price: '$$',
    category: 'Apartment'
  },
  {
    image: '/img/family-friendly.jpg',
    location: 'Saint-Tropez',
    title: 'Riviera Sailing Club',
    address: '789 Quai Jean Jaurès, 83990 Saint-Tropez, France',
    rating: 4.2,
    reviews: 6,
    price: '$$$$',
    category: 'Club'
  },
  {
    image: '/img/private.jpg',
    location: 'Marseille',
    title: 'Calanques Adventure Tours',
    address: '101 Corniche Kennedy, 13007 Marseille, France',
    rating: 4.7,
    reviews: 12,
    price: '$',
    category: 'Tour'
  }
]

const PlaceCard = ({ place }) => (
  <Box bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
    <Box position="relative">
      <Image src={place.image} alt={place.title} objectFit="cover" h="200px" w="100%" />
      <Box position="absolute" top="2" left="2" bg="white" borderRadius="full" p="1">
        <Image src="/img/private.png" alt={place.category} boxSize="24px" />
      </Box>
      <Button position="absolute" top="2" right="2" color="white" variant="unstyled">
        <Icon as={Bookmark} boxSize="24px" />
      </Button>
    </Box>
    <Box p="4">
      <Text fontSize="sm" color="gray.600" textAlign="left">{place.location}</Text>
      <Text fontWeight="bold" fontSize="lg" mt="1" textAlign="left">{place.title}</Text>
      <Flex alignItems="flex-start" mt="2" fontSize="sm" color="gray.600">
        <Icon as={MapPin} boxSize="16px" mr="1" mt="1" />
        <Text textAlign="left">{place.address}</Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mt="2">
        <Flex alignItems="center">
          <Icon as={Star} boxSize="16px" color={place.rating >= 4 ? "yellow.400" : "gray.400"} />
          <Text ml="1" color={place.rating >= 4 ? "yellow.600" : "gray.600"}>
            {place.rating.toFixed(1)}
          </Text>
          <Text color="gray.600" ml="1">
            ({place.reviews} {place.reviews === 1 ? 'review' : 'reviews'})
          </Text>
        </Flex>
        <Text color="gray.600">{place.price}</Text>
      </Flex>
    </Box>
  </Box>
)

function Homefour() {
  return (
    <Box bg="#F7F7F7" w="100%" py="8">
      <Box maxW="6xl" mx="auto" px="4">
        <Heading as="h2" size="xl" textAlign="center" mb={2}>
          Popular Beaches
        </Heading>
        <Text textAlign="center" fontSize="lg" mb={4} color="gray.600">
          Discover the most loved coastal destinations
        </Text>
        <Box h="2px" w="48px" bg="blue.500" mx="auto" mb={6}></Box>
        <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="6">
          {places.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Homefour