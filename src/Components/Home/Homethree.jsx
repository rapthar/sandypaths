import { Text, Box, Button, Image } from "@chakra-ui/react";

function Homethree(){
    return (
        <Box mb="40px">
            <Box w="85%" m="auto" mt="80px" display="flex" justifyContent="space-between" bg="#FAF1ED" >
                <Box textAlign="left" p="5px 20px">
                    <Text fontWeight="600" mt="30px" fontSize='2xl'>Beach Your Expectations</Text>
                    <Text fontWeight="400" fontSize='md'>Discover sandy paths to unforgettable coastal adventures.</Text>
                    <Button mt="40px" fontWeight="700" color="white" bg="black" rounded="25px" p="23px 23px" >Explore Shores</Button>
                </Box>
                <Image w="40%" h="200px" src="/img/image-3.jpg" alt="Tropical island beach view with a woman sitting on a rock" />
            </Box>
        </Box>
    )
}

export default Homethree;