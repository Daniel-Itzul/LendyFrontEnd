import React from 'react'
import { createStyles, Card, Text } from '@mantine/core';
import RegisteredContracts from './RegisteredContracts';
import UserAccount from './UserAccount';
import LinkProvider from './LinkProvider';


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
              <RegisteredContracts/>
              <Card.Section className={classes.footer}></Card.Section>
            </>
            <>
              <Text> Provider ID</Text>
              <Text size='xs'> f25nml2cfbljvn4goqtclhifepvfnicv6g7mfmmvq</Text>
              <Card.Section className={classes.footer}></Card.Section>
            </>

            <LinkProvider/>
        </Card>
  )
}

export default UserCard