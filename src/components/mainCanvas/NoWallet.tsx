import React from 'react'
import SectionHeading from '../mainBody/SectionHeading'
import {Text, Container } from '@mantine/core'

const NoWallet = () => {
  return (
    <Container>
        <SectionHeading heading="Lendy Needs a Wallet Provider" align="center"/>;
        <Text color="dimmed" size='xl'> This Dapp Needs a Wallet Provider. You can use it after installing a wallet.</Text>
    </Container>
  )
}

export default NoWallet