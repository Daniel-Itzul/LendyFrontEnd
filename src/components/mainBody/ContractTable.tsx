
/*import React, { useEffect, useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Container } from '@mantine/core';
import KhronDrawer from './KhronDrawer';
import FundingForm from './FundingForm'
import RegistrationForm from './RegistrationForm';
import { useDapp } from '../../context/DappProvider'

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
  
const ContractTable = () => {
    const { classes, cx } = useStyles();
    const { walletAddress } = useDapp();
    const [selection, setSelection] = useState("0");
    
    //const firstContract = fetchedContracts.length > 0? fetchedContracts[0]["objectId"]: "0"; 
    /*useEffect (() => {
      const updateSelection =  () => {
        setSelection(firstContract);
      };
      updateSelection();
    },[firstContract]); * . /
    const toggleRow = (objectId: string) =>
      setSelection((current:string) =>
      current === objectId ? "" : objectId);
    const rows = fetchedContracts.map((item: { objectId: string; client: string; }) => {
        const selected = selection === item.objectId;
        return (
            <tr key={item.objectId} className={cx({ [classes.rowSelected]: selected })}>
              <td>
                <Checkbox
                  checked={selection.includes(item.objectId)}
                  onChange={() => toggleRow(item.objectId)}
                  transitionDuration={0}
                />
              </td>
              {/*<td>
                <Group spacing="sm">
                  <Text size="sm" weight={500}>
                    {item.dappName}
                  </Text>
                </Group>
              </td>
              <td>{item.client}</td>
              {/*<td>{item.currentBalance}</td>
              {/*<td>{item.status}</td>
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
              {/*<th>Dapp Name</th>
              <th>Contract Address</th>
              {/*<th>Current Native Balance </th>
              {/*<th>Status</th>
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

export default ContractTable */
export default 0