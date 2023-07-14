import { Text, Group, rem, Space, List, Grid, Card, Button } from '@mantine/core';
import Link from 'next/link';
import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';


// interface SitemapProps {
//     links: { label: string; link: string; order: number }[];
// }

export default function Sitemap() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Group mb="md">
                <Text size={24}>Project Hessdalen sitemap</Text>
            </Group>

            <Grid>
                <Grid.Col sm={6} md={6} lg={3}>
                    <Card padding="sm" radius="md" >
                        <Text fw={700}>Have you seen a UFO?</Text>
                        <Text color="dimmed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                        </Text>
                        <Link href="/work-in-progress" passHref>
                            <IconArrowRight size={28} />
                        </Link>
                    </Card>

                </Grid.Col>
                <Grid.Col sm={6} md={6} lg={3}>
                    <Card padding="sm" radius="md" >
                        <Text fw={700}>UFO reports</Text>
                        <Text color="dimmed">
                            Consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <Link href="/work-in-progress" passHref>
                            <IconArrowRight size={28} />
                        </Link>
                    </Card>
                </Grid.Col>
                <Grid.Col sm={6} md={6} lg={3}>
                    <Card padding="sm" radius="md" >
                        <Text fw={700}>Live streaming</Text>
                        <Text color="dimmed">
                            Consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                        </Text>
                        <Link href="/work-in-progress" passHref>
                            <IconArrowRight size={28} />
                        </Link>
                    </Card>
                </Grid.Col>
                <Grid.Col sm={6} md={6} lg={3}>
                    <Card padding="sm" radius="md" >
                        <Text fw={700}>UFO research</Text>
                        <Text color="dimmed">
                            Consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                        </Text>
                        <Link href="/work-in-progress" passHref>
                            <IconArrowRight size={28} />
                        </Link>
                    </Card>
                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />

            <List listStyleType="none">
                <Text fw={700}>About</Text>
                <List withPadding listStyleType="disc">
                    <List.Item>History</List.Item>
                    <List.Item>People
                        <List withPadding listStyleType="disc">
                            <List.Item>Erling E. Strand</List.Item>
                            <List.Item>Massimo  Teodorani</List.Item>
                        </List>
                    </List.Item>
                    <List.Item>Blue Box</List.Item>
                    <List.Item>Science Camp</List.Item>
                </List>

                <Text fw={700}>Project</Text>
                <List withPadding listStyleType="disc">
                    <List.Item>Contribute
                        <List withPadding listStyleType="disc">
                            <List.Item>
                                <Link href="https://ko-fi.com/projecthessdalen" passHref target="_blank">
                                    Donate
                                </Link>
                            </List.Item>
                            <List.Item>Membership</List.Item>
                        </List>
                    </List.Item>
                    <List.Item>Media assets </List.Item>
                    <List.Item>Chagnelog</List.Item>
                    <List.Item>Releases</List.Item>
                </List>


                <Text fw={700}>Community</Text>
                <List withPadding listStyleType="disc">
                    <List.Item>Join Discord</List.Item>
                    <List.Item>Meet a UFO witness</List.Item>
                    <List.Item>Join an event</List.Item>
                    <List.Item>Visit Hessdalen</List.Item>
                </List>
            </List>

        </MainLayout>
    );
}