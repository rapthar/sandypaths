import { Box, Image, Text, Button } from "@chakra-ui/react";

function Homeseven() {
    return (
        <Box maxW="1142px" h="506px" mx="auto" mt="40px" position="relative" borderRadius="xl" overflow="hidden">
            <Image
                src="/img/even-hotel-chongli-even.jpg"
                alt="IHG Hotels & Resorts"
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
                bg="linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)"
            />
            <Box
                position="absolute"
                top="10px"
                left="10px"
                bg="white"
                px="2"
                py="1"
                borderRadius="sm"
            >
                <Text fontSize="xs" fontWeight="medium">
                    Sponsored
                </Text>
            </Box>
            <Box
                position="absolute"
                bottom="40px"
                left="40px"
                maxW="600px"
                textAlign="left"
            >
                <Text color="white" fontSize="4xl" fontWeight="bold" mb="4" lineHeight="1.2">
                    Explore someplace new with IHG Hotels & Resorts
                </Text>
                <Button 
                    bg="white" 
                    color="black" 
                    _hover={{ bg: "gray.100" }} 
                    borderRadius="full"
                    px="6"
                >
                    See more on SandyPaths
                </Button>
            </Box>
        </Box>
    );
}

export default Homeseven;