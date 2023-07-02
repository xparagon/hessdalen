import { Text, Group, rem, Space, List, Grid, Card, Button, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';



export default function Roadmap() {
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
                        Project Hessdalen was established in 1983 and
                        on the historic hessdalen site you can read all
                        about phenomena, the observations, articles, TV-programs and more.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        This new site is an attempt to upgrade both
                        look and functionality and use modern web-technology
                        that will work on any device.
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