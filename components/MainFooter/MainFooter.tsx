import { createStyles, Text, Container, ActionIcon, Group, rem, Button, Space, Center, Stack, Tooltip } from '@mantine/core';
import { IconBrandFacebook } from '@tabler/icons';
import { IconBrandYoutube, IconBrandInstagram, IconUfo, IconSearch } from '@tabler/icons-react';
import Link from 'next/link';

import Image from 'next/image';



const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(20),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 1)`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    logo: {
        maxWidth: rem(200),

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: rem(5),

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: rem(160),
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.sm,
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.xs,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },
}));


export function MainFooter() {
    const { classes } = useStyles();


    const data = [{
        title: "About",
        links: [
            { label: "History", link: "#" },
            { label: "People", link: "#" },
            { label: "Teams", link: "#" },
            { label: "Blue Box", link: "#" },
            { label: "Equipment", link: "#" }
        ]
    },
    {
        title: "Project",
        links: [
            {
                label: "Contribute",
                link: "#"
            },
            {
                label: "Media assets",
                link: "#"
            },
            {
                label: "Roadmap",
                link: "/roadmap"
            },
            {
                label: "Kanban board",
                link: "https://trello.com/b/RgENuoBe/project-hessdalen",
                target: "_blank"
            }
        ]
    },
    {
        title: "Community",
        links: [
            {
                label: "Discord",
                link: "#"
            },
            {
                label: "Invite a friend",
                link: "#"
            },
            {
                label: "Join an event",
                link: "#"
            },
            {
                label: "Join a field trip",
                link: "#"
            },
            {
                label: "Visit Hessdalen",
                link: "#"
            }
        ]
    }
    ];
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <div key={index}>
                <Link href={link.link} target={link.target ? link.target : '_self'}>
                    {link.label}
                </Link>
            </div>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <Stack align="center" justify="flex-start">
                    <Image src="/img/Patch_Project_Hessdalen.png" alt="Hessdalen logo" width={200} height={200} />
                    <Text size="md">
                        Contact info: <a href="mailto:mail@xparagon.no?subject=PROJECT HESSDALEN Inquiry">mail@xparagon.no</a><br />
                    </Text>
                    <Text size="sm">
                        (until we get our own email at @hessdalen.org)
                    </Text>
                    <Text size="sm">
                        Webmaster: Fred Pallesen&nbsp;
                        <a href="tel:+4794086203">+47 94 08 62 03</a>
                    </Text>
                </Stack>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="xs">
                    1998 &rarr;&nbsp;
                    <Link href="https://old.hessdalen.org/">
                        old.hessdalen.org
                    </Link>&nbsp;
                    |  2023 &rarr; hessdalen.org
                    |  we are a non-profit organization :
                    <Link href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=931580566">
                        N 931 580 566
                    </Link>

                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    {/* <ActionIcon size="lg">
                        <IconBrandFacebook size="1.05rem" stroke={1.5} />
                    </ActionIcon> */}
                    <Link href="https://www.youtube.com/@projecthessdalen" passHref>
                        <ActionIcon size="lg">
                            <IconBrandYoutube size="1.05rem" stroke={1.5} />
                        </ActionIcon>
                    </Link>

                    {/* <ActionIcon size="lg">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon> */}
                </Group>
            </Container>
        </footer>
    );
}