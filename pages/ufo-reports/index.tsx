import { Text, Group, rem, Space, List, Grid, Card, Button, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';



export default function UFOreports() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Grid>
                <Grid.Col sm={6}>
                    <Title order={2}>
                        UFO reports
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
                        On the historic hessdalen site you can find all the reports
                        and all the images and videos from captered by the Blue Box.
                    </Text>
                    <Space h="sm" />
                    <Text size="lg">
                        On this page we want to make it easier to find and naviate in the reports,
                        by filter on date, location, type of phenomena and more.
                        We would also like to add a map where you can
                        see the location of the reports
                        and combine witness reports with the data from the Blue Box.
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