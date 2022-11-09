import React from 'react'
import { Grid, Container} from '@mantine/core';
//import ContractTable from './ContractTable';
import UserCard from './UserProfile/UserCard';
import SectionHeading from './SectionHeading';


const BodyData = () => {
  return (
    <Grid>
            <Grid.Col span={3}>
                <UserCard></UserCard>
            </Grid.Col>
            <Grid.Col span={9}>
                <Container> 
                    <SectionHeading heading="Your Storage Deals" align="center"/>
                    {/*<ContractTable ></ContractTable>*/}
                </Container>
            </Grid.Col>
        </Grid>
  )
}

export default BodyData