import React from 'react';
import { Button } from '@mantine/core';
import { requestAccounts } from '../../utilities/request_accounts';
import { useDapp } from '../../context/DappProvider';

const Connect = () => {
  const { walletAddress, setWalletAddress } = useDapp();
  const login = async () => {
    const account  = await requestAccounts();
    setWalletAddress(account)
   
  }
  const action = walletAddress === undefined? <Button onClick={login}> Connect</Button>: <Button disabled={true}> Connect</Button>;
  return (
      action
  )
}

export default Connect