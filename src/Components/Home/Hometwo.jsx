import React from 'react'
import { Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react"

const categories = [
  { title: 'Family Friendly', places: 8, color: 'blue.200', image: '/img/family-friendly.jpg' },
  { title: 'Hidden Gem', places: 6, color: 'blue.400', image: '/img/hidden-gem.jpg' },
  { title: 'Tropical', places: 8, color: 'red.300', image: '/img/Tropical.jpg' },
  { title: 'Romantic', places: 5, color: 'yellow.300', image: '/img/romantic.jpg' },
]

const CategoryCard = ({ title, places, color, image }) => (
  <Box 
    bg={color} 
    borderRadius="lg" 
    color="white" 
    position="relative" 
    overflow="hidden"
    w="267px"
    h="269px"
    transition="all 0.3s ease-in-out"
    _hover={{
      transform: "scale(1.05)",
      boxShadow: "xl",
    }}
  >
    {image && (
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        w="100%"
        h="100%"
        transition="all 0.3s ease-in-out"
        _groupHover={{
          transform: "scale(1.1)",
        }}
      />
    )}
    <Box 
      position="absolute" 
      bottom="0" 
      left="0" 
      right="0" 
      p={4}
      bgGradient="linear(to-t, rgba(0,0,0,0.8), rgba(0,0,0,0))"
      zIndex="1"
      transition="all 0.3s ease-in-out"
      _groupHover={{
        bgGradient: "linear(to-t, rgba(0,0,0,0.9), rgba(0,0,0,0.1))",
        transform: "translateY(-5px)",
      }}
    >
      <Heading as="h3" size="md" fontWeight="bold" mb={1}>
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
      <Grid 
        templateColumns="repeat(4, 267px)"
        gap="48px"
        justifyContent="center"
        mx="auto"
      >
        {categories.map((category, index) => (
          <GridItem key={index} role="group">
            <CategoryCard {...category} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Hometwo