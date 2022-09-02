import React from 'react';
import { TextInput, NumberInput, Button, Container } from '@mantine/core';
import { getAbi } from '../../utilities/abi';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';


const margins = 15;

/*interface ContractProps {
  data: { objectId: string; client: string; };
}*/

const FundingForm = ({data}) => {
  const [ amountToFund, setAmountToFund ] = useState(0.5)
  const { Moralis } = useMoralis();
  const checkingValue = () => {
    console.log(amountToFund)
  }
  const fundIt = async() => {
    const options = {
      contractAddress: "0x097cbeF8a739a056bBac30DAE756a77eD84dc861",
      functionName: "fundClient",
      abi: getAbi(),
      msgValue: Moralis.Units.ETH(amountToFund),
      params: {
        _clientContract: data.client
      },
    };
    const result = await Moralis.executeFunction(options);
    console.log(result)
  }
  return (
    <Container>
        {/*<TextInput
            style={{marginBottom:margins}}
            label="Dapp Name"
            value={data.dappName}
            disabled
            
        />*/}
        <TextInput
            style={{marginBottom:margins}}
            label="Contract to Fund"
            value={data.client}
            disabled
        />
        {/*<TextInput
            style={{marginBottom:margins}}
            label="Status"
            value={data.status}
            disabled
        />*/}
        {/*<TextInput
            style={{marginBottom:margins}}
            label="Your Native Balance"
            value={data.currentBalance}
            disabled
        />*/}
        <NumberInput
            style={{marginBottom:margins}}
            label="Funding Amount"
            defaultValue={amountToFund}
            precision={4}
            min={0}
            step={0.05}
            max={3}
            value={amountToFund} onChange={(e) => setAmountToFund(e)}
        />
        <Button onClick={fundIt} style={{marginBottom:margins}} > Fund It! </Button>
    </Container>
  )
}

export default FundingForm