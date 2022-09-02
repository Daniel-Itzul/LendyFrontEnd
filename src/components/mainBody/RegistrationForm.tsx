import React, { useEffect, useState } from 'react';
import { TextInput, Button, Container } from '@mantine/core';
import { getAbi } from '../../utilities/abi';
import { useMoralis } from 'react-moralis';
import { useDapp } from '../../context/DappProvider';
const margins = 15;

const RegistrationForm = () => {
  const [registrationDeposit, setRegistrationDeposit] = useState("");
  const [ clientContract, setClientContract ] = useState("")
  const { Moralis } = useMoralis();
  const {nativeBalance} = useDapp();
  const register = async() => {
    const options = {
      contractAddress: "0x097cbeF8a739a056bBac30DAE756a77eD84dc861",
      functionName: "registerClient",
      abi: getAbi(),
      msgValue: Moralis.Units.ETH(registrationDeposit),
      params: {
        _clientContract: clientContract
      },
    };
    const result = await Moralis.executeFunction(options);
    console.log(result)
  }
  useEffect (() => {  
    const getRegistrationDeposit =  async() => {
      const options = {
        contractAddress: "0x097cbeF8a739a056bBac30DAE756a77eD84dc861",
        functionName: "getRegistrationDeposit",
        abi: getAbi(),
        params: {
        },
      };
      const result = await Moralis.executeFunction(options);
      setRegistrationDeposit(Moralis.Units.FromWei(result.toString()));
    };
    getRegistrationDeposit();
  },[Moralis]);
  
  return (
    <Container>
        {/*<TextInput
            style={{marginBottom:margins}}
            label="Dapp Name"
        /> */}
        <TextInput
            style={{marginBottom:margins}}
            label="Contract to Register"
            placeholder='Client Contract Address'
            value={clientContract} onChange={(event) => setClientContract(event.target.value)} 
        />
        <TextInput
            style={{marginBottom:margins}}
            label="Your Native Balance"
            defaultValue={nativeBalance}
            disabled
        />
        <TextInput
            style={{marginBottom:margins}}
            label="Registration Cost (Native)"
            defaultValue={registrationDeposit}
            disabled
        />
        <Button onClick={register} style={{marginBottom:margins}} > Register! </Button>
    </Container>
  )
}

export default RegistrationForm