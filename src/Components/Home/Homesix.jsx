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
            w="full"
            maxW="853px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Input
              placeholder="Your name"
              bg="white"
              borderRadius="full"
              w="292px"
              h="54px"
              _placeholder={{ color: "gray.400" }}
              mr="10px"
            />
            <Flex
              bg="white"
              borderRadius="full"
              w="551px"
              h="54px"
              alignItems="center"
              pl="6"
              pr="5px"
            >
              <Input
                placeholder="Your email"
                border="none"
                _focus={{ boxShadow: "none" }}
                flex="1"
                _placeholder={{ color: "gray.400" }}
              />
              <Button
                colorScheme="green"
                borderRadius="full"
                w="123.29px"
                h="44px"
              >
                SUBSCRIBE
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Homesix;