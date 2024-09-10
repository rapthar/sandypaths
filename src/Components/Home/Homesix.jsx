import { Box, Heading, Input, Button, Flex } from "@chakra-ui/react";

function Homesix() {
  return (
    <Box
      w="100%"
      bgImage="url('/img/image-3.jpg')"
      bgSize="cover"
      bgPosition="center"
      py="60px"
    >
      <Box maxW="6xl" mx="auto" px="4">
        <Flex direction="column" align="center">
          <Heading as="h2" size="2xl" color="white" mb="4" textAlign="center">
            Subscribe
          </Heading>
          <Heading as="h3" size="md" color="white" mb="8" textAlign="center">
            & Stay updated
          </Heading>
          <Flex w="100%" maxW="800px" gap="4">
            <Input
              placeholder="Your name"
              bg="white"
              size="lg"
              borderRadius="full"
            />
            <Input
              placeholder="Your email"
              bg="white"
              size="lg"
              borderRadius="full"
            />
            <Button
              colorScheme="red"
              size="lg"
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