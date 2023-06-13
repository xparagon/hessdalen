import { Text, Group, rem, Space, List, Grid, Card, Button } from '@mantine/core';
import Link from 'next/link';
import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';


// interface WorkInProgressProps {
//     links: { label: string; link: string; order: number }[];
// }

export default function WorkInProgress() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Group mb="md">
                <Text size={24}>Project Hessdalen Roadmap</Text>
            </Group>

            <Grid>
                <Grid.Col sm={6} md={6} lg={3}>
                    <Card padding="sm" radius="md" >
                        <Text fw={700}>Non-profit organization</Text>
                        <Text color="dimmed">
                            We have registered Project Hessdalen as a non profit
                            organization, but we are still waiting for some
                            "paperwork". Once we get an organizational number
                            we can set up a bank account and connect ko-fi.
                        </Text>
                        <Link href="/work-in-progress" passHref>
                            <IconArrowRight size={28} />
                        </Link>
                    </Card>

                </Grid.Col>
            </Grid>

            <Space h="xl" />
            <Space h="xl" />


        </MainLayout>
    );
}