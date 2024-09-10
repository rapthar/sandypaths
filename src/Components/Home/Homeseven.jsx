import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";

function Homeseven() {
    return (
        <Box maxW="6xl" mx="auto" px="4" pt="40px">
            <Box position="relative" h="600px">
                <Image
                    src="/img/even-hotel-chongli-even.jpg"
                    alt="Beachside Accommodation"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0,0,0,0.4)"
                />
                <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    direction="column"
                    justify="center"
                    align="flex-start"
                >
                    <Text color="white" fontSize="5xl" fontWeight="bold" mb="4">
                        Beachside Bliss
                    </Text>
                    <Text color="white" fontSize="xl" mb="6" maxW="600px">
                        Experience luxury and comfort with our premium beachside accommodations. 
                        Wake up to stunning ocean views and fall asleep to the sound of waves.
                    </Text>
                    <Button colorScheme="blue" size="lg">
                        Explore Accommodations
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}

export default Homeseven;