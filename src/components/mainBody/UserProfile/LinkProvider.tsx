import React from 'react'
import { Container, Group, Text, Button, createStyles } from '@mantine/core'
import { useDapp } from '../../../context/DappProvider';
import { useEffect } from 'react'

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

const LinkProvider = () => {
    const { classes } = useStyles();
    const {walletAddress, nativeBalance, setNativeBalance } = useDapp();
    useEffect(() => {
      }, [walletAddress, setNativeBalance]);
    
    return (
    <>
      <Group position="apart" mt="sm">
        <Container style={{alignContent:"center"}}>
            <Button disabled={true}>
              Link Storage Provider
            </Button>
        </Container>
      </Group>
    </>
  )
}

export default LinkProvider