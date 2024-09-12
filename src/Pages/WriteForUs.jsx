import React from 'react'
import { Box, Heading, Text, Container } from '@chakra-ui/react'

function WriteForUs() {
  return (
    <Container maxW="container.xl" py={12}>
      <Heading as="h1" mb={6}>Write For Us</Heading>
      <Text mb={4}>
        Are you passionate about travel and have a way with words? We're always looking for talented writers to contribute to Sandy Paths.
      </Text>
      {/* Add more content about writing opportunities */}
    </Container>
  )
}

export default WriteForUs