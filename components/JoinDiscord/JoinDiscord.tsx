import { Group, Button, rem } from '@mantine/core';
import { IconBrandDiscord } from '@tabler/icons-react';

export default function JoinDiscord() {
    return (
        <Group position="center">
            <Button
                radius="lg"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/JmZr4kqD4X"
                leftIcon={<IconBrandDiscord size={rem(48)} />}
                styles={(theme) => ({
                    root: {
                        backgroundColor: '#5865f2',
                        border: 0,
                        height: rem(64),
                        paddingLeft: rem(20),
                        paddingRight: rem(20),
                        '&:not([data-disabled])': theme.fn.hover({
                            backgroundColor: theme.fn.darken('#404eed', 0.05),
                        }),
                    },

                    leftIcon: {
                        marginRight: theme.spacing.md,
                    },
                })}
            >
                Join us on Discord
            </Button>
        </Group>
    );
}