import { Text, Group, rem, Space, List, Grid, Card, Button, Title, Center, Divider } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';



export default function Roadmap() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Title order={1}>
                Roadmap
            </Title>
            <Space h="sm" />
            <Text size="sm" color="dimmed">
                Every month we will update this page with our plans for the next 12 months.<br />
                Every indication of time is just a guess,
                but we will try to be as realistic as possible.
            </Text>
            <Divider my="lg" label="End of July, 2023" labelPosition="center" />
            <Grid>
                <Grid.Col sm={6}>
                    <Space h="sm" />
                    <Title order={2}>
                        Membership
                    </Title>
                    <Space h="sm" />

                    <Text size="lg">
                        We will use Ko-fi to collect membership fees and donations,
                        because - guess what - no money: no equipment.
                        No cameras, no sensors, no nothing.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm" color="dimmed">
                        We will always have a free option, if you just want to
                        subscribe to our discord server and check out the our website,
                        that&apos;s fine. But please tell your friends about us.
                        If you want to support us, please consider becoming a member.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        On the website we will ask you to join our discord server.
                        In our discord server we will ask you to become a member.
                        When you become a member, you will get access to
                        more channels on our discord server.
                    </Text>

                    <Space h="sm" />

                    <Text size="md">
                        <i>
                            We need 200 members at the first tier<br />
                            to pay for web hosting and streaming.
                        </i>
                    </Text>

                    <Space h="sm" />

                    <Text size="sm">
                        By the end of July we plan to define the membership tiers.
                        <ul>
                            <li>Watcher Tier - 50 NOK / month</li>
                            <li>Tracer Tier - 150 NOK / month</li>
                            <li>Hunter Tier - 500 NOK / month</li>
                        </ul>
                    </Text>

                    <Space h="sm" />

                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/flow.png" alt="web-discord-ko-fi" width={450} height={450} />

                </Grid.Col>
            </Grid>

            <Divider my="lg" label="August 19-20 and 26-27, 2023" labelPosition="center" />

            <Grid>
                <Grid.Col sm={6}>
                    <Image src="/img/ph-team.jpg" alt="Field trip" width={450} height={450} />

                </Grid.Col>

                <Grid.Col sm={6}>
                    <Space h="sm" />
                    <Title order={2}>
                        Meet &amp; Greet
                    </Title>
                    <Space h="sm" />


                    <Text size="md">
                        Many in the core team plans to visit Hessdalen
                        in August, in week 33 and 34.<br />
                        <ul>
                            <li>Erling</li>
                            <li>Andreas</li>
                            <li>Magnus</li>
                            <li>Fred</li>
                            <li>Bjørn (who is living in Hessdalen)</li>
                        </ul>
                        If you want to join us, please let us know.


                    </Text>
                    <Space h="sm" />
                    <Text size="sm" color="dimmed">
                        Every year we hope to have a conference, a field trip,
                        a chance to meet local vitnesses and our annual meeting - in Hessdalen.
                        This time we are not ready at all, but we
                        would still like to meet other team-members
                        in the valley, not only on screen. And you are welcome too. <br />
                        Next year we will be better prepared - but then there may be a price tag!
                        Because we want to make it interesting, educational and fun.
                    </Text>
                    <Space h="sm" />

                </Grid.Col>
            </Grid>

            <Divider my="lg" label="October, 2023" labelPosition="center" />

            <Grid>

                <Grid.Col sm={6}>
                    <Space h="sm" />
                    <Title order={2}>
                        Sky360 citizen science project
                    </Title>
                    <Space h="sm" />


                    <Text size="lg">
                        We are hoping to get one or two Sky360 cameras<br />
                        - as soon as possible.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm" color="dimmed" >
                        On their website, <a href="https://www.sky360.org/">Sky360</a>, you can read:<br />
                        &quot;We recognize that the cost of our Sky360 citizen science project
                        must be as low as possible. Therefore, we recommend a modular system.
                        Start with basic equipment and add more sensors later.
                        Currently the range is US$ 1,500 - 5,000.&quot;
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        So we need more than 50.000 NOK to get started.<br />
                        We would prefer 100.000 NOK, so we can buy two cameras.<br />
                    </Text>
                    <Space h="sm" />
                    <Text size="sm" color="dimmed" >
                        But this is not the only equipment we need.
                        And we need more than equipment - we need people to set up the equipment
                        and configure everything - make sure it sends data to our database.
                        We need people to analyze the data. We need a lot!
                        And we need money to pay for all this. And all the money we get,
                        we will spend on equipment and software solutions.
                    </Text>
                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/sky360.png" alt="Sky360 camera" width={450} height={450} />

                </Grid.Col>


            </Grid>

            <Space h="xl" />
            <Space h="xl" />


        </MainLayout >
    );
}