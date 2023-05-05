import { ThemeIcon, Text, Timeline, Box, Title, Divider } from '@mantine/core';
import { IconCapture, IconBrandChrome, IconBellRinging, IconVideo } from '@tabler/icons-react';

export default function Demo() {
    return (
        <Box>
            <Title my="xs" order={2}>Roadmap</Title>
            <Divider my="xs" label="what we plan to do" labelPosition="center" />
            <Timeline>
                <Timeline.Item title="Blue Box back online" bulletSize={36}
                    bullet={
                        <ThemeIcon
                            size={36}
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'darkblue' }}
                            radius="xl"
                        >
                            <IconCapture size="1.4rem" />
                        </ThemeIcon>
                    }

                >
                    <Text color="dimmed" size="sm">
                        First goal is to upgrade the Blue Box.<br />
                        The equipment is old and needs to be replaced.
                        The cameras have low resolution, the computers are old and the software is outdated.
                        We need an upgrade to be able to capture and analyze the phenomena.
                    </Text>
                </Timeline.Item>
                <Timeline.Item
                    title="A modern and functional Webpage" bulletSize={36}
                    bullet={
                        <ThemeIcon
                            size={36}
                            variant="gradient"
                            gradient={{ from: 'yellow', to: 'red' }}
                            radius="xl"
                        >
                            <IconBrandChrome size="1.4rem" />
                        </ThemeIcon>
                    }
                >
                    <Text color="dimmed" size="sm">
                        Next goal is to create a modern and functional webpage. <br />
                        We will make it easy to find information,
                        easy to report a sighting and it will be easy to get in touch with us.<br />
                        <i>We will keep the old hessdalen.org for historical reasons.</i>
                    </Text>
                </Timeline.Item>
                <Timeline.Item title="Automated Alerts & Notifications" bulletSize={36}
                    bullet={
                        <ThemeIcon
                            size={36}
                            variant="gradient"
                            gradient={{ from: 'lightblue', to: 'blue' }}
                            radius="xl"
                        >
                            <IconBellRinging size="1.4rem" />
                        </ThemeIcon>
                    }
                >
                    <Text color="dimmed" size="sm">
                        We want an app that can send alerts and notifications to your phone when something interesting is happening.<br />
                        Then you could go to the live stream and see what is going on.
                    </Text>
                </Timeline.Item>

                <Timeline.Item
                    title="Triangulation"
                    bulletSize={36}
                    bullet={
                        <ThemeIcon
                            size={36}
                            variant="gradient"
                            gradient={{ from: 'lime', to: 'cyan' }}
                            radius="xl"
                        >
                            <IconVideo size="1.4rem" />
                        </ThemeIcon>
                    }
                >
                    <Text color="dimmed" size="sm">
                        We have one Blue Box in Hessdalen, but we need more to be able to triangulate the phenomena.
                        We need to place more equipment to collect more data and we want to make this data available to the public.
                    </Text>
                </Timeline.Item>
            </Timeline>
        </Box>
    );
}