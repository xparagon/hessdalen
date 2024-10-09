import { Group, Button, Stack, Box, CSSObject, Burger, Drawer, Space, MediaQuery, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconListSearch } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';



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
                                {/* <Link href="/sitemap" passHref style={{ height: '24px' }} ><IconListSearch size={24} /></Link> */}
                            </Group>
                        </div>
                        <div>
                            <Link href="/ufo-reporting" passHref><Button radius="sm" compact variant="subtle">Have you seen a UFO?</Button></Link>
                            <Link href="/live-streaming" passHref><Button radius="sm" compact variant="subtle">Live streaming</Button></Link>
                        </div>
                        <div>
                            <Group>
                                <ColorSchemeToggle />
                                <JoinDiscord />
                            </Group>
                        </div>
                    </Group>
                </Box>
            </MediaQuery>
            <MediaQuery largerThan={800} styles={doHide}>
                <div>
                    <Group position="apart" mt="1rem">
                        <Group>
                            <Link href="/" passHref>
                                <Image src="/img/Patch_Project_Hessdalen.png" alt="Hessdalen logo" width={48} height={48} />
                            </Link>
                            <Burger size={16} opened={opened} onClick={toggle} aria-label={label} />
                        </Group>

                        <Group>
                            <ColorSchemeToggle />
                            <JoinDiscord />
                        </Group>
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
                                    <Link href="/ufo-reporting" passHref><Button radius="sm" compact variant="subtle">Have you seen a UFO?</Button></Link>
                                    <Link href="/live-streaming" passHref><Button radius="sm" compact variant="subtle">Live streaming</Button></Link>
                                </Stack>
                                <Space h="xl" />
                                <Grid>
                                    <Grid.Col span={4}>
                                        <a href="https://sites.google.com/hessdalen.org/web"  ><Button fullWidth size="md" radius="sm" >web</Button></a>
                                    </Grid.Col>
                                    <Grid.Col span={4}>
                                        <a href="https://sites.google.com/hessdalen.org/blog" ><Button fullWidth size="md" radius="sm" >blog</Button></a>

                                    </Grid.Col>
                                    <Grid.Col span={4}>
                                        <a href="https://old.hessdalen.org/"><Button fullWidth size="md" radius="sm" >old</Button></a>
                                    </Grid.Col>
                                </Grid>
                                <Space h="xl" />
                                <JoinDiscord />
                            </Drawer.Body>
                        </Drawer.Content>
                    </Drawer.Root>
                </div>
            </MediaQuery>
        </>
    );
}
