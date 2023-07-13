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
                        Live streaming
                    </Title>
                    <Space h="sm" />

                    <Text tt="uppercase">From the manifesto-page:</Text>
                    <Space h="sm" />


                    <Text size="sm">
                        &laquo;While the Blue Box currently operates three live-stream cameras (temporarily out of order), the odds of capturing one of the approximately 20 annual events remain slim.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Here&apos;s our plan to improve that:
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We aim to install all-sky cameras with triangulation abilities to pinpoint the phenomena,
                        subsequently utilizing a pan-tilt-zoom camera to secure a detailed view. Ideally, we would
                        have multiple automated surveillance systems in operation.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We also plan to deploy high-speed automated drones designed to approach the phenomena as closely as possible.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        All these components could be automated and activated by AI. Whenever the system triggers an alarm,
                        notifications would be sent to members of Project Hessdalen. This way, we can collectively witness
                        the real-time images of the phenomena - and hopefully one day, the crafts.&raquo;
                    </Text>
                    <Space h="sm" />

                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/ph-9.jpg" alt="View from the Blue Box camera" width={450} height={450} />

                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />


        </MainLayout>
    );
}