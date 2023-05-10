import { Title, Text, Anchor, Container, Space, Grid, Divider, Center } from '@mantine/core';
import useStyles from './Welcome.styles';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import { MainMenu } from '../MainMenu/MainMenu';
import { MainFooter } from '../MainFooter/MainFooter';
import MainTopMenu from '../MainTopMenu/MainTopMenu';
import MainLayout from '../../pages/layout';

export function Welcome() {
  // const { classes } = useStyles();





  return (
    <MainLayout>

      <Divider my="sm" />

      <Space h="sm" />
      <Text ta="center" c="blue" size={48}>
        Hessdalen is a UFO hotspot.
      </Text>
      <Text ta="center" size={24}>
        We know where the UFOs are. We know they will appear, as they have done for decades.

      </Text>
      <Space h="xl" />

      <Grid>
        <Grid.Col sm={6}>
          <Center mx="auto">
            <img src="https://dummyimage.com/400x400/efefef/ffffff&text=type+1+2+3+4" />

          </Center>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Phenomena</Text>

          <Title order={2}>
            Type 1
          </Title>
          <Text color="dimmed" size="xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </Text>
          <Space h="md" />
          <Title order={2}>
            Type 2
          </Title>
          <Text color="dimmed" size="xs">
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
          <Space h="md" />
          <Title order={2}>
            Type 3
          </Title>
          <Text color="dimmed" size="xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
          <Space h="md" />
          <Title order={2}>
            Type 4
          </Title>
          <Text color="dimmed" size="xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
          <Space h="md" />

        </Grid.Col>
      </Grid>

      <Space h="sm" />
      <Divider my="sm" />

      <Space h="sm" />
      <Text ta="center" c="orange" size={48}>
        24/7 Automatic Surveillance System
      </Text>
      <Text ta="center" size={24}>
        When the light phenomena appears, or a UFO, the system will automatically start recording.
        And you can get a notification on your phone.
      </Text>
      <Space h="xl" />

      <Grid>
        <Grid.Col sm={6}>
          <Center mx="auto">
            <img src="https://dummyimage.com/400x300/efefef/ffffff&text=blue+box+camera" />
          </Center>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Title order={2}>
            The Blue Box
          </Title>
          <Text color="dimmed" size="xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, natus error sit voluptatem
          </Text>
          <Space h="md" />
          <Title order={2}>
            Live Streaming
          </Title>
          <Text color="dimmed" size="xs">
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architectobeatae
            vitae dicta sunt explicabo.
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architectobeatae
            vitae dicta sunt explicabo.
          </Text>
          <Space h="md" />
        </Grid.Col>

      </Grid>
      <Space h="xl" />

      <Grid mt="sm">
        <Grid.Col sm={6}>
          <Center maw={400} h={250} mx="auto">
            <img src="https://dummyimage.com/400x300/efefef/ffffff&text=alarm+radar" />

          </Center>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Title order={2}>
            Automatic Alarm System
          </Title>
          <Text color="dimmed" size="xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </Text>
          <Space h="md" />
          <Title order={2}>
            Radar + Magnetometer
          </Title>
          <Text color="dimmed" size="xs">
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architectobeatae
            vitae dicta sunt explicabo.
          </Text>
          <Space h="md" />
        </Grid.Col>

      </Grid>

      <Space h="sm" />
      <Divider my="sm" />

      <Space h="sm" />
      <Text ta="center" c="grape" size={48}>
        A new international research initiative
      </Text>
      <Text ta="center" size={24}>
        Totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis
      </Text>
      <Space h="xl" />

      <Grid>
        <Grid.Col sm={6}>
          <Center mx="auto">
            <img src="https://dummyimage.com/400x300/efefef/ffffff&text=people+team" />
          </Center>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Research Team</Text>

          <Title order={2}>
            Erling E. Strand
          </Title>
          <Text color="dimmed" size="xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, natus error sit voluptatem
          </Text>
          <Space h="md" />
          <Title order={2}>
            Massimo Teodorani
          </Title>
          <Text color="dimmed" size="xs">
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architectobeatae
            vitae dicta sunt explicabo.

          </Text>
          <Space h="md" />
          <Title order={2}>
            The Team
          </Title>
          <Text color="dimmed" size="xs">
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architectobeatae
            vitae dicta sunt explicabo.
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architectobeatae
            vitae dicta sunt explicabo.
            Totam rem aperiam, eaque

          </Text>
          <Space h="md" />
        </Grid.Col>

      </Grid>
      <Space h="xl" />

      <Grid mt="sm">
        <Grid.Col sm={6}>
          <Center maw={400} h={250} mx="auto">
            <img src="https://dummyimage.com/400x300/efefef/ffffff&text=join+meet+volunteer" />
          </Center>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Title order={2}>You can participate</Title>
          <Text>
            Discord Community Server
          </Text>
          <Text color="dimmed" size="xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </Text>
          <Space h="md" />
          <Text>
            Meet a UFO witness
          </Text>
          <Text color="dimmed" size="xs">
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architectobeatae
            vitae dicta sunt explicabo.
          </Text>
          <Space h="md" />
          <Text>
            Be a volunteer - Join the team!
          </Text>
          <Text color="dimmed" size="xs">
            Totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architectobeatae
            vitae dicta sunt explicabo.
          </Text>
          <Space h="md" />
        </Grid.Col>

      </Grid>

      <Space h="xl" />

      <MainFooter />

    </MainLayout>
  );
}
