import React from 'react'
import { Group, Text } from '@mantine/core'

const AvgAlertsCostMonth = () => {
  return (
    <Group position="left" mt="xs">
        <Text align="right" size="sm" weight={500}>
            Average Alerts Per Month
        </Text>
        <Text align="right" size="sm" weight={500}>
            32
        </Text>
    </Group>
  )
}

export default AvgAlertsCostMonth