import React from 'react'
import { Group, Text } from '@mantine/core'
import { useDapp } from '../../../context/DappProvider'

const RegisteredContracts = () => {
  const { walletAddress } = useDapp();
  return (
    <>
      <Group position="left" mt="xs">
          <Text align="right" size="sm" weight={500}>
              Maximum Amount to Loan
          </Text>
          <Text align="right" size="sm" color="white" weight={700}>
              20 Fil
          </Text>
      </Group>
      <Group position="left" mt="xs">
          <Text align="right" size='sm' weight={500}>
              Amount Lent
          </Text>
          <Text align="right" size="sm" color="white" weight={700}>
             15 Fil
          </Text>
      </Group>
    </>
  )
}

export default RegisteredContracts