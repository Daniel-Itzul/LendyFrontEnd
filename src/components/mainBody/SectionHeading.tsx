import React from 'react'
import { useMantineTheme, Container, Text } from '@mantine/core'

interface HeadingProps {
    heading: string;
    align: "left" | "center" | "right" | "justify";
}

const SectionHeading = ({ heading, align}:HeadingProps) => {
    const theme = useMantineTheme();
    const color = theme.colorScheme === 'dark'? '#ffff' : 'black';
    return (
        <Container>
            <Text color={color} align={align}><h1>{heading}</h1></Text>
        </Container>
    )
}

export default SectionHeading