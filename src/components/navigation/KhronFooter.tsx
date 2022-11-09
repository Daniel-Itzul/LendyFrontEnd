import React from 'react';
import { createStyles, Anchor, Container, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    float:'right'
  },
  links: {
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 15,
    padding: 10,
    lineHeight: 2.5,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.blue[8],
    borderBottom: '2px solid transparent',
    transition: 'border-color 100ms ease, color 100ms ease',
        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.colors.blue[3],
            textDecoration: 'none',
        },
  },
}));

const KhronFooter = () => {
  const { classes } = useStyles();
  const footerLinks = [
    {label:"Terms", link:""},
    {label:"Collaborate", link:""},
    {label:"Tutorials", link:""}
]
  const items = footerLinks.map((link) => (
    <Anchor<'a'>
      className={classes.links}
      key={link.label}
      href={link.link}
      target="_blank"
      //onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Container >
        <Text align='center'>{items}</Text>
    </Container>
  );
}

export default KhronFooter