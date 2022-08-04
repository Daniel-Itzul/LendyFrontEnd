import React from 'react'
import { Grid, Container, Group } from '@mantine/core';
import ContractTable from './ContractTable';
import UserCard from './UserProfile/UserCard';
import SectionHeading from './SectionHeading';
import AlertsTable from './AlertsTable';


const BodyData = () => {
    const dataContracts = [{dappName:"Dapp One", contractAddress:"0xb42AADA3F43521296f92cdD6730108E13b927c1c", currentBalance:"Pending", status:"Ok", id:"0"}, 
                            {dappName:"Dapp Two", contractAddress:"0xbA6AADA3F43521296f92cdD6730108E13b927c1c", currentBalance:"Pending", status:"Low", id:"1"}]
    
    const dataAlerts = [{alertId:"0xb42AADA3...", servedAt:"2021/02/03", txID:"0xb42AADA3F43521296f92cdD6730108E13b927c1c", gasCost:"Pending", ethCost:"Pending", khronCost:"Pending", id:"0"},
                        {alertId:"0xb42AADA3...", servedAt:"2021/02/03", txID:"0xb42AADA3F43521296f92cdD6730108E13b927c1c", gasCost:"Pending", ethCost:"Pending", khronCost:"Pending", id:"1"}]
  return (
    <Grid>
            <Grid.Col span={3}>
                <UserCard></UserCard>
            </Grid.Col>
            <Grid.Col span={9}>
                <Container> 
                    <SectionHeading heading="Your Contracts" align="center"/>
                    <ContractTable data={dataContracts} ></ContractTable>
                </Container>
                <Container>
                    <SectionHeading heading="Served Alerts" align="center"/>
                    <AlertsTable data={dataAlerts} ></AlertsTable>
                </Container>
            </Grid.Col>
        </Grid>
  )
}

export default BodyData