import { Text, Group, rem, Space, List, Grid, Card, Button, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';



export default function UFOreporting() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Grid>
                <Grid.Col sm={6}>
                    <Title order={2}>
                        Have you seen a UFO?
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
                        Any sighting of the light phonomenoa in Hessdalen has been
                        reported to the Project Hessdalen team,
                        by taking to people in the area,
                        or by sending an email to the <a href="mailto:erling.p.strand@gmail.com">Erling P. Strand</a>.<br />
                        If you have seen a UFO in Hessdalen, please report it to us.<br />

                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        If you have seen a UFO anywhere else in Norway, please report it to <a href="https://nuforc.org/">NUFOS</a>.
                        If you have seen a UFO anywhere else in the world, report it to <a href="https://norskufosenter.no/">NUFORC</a> or
                        use the app from <a href="https://enigmalabs.io/">ENIGMA</a>.
                    </Text>
                    <Space h="sm" />
                    <Text size="lg">
                        We hope to make a form for reporting UFO sightings in Hessdalen soon.
                        But we also want to make it easy to share a sighing in real time
                        - and let members of the community
                        get a notification when a sighting is beeing reported
                        - using live video feed.
                    </Text>
                    <Space h="sm" />
                    <Text size="md">
                        Please join our discord server to get the latest news.<br />
                        Please help us to make this site better by reporting bugs and
                        suggesting improvements.
                    </Text>
                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/building-a-ufo-mj.png" alt="Building a UFO (Midjourney)" width={450} height={450} />

                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />


        </MainLayout >
    );
}