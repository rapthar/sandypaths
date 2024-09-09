import React from 'react'
import { Box, Image, Text, Flex, Icon, Button } from "@chakra-ui/react"
import { Star, MapPin, Bookmark } from 'lucide-react'

const places = [
  {
    image: '/api/placeholder/400/300',
    location: 'Barrier Beaches Lyon',
    title: 'Boomtown Festival',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 3.3,
    reviews: 3,
    price: '$$',
    category: 'Festival'
  },
  {
    image: '/api/placeholder/400/300',
    location: 'Lyon',
    title: 'Stay USA Hotel & Suites',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 5.0,
    reviews: 1,
    price: '$$',
    category: 'Hotel'
  },
  {
    image: '/api/placeholder/400/300',
    location: 'Lyon',
    title: 'New Balance Store',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 5.0,
    reviews: 1,
    price: '$$',
    category: 'Store'
  },
  {
    image: '/api/placeholder/400/300',
    location: 'Lyon',
    title: 'Lacoste Store',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 5.0,
    reviews: 1,
    price: '$$',
    category: 'Store'
  }
]

const PlaceCard = ({ place }) => (
  <Box bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
    <Box position="relative">
      <Image src={place.image} alt={place.title} objectFit="cover" h="200px" w="100%" />
      <Box position="absolute" top="2" left="2" bg="white" borderRadius="full" p="1">
        <Image src="/api/placeholder/24/24" alt={place.category} boxSize="24px" />
      </Box>
      <Button position="absolute" top="2" right="2" color="white" variant="unstyled">
        <Icon as={Bookmark} boxSize="24px" />
      </Button>
    </Box>
    <Box p="4">
      <Text fontSize="sm" color="gray.600">{place.location}</Text>
      <Text fontWeight="bold" fontSize="lg" mt="1">{place.title}</Text>
      <Flex alignItems="center" mt="2" fontSize="sm" color="gray.600">
        <Icon as={MapPin} boxSize="16px" mr="1" />
        <Text>{place.address}</Text>
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
    <Box maxW="6xl" mx="auto" px="4">
      <Text fontWeight="bold" fontSize="2xl" textAlign="center" mb="4">
        Popular Beaches
      </Text>
      <Text fontSize="lg" textAlign="center" mb="6" color="gray.600">
        Discover the most loved coastal destinations
      </Text>
      <Box h="0.5px" w="12" bg="blue.500" mx="auto" mb="6"></Box>
      <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="6">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </Box>
    </Box>
  )
}

export default Homefour