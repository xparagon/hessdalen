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

            <Divider my="lg" label="End of 2023" labelPosition="center" />

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