import React from 'react';
import { Box, Flex, Text, Input, Button, HStack, Link, SimpleGrid, Image } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="white" py={8} px={4}>
      <Flex maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="flex-start">
        <Box flexBasis={['100%', '100%', '25%']} mb={8}>
          <Box textAlign="center">
            <Image src="/sandypathlogo.png" alt="Sandy Paths" mb={4} mx="auto" />
            <Text fontSize="sm" mb={4}>Wow! Worthy Adventures</Text>
            <Text fontWeight="bold" mb={2}>FOLLOW US</Text>
            <HStack spacing={3} justifyContent="center">
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaInstagram /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaYoutube /></Link>
              <Link href="#"><FaPinterest /></Link>
            </HStack>
          </Box>
          <Text fontWeight="bold" mt={4} mb={2}>SUBSCRIBE</Text>
          <Text mb={2}>Sandy inspiration delivered directly to your inbox.</Text>
          <form>
            <Input placeholder="Email address" mb={2} />
            <Button colorScheme="blue" width="100%">Subscribe now</Button>
          </form>
          <Text fontSize="xs" mt={2}>
            Subscribe to Sandy Paths newsletters and promotions.<br />
            Read our Privacy Policy.
          </Text>
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} flexBasis={['100%', '100%', '75%']}>
          <Box>
            <Text fontWeight="bold" mb={2}>TOP DESTINATIONS</Text>
            {['New York City', 'Paris', 'Italy', 'Costa Rica', 'Japan', 'USA', 'Amsterdam', 'Portugal', 'Cancún', 'Chicago', 'England', 'Tokyo', 'France', 'Thailand', 'Ireland', 'Rome', 'London', 'Los Angeles', 'Mexico', 'San Francisco', 'Explore More Destinations'].map((item) => (
              <Text key={item} fontSize="sm" mb={1}><Link href="#">{item}</Link></Text>
            ))}
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2}>TRAVEL INTERESTS</Text>
            {['Adventure Travel', 'Art and Culture', 'Beaches, Coasts and Islands', 'Family Holidays', 'Festivals', 'Food and Drink', 'Honeymoon and Romance', 'Road Trips', 'Sustainable Travel', 'Travel on a Budget', 'Wildlife and Nature'].map((item) => (
              <Text key={item} fontSize="sm" mb={1}><Link href="#">{item}</Link></Text>
            ))}
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2}>SHOP</Text>
            {['Destination Guides', 'Lonely Planet Kids', 'Lonely Planet Shop', 'Non-English Guides'].map((item) => (
              <Text key={item} fontSize="sm" mb={1}><Link href="#">{item}</Link></Text>
            ))}
            <Text fontWeight="bold" mt={4} mb={2}>ABOUT US</Text>
            {['About Lonely Planet', 'Contact Us', 'Trade and Advertising', 'Privacy Policy', 'Terms and Conditions', 'Work For Us', 'Write For Us', 'Sitemap', 'Consumer Health Data Privacy Policy', 'Cookie Settings', 'Do Not Sell or Share My Personal Information'].map((item) => (
              <Text key={item} fontSize="sm" mb={1}><Link href="#">{item}</Link></Text>
            ))}
          </Box>
        </SimpleGrid>
      </Flex>
      <Box bg="#1088A0" mt={8} py={4}>
        <Flex maxW="1200px" mx="auto" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Text fontSize="xs" color="white">© 2024 Sandy Paths, a Ultra Hive Media company. All rights reserved. No part of this site may be reproduced without our written permission.</Text>
          <Box>
            <select>
              <option>English</option>
            </select>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;