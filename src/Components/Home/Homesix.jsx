import { Box, Heading, Input, Button, Flex, Text } from "@chakra-ui/react";

function Homesix() {
  return (
    <Box maxW="6xl" mx="auto" px="4" py="8">
      <Box
        borderRadius="xl"
        overflow="hidden"
        position="relative"
      >
        <Box
          bgImage="url('/img/image-3.jpg')"
          bgSize="cover"
          bgPosition="center"
          filter="brightness(50%)"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
        />
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" p="8" position="relative">
          <Box mb={{ base: "6", md: "0" }} mr={{ md: "6" }}>
            <Heading as="h2" size="xl" color="white" mb="2">
              Subscribe
            </Heading>
            <Text color="white" fontSize="lg">
              & Stay updated
            </Text>
          </Box>
          <Flex 
            w={{ base: "100%", md: "auto" }} 
            maxW="500px" 
            bg="white" 
            borderRadius="full" 
            overflow="hidden"
          >
            <Input
              placeholder="Your email"
              border="none"
              _focus={{ boxShadow: "none" }}
              flex="1"
            />
            <Button
              colorScheme="red"
              borderRadius="full"
              px="8"
            >
              SUBSCRIBE
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Homesix;