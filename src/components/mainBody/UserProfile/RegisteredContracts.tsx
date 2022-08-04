import React from 'react'
import { Group, Text } from '@mantine/core'

const RegisteredContracts = () => {
  return (
    <>
    <Group position="left" mt="xs">
        <Text align="right" size="sm" weight={500}>
            Registered Contracts
        </Text>
        <Text align="right" size='sm' weight={500}>
            3
        </Text>
    </Group>
    </>
  )
}

export default RegisteredContracts