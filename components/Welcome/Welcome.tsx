import { Title, Text, Anchor, Container, Space, Grid, Divider, Center, Button, Flex } from '@mantine/core';
import useStyles from './Welcome.styles';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import { MainMenu } from '../MainMenu/MainMenu';
import { MainFooter } from '../MainFooter/MainFooter';
import MainTopMenu from '../MainTopMenu/MainTopMenu';
import MainLayout from '../../pages/layout';
import { useState } from 'react';
import { IconEye } from '@tabler/icons';

export function Welcome() {
  // const { classes } = useStyles();


  const [imgUfo, imgUfoSet] = useState('/img/ph-1.jpg');

  const [imgEquipment, imgEquipmentSet] = useState('/img/ph-2.jpg');



  return (
    <MainLayout>

      <Space h="sm" />
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
          <Flex
            mih='100%'
            justify="center"
            align="center"
            direction="column"
          >
            <img src={imgUfo} width="100%" />
            <Grid pt={4}>
              <Grid.Col span={3}><Button variant="outline" compact>
                1
              </Button></Grid.Col>
              <Grid.Col span={3}><Button variant="outline" compact>
                2
              </Button></Grid.Col>
              <Grid.Col span={3}><Button variant="outline" compact>
                3
              </Button></Grid.Col>
              <Grid.Col span={3}><Button variant="outline" compact>
                4
              </Button></Grid.Col>
            </Grid>

          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Phenomena</Text>
          <div onMouseEnter={() => imgUfoSet('/img/ph-4.jpg')} style={{ cursor: 'pointer' }}  >

            <Title order={2}>
              Type 1
            </Title>

            <Flex
              mih={32}
              gap="xs"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <IconEye color='lightblue' size={24} />
              <Text>
                White, or blue-white flashing light.
              </Text>
            </Flex>
            <Text color="dimmed" size="xs">
              They are usually high up in the air, close to the to of the mountains or even higher.
              Short lifespan, seconds to minutes.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgUfoSet('/img/ph-1.jpg')} style={{ cursor: 'pointer' }}>

            <Title order={2}>
              Type 2
            </Title>
            <Flex
              mih={32}
              gap="xs"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <IconEye color='orange' size={24} />
              <Text>
                A yellow light, with a red light on the top.
              </Text>
            </Flex>

            <Text color="dimmed" size="xs">
              The red light can be flashing.
              The yellow light varies in intensity.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgUfoSet('/img/ph-5.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Type 3
            </Title>
            <Flex
              mih={32}
              gap="xs"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <IconEye color='red' size={24} />
              <Text>
                The shape is often round as a ball.
              </Text>
            </Flex>
            <Text color="dimmed" size="xs">
              <i>This is the most common description of the Hessdalen Phenomena.</i><br />
              A yellow or white light.
              The light is capable of remaining stationary for over an hour.
              It can also slowly traverse the valley, occasionally pausing for several minutes before resuming its movement.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgUfoSet('/img/ph-7.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Type 4
            </Title>
            <Flex
              mih={32}
              gap="xs"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <IconEye size={24} />
              <Text>
                A black "object".
              </Text>
            </Flex>
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
        24/7 Automatic UFO Surveillance
      </Text>
      <Text ta="center" size={24}>
        When the light phenomena appears, a UFO or a mysterious Energy Object,
        the system will <b>automatically</b> start recording -
        and you can get a notification on your mobilephone<sup>*</sup>
      </Text>
      <Space h="xl" />

      <Grid>
        <Grid.Col sm={6}>
          <Flex
            mih='100%'
            justify="center"
            align="center"
            direction="row"
          >
            <img src={imgEquipment} width="100%" />

          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Phenomena</Text>
          <div onMouseEnter={() => imgEquipmentSet('/img/ph-2.jpg')} style={{ cursor: 'pointer' }}  >

            <Title order={2}>
              The Blue Box
            </Title>

            <Flex
              mih={32}
              gap="xs"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <IconEye color='lightblue' size={24} />
              <Text>
                White, or blue-white flashing light.
              </Text>
            </Flex>
            <Text color="dimmed" size="xs">
              They are usually high up in the air, close to the to of the mountains or even higher.
              Short lifespan, seconds to minutes.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgEquipmentSet('/img/ph-9.jpg')} style={{ cursor: 'pointer' }}>

            <Title order={2}>
              Live Streaming
            </Title>
            <Flex
              mih={32}
              gap="xs"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <IconEye color='orange' size={24} />
              <Text>
                A yellow light, with a red light on the top.
              </Text>
            </Flex>

            <Text color="dimmed" size="xs">
              The red light can be flashing.
              The yellow light varies in intensity.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgEquipmentSet('/img/ph-10.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Scientific Goal
            </Title>
            <Flex
              mih={32}
              gap="xs"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <IconEye size={24} />
              <Text>
                Doing exactly what we do in Astronomy.
              </Text>
            </Flex>
            <Text color="dimmed" size="xs">
              Understanding the Physical Mechanism of what is observed by studying the Variability of the Phenomena and the correlation of different
              physical parameters, through simultaneous multi wavelength observations.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgEquipmentSet('/img/ph-8.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Radar + Magnetometer
            </Title>
            <Flex
              mih={32}
              gap="xs"
              justify="flex-start"
              align="center"
              direction="row"
            >
              <IconEye size={24} />
              <Text>
                A black "object".
              </Text>
            </Flex>
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
