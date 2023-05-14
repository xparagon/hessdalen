import { Title, Text, Anchor, Container, Space, Grid, Divider, Center, Button, Flex } from '@mantine/core';
import useStyles from './Welcome.styles';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import { MainMenu } from '../MainMenu/MainMenu';
import { MainFooter } from '../MainFooter/MainFooter';
import MainTopMenu from '../MainTopMenu/MainTopMenu';
import MainLayout from '../../pages/layout';
import { useState } from 'react';
import { IconEye } from '@tabler/icons';
import Image from 'next/image'
import Link from 'next/link';

export function Welcome() {
  // const { classes } = useStyles();


  const [imgUfo, imgUfoSet] = useState('/img/ph-ufo3-t.png');
  const [imgEquipment, imgEquipmentSet] = useState('/img/ph-2.jpg');
  const [imgTeam, imgTeamSet] = useState('/img/ph-es.jpeg');
  const [imgCommunity, imgCommunitySet] = useState('/img/ph-es.jpeg');



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
            mih={500}
            justify="center"
            align="center"
            direction="column"
          >
            <Image src={imgUfo} alt="" width={450} height={450} />
            <Grid pt={4}>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgUfoSet('/img/ph-4.jpg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgUfoSet('/img/ph-1.jpg')}>
                  2
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgUfoSet('/img/ph-5.jpg')}>
                  3
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgUfoSet('/img/ph-ufo3-t.png')}>
                  4
                </Button>
              </Grid.Col>
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
            <Text color="dimmed" size="sm">
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

            <Text color="dimmed" size="sm">
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
            <Text color="dimmed" size="sm">
              <i>This is the most common description of the Hessdalen Phenomena.</i><br />
              A yellow or white light.
              The light is capable of remaining stationary for over an hour.
              It can also slowly traverse the valley, occasionally pausing for
              several minutes before resuming its movement.
            </Text>
          </div>

          <Space h="md" />
          <div onMouseEnter={() => imgUfoSet('/img/ph-ufo3-t.png')} style={{ cursor: 'pointer' }} >

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
            <Text color="dimmed" size="sm">
              This image closely resembles the phenomena described in many witness reports.
            </Text>
          </div>

          <Space h="md" />
          <Flex
            mih={50}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">UFO research</Button></Link>
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">UFO reports</Button></Link>
          </Flex>
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
            mih={500}
            justify="center"
            align="center"
            direction="column"
          >
            <Image src={imgEquipment} alt="" width={450} height={450} />
            <Grid pt={4}>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgEquipmentSet('/img/ph-2.jpg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgEquipmentSet('/img/ph-9.jpg')}>
                  2
                </Button>
              </Grid.Col>

              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgEquipmentSet('/img/ph-11.jpg')}>
                  3
                </Button>
              </Grid.Col>
            </Grid>

          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Equipment</Text>
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
              <IconEye size={24} />
              <Text>
                With all the Equipment to capture the Phenomena.
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Live camera. Alarm system. Magnetometer. Radar. Spectrum Analyzer. Two weather stations.
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
              <IconEye size={24} />
              <Text>
                3 x  Novus NVC-GDN5801C-2
              </Text>
            </Flex>

            <Text color="dimmed" size="sm">
              There are two cameras directed towards the southwest
              and one camera to the northwest.<br />
              <i>We want to upgrade our cameras!</i>
            </Text>
          </div>
          <Space h="md" />

          <div onMouseEnter={() => imgEquipmentSet('/img/ph-11.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Goal: Triangulate and follow
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
                a scientific endeavour
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              we need to get all of it - optical, radar,
              thermal, wide band spectrum analyzer, magnetometer,
              all correlated in a tracking mode configuration
            </Text>
          </div>
          <Space h="md" />
          <Flex
            mih={50}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">Blue Box</Button></Link>
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">Live streaming</Button></Link>
          </Flex>
        </Grid.Col>
      </Grid>





      <Space h="sm" />
      <Divider my="sm" />

      <Space h="sm" />
      <Text ta="center" c="grape" size={48}>
        A new international research initiative
      </Text>
      <Text ta="center" size={24}>
        "The Hessdalen phenomenon represents
        the most important laboratory <b>in the world</b> to study
        recurrent anomalous aerial phenomena”
        (UFOs!)<br />
        - Massimo Teodorani

      </Text>
      <Space h="xl" />

      <Grid>
        <Grid.Col sm={6}>
          <Flex
            mih={500}
            justify="center"
            align="center"
            direction="column"
          >
            <Image src={imgTeam} alt="" width={450} height={450} />
            <Grid pt={4}>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-es.jpeg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-mt-ai.png')}>
                  2
                </Button>
              </Grid.Col>

              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-team.jpg')}>
                  3
                </Button>
              </Grid.Col>
            </Grid>

          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Research Team</Text>
          <div onMouseEnter={() => imgTeamSet('/img/ph-es.jpeg')} style={{ cursor: 'pointer' }}  >

            <Title order={2}>
              Erling P. Strand
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
                The Precident of Project Hessdalen
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Co-founded and led the Hessdalen project in the early 1980s.
              Through field investigations, monitoring systems, and data collection,
              he applies scientific methods and advanced equipment to study the nature and
              characteristics of the Hessdalen lights.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgTeamSet('/img/ph-mt-ai.png')} style={{ cursor: 'pointer' }}>

            <Title order={2}>
              Massimo Teodorani
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
                Ph.D. in Astrophysics
              </Text>
            </Flex>

            <Text color="dimmed" size="sm">
              Research Director in Project Hessdalen<br />
              An astrophysicist, specializes in atmospheric and plasma physics.
              His research focuses on the unique light emissions observed in Hessdalen,
              resulting in scientific publications and presentations at conferences.
            </Text>
          </div>
          <Space h="md" />

          <div onMouseEnter={() => imgTeamSet('/img/ph-team.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              The Team
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
                UFO witnesses, engineers, programmers, and more.
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Established in the summer of 1983, Project Hessdalen has seen the
              involvement of some team members since its inception.
              Now, a new generation of researchers, engineers, software developers,
              and community builders are joining the team, further strengthening the project goals.

            </Text>
          </div>
          <Space h="md" />
          <Flex
            mih={50}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">People</Button></Link>
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">Teams</Button></Link>
          </Flex>
        </Grid.Col>
      </Grid>








      <Space h="sm" />
      <Divider my="sm" />

      <Space h="sm" />
      <Text ta="center" c="pink" size={48}>
        A new international community
      </Text>
      <Text ta="center" size={24}>
        "The Hessdalen phenomenon represents
        the most important laboratory <b>in the world</b> to study
        recurrent anomalous aerial phenomena”
        (UFOs!)<br />
        - Massimo Teodorani

      </Text>
      <Space h="xl" />

      <Grid>
        <Grid.Col sm={6}>
          <Flex
            mih={500}
            justify="center"
            align="center"
            direction="column"
          >
            <Image src={imgTeam} alt="" width={450} height={450} />
            <Grid pt={4}>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-es.jpeg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-mt-ai.png')}>
                  2
                </Button>
              </Grid.Col>

              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-team.jpg')}>
                  3
                </Button>
              </Grid.Col>
            </Grid>

          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Community</Text>
          <div onMouseEnter={() => imgTeamSet('/img/ph-es.jpeg')} style={{ cursor: 'pointer' }}  >

            <Title order={2}>
              Discord
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
                Always free
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Co-founded and led the Hessdalen project in the early 1980s.
              Through field investigations, monitoring systems, and data collection,
              he applies scientific methods and advanced equipment to study the nature and
              characteristics of the Hessdalen lights.
            </Text>
          </div>
          <Space h="md" />
          <JoinDiscord />
          <Space h="md" />
          <div onMouseEnter={() => imgTeamSet('/img/ph-mt-ai.png')} style={{ cursor: 'pointer' }}>

            <Title order={2}>
              Membership
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
                50 NOK / month (about 5 USD)
              </Text>
            </Flex>

            <Text color="dimmed" size="sm">
              Research Director in Project Hessdalen<br />
              An astrophysicist, specializes in atmospheric and plasma physics.
              His research focuses on the unique light emissions observed in Hessdalen,
              resulting in scientific publications and presentations at conferences.
            </Text>
          </div>
          <Flex
            mih={50}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">Membership</Button></Link>
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">Field trip</Button></Link>
          </Flex>
          <Space h="md" />

          <div onMouseEnter={() => imgTeamSet('/img/ph-team.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Field trip
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
                A weekend in Hessdalen
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Established in the summer of 1983, Project Hessdalen has seen the
              involvement of some team members since its inception.
              Now, a new generation of researchers, engineers, software developers,
              and community builders are joining the team, further strengthening the project goals.

            </Text>
          </div>
          <Flex
            mih={50}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">Field trip</Button></Link>
          </Flex>
          <Space h="md" />
          <div onMouseEnter={() => imgTeamSet('/img/ph-team.jpg')} style={{ cursor: 'pointer' }} >

            <Title order={2}>
              Donate
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
                Boost the project!
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Established in the summer of 1983, Project Hessdalen has seen the
              involvement of some team members since its inception.
              Now, a new generation of researchers, engineers, software developers,
              and community builders are joining the team, further strengthening the project goals.

            </Text>
          </div>
          <Flex
            mih={50}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Link href="/work-in-progress"><Button radius="sm" variant="outline">Donate</Button></Link>
          </Flex>
        </Grid.Col>
      </Grid>





      <Space h="xl" />
      <Space h="xl" />

      <Center>
        <div>

          <Text>
            When there is an * behind a word, it means that this feature is not yet implemented.
          </Text>
          <Text color="dimmed" size="sm">
            But it also mean that you can be a part of making it happen!
          </Text>
        </div>
      </Center>

      <MainFooter />

    </MainLayout>
  );
}
