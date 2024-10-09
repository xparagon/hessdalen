import { Divider, Grid, Space, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import imgFieldTrip from '../../public/img/field-trip.jpg';

import MainLayout from '../layout';

export default function FieldTrip() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Grid>
                <Grid.Col sm={6}>
                    <Title order={2}>
                        Field Trip Weekend
                    </Title>
                    <Space h="sm" />

                    <Text tt="uppercase">Limited to 24 participants</Text>
                    <Space h="sm" />


                    <Text size="xl">
                        September 6 - 8, 2024
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Here&apos;s what we have in mind:
                    </Text>
                    <Space h="sm" />
                    <Text size="xl">
                        Speakers
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Erling P. Strand:
                        Instruments for UAP detection.<br />
                    </Text>
                    <Space h="sm" />

                    <Text size="xl">
                        Program
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Friday:<br />
                        Workshop on how to use the UAP detection equipment in the field.
                        Late night field work on two known
                        UFO hotspots in the valley.<br /><br />
                        Saturday:<br />
                        Guided tours and eye-witnesses telling about their sightings of UFOs.
                        Discussions around the campfire
                        before another late night field work.
                        <br /><br />


                    </Text>

                    <Text size="xl">
                        Indicate your interest in this event&nbsp;
                        <Link
                            href="https://forms.gle/s2535MDV2PaZjz8w5"
                            target="_blank">
                            here
                        </Link>&nbsp;
                        and get updates on you email.
                    </Text>

                    <Space h="xl" />
                    <Space h="xl" />
                    <Divider my="sm" />

                    <Space h="sm" />

                    <Text size="xl">
                        Why there was no Field Trip in 2023?
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We did not have time to arrange it. We are a small group of volunteers and the
                        new organization has just been established.<br />
                        <br />
                        But we did have a <b>Meet &amp; Greet</b>.
                        See the&nbsp;
                        <Link
                            href="https://docs.google.com/presentation/d/1yGqegQEUq5pfuD2fhaCuMfIr8XXt5ceEqXwcRjH4DG8/edit?usp=sharing"
                            target="_blank">
                            pictures
                        </Link>&nbsp;
                        when 4 students from a german film school,
                        3 youtubers (from&nbsp;
                        <Link
                            href="https://www.youtube.com/@isaiahphoto"
                            target="_blank">
                            Isaiah Photo
                        </Link>)&nbsp;
                        and many from the team met in the valley.

                    </Text>
                    <Space h="sm" />


                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src={imgFieldTrip} alt="Logo" width={450} height={450} />
                    <Space h="sm" />
                    <Text size="xl">
                        More details to come
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Contact Person:<br />
                        Fred Pallesen, VP of Project Hessdalen,<br />
                        admin@hessdalen.org, +47 94086203
                        <br /><br />
                        Booking Deadline:<br />
                        June 30. 2024 (min 10 - max 24 participants)<br />
                        <br />
                        <i>

                            This page will be updated with more information
                            about accomodation, prices, etc. in the near future.
                        </i>
                    </Text>
                    <Space h="sm" />

                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />


        </MainLayout>
    );
}