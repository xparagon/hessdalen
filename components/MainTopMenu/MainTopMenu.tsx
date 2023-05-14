import { Group, Button, Stack, Box, useMantineTheme, CSSObject, Burger, Drawer, Flex, Space, MediaQuery, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconUfo } from '@tabler/icons-react';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import Link from 'next/link';



export default function MainTopMenu() {
    const doHide: CSSObject = {
        display: 'none',
    };

    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

    return (
        <>
            <MediaQuery smallerThan={800} styles={doHide}>
                <Box mt="1rem">
                    <Group position="apart">
                        <Flex
                            mih={50}
                            gap="sm"
                            justify="flex-start"
                            align="center"
                        >
                            <Link href="/">
                                <IconUfo size={28} />
                            </Link>
                        </Flex>
                        <Flex
                            mih={50}
                            gap="xs"
                            justify="center"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Link href="/work-in-progress"><Button radius="sm" compact variant="subtle">Have you seen a UFO?</Button></Link>
                            <Link href="/work-in-progress"><Button radius="sm" compact variant="subtle">UFO reports</Button></Link>
                            <Link href="/work-in-progress"><Button radius="sm" compact variant="subtle">Live steaming</Button></Link>
                            <Link href="/work-in-progress"><Button radius="sm" compact variant="subtle">UFO research</Button></Link>
                        </Flex>
                        <Flex
                            mih={50}
                            gap="sm"
                            justify="flex-start"
                            align="center"
                        >
                            <Link href="/sitemap">
                                <IconSearch size={18} />
                            </Link>
                            <JoinDiscord />
                        </Flex>
                    </Group >
                </Box >
            </MediaQuery >
            <MediaQuery largerThan={800} styles={doHide}>
                <div>
                    <Group position="apart" mt="1rem">
                        <Flex
                            mih={50}
                            gap="sm"
                            justify="flex-start"
                            align="center"
                        >
                            <Link href="/work-in-progress">
                                <IconUfo size={28} />
                            </Link>
                            <Burger opened={opened} onClick={toggle} aria-label={label} />
                        </Flex>
                        <JoinDiscord />
                    </Group>
                    <Drawer.Root opened={opened} onClose={toggle}>
                        <Drawer.Overlay />
                        <Drawer.Content>
                            <Drawer.Header>
                                <Flex
                                    mih={50}
                                    gap="sm"
                                    justify="flex-start"
                                    align="center"
                                >
                                    <IconUfo size={28} />
                                    <Burger opened={opened} onClick={toggle} aria-label={label} />
                                </Flex>
                            </Drawer.Header>
                            <Drawer.Body>

                                <Stack align="flex-start" spacing="xs">
                                    <Button radius="sm" compact variant="subtle">Have you seen a UFO?</Button>
                                    <Button radius="sm" compact variant="subtle">UFO reports</Button>
                                    <Button radius="sm" compact variant="subtle">Live steaming</Button>
                                    <Button radius="sm" compact variant="subtle">UFO research</Button>
                                    <Space h="xl" />
                                    <Button
                                        color="gray"
                                        leftIcon={<IconSearch
                                            size={18} stroke={1.4} />} variant="subtle" compact>
                                        Sitemap
                                    </Button>
                                    <JoinDiscord />
                                </Stack>
                            </Drawer.Body>
                        </Drawer.Content>
                    </Drawer.Root>

                </div>

            </MediaQuery>
        </>
    );
}