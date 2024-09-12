import React from 'react'
import { Box, Heading, Text, Container } from '@chakra-ui/react'

function Terms() {
  return (
    <Container maxW="container.xl" py={12}>
      <Heading as="h1" mb={6}>Terms and Conditions</Heading>
      <Text mb={4}>
        Welcome to Sandy Paths. By using our services, you agree to comply with and be bound by the following terms and conditions.
      </Text>
      {/* Add more content specific to terms and conditions */}
    </Container>
  )
}

export default Terms