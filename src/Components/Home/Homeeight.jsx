import React from 'react'
import { Box, Heading, Text, Flex, Image, Icon } from "@chakra-ui/react"
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'

const images = [
  { src: '/img/family-friendly.jpg', credit: '@richardwhitetravels' },
  { src: '/img/hidden-gem.jpg', credit: '@dominik.kobler' },
  { src: '/img/Tropical.jpg', credit: '@pandeyrt' },
  { src: '/img/romantic.jpg', credit: '@wanderlust_fabiana' },
  { src: '/img/family-friendly.jpg', credit: '@unchartedbackpacker' },
  { src: '/img/hidden-gem.jpg', credit: '@o_thessalonikios' },
]

function Homeeight() {
  return (
    <Box bg="blue.500" pt="30px" w="100%" py={8}>
      <Box maxW="6xl" mx="auto">
        <Flex justify="space-between" align="center" mb={6}>
          <Heading as="h2" size="2xl" color="white">
            #sandypaths
          </Heading>
          <Flex align="center">
            <Text color="white" mr={4}>FOLLOW SANDYPATHS:</Text>
            <Flex>
              <Icon as={FaFacebookF} color="white" w={6} h={6} mr={2} />
              <Icon as={FaInstagram} color="white" w={6} h={6} mr={2} />
              <Icon as={FaTwitter} color="white" w={6} h={6} mr={2} />
              <Icon as={FaTiktok} color="white" w={6} h={6} />
            </Flex>
          </Flex>
        </Flex>
        <Flex overflowX="auto" pb={4}>
          {images.map((image, index) => (
            <Box key={index} minW="300px" mr={4} position="relative">
              <Image src={image.src} alt={`Travel image ${index + 1}`} w="200px" h="200px" objectFit="cover" />
              <Text position="absolute" bottom={2} left={2} color="white" fontSize="sm">
                {image.credit}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default Homeeight