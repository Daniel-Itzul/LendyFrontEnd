import React, { useState } from 'react';
import { Drawer, Button, DrawerPosition, MantineNumberSize, ButtonVariant } from '@mantine/core';

interface DrawerProps {
    title: string;
    appearFrom: DrawerPosition;
    buttonTitle ?: string;
    buttonRadius ?: MantineNumberSize;
    buttonVariant ?: ButtonVariant;
    children: React.ReactNode;
}

const KhronDrawer = ({title, appearFrom, buttonRadius, buttonTitle, buttonVariant, children}:DrawerProps) => {
    const _radius  = buttonRadius ? buttonRadius : 'sm';
    const _buttonTitle = buttonTitle ? buttonTitle: title;
    const _buttonVariant = buttonVariant ? buttonVariant: undefined;

    const [opened, setOpened] = useState(false);
    return (
        <>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title={title}
          position={appearFrom}
          padding="xl"
          size="xl"
        >
          {children}
        </Drawer>
        <Button  variant={_buttonVariant} radius={_radius} onClick={() => setOpened(true)}>{_buttonTitle}</Button>
      </>
    )
}

export default KhronDrawer