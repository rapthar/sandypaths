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
            bg="white" 
            borderRadius="full" 
            overflow="hidden"
            h="54px"
            alignItems="center"
            pl="6"
          >
            <Input
              placeholder="Name"
              border="none"
              _focus={{ boxShadow: "none" }}
              w="292px"
              h="54px"
              pr="10px"
              _placeholder={{ color: "gray.400" }}
            />
            <Box w="1px" h="24px" bg="gray.300" mx="2" />
            <Input
              placeholder="Your email"
              border="none"
              _focus={{ boxShadow: "none" }}
              w="418px"
              h="54px"
              _placeholder={{ color: "gray.400" }}
            />
            <Button
              colorScheme="red"
              borderRadius="full"
              w="123.29px"
              h="44px"
              ml="auto"
              mr="5px"
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