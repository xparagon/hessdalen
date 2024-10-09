import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(440),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(30),
        marginTop: theme.spacing.xs,
        textShadow: '2px 2px #000',
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({ image, title, category }: CardProps) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            {/* <Button variant="white" color="dark">
                Read article
            </Button> */}
        </Paper>
    );
}

const data = [
    {
        image:
            'img/ph-1.jpg',
        title: '“The Hessdalen phenomenon represents the most important laboratory in the world to study recurrent anomalous aerial phenomena”',
        category: 'Erling Strand',
    },
    {
        image:
            'img/ph-2.jpg',
        title: 'An automatic measurement station was put up in Hessdalen in August 1998. Both data and alarm-pictures can be viewed on this website.',
        category: 'Erling Strand',
    },
    {
        image:
            'img/ph-3.jpg',
        title: '“the all-sky camera system is expected to identify targets of opportunity using AI machine learning and to track the chosen target.”',
        category: 'Erling Strand',
    },
    {
        image:
            'img/ph-4.jpg',
        title: '“We know that the phenomena has a physical side, because it can be recorded on to film and video.”',
        category: 'Erling Strand',
    },
    {
        image:
            'img/ph-5.jpg',
        title: '"Hessdalen is a UFO lab"',
        category: 'Josef Allen Hynek',
    },
    {
        image:
            'img/ph-6.jpg',
        title: '“the main question is: what kind of flying machine is able to produce such a high magnetic field strength?”',
        category: 'Erling Strand',
    },
    {
        image:
            'img/ph-7.jpg',
        title: 'The Hessdalen Automatic Measurement Station was installed in August 1998. ',
        category: 'Erling Strand',
    },
    {
        image:
            'img/ph-8.jpg',
        title: '“... sometimes an apparentviolation of the known physics laws”',
        category: 'Erling Strand',
    },
];

export default function MainPoints() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize="50%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
            styles={{
                control: {
                    '&[data-inactive]': {
                        opacity: 0,
                        cursor: 'default',
                    },
                },
            }}
        >
            {slides}
        </Carousel>
    );
}
