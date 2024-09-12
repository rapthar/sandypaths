import React from 'react'
import { Box, Heading, Text, Container } from '@chakra-ui/react'

function DataPrivacy() {
  return (
    <Container maxW="container.xl" py={12}>
      <Heading as="h1" mb={6}>Consumer Health Data Privacy Policy</Heading>
      <Text mb={4}>
        Sandy Paths is committed to protecting the privacy of your health data. This policy explains how we handle and safeguard any health-related information you may share with us.
      </Text>
      {/* Add more content specific to health data privacy */}
    </Container>
  )
}

export default DataPrivacy