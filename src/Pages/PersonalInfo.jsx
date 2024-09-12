import React from 'react'
import { Box, Heading, Text, Container } from '@chakra-ui/react'

function PersonalInfo() {
  return (
    <Container maxW="container.xl" py={12}>
      <Heading as="h1" mb={6}>Do Not Sell or Share My Personal Information</Heading>
      <Text mb={4}>
        Your privacy is important to us. This page explains your rights regarding the sale or sharing of your personal information and how to exercise those rights.
      </Text>
      {/* Add more content about personal information rights */}
    </Container>
  )
}

export default PersonalInfo