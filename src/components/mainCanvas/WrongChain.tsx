import React from 'react'
import SectionHeading from '../mainBody/SectionHeading'
import {Text, Container } from '@mantine/core'

const WrongChain = () => {
  return (
    <Container>
        <SectionHeading heading="Khronus Protocol Only Supports Polygon Mumbai Network" align="center"/>;
        <Text color="dimmed" size='xl'> To use Khronus Protocol </Text>
        <Text color="dimmed" size='xl'> Install Mumbai Polygon Testnet on your Metamask and Switch to that Network </Text>
    </Container>
  )
}

export default WrongChain