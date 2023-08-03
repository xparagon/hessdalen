import { Text, Space, Grid, Title, Divider } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';



export default function UFOreports() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Grid>
                <Grid.Col sm={6}>
                    <Title order={1}>
                        Donate
                    </Title>
                    <Space h="sm" />
                    <Text size="sm">
                        <i>
                            As a non-profit organization - all donations will go to the project.
                            We need to buy equipment to be able to collect data and
                            we need to pay for the hosting of this website.
                        </i>
                    </Text>
                    <Space h="sm" />
                    <Title order={3}>
                        As a private person
                    </Title>
                    <Space h="sm" />
                    <Text size="lg">
                        Donate because:<br />
                        <ul>
                            <li>You want to support the project</li>
                            <li>You want the UNDENIABLE PICTURE</li>
                        </ul>
                    </Text>
                    <Space h="sm" />
                    <Text size="md">
                        Use the &quot;Donate&quot; label at the bottom left corner.
                        It will suggest an amount - <i>but you you are free to choose any amount you want.</i><br />
                        Or go to :&nbsp;
                        <Link href="https://ko-fi.com/projecthessdalen" passHref target="_blank">
                            ko-fi.com/projecthessdalen
                        </Link><br />
                    </Text>
                    <Space h="sm" />
                    <Text size="lg">
                        NOTE: Ko-fi take 0% of donations!
                    </Text>
                    <Space h="sm" />
                    <Text size="md">
                        <details>
                            <summary> &nbsp;Prefer to pay directly into the bank account?</summary>
                            <blockquote>
                                <b>Here is the information you need:</b><br />
                                Our Norwegian bank is Sparebanken 1 SMN<br />
                                <b>Account number:</b> 4213.01.67904<br />
                                <b>IBAN:</b> NO 4642130167904<br />
                            </blockquote>

                        </details>

                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Converted: <br />
                        <Link href="https://moneyexchangerate.org/currencyexchange/eur/nok/15" passHref target="_blank">
                            15 EUR &rarr; ? NOK
                        </Link>&nbsp;&nbsp;
                        <Link href="https://moneyexchangerate.org/currencyexchange/eur/nok/50" passHref target="_blank">
                            50 EUR &rarr; ? NOK
                        </Link>&nbsp;&nbsp;
                        <Link href="https://moneyexchangerate.org/currencyexchange/eur/nok/100" passHref target="_blank">
                            100 EUR &rarr; ? NOK
                        </Link>
                        <br />
                        <Link href="https://moneyexchangerate.org/currencyexchange/eur/usd/15" passHref target="_blank">
                            15 EUR &rarr; ? USD
                        </Link>&nbsp;&nbsp;
                        <Link href="https://moneyexchangerate.org/currencyexchange/eur/usd/50" passHref target="_blank">
                            50 EUR &rarr; ? USD
                        </Link>&nbsp;&nbsp;
                        <Link href="https://moneyexchangerate.org/currencyexchange/eur/usd/100" passHref target="_blank">
                            100 EUR &rarr; ? USD
                        </Link>
                    </Text>
                    <Space h="xl" />
                    <Divider size="xs" />
                    <Text size="md">
                        Also: Consider a <Link href="/membership" passHref>membership</Link> because:
                        <ul>
                            <li>You want to support the project<br /><b>every</b> month (we need it!)</li>
                            <li>
                                You want a mobile notification when we have a sighting (not ready - but we can make this happen
                                if we get a number of members)
                            </li>
                            <li>You want access to more information in Discord</li>

                        </ul>
                    </Text>


                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/building-a-ufo-mj.png" alt="Building a UFO (Midjourney)" width={450} height={450} />

                </Grid.Col>
            </Grid>
            <Space h="xl" />



        </MainLayout>
    );
}