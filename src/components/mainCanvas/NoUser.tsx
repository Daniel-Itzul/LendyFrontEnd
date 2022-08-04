import React from 'react'
import SectionHeading from '../mainBody/SectionHeading'
import {Text, Container } from '@mantine/core'

const NoUser = () => {
  return (
    <Container>
        <SectionHeading heading="User Not Detected" align="center"/>;
        <Text color="dimmed" size='xl'> User is disconnected </Text>
        <Text color="dimmed" size='xl'> Click on the Connect button to start.</Text>
    </Container>
  )
}

export default NoUser