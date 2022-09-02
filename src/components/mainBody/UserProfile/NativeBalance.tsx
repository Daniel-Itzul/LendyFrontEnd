import React from 'react'
import { Container, Group, Text, Button, createStyles } from '@mantine/core'
import { useDapp } from '../../../context/DappProvider';
import { useMoralis, useMoralisWeb3Api } from "react-moralis"; 
import { useEffect } from 'react'
import nativeLogo from "../../../assets/icons/PrimaryToken.png";
const logo = nativeLogo

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

const NativeBalance = () => {
    const { classes } = useStyles();
    const {walletAddress, nativeBalance, setNativeBalance } = useDapp();
    const {Moralis} = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const getNative = () => {
      window.open("https://faucet.polygon.technology/", "_blank")
    }
    useEffect(() => {
      async function getBalance() {
        const result = await Web3Api.account.getNativeBalance({chain:"mumbai",address:walletAddress});
        const balanced = Moralis.Units.FromWei(result.balance);
        const balancedSkimmed = balanced.slice(0,5);
        setNativeBalance(balancedSkimmed);
      }
      getBalance();
      }, [walletAddress, setNativeBalance, Moralis, Web3Api]);
    
    return (
    <>
        <Text align='center' size="md" weight={700} className={classes.subTitle}>
        Native Balance 
        </Text>
        <Group position="apart" mt="sm">
        <div>
            <img className="logo_img" src={logo} width="50" height="50" alt=""/>
        </div>
        <Text align="right"size="xl" weight={700}>
            {nativeBalance}
        </Text>
        <Container style={{alignContent:"center"}}>
            <Button onClick={getNative}>
            Get Native
            </Button>
        </Container>
        </Group>
    </>
  )
}

export default NativeBalance