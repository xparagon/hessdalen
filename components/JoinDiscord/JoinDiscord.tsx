import { Group, Button, rem } from '@mantine/core';
import { IconBrandDiscord } from '@tabler/icons-react';

export default function JoinDiscord() {
    return (

        <Button
            radius="lg"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/JmZr4kqD4X"
            leftIcon={<IconBrandDiscord size={rem(28)} />}
            styles={(theme) => ({
                root: {
                    backgroundColor: '#5865f2',
                    border: 0,
                    height: rem(40),
                    paddingLeft: rem(10),
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
            Join Discord
        </Button>
    );
}