import { Text, Group, rem, Space, List, Grid, Card, Button, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';

export default function UFOResearch() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Grid>
                <Grid.Col sm={6}>
                    <Title order={1}>
                        UFO Research
                    </Title>
                    <Space h="sm" />
                    <Text size="sm">
                        Until we have time to present the latest research here, please visit&nbsp;
                        <Link href="https://old.hessdalen.org/reports/" passHref target="_blank">
                            old.hessdalen.org/reports
                        </Link>.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        You can also find a list of books, reports, movies, TV and radio posts on &nbsp;
                        <Link href="https://hessdalsfenomenet.no/mer-informasjon/" passHref target="_blank">
                            hessdalsfenomenet.no/mer-informasjon/
                        </Link>.
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