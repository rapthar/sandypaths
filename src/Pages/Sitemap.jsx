import React from 'react'
import { Box, Heading, Text, Container, UnorderedList, ListItem, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Sitemap() {
  return (
    <Container maxW="container.xl" py={12}>
      <Heading as="h1" mb={6}>Sitemap</Heading>
      <Text mb={4}>
        Navigate our site with ease using this comprehensive sitemap.
      </Text>
      <UnorderedList>
        <ListItem><Link as={RouterLink} to="/">Home</Link></ListItem>
        <ListItem><Link as={RouterLink} to="/about">About Us</Link></ListItem>
        <ListItem><Link as={RouterLink} to="/hotel">Hotels</Link></ListItem>
        {/* Add more links to your site's pages */}
      </UnorderedList>
    </Container>
  )
}

export default Sitemap