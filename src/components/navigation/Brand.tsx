import React from 'react'
import { useMantineTheme } from '@mantine/core';
import logoDark from "../../assets/images/Logo.png"

const Brand = () => {
const theme = useMantineTheme();
const logo = logoDark;
return (
    <div>
        <img className="logo_img" src={logo} width="50" height="50" alt=""/>
   </div>
  )
}

export default Brand