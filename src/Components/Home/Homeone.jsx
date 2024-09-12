import React from 'react'
import { Box, Heading, Text, Button, Flex, Container } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

function Homeone() {
  return (
    <Container maxW="container.xl" py={8}>
      <Box
        borderRadius="2xl"
        overflow="hidden"
        position="relative"
        height="400px"
        bg="linear-gradient(to right, #e17055, #fab1a0)"
      >
        <Flex height="100%">
          {/* Left side content */}
          <Box
            width="50%"
            p={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            color="white"
          >
            <Heading as="h1" size="3xl" fontWeight="bold" mb={4} lineHeight="1.2">
              Explore our Wondersome Adventures
            </Heading>
            <Text fontSize="xl" mb={6}>
              Save up to 50% – book your dream trip now!
            </Text>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="white"
              variant="outline"
              alignSelf="flex-start"
              _hover={{ bg: 'white', color: '#e17055' }}
            >
              Book Now
            </Button>
          </Box>

          {/* Right side image */}
          <Box
            width="50%"
            backgroundImage="url('src/Components/Home/Homefour.jsx')"
            backgroundSize="cover"
            backgroundPosition="center"
          />
        </Flex>

        {/* Curved overlay */}
        <Box
          position="absolute"
          top={0}
          left="45%"
          right={0}
          bottom={0}
          bg="linear-gradient(to left bottom, transparent 50%, #fab1a0 50%)"
        />
      </Box>
    </Container>
  )
}

export default Homeone