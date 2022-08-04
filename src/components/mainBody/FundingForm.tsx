import React from 'react';
import { TextInput, NumberInput, Button, Container, Text, Anchor } from '@mantine/core';

const margins = 15;

interface ContractProps {
  data: { id: string; dappName: string; contractAddress: string; currentBalance: string; status: string;};
}

const FundingForm = ({data}:ContractProps) => {
  return (
    <Container>
        <TextInput
            style={{marginBottom:margins}}
            label="Dapp Name"
            value={data.dappName}
            disabled
            
        />
        <TextInput
            style={{marginBottom:margins}}
            label="Contract to Fund"
            value={data.contractAddress}
            disabled
        />
        <TextInput
            style={{marginBottom:margins}}
            label="Status"
            value={data.status}
            disabled
        />
        <TextInput
            style={{marginBottom:margins}}
            label="Your Native Balance"
            value={data.currentBalance}
            disabled
        />
        <NumberInput
            style={{marginBottom:margins}}
            label="Funding Amount"
            defaultValue={0.5}
            precision={3}
            min={0}
            step={0.05}
            max={5}
        />
        <Button style={{marginBottom:margins}} > Fund It! </Button>
    </Container>
  )
}

export default FundingForm