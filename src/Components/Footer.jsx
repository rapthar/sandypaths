import React from 'react';
import { Box, Flex, Text, Input, Button, HStack, Link, SimpleGrid, Image } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { name: 'About Sandy Paths', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Trade and Advertising', path: '/advertising' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms and Conditions', path: '/terms' },
    { name: 'Write For Us', path: '/write-for-us' },
    { name: 'Sitemap', path: '/sitemap' },
    { name: 'Consumer Health Data Privacy Policy', path: '/data-privacy' },
    { name: 'Cookie Settings', path: '/cookies' },
    { name: 'Do Not Sell or Share My Personal Information', path: '/personal-info' }
  ];

  return (
    <Box as="footer" bg="white" py={8} px={4}>
      <Flex maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="flex-start">
        <Box flexBasis={['100%', '100%', '25%']} mb={8}>
          <Box textAlign="center">
            <Image src="/sandypathlogo.png" alt="Sandy Paths"             
             height="45px" 
              width="auto" 
              mb={4} 
              mx="auto"/>

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
            <Button 
              bg="#1088A0" 
              color="white" 
              width="100%" 
              _hover={{ bg: "#1088A0" }}
            >
              Subscribe now
            </Button>
          </form>
          <Text fontSize="xs" mt={2}>
            Subscribe to Sandy Paths newsletters and promotions.<br />
            Read our Privacy Policy.
          </Text>
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} flexBasis={['100%', '100%', '75%']}>
          <Box>
            <Text fontWeight="bold" mb={2}>TOP DESTINATIONS</Text>
            {['New York City', 'Paris', 'Italy', 'Costa Rica', 'Japan', 'USA', 'Amsterdam', 'Portugal', 'Cancún', 'Chicago', 'England',].map((item) => (
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
            <Text fontWeight="bold" mb={2}>ABOUT US</Text>
            {footerLinks.map((item) => (
              <Text key={item.name} fontSize="sm" mb={1}>
                <Link as={RouterLink} to={item.path}>{item.name}</Link>
              </Text>
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