import React from 'react';
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

function Homeone() {
  return (
    <Box borderRadius="xl" overflow="hidden" bg="#FFF5EE" p={4}>
      <Flex borderRadius="xl" overflow="hidden" bg="#E27B60" position="relative">
        {/* Left column */}
        <Box width="50%" p={8} color="white">
          <VStack align="flex-start" spacing={4}>
            <Heading as="h1" size="2xl" fontWeight="bold" lineHeight={1.2}>
              Explore our Wondersome Adventures
            </Heading>
            <Text fontSize="md">
              Save up to 50% – book your dream trip now!
            </Text>
            <Button
              bg="white"
              color="#E27B60"
              size="md"
              borderRadius="md"
              fontWeight="bold"
              _hover={{ bg: "gray.100" }}
            >
              Book Now →
            </Button>
          </VStack>
        </Box>

        {/* Curved divider */}
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left="45%"
          width="10%"
          bg="#E27B60"
          zIndex={1}
        >
          <Box
            position="absolute"
            top={0}
            bottom={0}
            right={0}
            width="100%"
            bg="#FFF5EE"
            borderTopLeftRadius="full"
            borderBottomLeftRadius="full"
          />
        </Box>

        {/* Right column (image placeholder) */}
        <Box width="50%" position="relative">
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            bg="url('/img/private.jpg')"
            bgSize="cover"
            bgPosition="center"
          />
        </Box>
      </Flex>

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
            transform={`rotate(${5 + i * 2}deg)`}
            transformOrigin="left"
          />
        ))}
      </Box>
    </Box>
  );
}

export default Homeone;