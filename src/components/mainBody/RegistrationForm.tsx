import React from 'react';
import { TextInput, NumberInput, Button, Container, Text, Anchor } from '@mantine/core';

const margins = 15;

const RegistrationForm = () => {
  return (
    <Container>
         <TextInput
            style={{marginBottom:margins}}
            label="Dapp Name"
        />
        <TextInput
            style={{marginBottom:margins}}
            label="Contract to Register"
        />
        <NumberInput
            style={{marginBottom:margins}}
            label="Your Native Balance"
            defaultValue={90}
            precision={6}
            disabled
        />
        <NumberInput
            style={{marginBottom:margins}}
            label="Registration Cost (Native)"
            defaultValue={0.1}
            precision={6}
            disabled
        />
        <Button style={{marginBottom:margins}} > Register! </Button>
    </Container>
  )
}

export default RegistrationForm