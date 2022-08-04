import React from 'react'
import { createStyles, Card, Text } from '@mantine/core';
import RegisteredContracts from './RegisteredContracts';
import AvgAlertsMonth from './AvgAlertsMonth';
import AvgAlertsCostMonth from './AvgAlertsCostMonth';
import UserAccount from './UserAccount';
import NativeBalance from './NativeBalance';


const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.blue[2],
      marginLeft: 15
    },
  
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: `${theme.spacing.sm}px ${theme.spacing.xs}px`,
      marginTop:`${theme.spacing.xs}px`,
      borderTop: `2px solid ${
        theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.blue[8]
      }`,
    },

    subTitle: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1,
    }
  }));

  
const UserCard = () => {
    const { classes } = useStyles();
    return (
        <Card shadow="sm" p="lg" withBorder className={classes.card}>
            <UserAccount/>
            <Card.Section className={classes.footer}></Card.Section>
            <>
              <Text align='center' size="md" weight={700} className={classes.subTitle}>
                Your Contracts
              </Text>
              <RegisteredContracts/>
              <Card.Section className={classes.footer}></Card.Section>
              <AvgAlertsMonth/>
              <Card.Section className={classes.footer}></Card.Section>
              <AvgAlertsCostMonth/>
              <Card.Section className={classes.footer}></Card.Section>
            </>
            <NativeBalance/>
        </Card>
  )
}

export default UserCard