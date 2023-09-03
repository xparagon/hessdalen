import { Title, Text, Space, Grid, Divider, Center, Button, Flex, Popover, Tooltip } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconEye, IconArrowDownCircle, IconExternalLink, IconPigMoney, IconFlag, IconChecklist } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import MainLayout from '../../pages/layout';

declare global {
  interface Window {
    kofiWidgetOverlay: {
      draw: (project: string, options: any) => void;
    };
  }
}

export function Welcome() {
  // const { classes } = useStyles();

  const [imgUfo, imgUfoSet] = useState('/img/ph-ufo3-t.png');
  const [imgEquipment, imgEquipmentSet] = useState('/img/ph-2.jpg');
  const [imgTeam, imgTeamSet] = useState('/img/ph-es.jpeg');
  const [imgCommunity, imgCommunitySet] = useState('/img/pg-discord.jpg');
  const [imgAction, imgActionSet] = useState('/img/ph-field.jpg');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.kofiWidgetOverlay.draw('projecthessdalen', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Donate',
        'floating-chat.donateButton.background-color': 'transparent',
        'floating-chat.donateButton.text-color': 'red',
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <MainLayout>
      <Space h="sm" />
      <Divider my="sm" />
      <Space h="sm" />

      <Grid>
        <Grid.Col sm={6}>
          <Center>
            <Image src="/img/Patch_Project_Hessdalen.png" alt="Hessdalen logo" width={350} height={350} />
          </Center>
        </Grid.Col>
        <Grid.Col sm={6}>


          <Title order={2}>
            Project Hessdalen
          </Title>
          <Space h="sm" />

          <Text tt="uppercase">Mission</Text>

          <Text size="md">
            Collect high quality data on the Hessdalen Lights phenomenon and explain the science behind it.
          </Text>
          <Space h="sm" />

          <Text tt="uppercase">Vision</Text>
          <Text size="md">
            Discover unknown processes and laws of nature, find new sources of energy and interact with non-human intelligences.
          </Text>

          <Space h="sm" />
          <Flex
            mih={50}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Link href="/manifesto" passHref>
              <Button
                radius="sm"
                rightIcon={<IconFlag size="1rem" />}
              >
                Our Goal
              </Button>
            </Link>
            <Link href="https://old.hessdalen.org/" passHref target="_blank">
              <Button
                radius="sm"
                variant="outline"
                rightIcon={<IconExternalLink size="1rem" />}
              >old.hessdalen.org
              </Button>
            </Link>
            <Link href="/donate" passHref>
              <Button
                radius="sm"
                rightIcon={<IconPigMoney size="1rem" />}
              >
                Donate
              </Button>
            </Link>
          </Flex>
          <Space h="sm" />

          <Text size="sm">

            Project Hessdalen, established in 1983,
            is a&nbsp;
            <Link href="https://www.explorescu.org/partners" passHref>
              partner
            </Link>
            &nbsp;in the Scientific Coalition for UAP Studies (
            <Link href="https://www.explorescu.org/" passHref>
              SCU
            </Link>
            ).
            <br />
            <br />
            UAPs, UFOs, USOs and OVNIs are now studied by:<br />
            <div>
              <Popover width={300} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Text size="sm" style={{ cursor: 'pointer' }}>
                    <IconArrowDownCircle color="blue" size={18} />  <b>US Department of Defense</b>: UAPTF/AOIMSG (since 2020)
                  </Text>
                </Popover.Target>
                <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
                  <Text size="sm">
                    The Department of Defense established the UAPTF (2017) to improve its understanding of,
                    and gain insight into, the nature and origins of UAPs. <br />
                    AARO is the All-domain Anomaly Resolution Office, established in 2020.<br />
                    as the successor of UAPTF.<br />
                    <Link href="https://www.defense.gov/News/Releases/Release/Article/2314065/establishment-of-unidentified-aerial-phenomena-task-force/" passHref>
                      defense.gov
                      <IconExternalLink size={14} />
                    </Link>
                    &nbsp;
                    <Link href="https://en.wikipedia.org/wiki/All-domain_Anomaly_Resolution_Office" passHref>
                      AARO
                      <IconExternalLink size={14} />
                    </Link>

                  </Text>
                </Popover.Dropdown>
              </Popover>
            </div>
            <div>
              <Popover width={300} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Text size="sm" style={{ cursor: 'pointer' }}>
                    <IconArrowDownCircle color="blue" size={18} /> <b>Harvard & Smithsonian</b>: The Galileo Project (since 2021)
                  </Text>
                </Popover.Target>
                <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
                  <Text size="sm">
                    To examine the possibility of extraterrestrial origin for unidentified aerial phenomena (UAP),
                    by making observations of objects in and near Earth’s atmosphere<br />
                    <Link href="https://projects.iq.harvard.edu/galileo/project-goal" passHref>
                      harvard.edu
                      <IconExternalLink size={14} />
                    </Link>
                  </Text>
                </Popover.Dropdown>
              </Popover>
            </div>
            <div>
              <Popover width={300} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Text size="sm" style={{ cursor: 'pointer' }}>
                    <IconArrowDownCircle color="blue" size={18} /> <b>NASA</b>: Independent Study on UAPs (since 2022)
                  </Text>
                </Popover.Target>
                <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
                  <Text size="sm">
                    NASA has selected 16 individuals to participate in its
                    independent study team on unidentified anomalous phenomena (UAP).<br />
                    <Link href="https://www.nasa.gov/feature/nasa-to-set-up-independent-study-on-unidentified-aerial-phenomena/" passHref>
                      nasa.gov
                      <IconExternalLink size={14} />
                    </Link>
                  </Text>
                </Popover.Dropdown>
              </Popover>
            </div>



          </Text>

        </Grid.Col>
      </Grid>
      <Space h="sm" />
      <Divider my="sm" />
      <Space h="xs" />
      <Grid>
        <Grid.Col sm={6}>
          <Center>
            <Link href="https://youtu.be/X33k-RGenbo" target="youtube" passHref>
              <Tooltip label="The Hessdalen UFO Project with Prof. Erling Strand">
                <Image src="/img/youtube.png" alt="The Hessdalen UFO Project with Prof. Erling Strand" width={84} height={84} />
              </Tooltip>
            </Link>
            <Link href="https://youtu.be/7hBUk13yE8s" target="youtube" passHref>
              <Tooltip label="Erling Strand recounts his journey">
                <Image src="/img/youtube.png" alt="Erling Strand recounts his journey" width={48} height={48} />
              </Tooltip>
            </Link>
            <Link href="https://youtu.be/tPUcmVRMj_Y" target="youtube" passHref>
              <Tooltip label="Jan Moen on Lehto Files">
                <Image src="/img/youtube.png" alt="Jan Moen on Lehto Files" width={48} height={48} />
              </Tooltip>
            </Link>
            <Link href="https://youtu.be/sIZ9J2gy1qI" target="youtube" passHref>
              <Tooltip label="Tomas Dahl on Lehto Files">
                <Image src="/img/youtube.png" alt="Tomas Dahl on Lehto Files" width={48} height={48} />
              </Tooltip>
            </Link>
            <Link href="https://youtu.be/q_9DyxGceQo" target="youtube" passHref>
              <Tooltip label="Erling Strand on Lehto Files">
                <Image src="/img/youtube.png" alt="Erling Strand on Lehto Files" width={48} height={48} />
              </Tooltip>
            </Link>
            <Link href="https://youtu.be/K5XluLrIqCQ" target="youtube" passHref>
              <Tooltip label="Clas Svahn on Lehto Files">
                <Image src="/img/youtube.png" alt="Clas Svahn on Lehto Files" width={48} height={48} />
              </Tooltip>
            </Link>
          </Center>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text color="dimmed" size="sm">
            <i>As you can see - this site is under construction.<br />
              What we need most of all now is your support and feedback.<br />
              <b>Please donate or become a member.</b><br />
              We are non-profit volunteer organization<br />
              Help us achieve our goal: to get the UNDENIABLE PICTURE!
            </i><br />
            - Fred Pallesen, VP
          </Text>
        </Grid.Col>
      </Grid>

      <Space h="xs" />
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
                <Button variant="outline" compact onClick={() => imgUfoSet('/img/hp-t1.jpg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgUfoSet('/img/ph-5.jpg')}>
                  2
                </Button>
              </Grid.Col>
              <Grid.Col span={3}>
                <Button variant="outline" compact onClick={() => imgUfoSet('/img/hp-t3.jpg')}>
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
          <div onMouseEnter={() => imgUfoSet('/img/hp-t1.jpg')} style={{ cursor: 'pointer' }}>

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
              <IconEye color="lightblue" size={24} />
              <Text>
                Strong, white or blue flashes.
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Lasting anywhere from a fraction of a second to a few seconds
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgUfoSet('/img/ph-5.jpg')} style={{ cursor: 'pointer' }}>

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
              <IconEye color="orange" size={24} />
              <Text>
                Yellow or yellow-white ball of light.
              </Text>
            </Flex>

            <Text color="dimmed" size="sm">
              These have different shapes. They can stand still for minutes,
              even hours, and they can move slowly, or fast. Can be several meters in diameter.
              The ground has been illuminated. Another light with another color
              can be attached to the main light.
            </Text>
          </div>
          <Space h="md" />
          <div onMouseEnter={() => imgUfoSet('/img/hp-t3.jpg')} style={{ cursor: 'pointer' }}>

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
              <IconEye color="red" size={24} />
              <Text>
                Several lights together.
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              It looks like the lights are connected to an object.
            </Text>
          </div>

          <Space h="md" />
          <div onMouseEnter={() => imgUfoSet('/img/ph-ufo3-t.png')} style={{ cursor: 'pointer' }}>

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
                Daylight objects
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Drawing from a witness report.
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
            <Link href="/work-in-progress" passHref><Button radius="sm" variant="outline">UFO research</Button></Link>
            <Link href="/work-in-progress" passHref><Button radius="sm" variant="outline">UFO reports</Button></Link>
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
              <Grid.Col span={4}>
                <Button variant="outline" compact onClick={() => imgEquipmentSet('/img/ph-2.jpg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button variant="outline" compact onClick={() => imgEquipmentSet('/img/ph-9.jpg')}>
                  2
                </Button>
              </Grid.Col>

              <Grid.Col span={4}>
                <Button variant="outline" compact onClick={() => imgEquipmentSet('/img/ph-11.jpg')}>
                  3
                </Button>
              </Grid.Col>
            </Grid>

          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Equipment</Text>
          <div onMouseEnter={() => imgEquipmentSet('/img/ph-2.jpg')} style={{ cursor: 'pointer' }}>

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
              Live camera. Alarm system. Magnetometer.
              Radar. Spectrum Analyzer. Two weather stations.
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

          <div onMouseEnter={() => imgEquipmentSet('/img/ph-11.jpg')} style={{ cursor: 'pointer' }}>

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
            <Link href="/work-in-progress" passHref><Button radius="sm" variant="outline">Blue Box</Button></Link>
            <Link href="/work-in-progress" passHref><Button radius="sm" variant="outline">Live streaming</Button></Link>
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
              <Grid.Col span={4}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-es.jpeg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-mt-ai.png')}>
                  2
                </Button>
              </Grid.Col>

              <Grid.Col span={4}>
                <Button variant="outline" compact onClick={() => imgTeamSet('/img/ph-team.jpg')}>
                  3
                </Button>
              </Grid.Col>
            </Grid>

          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Research Team</Text>
          <div onMouseEnter={() => imgTeamSet('/img/ph-es.jpeg')} style={{ cursor: 'pointer' }}>

            <Title order={2}>
              Erling P. Strand&nbsp;&nbsp;
              <Link href="https://www.erling-strand.no/english/" passHref target="_blank">
                <Button radius="sm" variant="subtle" compact leftIcon={<IconExternalLink size="1rem" />} />
              </Link>
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
                The President of Project Hessdalen
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
              Massimo Teodorani&nbsp;&nbsp;
              <Link href="https://massimoteodorani.com/" passHref target="_blank">
                <Button radius="sm" variant="subtle" compact leftIcon={<IconExternalLink size="1rem" />} />
              </Link>
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

          <div onMouseEnter={() => imgTeamSet('/img/ph-team.jpg')} style={{ cursor: 'pointer' }}>

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
            <Link href="/work-in-progress" passHref><Button radius="sm" variant="outline">People</Button></Link>
            <Link href="/work-in-progress" passHref><Button radius="sm" variant="outline">Teams</Button></Link>
          </Flex>
        </Grid.Col>
      </Grid>

      <Space h="sm" />
      <Divider my="sm" />

      <Space h="sm" />
      <Text ta="center" c="pink" size={48}>
        Calling all UFO Enthusiasts:
      </Text>
      <Text ta="center" size={24}>
        Unite for a Collective Quest to Unravel the UFO Mysteries!

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
            <Image src={imgCommunity} alt="" width={450} height={450} />
            <Grid pt={4}>
              <Grid.Col span={6}>
                <Button variant="outline" compact onClick={() => imgCommunitySet('/img/pg-discord.jpg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={6}>
                <Button variant="outline" compact onClick={() => imgCommunitySet('/img/ph-ko-fi.jpg')}>
                  2
                </Button>
              </Grid.Col>

            </Grid>

          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Community</Text>
          <div onMouseEnter={() => imgCommunitySet('/img/pg-discord.jpg')} style={{ cursor: 'pointer' }}>

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
                Always free to subscribe
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Project Hessdalen is an open Discord community server.<br />
              Want to ask questions to the researchers? Join the Discord server.

            </Text>
          </div>
          <Space h="md" />
          <JoinDiscord />
          <Space h="md" />
          <div onMouseEnter={() => imgCommunitySet('/img/ph-ko-fi.jpg')} style={{ cursor: 'pointer' }}>

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
                Help us fund the project
              </Text>
            </Flex>

            <Text color="dimmed" size="sm">

              <b>5 Euro per month</b><br />
              Access to the member area in discord.<br />
              Access to Stage events for members only.<br />
              With rights as specified in the articles of association.
              <br />
              <br />
              <i>
                We plan to enable <b>mobile notifications</b> every time
                the AI detects an anomaly - then you could access the live streaming cameras
                and see what is going on. These notifications will be sent to members only.
              </i>
            </Text>
            <Space h="sm" />

            <Flex
              mih={50}
              gap="sm"
              justify="flex-start"
              align="center"
              direction="row"
              wrap="wrap"
            >
              <Link href="https://ko-fi.com/projecthessdalen" passHref target="_blank">
                <Button
                  radius="sm"
                  rightIcon={<IconExternalLink size="1rem" />}
                >Pay for membership
                </Button>
              </Link>
              <Link href="/membership" passHref><Button radius="sm" variant="outline">Help with ko-fi</Button></Link>
            </Flex>


          </div>

          <Space h="md" />

        </Grid.Col>
      </Grid>

      <Space h="sm" />
      <Divider my="sm" />

      <Space h="sm" />
      <Text ta="center" size={48}>
        Be part of the solution
      </Text>
      <Text ta="center" size={24}>

        Join us in our mission to solve the ultimate cosmic puzzle!

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
            <Image src={imgAction} alt="" width={450} height={450} />
            <Grid pt={4}>
              <Grid.Col span={6}>
                <Button variant="outline" compact onClick={() => imgActionSet('/img/ph-field.jpg')}>
                  1
                </Button>
              </Grid.Col>
              <Grid.Col span={6}>
                <Button variant="outline" compact onClick={() => imgActionSet('/img/ph-flares.jpg')}>
                  2
                </Button>
              </Grid.Col>
            </Grid>
          </Flex>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text tt="uppercase">The Action</Text>

          <div onMouseEnter={() => imgActionSet('/img/ph-field.jpg')} style={{ cursor: 'pointer' }}>

            <Title order={2}>
              Field Trip Weekend:<br />September 6-8, 2024
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
                Observe, investigate, and experience
              </Text>
            </Flex>
            <Text color="dimmed" size="sm">
              Workshop on how to use the UAP detection equipment in the field.
              Late night field work on two known UFO hotspots in the valley.
              Guided tours and eye-witnesses telling about their sightings of UFOs.
              Discussions around the campfire.
              And lectures by Erling Strand and Massimo Teodorani.<br />
              <b>Now is your chance to join! - limited to 24 participants</b>
            </Text>
            <Space h="sm" />

            <Link href="/field-trip" passHref><Button radius="sm" variant="outline">Event details</Button></Link>


          </div>
          {/* <Flex
            mih={50}
            gap="sm"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >

            <Group>
              <Link href="/work-in-progress" passHref><Button radius="sm" variant="outline">Field trip</Button></Link>
              <div>
                3 days in Hessdalen - September 2024
              </div>
            </Group>
          </Flex> */}
          <Space h="md" />
          <div onMouseEnter={() => imgActionSet('/img/ph-flares.jpg')} style={{ cursor: 'pointer' }}>

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
              Your substantial donation can shape the future of UFO research.
              With your support, we'll acquire advanced equipment, conduct field investigations,
              collaborate with experts, and analyze crucial data.<br />
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


            <Link href="/donate" passHref target="_blank">
              <Button
                radius="sm"
                variant="outline"
                rightIcon={<IconPigMoney size="1rem" />}
              >
                Donate
              </Button>
            </Link>

          </Flex>
        </Grid.Col>
      </Grid>

      <Space h="xl" />


    </MainLayout >
  );
}
