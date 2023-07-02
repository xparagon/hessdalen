import { Text, Group, rem, Space, List, Grid, Card, Button, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';



export default function LiveStreaming() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Grid>
                <Grid.Col sm={6}>
                    <Title order={2}>
                        Roadmap
                    </Title>
                    <Space h="sm" />
                    <Text tt="uppercase">Work In Progress</Text>
                    <Space h="sm" />
                    <Text size="md">The page you are looking for is not ready.
                    </Text>
                    <Space h="sm" />
                    <Text size="xl">
                        Come back soon to check if we are done.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We have two cameras in Hessdalen that are streaming live video.
                        But we have some technical difficulties with the streaming.
                    </Text>
                    <Space h="sm" />
                    <Text size="lg">
                        It is high on our priority list to get the streaming up and running again.
                        And we want new and better cameras as soon as possible.
                    </Text>
                    <Space h="sm" />
                    <Text size="md">
                        Please join our discord server to get the latest news.<br />
                        Please help us to make this site better by reporting bugs and
                        suggesting improvements.
                    </Text>
                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/ph-9.jpg" alt="View from the Blue Box camera" width={450} height={450} />

                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />


        </MainLayout >
    );
}