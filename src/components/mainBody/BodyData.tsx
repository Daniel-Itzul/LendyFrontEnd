import React from 'react'
import { Grid, Container} from '@mantine/core';
import DealsTable from './DealsTable';
import UserCard from './UserProfile/UserCard';
import SectionHeading from './SectionHeading';

const BodyData = () => {
    const data = {data: [
                    {'dealId':'Fx001289312312', 'startDate': 1667888732, 'endDate': 1667888732, 'estimatedRewards': 1000, 'status': 'Active'},
                    {'dealId':'Fx001289312313', 'startDate': 1667888732, 'endDate': 1667888732, 'estimatedRewards': 600, 'status': 'Active'},
                    {'dealId':'Fx001289312314', 'startDate': 1667888732, 'endDate': 1667888732, 'estimatedRewards': 633, 'status': 'Active'}    
                        
                ]}

    return (
        <Grid>
                <Grid.Col span={3}>
                    <UserCard></UserCard>
                </Grid.Col>
                <Grid.Col span={9}>
                    <Container> 
                        <SectionHeading heading="Your Storage Deals" align="center"/>
                        <DealsTable {...data}></DealsTable>
                    </Container>
                </Grid.Col>
            </Grid>
    )
    }

export default BodyData