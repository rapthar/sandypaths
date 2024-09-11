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
    <Box bg="#1088A0" w="100%" py={8}>
      <Box maxW="6xl" mx="auto">
        <Flex justify="space-between" align="center" mb={6}>
          <Heading as="h2" size="3xl" color="white" fontWeight="bold">
            #sandypaths
          </Heading>
          <Flex align="center">
            <Text color="white" mr={4} fontWeight="bold">FOLLOW SANDYPATHS:</Text>
            <Flex>
              <Icon as={FaFacebookF} color="white" w={6} h={6} mr={3} />
              <Icon as={FaInstagram} color="white" w={6} h={6} mr={3} />
              <Icon as={FaTwitter} color="white" w={6} h={6} mr={3} />
              <Icon as={FaTiktok} color="white" w={6} h={6} />
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          {images.map((image, index) => (
            <Box key={index} position="relative" flex="1" mr={index < images.length - 1 ? 2 : 0}>
              <Image src={image.src} alt={`Travel image ${index + 1}`} w="100%" h="300px" objectFit="cover" />
              <Box 
                position="absolute" 
                bottom={0} 
                left={0} 
                right={0} 
                bg="linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))"
                p={2}
              >
                <Text color="white" fontSize="sm" fontWeight="bold">
                  {image.credit}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default Homeeight