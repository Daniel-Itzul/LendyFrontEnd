import React from 'react'
import SectionHeading from '../mainBody/SectionHeading'
import {Text, Container } from '@mantine/core'

const NoWallet = () => {
  return (
    <Container>
        <SectionHeading heading="No Wallet Provider Detected" align="center"/>;
        <Text color="dimmed" size='xl'> This Dapp Needs a Wallet Provider. You can use it after installing a wallet.</Text>
        <Text color="dimmed" size='xl'> You can try the alpha version of Khronus Protocol after installing a wallet in your browser.</Text>
    </Container>
  )
}

export default NoWallet