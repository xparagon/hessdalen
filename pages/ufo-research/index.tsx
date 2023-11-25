import { Text, Group, rem, Space, List, Grid, Card, Button, Title, Divider } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { IconEye, IconArrowDownCircle, IconExternalLink } from '@tabler/icons';

import MainLayout from '../layout';

export default function UFOResearch() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Grid>
                <Grid.Col sm={6}>
                    <Title order={1}>
                        This is our research plan:
                    </Title>

                    <Space h="sm" />
                    <Title order={3}>
                        PROJECT HESSDALEN:<br />
                        NEXT AGE - RESEARCH PLANNING<br />
                    </Title>
                    <Text size="md">

                        <br />
                        MASSIMO TEODORANI, Ph.D., astrophysicist<br />
                        <i>Scientific consultant for Project Hessdalen</i><br />
                        <br />
                        <a href="/doc/Project_Hessdalen_Phoenix_2023_MTv2.pdf" target="full-doc">
                            Read the full document
                        </a> - or just the conclusion:
                        <br />
                    </Text>
                    <Space h="sm" />
                    <Text size="xs">
                        <b>4. Conclusive remarks</b><br />
                        The Hessdalen phenomenon represents the most important laboratory in the world to study
                        recurrent anomalous aerial phenomena, being Project Hessdalen probably the most complete
                        attempt of measuring what is effectively observed in that area. During almost 40 years of
                        investigation, a research know-how has been acquired as well as the awareness of improving it
                        (Teodorani, 2009). Evidently, nothing perfect can come out if money funding is not appropriate for
                        this research, and if the scientific and academic community keeps on being biased and prejudicial.
                        The experience acquired and the large quantity of reports collected in so many years speak for itself:
                        the fact that the phenomenon can be able sometimes to produce an enormous quantity of energy
                        should stimulate the physical science, maybe in view of a possible utilization of this energy after
                        reproducing it in a lab once the physics of the phenomenon is fully understood. All this requires an
                        adequate money funding, considering that in the Hessdalen case what is most important is not so
                        much analyzing witness cases but rather to measure that which is within reach of our measurement
                        tools.<br /><br />
                        It is not yet clear if the Hessdalen phenomenon is a natural/localized peculiarity per se of possible
                        geophysical origin or if it shares the same strangeness that the UFO phenomenon (NARCAP, SCU;
                        Society for UAP Research, websites), in its sense of the term, shows, or if it characterizes both
                        aspects at the same time. In reality, the points in common with the more general UFO/UAP
                        phenomenology are very many, considering that the cases of structured flying objects reported in
                        the Hessdalen valley are not a few, even as a clear minority compared to the more usual
                        unstructured light anomalies. This phenomenon appears by manifesting a very similar behavior in
                        several othßer locations of the world.<br /><br />
                        What has been reported and directly observed during so many years shows sometimes an apparent
                        violation of the known physics laws. Should we ignore this – if ascertained by observational data –
                        only because it does not fit the canons of accepted science? Alternatively, should this be an
                        important occasion to us to learn something completely new that might potentially help our
                        scientific knowledge to drastically expand? Scientific rigor obtained from data coming from well
                        calibrated and correctly used instruments, from the exclusion of any possible instrumental noise,
                        and of natural or manmade cases, from the repeatability of the same results obtained by different
                        observers and from a correct mathematical treatment of the experimental data, if not matched with
                        an open mind aimed at scientific exploration, is simply a sterile operation that can gratify only a
                        “clerical” academia but not those who want to go more in depth. We need both approaches –
                        scientific rigor and open mind – maybe having always in mind the enterprises done in fundamental
                        physics almost a century ago, when the clear evidence of an apparently paradoxical reality came out
                        from the calculations of the general relativity theory and, above all, of quantum mechanics.
                        Otherwise, we risk missing out the nucleus of the investigated problem.
                    </Text>
                    <Space h="sm" />
                    <Divider my="sm" />



                </Grid.Col>
                <Grid.Col sm={6}>
                    <Title order={3}>
                        More information
                    </Title>
                    <Space h="sm" />
                    <Text size="sm">
                        Until we have time to present the latest research here on this page, please visit&nbsp;
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
                    <Space h="sm" />
                    <Image src="/img/ph-mt-ai.png" alt="Massimo Teodorani with Midjourney" width={450} height={450} />
                    <Image src="/img/ph-es.jpeg" alt="Erling Strand without Midjourney" width={450} height={450} />


                </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Space h="xl" />


        </MainLayout >
    );
}