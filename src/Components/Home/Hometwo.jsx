import React from 'react'
import { Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react"

const categories = [
  { title: 'Family Friendly', places: 8, color: 'blue.200', image: '@img/family-friendly.jpg' },
  { title: 'Hidden Gem', places: 6, color: 'blue.400', image: '@img/hidden-gem.jpg' },
  { title: 'Tropical', places: 8, color: 'red.300', image: '@img/tropical.jpg' },
  { title: 'Romantic', places: 5, color: 'yellow.300', image: '@img/romantic.jpg' },
]

const CategoryCard = ({ title, places, color, image }) => (
  <Box bg={color} p={4} borderRadius="lg" color="white" position="relative" overflow="hidden">
    {image && (
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
      />
    )}
    <Box position="relative" zIndex="1">
      <Heading as="h3" size="md" fontWeight="bold">
        {title}
      </Heading>
      <Text>{places} places</Text>
    </Box>
  </Box>
)

function Hometwo() {
  return (
    <Box maxW="4xl" mx="auto" mt="40px">
      <Heading as="h2" size="xl" textAlign="center" mb={2}>
        Explore by
      </Heading>
      <Text textAlign="center" fontSize="lg" mb={4} color="gray.600">
        Discover unique beach experiences
      </Text>
      <Box h="2px" w="48px" bg="blue.500" mx="auto" mb={6}></Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {categories.map((category, index) => (
          <GridItem key={index}>
            <CategoryCard {...category} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Hometwo