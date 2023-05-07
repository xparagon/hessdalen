import { Title, Text, Anchor, Container, Space, Grid } from '@mantine/core';
import useStyles from './Welcome.styles';
import MainPoints from '../MainPoints/MainPoints';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import TimelinePlan from '../TimelinePlan/TimelinePlan';
import FundingProgress from '../FundingProgress/FundingProgress';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Container>



        <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          We are planning to relaunch the Hessdalen research
          through a new international research initiative
          aimed at solving the&nbsp;
          <Anchor href="http://hessdalen.org/" size="lg">
            Hessdalen mystery
          </Anchor>
          .
        </Text>
        <Space h="xl" />
        <MainPoints />
        <Title className={classes.title} align="center" mt={10}>
          Welcome to{' '}
          <Text inherit variant="gradient" component="span">
            Project Hessdalen
          </Text>
        </Title>

        <Space h="xl" />

        <Grid gutter="lg">
          <Grid.Col xs={12} sm={6}>
            <TimelinePlan />

          </Grid.Col>
          <Grid.Col xs={12} sm={6}>
            <FundingProgress />

          </Grid.Col>
        </Grid>


        <Space h="xl" />
        <JoinDiscord />

      </Container>
    </>
  );
}
