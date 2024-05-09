import { Title, Text, Space, Grid, Divider, Center, Button, Flex } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconEye, IconPhone, IconMail } from '@tabler/icons';
import Image from 'next/image';
import MainLayout from '../../pages/layout';

import patchImg from '../../public/img/Patch_Project_Hessdalen.png';
import rrdigital from '../../public/img/RenRoros_digital_svart.svg';
import ftwAd from '../../public/img/ad-netboard-1-en.png';

declare global {
  interface Window {
    kofiWidgetOverlay: {
      draw: (project: string, options: any) => void;
    };
  }
}


export function Welcome() {
  // const { classes } = useStyles();

  const [imgUfo, imgUfoSet] = useState('/img/type4.jpg');
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
            <Image src={patchImg} alt="Hessdalen logo" width={350} height={350} />
          </Center>
          <Space h="sm" />

        </Grid.Col>
        <Grid.Col sm={6}>


          <Title order={1}>
            Project Hessdalen
          </Title>
          <Space h="sm" />

          <Title order={3} tt="uppercase">Mission:</Title>

          <Text size="xl">
            Collect high quality data on the Hessdalen Lights phenomenon and explain the science behind it.
          </Text>
          <Space h="sm" />

          <Title order={3} tt="uppercase">Vision:</Title>
          <Text size="xl">
            Discover unknown processes and laws of nature, find new sources of energy and potentially interact with unknown intelligences.
          </Text>
          <Space h="sm" />
        </Grid.Col>
      </Grid>

      <Space h="sm" />
      <a href="https://sites.google.com/hessdalen.org/blog/field-trip-weekend"  ><Button color="red" fullWidth size="xl" radius="md" >Field Trip Weekend &amp; Conference</Button></a>
      <Space h="sm" />
      <Center>
        <Title order={2}>
          Speakers at the Conference
        </Title>
      </Center>
      <Grid>
        <Grid.Col span={3}><Center>
          <Title order={4}>
            Erling P. Strand
          </Title></Center>
        </Grid.Col>
        <Grid.Col span={3}><Center>
          <Title order={4}>
            Massimo Teodorani
          </Title></Center>
        </Grid.Col>
        <Grid.Col span={3}><Center>
          <Title order={4}>
            Susan Demeter
          </Title></Center>
        </Grid.Col>
        <Grid.Col span={3}><Center>
          <Title order={4}>
            Beatriz Villarroel
          </Title></Center>
        </Grid.Col>
      </Grid>

      <Space h="xl" />
      <Center>
        <a href="https://sites.google.com/hessdalen.org/blog/field-trip-weekend">
          <Image src={ftwAd} alt="Field Trip Weekend" width={580} height={400} />
        </a>
      </Center>



      <Space h="xl" />

      <Grid>
        <Grid.Col span={4}>
          <a href="https://sites.google.com/hessdalen.org/web"  ><Button fullWidth size="xl" radius="md" >web</Button></a>
          <ul>
            <li>What we do</li>
            <li>Our automated monitoring systems</li>
            <li>Events</li>
            <li>The team</li>
          </ul>
        </Grid.Col>
        <Grid.Col span={4}>
          <a href="https://sites.google.com/hessdalen.org/blog" ><Button fullWidth size="xl" radius="md" >blog</Button></a>
          <ul>
            <li>Do you want to help?</li>
            <li>Where you find us on YouTube</li>
            <li>Field Trip Weekend</li>
            <li>Developer Program</li>
          </ul>
        </Grid.Col>
        <Grid.Col span={4}>
          <a href="https://old.hessdalen.org/"><Button fullWidth size="xl" radius="md" >old</Button></a>
          <ul>
            <li>Witness observations</li>
            <li>Alarm pictures</li>
            <li>Scientific articles</li>
            <li>History of Project Hessdalen</li>
          </ul>
        </Grid.Col>
      </Grid>
      <Space h="xs" />


      <Space h="sm" />
      <Text ta="center" c="blue" size={48}>
        Hessdalen is a hotspot for <br />unexplained arial phenomena.
      </Text>
      <Text ta="center" size={24}>
        Their presence shows no signs of fading away.
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
                <Button variant="outline" compact onClick={() => imgUfoSet('/img/type4.jpg')}>
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
          <div onMouseEnter={() => imgUfoSet('/img/type4.jpg')} style={{ cursor: 'pointer' }}>

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
              The Hessdalen Phenomenon manifests itself as much more than a light phenomenon.
              During field studies, 10 times more radar detections of objects were recorded,
              compared to visible observations. Hence these objects are frequently invisible
              in the optical spectrum, which adds to the mystery.
            </Text>
          </div>

          <Space h="md" />

        </Grid.Col>
      </Grid>
      <Divider my="sm" />

      <div>

        <Title ta="center" order={1}>
          <span style={{ color: '#1971c2' }}>
            Companies
          </span>&nbsp;
          that support us:
        </Title>

        <Space h="sm" />
        <Text ta="center" size="md">
          creative volunteers / scientific inquiries / cutting edge technologies / youth empowerment
        </Text>
        <Space h="sm" />

        <Grid style={{ backgroundColor: 'rgb(233, 243, 236)', borderRadius: '10px', padding: '1em 2em' }}>
          <Grid.Col sm={6} md={3}>
            <Image src={rrdigital} alt="Ren Røros Digital" width={200} height={100} />
          </Grid.Col>
          <Grid.Col sm={6} md={9}>

            <Text size="xl" color="rgb(76, 76, 76)">
              Har du behov for hjelp til å forenkle og effektivisere din IT-hverdag?<br />
              Ren Røros Digital hjelper deg.
            </Text>
            <Space h="sm" />

            <Text size="lg">
              <a href="https://renroros.no/it-tjenester/" target="renroros">
                https://renroros.no/it-tjenester/
              </a>
            </Text>
          </Grid.Col>

        </Grid>
        <Space h="sm" />
        <Text size="md" ta="center">
          <a href="https://blog.hessdalen.org/web-annonser" target="bannerad">
            Donate and get your company listed here
          </a>
        </Text>
      </div>



      <Space h="sm" />
      <Divider my="sm" />
      <Grid>
        <Grid.Col span={4}>
          <a href="https://sites.google.com/hessdalen.org/web"  ><Button fullWidth size="xl" radius="md" >web</Button></a>
        </Grid.Col>
        <Grid.Col span={4}>
          <a href="https://sites.google.com/hessdalen.org/blog" ><Button fullWidth size="xl" radius="md" >blog</Button></a>

        </Grid.Col>
        <Grid.Col span={4}>
          <a href="https://old.hessdalen.org/" ><Button fullWidth size="xl" radius="md" >old</Button></a>
        </Grid.Col>
      </Grid>
      <Space h="sm" />
      <Space h="sm" />
      <Text ta="center" size="xs">

      </Text>

      <Space h="xl" />
      <Text ta="center" size="md">
        <a href="mailto:admin@hessdalen.org" ><Button variant="outline" size="sm" radius="md" >
          <IconMail size={24} />&nbsp; admin@hessdalen.org</Button></a>
        &nbsp;&nbsp;&nbsp;
        <a href="tel:+4794086203" ><Button variant="outline" size="sm" radius="md" >
          <IconPhone size={24} />&nbsp;
          +47 94086203</Button></a>
      </Text>
      <Space h="xl" />
      <Space h="xl" />


    </MainLayout >
  );
}
