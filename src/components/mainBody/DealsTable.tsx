import React, { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Text, Container, Button } from '@mantine/core';
import { isTemplateExpression } from 'typescript';

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
    data: { dealId: string; startDate: number; endDate: number; estimatedRewards: number; status: string}[];
}

interface LockingProbs {
    lock: boolean;
}

const LockingButton = (lockingProbs:LockingProbs) => {
    const value = lockingProbs.lock ? <Button> Lock </Button>:<Button disabled={true}> Unlock </Button>;
    return value;
}
  
const DealsTable = ( { data }: TableSelectionProps ) => {
    const { classes, cx } = useStyles();
    const [selection, setSelection] = useState('0');
    const toggleRow = (dealId: string) =>
        setSelection((current) =>
        current === dealId ? "" : dealId);

    const rows = data.map((item) => {
        const selected = selection.includes(item.dealId);
        return (
            <tr key={item.dealId} className={cx({ [classes.rowSelected]: selected })}>
                <td>              
                    <Checkbox
                    checked={selection.includes(item.dealId)}
                    onChange={() => toggleRow(item.dealId)}
                    transitionDuration={0}
                    />
                </td>
                <td>
                    <Group spacing="sm">
                    <Text size="sm" weight={500}>
                        {item.dealId}
                    </Text>
                    </Group>
                </td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td align='right'>{item.estimatedRewards}</td>
                <td>{item.status}</td>
                <td><LockingButton lock={item.estimatedRewards % 2 == 0}></LockingButton></td>
            </tr>
          );
        });
    
    return (
        <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
            <thead>
            <tr>
                <th>Selection</th>
                <th>Deal ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Estimated Rewards Filecoin</th>
                <th>Status</th>
                <th></th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
        </ScrollArea>
    );
}

export default DealsTable