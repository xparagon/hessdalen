import { createStyles, Text, rem, Button, Stack } from '@mantine/core';
import Link from 'next/link';

import Image from 'next/image';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(20),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 1)`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },
}));

export function MainFooter() {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            <Stack align="center" justify="flex-start">
                <Image src="/img/Patch_Project_Hessdalen.png" alt="Hessdalen logo" width={200} height={200} />
                <Text size="md">
                    <a href="mailto:admin@hessdalen.org?subject=PROJECT HESSDALEN Inquiry">admin@hessdalen.org</a><br />
                </Text>

                <Link href="https://blog.hessdalen.org/" passHref>
                    <Button radius="sm">
                        Blog
                    </Button>
                </Link>
            </Stack>
        </footer>
    );
}