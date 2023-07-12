import { Text, Group, rem, Space, List, Grid, Card, Button, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';



export default function Manifesto() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Grid>
                <Grid.Col sm={6}>
                    <Title order={2}>
                        Project Hessdalen Manifesto
                    </Title>
                    <Space h="sm" />

                    <Text size="sm">
                        The lights and crafts of Hessdalen represent unexplored scientific enigmas.
                        Our mission is to unravel these mysteries and validate the testimonies of
                        locals who have faithfully reported their sightings for decades.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">

                        Despite the valuable data captured by our &apos;Blue Box&apos; system,
                        further research and funding are needed.
                        This exploration holds immense potential for understanding atmospheric physics,
                        energy conversion, and electromagnetic interactions.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">

                        In an era of disinformation, the purity of Hessdalen&apos;s accounts stands unique.
                        Our goal is not only to substantiate these sightings, but to prove beyond
                        any doubt the existence of crafts controlled by non-human intelligence.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">

                        Join us in this journey. Help us secure the necessary resources
                        to expand our explorations, deepen our knowledge, and potentially
                        redefine humanity&apos;s place in the cosmos. Together,
                        let&apos;s transform the Hessdalen phenomena from enigmatic anomalies to windows into the unknown.

                    </Text>
                    <Space h="sm" />

                </Grid.Col>
                <Grid.Col sm={6}>
                    <Image src="/img/Patch_Project_Hessdalen.png" alt="Building a UFO (Midjourney)" width={450} height={450} />

                </Grid.Col>
            </Grid>
            <Space h="xl" />

            <Grid>
                <Grid.Col sm={12}>
                    <Title order={1}>
                        Most compelling
                    </Title>
                    <Space h="sm" />
                    <Title order={4}>
                        reports of anomalous lights in Hessdalen
                    </Title>
                    <Space h="sm" />

                    <Text size="xs">
                        June 2023: Fred Pallesen, Vice President of Project Hessdalen
                    </Text>
                    <Text color="dimmed" size="md">

                        There are two kinds of anomalous phenomena in Hessdalen: the lights and the crafts.

                    </Text>
                    <Space h="sm" />
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col sm={6}>
                    <Space h="sm" />
                    <Image src="/img/energy-object.png" alt="Light" width={324} height={246} />
                    <Space h="sm" />

                    <Title order={4}>
                        The lights
                    </Title>
                    <Space h="sm" />
                    <Text size="sm">
                        The Hessdalen lights are well documented. Back in 1984, the field report was clear
                        in its conclusion: <br />“we know that the phenomenon, whatever it is, can be measured.”
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        During the 18 days of this first field investigation - 53 observations
                        where classified as anomalous light phenomena. Some was captured on a camera,
                        while others were detected by radar and the magnetometer.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        In 1998, an automatic surveillance system, dubbed the &apos;Blue Box,&apos; was established
                        to capture images and videos of these occurrences.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Reproducibility is a fundamental principle in scientific research,
                        and the Blue Box has produced machine-based (or &quot;objective&quot;) measurements - for 25 years.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Despite this, the available measurements are not yet sufficient to either substantiate or conclusively refute our hypothesis.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        The researchers unanimously agree on the necessity for higher quality data to further understand
                        these phenomena. However, it is certain that the Hessdalen lights are real, and Hessdalen itself
                        remains a promising location for collecting additional measurements regarding this anomalous phenomenon.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        The Hessdalen lights, although not yet fully comprehended, have the potential to provide new insights into atmospheric physics and other natural processes.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Certain measurements indicate that the Hessdalen light phenomena are highly energetic and involve complex physical processes.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        By investigating the highly energetic nature of these phenomena, researchers can gain insights
                        into more efficient energy conversion processes. They can also uncover novel aspects of physics
                        and develop a deeper understanding of fundamental principles governing energy transfer,
                        electromagnetic interactions, and plasma dynamics. Such discoveries have the potential to
                        lead to technological breakthroughs and advancements in various fields, including energy generation, transmission, and storage.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Currently, we lack the necessary funding.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Adequate financing ensures we can hire dedicated professionals, maintain state-of-the-art equipment,
                        conduct extensive data analysis, and ultimately pursue a robust and comprehensive exploration of these phenomena.
                        Without this funding, our capacity to contribute meaningful insights and further our understanding of these events is severely limited.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Therefore, we appeal to you to assist us in expanding our membership base, attracting donors,
                        and securing crucial funding. Your support, whether by joining us, spreading the word, or
                        contributing financially, can significantly aid us in advancing our research and understanding of
                        these intriguing phenomena. Every effort counts and can make a big difference in our collective quest for knowledge.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        It would be unfortunate to miss this opportunity solely because the phenomena occasionally suggest the
                        presence of a craft, a UFO, or, if you prefer, an Unidentified Anomalous Phenomenon (UAP).

                    </Text>
                    <Space h="sm" />

                    <Space h="sm" />

                </Grid.Col>

                <Grid.Col sm={6}>
                    <Space h="sm" />
                    <Image src="/img/ph-7.jpg" alt="Craft" width={324} height={246} />
                    <Space h="sm" />
                    <Title order={4}>
                        The crafts
                    </Title>
                    <Space h="sm" />
                    <Text size="sm">
                        It is strange how human observations are considered not reliable.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Humans can indeed be prone to error, often jumping to conclusions, perceiving patterns where none exist, making mistakes, or even occasionally being dishonest.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        When witness accounts remain consistent over more than 40 years, it&apos;s understandable that they may feel frustrated and disrespected if their testimonies are dismissed as lies or the ramblings of lunatics.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Observations made by individuals have been meticulously documented on the Hessdalen site since 1996.
                        Whether they were conducted years ago or more recently, any new findings are consistently relayed to
                        the members of Project Hessdalen during our conversations with residents of the valley.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        A refreshing aspect of Hessdalen is its insulation from conspiracy theories or disinformation campaigns.
                        Any covert programs from the US would be unknown here, ensuring the local narratives and accounts remain untarnished and genuine.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We also aim to validate the accounts from local residents about witnessing unconventional vehicles in the valley. This suggests we might be confronting more than mere natural occurrences.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Check out the observations on the old.hessdalen.org site.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We want to take many high quality pictures and videos of these crafts!
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        If we can prove beyond any doubt that these crafts are under the control of non-human intelligence, it has the potential to radically transform our perspective of the universe and our place in it.
                    </Text>
                    <Space h="sm" />
                    <Text size="lg">
                        Imagine if you could personally witness these crafts.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        While the Blue Box currently operates three live-stream cameras (temporarily out of order), the odds of capturing one of the approximately 20 annual events remain slim.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Here&apos;s our plan to improve that:
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We aim to install all-sky cameras with triangulation abilities to pinpoint the phenomena,
                        subsequently utilizing a pan-tilt-zoom camera to secure a detailed view. Ideally, we would
                        have multiple automated surveillance systems in operation.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        We also plan to deploy high-speed automated drones designed to approach the phenomena as closely as possible.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        All these components could be automated and activated by AI. Whenever the system triggers an alarm,
                        notifications would be sent to members of Project Hessdalen. This way, we can collectively witness
                        the real-time images of the phenomena - and hopefully one day, the crafts.
                    </Text>
                    <Space h="sm" />
                    <Text size="sm">
                        Join us in our quest!

                    </Text>
                    <Space h="sm" />

                    <Space h="sm" />

                </Grid.Col>

            </Grid>
            <Space h="xl" />
            <Space h="xl" />


        </MainLayout >
    );
}