import { Title, Text, Anchor, Container, Space, Grid, Divider, Center, Button } from '@mantine/core';
import useStyles from './Welcome.styles';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import { MainMenu } from '../MainMenu/MainMenu';
import { MainFooter } from '../MainFooter/MainFooter';
import MainTopMenu from '../MainTopMenu/MainTopMenu';
import MainLayout from '../../pages/layout';
import { useState } from 'react';

export function Welcome() {
  // const { classes } = useStyles();


  const [ufoImg, setUfoImg] = useState('/img/ph-1.jpg');

  function doNextUfoImg(i: string) {
    setUfoImg(i);
  }


  return (
    <MainLayout>

      <Divider my="sm" />

      <Space h="sm" />
      <Text ta="center" c="blue" size={48}>
        Hessdalen is a UFO hotspot.
      </Text>
      <Text ta="center" size={24}>
        These mesmerizing light phenomena are undeniably real,
        and their presence shows no signs of fading away.
      </Text>
      <Space h="xl" />

      <Grid>
        <Grid.Col sm={6}>
          <Center mx="auto">
            <img src={ufoImg} width="100%" />

          </Center>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Phenomena</Text>
          <div onMouseEnter={() => setUfoImg('/img/ph-4.jpg')} style={{ cursor: 'pointer' }}  >

            <Title order={2}>
              Type 1
            </Title>

            <Text>
              White, or blue-white flashing light.
            </Text>
            <Text color="dimmed" size="xs">
              They are usually high up in the air, close to the to of the mountains or even higher.
              Short lifespan, seconds to minutes.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => setUfoImg('/img/ph-1.jpg')} style={{ cursor: 'pointer' }}>

            <Title order={2}>
              Type 2
            </Title>
            <Text>
              A yellow light, with a red light on the top.
            </Text>
            <Text color="dimmed" size="xs">
              The red light can be flashing.
              The yellow light varies in intensity.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => setUfoImg('/img/ph-5.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Type 3
            </Title>
            <Text>
              The shape is often round as a ball.
            </Text>
            <Text color="dimmed" size="xs">
              <i>This is the most common description of the Hessdalen Phenomena.</i><br />
              A yellow or white light.
              The light is capable of remaining stationary for over an hour.
              It can also slowly traverse the valley, occasionally pausing for several minutes before resuming its movement.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => setUfoImg('/img/ph-7.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Type 4
            </Title>
            <Text>
              A black "object".
            </Text>
            <Text color="dimmed" size="xs">
              This image closely resembles the phenomena described in many witness reports.

              (This is from a film recorded in Hungary in 1990.)
            </Text>
          </div>
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
        When the light phenomena appears, or a UFO, the system will <b>automatically</b> start recording.
        And you can get a notification on your phone *
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
      <Space h="xl" />

      <Center>
        <div>

          <Text>
            When there is an * behind a word, it means that this feature is not yet implemented.
          </Text>
          <Text color="dimmed" size="xs">
            But it also mean that you can be a part of making it happen!
          </Text>
        </div>
      </Center>

      <MainFooter />

    </MainLayout>
  );
}
