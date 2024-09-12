import React from 'react';
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, Heading, Text, VStack, Container, Flex, Button } from "@chakra-ui/react";

function Homeone() {
  return (
    <Box position="relative" height="100vh" overflow="hidden">
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url(@hidden-gem.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(0.7)"
      />

      {/* Content Overlay */}
      <Container maxW="container.xl" height="100%" position="relative">
        <Flex height="100%" alignItems="center" justifyContent="space-between">
          {/* Left side content */}
          <VStack align="flex-start" spacing={6} maxW="50%" color="white">
            <Heading as="h1" size="3xl" fontWeight="bold" lineHeight="1.2">
              Discover Your Perfect Beach
            </Heading>
            <Text fontSize="xl">
              Explore the world's most beautiful coastlines with SandyPaths
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              Save up to 50% – book your dream trip now!
            </Text>
            
            {/* Search Form */}
            <Box 
              display="flex" 
              rounded="full" 
              bg="white" 
              p="8px 20px" 
              w="100%" 
              alignItems="center" 
              boxShadow='xl'
            >
              <SearchIcon w={5} h={5} color="#193F50" />
              <Input 
                border="none" 
                placeholder='Where to?' 
                size='lg' 
                _placeholder={{ color: 'gray.500' }}
                _focus={{ boxShadow: 'none' }}
              />
            </Box>

            <Button
              colorScheme="white"
              variant="outline"
              size="lg"
              mt={4}
              _hover={{ bg: 'white', color: '#193F50' }}
            >
              Book Now →
            </Button>
          </VStack>

          {/* Right side - empty space to match layout */}
          <Box flexBasis="40%" />
        </Flex>
      </Container>

      {/* Decorative lines */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        pointerEvents="none"
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            top={`${20 * i}%`}
            left={0}
            width="100%"
            height="1px"
            bg="white"
            transform={`rotate(${10 + i * 5}deg)`}
            transformOrigin="left"
          />
        ))}
      </Box>
    </Box>
  );
}

export default Homeone;