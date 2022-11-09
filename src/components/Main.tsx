import React from 'react'
import { MantineProvider, AppShell, Header, Footer } from '@mantine/core';
import NavKhron from "./navigation/NavKhron";
import AppBody from './mainCanvas/AppBody';
import KhronFooter from './navigation/KhronFooter';
import NoWallet from './mainCanvas/NoWallet';
import { useDapp } from '../context/DappProvider';


const Main = () => {
  const { hasProvider, chainId, walletAddress}= useDapp();
  const dappBody = hasProvider? <AppBody/>:<NoWallet/>;
  return (
  <MantineProvider 
    theme={{ 
      colorScheme: 'dark',
      colors: {
        blue: [
          "#ECF2F9",
          "#C9DBED",
          "#A7C4E2",
          "#85ADD6",
          "#6296CB",
          "#407FBF",
          "#336699",
          "#264C73",
          "#19334D",
          "#0D1926"
        ],
        green: [
          "#ECF9EC",
          "#C9EDC9",
          "#A7E2A7",
          "#85D685",
          "#62CB62",
          "#40BF40",
          "#339933",
          "#267326",
          "#194D19",
          "#0D260D"
        ],
        orange: [
          "#FFF2E5",
          "#FFDBB8",
          "#FFC48A",
          "#FFAD5C",
          "#FF962E",
          "#FF8000",
          "#CC6600",
          "#994C00",
          "#663300",
          "#331A00"
        ],
        purple: [
          "#F5F0F5",
          "#E2D4E2",
          "#D0B9D0",
          "#BE9DBE",
          "#AB82AB",
          "#996699",
          "#7A527A",
          "#5C3D5C",
          "#3D293D",
          "#1F141F"
        ],
        gray: [
          "#F2F2F3",
          "#DADBDC",
          "#C3C4C6",
          "#ABADAF",
          "#949699",
          "#7C7F83",
          "#646668",
          "#4B4C4E",
          "#323334",
          "#19191A"
        ]
      },
    primaryColor:"blue"
  }}>
  <AppShell
    style={{marginTop:-8, marginLeft:-8, marginRight:-8, marginBottom:-8}}
    padding='sm'
    header={<Header height={70} p="xs">{<NavKhron></NavKhron>}</Header>}
    footer={
      <Footer height={70} p="md">
        <KhronFooter></KhronFooter>
      </Footer>}
    styles={(theme) => ({
      main: { minHeight: 'calc(100vh - 140px)', backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1]},
    })}
  >
  {dappBody}
  </AppShell>
</MantineProvider>
)
}

export default Main