import React from 'react'
import { Box, Heading, Text, Container } from '@chakra-ui/react'

function Cookies() {
  return (
    <Container maxW="container.xl" py={12}>
      <Heading as="h1" mb={6}>Cookie Settings</Heading>
      <Text mb={4}>
        Sandy Paths uses cookies to enhance your browsing experience. Here you can learn about how we use cookies and adjust your settings.
      </Text>
      {/* Add more content about cookie usage and settings */}
    </Container>
  )
}

export default Cookies