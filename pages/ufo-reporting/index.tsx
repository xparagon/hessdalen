import { Text, Group, rem, Space, List, Grid, Card, Button, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { IconEye, IconArrowDownCircle, IconExternalLink, IconPigMoney, IconFlag } from '@tabler/icons';

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
                    <Text size="xl">
                    <a href="https://forms.gle/enMd7yrsKoD99iwCA" target="report">
                    Form to report a sighting
                    </a> 
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Previousely any sighting of the light phonomenoa in Hessdalen has been
                        reported to the Project Hessdalen team,
                        by taking to people in the area,
                        or by sending an email to the <a href="mailto:erling@hessdalen.org">Erling P. Strand</a>.<br />
                        <br />
                        If you have seen a UFO in Hessdalen, please the form above.<br />
                        <i>This is in Norwegian - intended to be used for sightings in or near the Hessdalen valley.</i>
                        <br />
                        It does include a 
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        If you have seen a UFO anywhere else in Norway, please report it to <a href="https://nuforc.org/">NUFOS</a>.
                        If you have seen a UFO anywhere else in the world, report it to <a href="https://norskufosenter.no/">NUFORC</a> or
                        use the app from <a href="https://enigmalabs.io/">ENIGMA</a>.
                    </Text>
                    <Space h="sm" />
                    <Text size="lg">
                        We are working with SCU on a database project. 
                        Our hope is that this tool can be used to view the sighings on the map. (See picture)
                        <br />
                        <br />
                        
                        <i>We want to make it easy to share a sighing in real time
                        - and let members of the community
                        get a notification when there is a sighting 
                        - using live video feed.</i>
                    </Text>
                    <Space h="sm" />
                   
                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/scu-db.jpg" alt="Database" width={450} height={450} />

                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />


        </MainLayout >
    );
}