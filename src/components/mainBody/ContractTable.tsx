import React, { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Text, Container } from '@mantine/core';
import KhronDrawer from './KhronDrawer';
import FundingForm from './FundingForm'
import RegistrationForm from './RegistrationForm';

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
    data: { id: string; dappName: string; contractAddress: string; currentBalance: string; status: string;}[];
}
  
const ContractTable = ( { data }: TableSelectionProps ) => {
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
                <Checkbox
                  checked={selection.includes(item.id)}
                  onChange={() => toggleRow(item.id)}
                  transitionDuration={0}
                />
              </td>
              <td>
                <Group spacing="sm">
                  <Text size="sm" weight={500}>
                    {item.dappName}
                  </Text>
                </Group>
              </td>
              <td>{item.contractAddress}</td>
              <td>{item.currentBalance}</td>
              <td>{item.status}</td>
              <td>
                <Group spacing="sm">
                    <KhronDrawer title='Details' appearFrom='right' buttonVariant='subtle'>
                      <FundingForm data={item}/>
                    </KhronDrawer>
                </Group>
              </td>
            </tr>
          );
        });
    
    return (
        <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
            <thead>
            <tr>
                <th style={{ width: 40 }}>
                </th>
                <th>Dapp Name</th>
                <th>Contract Address</th>
                <th>Current Native Balance </th>
                <th>Status</th>
                <th>
                  <Container>
                    <KhronDrawer 
                      title='Register Contract' 
                      buttonRadius={'xl'} 
                      buttonVariant={'white'} 
                      buttonTitle='+' 
                      appearFrom="right" 
                    >
                      <RegistrationForm/>
                    </KhronDrawer>
                  </Container>
                </th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
        </ScrollArea>
    );
}

export default ContractTable