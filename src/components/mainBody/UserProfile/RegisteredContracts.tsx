import React from 'react'
import { Group, Text } from '@mantine/core'
import { useMoralisQuery } from 'react-moralis'
import { useDapp } from '../../../context/DappProvider'

const RegisteredContracts = () => {
  const { walletAddress } = useDapp();
  const queryRegisteredContracts = useMoralisQuery(
    "RegisteredContracts",
    (query) => query.equalTo("requester", walletAddress),
    [walletAddress],
    {live:true}
  );
  const fetchedContracts = JSON.parse(JSON.stringify(queryRegisteredContracts.data, ["objectId","client","requester"]));
  return (
    <>
    <Group position="left" mt="xs">
        <Text align="right" size="sm" weight={500}>
            Registered Contracts
        </Text>
        <Text align="right" size='sm' weight={500}>
            {fetchedContracts.length}
        </Text>
    </Group>
    </>
  )
}

export default RegisteredContracts