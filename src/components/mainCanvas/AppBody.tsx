import React from 'react'
import { useMoralis } from 'react-moralis';
import { useDapp } from '../../context/DappProvider';
import BodyData from '../mainBody/BodyData';
import NoUser from './NoUser';
import WrongChain from './WrongChain';


const AppBody = () => {
    const {isAuthenticated } = useMoralis();
    const {chainId} = useDapp();
    const content = chainId === "0x13881"? (isAuthenticated? <BodyData/>:<NoUser/>) : <WrongChain/>;
    return (
        <>
        {content}
        </>
    )
}

export default AppBody