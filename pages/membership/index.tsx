import { Text, Group, rem, Space, List, Grid, Card, Button, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';



export default function UFOreporting() {
    return (
        <MainLayout>
            <Space h="lg" />
            <Title order={2}>
                Membership
            </Title>

            <Text size="lg">Images from the membership payment process:</Text>
            <Space h="xl" />


            <Grid>
                <Grid.Col sm={6}>
                    <Text size="md">
                        When you click on the &quot;Pay for Membership&quot; button, you will be taken to the Ko-fi website.<br />
                        On the ko-fi.com/projecthessdalen page, click on the Membership button:
                    </Text>
                    <Space h="xl" />
                    <Text size="xl">Why do we use ko-fi?</Text>
                    <Text size="md">
                        Ko-fi is connected to our discord server and you will be given access to the &quot;MEMBER-AREA&quot;
                        the very moment the payment process is done.<br /><br />
                        Without this automation, we would have to manually add you to the discord role, and
                        without the payment system of ko-fi, we would have to manage a manual payment system.<br /><br />
                        <i>Now we can focus on the content of the site, the community and the research.</i><br /><br />
                        <b>And of course, we like that ko-fi has 0% fees on Membership payments, 0% fees on Shop sales, and 0% fees on Donations.</b><br /><br />
                        But if you still prefer to pay to a bank account, please contact us on admin@hessdalen.org.
                    </Text>
                    <Space h="xl" />

                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/signup-0.png" alt="start" width={527} height={663} />

                </Grid.Col>
            </Grid>

            <Space h="xl" />

            <Image src="/img/signup-1.png" alt="Step 1" width={960} height={540} />
            <Space h="xl" />
            <Image src="/img/signup-2.png" alt="Step 2" width={960} height={540} />

            <Space h="xl" />
            <Text size="lg">Now that you have access to the MEMBER-AREA, it would be nice if you
                say hi in the #lounge channel.
            </Text>
            <Space h="xl" />
            <Text size="md">Also: Check your email for a thank you message from us.</Text>
            <Space h="xl" />
            <Text size="lg">Back on your ko-fi page you should see:</Text>

            <Image src="/img/signup-3.png" alt="start" width={788} height={510} />
            <Space h="xl" />

            <Space h="xl" />
            <Title order={3}>
                What is next?
            </Title>
            <Text size="lg">
                Invite a friend to join the community. We need more members to make this project a success.
            </Text>
            <Space h="xl" />

        </MainLayout >
    );
}