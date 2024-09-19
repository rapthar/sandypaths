import React from 'react'
import { Box, Heading, Text, Container } from '@chakra-ui/react'

function Privacy() {
  return (
    <Container maxW="container.xl" py={12}>
      <Heading as="h1" mb={6}>Privacy Policy</Heading>
      <Text mb={4}>
        At Sandy Paths, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
      </Text>
      {/* Add more content specific to privacy policy */}
    </Container>
  )
}

export default Privacy