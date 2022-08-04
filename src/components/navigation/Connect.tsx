import React from 'react';
import { Button } from '@mantine/core';
import { useMoralis } from "react-moralis";

const Connect = () => {
    const { authenticate, isAuthenticated, logout } = useMoralis();
    const login = async () => {
        await authenticate({signingMessage: "Activate Khronus Dapp" })
          .then(function (user) {
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }
    
    const action = !isAuthenticated? <Button onClick={login}> Connect</Button>: <Button onClick={logOut}> Disconnect</Button>;

    return (
        action
    )
}

export default Connect