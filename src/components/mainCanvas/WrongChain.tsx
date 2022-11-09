import React from 'react'
import SectionHeading from '../mainBody/SectionHeading'
import {Text, Container } from '@mantine/core'

const WrongChain = () => {
  return (
    <Container>
        <SectionHeading heading="Lendy Only Supports Polygon Mumbai Network" align="center"/>;
        <Text color="dimmed" size='xl'> Install Mumbai Polygon Testnet on your Metamask and Switch to that Network </Text>
    </Container>
  )
}

export default WrongChain