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
                    <Text tt="uppercase">Getting started</Text>
                    <Space h="sm" />

                    <Text size="xl">
                        Project Hessdalen is a non-profit organization.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We have now registered the company and opened a bank account.<br />
                        We need to improve the new webside,
                        invite more people to join our discord server.
                    </Text>
                    <Space h="sm" />
                    <Text size="lg">
                        We will use Ko-fi to collect membership fees and donations,
                        because - guess what - no money: no equipment.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We will always have a free option, if you just want to
                        subscribe to our discord server and check out the our website.
                        But if you want to support us, please consider becoming a member.
                    </Text>
                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/flow.png" alt="web-discord-ko-fi" width={450} height={450} />

                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />


        </MainLayout >
    );
}