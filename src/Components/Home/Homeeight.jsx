import React from 'react';
import { Box, Heading, Text, Flex, Image, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const images = [
  const images = [
    { src: '/img/family-friendly.jpg', credit: '@richardwhitetravels' },
    { src: '/img/hidden-gem.jpg', credit: '@dominik.kobler' },
    { src: '/img/Tropical.jpg', credit: '@pandeyrt' },
    { src: '/img/romantic.jpg', credit: '@wanderlust_fabiana' },
    { src: '/img/family-friendly.jpg', credit: '@unchartedbackpacker' },
    { src: '/img/hidden-gem.jpg', credit: '@o_thessalonikios' },
  ];

function Homeeight() {
  return (
    <Box className="bg-blue-500 pt-[70px] w-full py-8">
      <Box className="max-w-6xl mx-auto">
        <Flex className="justify-between items-center mb-6">
          <Heading as="h2" className="text-4xl text-white">
            #sandypaths
          </Heading>
          <Flex className="items-center">
            <Text className="text-white mr-4">FOLLOW SANDYPATHS:</Text>
            <Flex>
              <Icon as={FaFacebookF} className="text-white w-6 h-6 mr-2" />
              <Icon as={FaInstagram} className="text-white w-6 h-6 mr-2" />
              <Icon as={FaTwitter} className="text-white w-6 h-6 mr-2" />
              <Icon as={FaTiktok} className="text-white w-6 h-6" />
            </Flex>
          </Flex>
        </Flex>
        <Flex className="justify-between w-full">
          {images.map((image, index) => (
            <Box key={index} className="relative">
              <Image src={image.src} alt={`Travel image ${index + 1}`} className="w-[239px] h-[302px] object-cover" />
              <Text className="absolute bottom-2 left-2 text-white text-sm">
                {image.credit}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Homeeight;