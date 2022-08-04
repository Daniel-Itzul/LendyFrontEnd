import React from 'react'
import { Container, Text, createStyles } from '@mantine/core'
import { skimAddress } from '../../../utilities/addresses';
import { useDapp } from '../../../context/DappProvider';

const useStyles = createStyles((theme) => ({
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1.5,
      marginBottom:15
    },
  }));


const UserAccount = () => {
    const {walletAddress} = useDapp();
    const { classes } = useStyles();
    return (
        <Container>
            <Text align='center' size="lg" weight={700} className={classes.title}>
            Account Status
            </Text>
            <Text align='center' size="md" weight={500} >{skimAddress(walletAddress)}</Text>
        </Container>
    )
}

export default UserAccount