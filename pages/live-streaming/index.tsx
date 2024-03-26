import { Text, Group, rem, Space, List, Grid, Card, Button, Title, Center } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from './layout';
import { IconArrowRight } from '@tabler/icons';



export default function LiveStreaming() {
    return (
        <>

            <MainLayout>
                <Space h="lg" />

                <Grid>
                    <Grid.Col sm={6}>
                        <Title order={2}>
                            Live streaming
                        </Title>
                        <Space h="sm" />


                        <Text size="sm">
                            We aim to install both UFODAP and the Sky360 cameras with triangulation abilities to pinpoint the phenomena,
                            subsequently utilizing a pan-tilt-zoom camera to secure a detailed view. Ideally, we would
                            have multiple automated surveillance systems in operation.
                        </Text>
                        <Space h="sm" />
                        <Text size="sm" fs="italic" >
                            We also plan to deploy high-speed automated drones designed to approach the phenomena as closely as possible.
                        </Text>
                        <Space h="sm" />
                        <Text size="sm">
                            Check out the alarm pictures at <a href='https://old.hessdalen.org/files/' target="alarm">old.hessdalen.org/files</a>.
                        </Text>
                        <Space h="lg" />
                        <Space h="lg" />
                        <Space h="lg" />
                        <Text size="lg">
                            Check out the <em>live</em> stream below:
                        </Text>
                        <Space h="sm" />

                    </Grid.Col>
                    <Grid.Col sm={6}>
                        <Image src="/img/live-cam.jpg" alt="View from the Blue Box camera" width={450} height={300} />
                    </Grid.Col>
                </Grid>
                <Space h="xl" />
                <Space h="xl" />
            </MainLayout>
            <Center>
                <h2><a href="https://www.youtube.com/@ProjectHessdalen2023/streams" target="live">Live Camera</a></h2>
            </Center>
            <Center>
                <iframe title="Cam1" src="https://www.youtube.com/embed/Mzk0ddJYGy4?si=6onxWFK3RW8kAyvd" height="720" width="1280" name="HD CAM 2">Live Stream Camera 1</iframe>
            </Center>
            <Space h="lg" />

        </>
    );
}