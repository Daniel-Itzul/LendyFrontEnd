import React from 'react'
import { useMantineTheme } from '@mantine/core';
import logoLight from "../../assets/images/Khronus Project icon.png"
import logoDark from "../../assets/images/Khronus icon night mode.png"

const Brand = () => {
const theme = useMantineTheme();
const logo = theme.colorScheme === 'dark'? logoDark: logoLight;
return (
    <div>
        <img className="logo_img" src={logo} width="50" height="50" alt=""/>
   </div>
  )
}

export default Brand