import React from 'react'
import { Grid, Container} from '@mantine/core';
import ContractTable from './ContractTable';
import UserCard from './UserProfile/UserCard';
import SectionHeading from './SectionHeading';
//import AlertsTable from './AlertsTable';


const BodyData = () => {
  return (
    <Grid>
            <Grid.Col span={3}>
                <UserCard></UserCard>
            </Grid.Col>
            <Grid.Col span={9}>
                <Container> 
                    <SectionHeading heading="Your Contracts" align="center"/>
                    <ContractTable ></ContractTable>
                </Container>
                <Container>
                    <SectionHeading heading="Served Alerts" align="center"/>
                    <SectionHeading heading="Comming Soon" align = "left"/>
                    {/*<AlertsTable data={dataAlerts} ></AlertsTable>*/}
                </Container>
            </Grid.Col>
        </Grid>
  )
}

export default BodyData