import React from 'react'
import { Grid, Container, Button, createStyles } from '@mantine/core';
import Brand from './Brand';
import KhronMenu from './KhronMenu';
import Connect from './Connect';
import { useDapp } from '../../context/DappProvider';

const useStyles = createStyles((theme) => ({
    containerNav: {
        float: 'right',
        marginTop: 15
    },
    containerButton: {
        float: 'right',
        marginTop: 8
    },
}));

const NavKhron = () => { 
    const {classes} = useStyles();
    const { hasProvider } = useDapp();
    const button = hasProvider? <Connect></Connect>:<Button disabled >Connect</Button>
    //const button = <Button disabled >Connect</Button>;
    return (
        <Container size={'xl'}>
            <Grid>
                <Grid.Col span={2}><Brand></Brand></Grid.Col>
                <Grid.Col span={8}>
                    <Container className={classes.containerNav} >
                        <KhronMenu ></KhronMenu>
                    </Container>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Container className={classes.containerButton} >   
                        {button}
                    </Container>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default NavKhron