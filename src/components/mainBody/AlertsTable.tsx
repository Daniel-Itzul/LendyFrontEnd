import React, { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Text, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    rowSelected: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
          : theme.colors[theme.primaryColor][0],
    },
    rowContentCentered: {
      marginLeft:20
    }
  }));

interface TableSelectionProps {
    data: { id: string; alertId: string; servedAt: string; txID: string; gasCost: string; ethCost: string;}[];
}
  
const AlertsTable = ( { data }: TableSelectionProps ) => {
    const { classes, cx } = useStyles();
    const [selection, setSelection] = useState('0');
    const toggleRow = (id: string) =>
        setSelection((current) =>
        current === id ? "" : id);

    const rows = data.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
              <td>
                <Group spacing="sm">
                  <Text size="sm" weight={500}>
                    {item.alertId}
                  </Text>
                </Group>
              </td>
              <td>{item.servedAt}</td>
              <td>{item.txID}</td>
              <td>{item.gasCost}</td>
              <td>{item.ethCost}</td>
            </tr>
          );
        });
    
    return (
        <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
            <thead>
            <tr>
                <th>Alert ID</th>
                <th>Served At</th>
                <th>Transaction ID</th>
                <th>Gas Cost</th>
                <th>Native Cost</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
        </ScrollArea>
    );
}

export default AlertsTable