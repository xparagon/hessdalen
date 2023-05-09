import { createStyles, Text, Container, ActionIcon, Group, rem, Button, Space } from '@mantine/core';
import { IconBrandFacebook } from '@tabler/icons';
import { IconBrandYoutube, IconBrandInstagram, IconUfo, IconSearch } from '@tabler/icons-react';
import Link from 'next/link';



const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
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
        links: [{ label: "History", link: "#" },
        { label: "People", link: "#" },
        { label: "Blue Box", link: "#" },
        { label: "Science Camp", link: "#" }]
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
                label: "Changelog",
                link: "#"
            },
            {
                label: "Releases",
                link: "#"
            }
        ]
    },
    {
        title: "Community",
        links: [
            {
                label: "Join Discord",
                link: "#"
            },
            {
                label: "Meet a UFO witness",
                link: "#"
            },
            {
                label: "Join an event",
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
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
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
                <div className={classes.logo}>
                    <IconUfo size={52} />
                    <Text size="xs" className={classes.description}>
                        Hessdalen is a UFO hotspot.
                    </Text>
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Project Hessdalen has been relaunched as a
                        new international research initiative
                        aimed at solving the Hessdalen mystery.
                    </Text>


                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="xs">
                    1998 - 2023 old.hessdalen.org<br />
                    2023 hessdalen.org
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <IconBrandFacebook size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}