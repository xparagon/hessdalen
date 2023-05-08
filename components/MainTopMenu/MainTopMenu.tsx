import { Group, Button, Stack, Box, useMantineTheme, CSSObject, Burger, Drawer, Flex, Space } from '@mantine/core';
import { MediaQuery, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUfo } from '@tabler/icons-react';
import JoinDiscord from '../JoinDiscord/JoinDiscord';



export default function MainTopMenu() {


    const theme = useMantineTheme();

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
                            <IconUfo size={28} />
                        </Flex>
                        <Flex
                            mih={50}
                            gap="xs"
                            justify="center"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button radius="sm" compact variant="subtle">Have you seen a UFO?</Button>
                            <Button radius="sm" compact variant="subtle">UFO reports</Button>
                            <Button radius="sm" compact variant="subtle">Live steaming</Button>
                            <Button radius="sm" compact variant="subtle">UFO research</Button>
                        </Flex>
                        <JoinDiscord />
                    </Group>
                </Box>
            </MediaQuery>
            <MediaQuery largerThan={800} styles={doHide}>
                <div>
                    <Group position="apart" mt="1rem">
                        <Flex
                            mih={50}
                            gap="sm"
                            justify="flex-start"
                            align="center"
                        >
                            <IconUfo size={28} />
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