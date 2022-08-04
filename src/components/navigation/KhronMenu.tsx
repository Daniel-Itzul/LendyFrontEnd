import React from 'react';
import { Anchor } from '@mantine/core';
import { createStyles} from '@mantine/core'

const useStyles = createStyles((theme) => ({
    container: {
        marginTop: '15px',
        float: 'right',
    },
    mainLink: {
        textTransform: 'uppercase',
        fontSize: 15,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.blue[7],
        padding: `7px ${theme.spacing.sm}px`,
        fontWeight: 700,
        borderBottom: '2px solid transparent',
        transition: 'border-color 100ms ease, color 100ms ease',
        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.colors.orange[3],
            textDecoration: 'none',
        },
        },
    mainLinkActive: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
        },
    }
    ));


const KhronMenu = () => {
    const {classes} = useStyles();
    return (
        <div>
            <Anchor href="https://docs.khronus.xyz" target="_blank" className={classes.mainLink}>Documentation</Anchor>
            <Anchor href="https://docs.khronus.xyz/report" target="_blank"className={classes.mainLink}>Report Issues</Anchor>
        </div>
    )
}

export default KhronMenu