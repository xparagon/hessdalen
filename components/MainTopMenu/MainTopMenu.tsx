import { Group, Button, Stack, Box, CSSObject, Burger, Drawer, Flex, Space, MediaQuery, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconListSearch, IconUfo } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import JoinDiscord from '../JoinDiscord/JoinDiscord';



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
                        <div>
                            <Group>
                                <Link href="/" passHref><Image src="/img/Patch_Project_Hessdalen.png" alt="Hessdalen logo" width={48} height={48} /></Link>
                                <Link href="/sitemap" passHref style={{ height: '24px' }} ><IconListSearch size={24} /></Link>
                            </Group>
                        </div>
                        <div>
                            <Link href="/work-in-progress" passHref><Button radius="sm" compact variant="subtle">Have you seen a UFO?</Button></Link>
                            <Link href="/work-in-progress" passHref><Button radius="sm" compact variant="subtle">UFO reports</Button></Link>
                            <Link href="/work-in-progress" passHref><Button radius="sm" compact variant="subtle">Live streaming</Button></Link>
                            <Link href="/work-in-progress" passHref><Button radius="sm" compact variant="subtle">UFO research</Button></Link>
                        </div>
                        <div>

                            <JoinDiscord />
                        </div>
                    </Group >
                </Box >
            </MediaQuery >
            <MediaQuery largerThan={800} styles={doHide}>
                <div>
                    <Group position="apart" mt="1rem">
                        <Group>
                            <Link href="/" passHref>
                                <Image src="/img/Patch_Project_Hessdalen.png" alt="Hessdalen logo" width={48} height={48} />
                            </Link>
                            <Burger size={16} opened={opened} onClick={toggle} aria-label={label} />
                        </Group>

                        <JoinDiscord />
                    </Group>
                    <Drawer.Root opened={opened} onClose={toggle}>
                        <Drawer.Overlay />
                        <Drawer.Content>
                            <Drawer.Header>
                                <Group>
                                    <Link href="/" passHref>
                                        <Image src="/img/Patch_Project_Hessdalen.png" alt="Hessdalen logo" width={48} height={48} />
                                    </Link>
                                    <Burger size={16} opened={opened} onClick={toggle} aria-label={label} />
                                </Group>
                            </Drawer.Header>
                            <Drawer.Body>

                                <Stack align="flex-start" spacing="xs">
                                    <Link href="/work-in-progress" passHref><Button radius="sm" compact variant="subtle">Have you seen a UFO?</Button></Link>
                                    <Link href="/work-in-progress" passHref><Button radius="sm" compact variant="subtle">UFO reports</Button></Link>
                                    <Link href="/work-in-progress" passHref><Button radius="sm" compact variant="subtle">Live streaming</Button></Link>
                                    <Link href="/work-in-progress" passHref><Button radius="sm" compact variant="subtle">UFO research</Button></Link>
                                    <Space h="xl" />
                                    <Link href="/sitemap" passHref>
                                        <Button color="gray" leftIcon={<IconListSearch size={18} stroke={1.4} />} variant="subtle" compact>
                                            Sitemap
                                        </Button>
                                    </Link>
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
