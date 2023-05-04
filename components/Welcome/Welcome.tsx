import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Project Hessdalen
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        We are planning to relaunch the Hessdalen research 
        through a new international research initiative 
        aimed at solving the&nbsp;
        <Anchor href="http://hessdalen.org/" size="lg">
          Hessdalen mystery
        </Anchor>
        .
      </Text>
    </>
  );
}
