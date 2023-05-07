import { Title, Text, Anchor, Container, Space, Grid } from '@mantine/core';
import useStyles from './Welcome.styles';
import JoinDiscord from '../JoinDiscord/JoinDiscord';
import { MainMenu } from '../MainMenu/MainMenu';
import { MainFooter } from '../MainFooter/MainFooter';

export function Welcome() {
  // const { classes } = useStyles();

  const links = [
    {
      link: "/sightings",
      label: "UFO Sightings"
    },
    {
      link: "/report",
      label: "Report a UFO"
    },
    {
      link: "/about",
      label: "Live stream"
    },
    {
      link: "#1",
      label: "Research",
      links: [
        {
          link: "/docs",
          label: "Scientific Papers"
        },
        {
          link: "/resources",
          label: "Student Reports"
        },
        {
          link: "/community",
          label: "Facts & Theories"
        },
        {
          link: "/blog",
          label: "Data from the Blue Box"
        }
      ]
    },
    {
      link: "#2",
      label: "Plans",
      links: [
        {
          link: "/research",
          label: "Research Plan"
        },
        {
          link: "/technical",
          label: "Tecnical Plan"
        },
        {
          link: "/software",
          label: "Software Plan"
        },
        {
          link: "/community",
          label: "Community Plan"
        }
      ]
    }
  ];


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


  return (
    <>
      <Container>


        <MainMenu links={links} />


        <Space h="xl" />

        <MainFooter data={data} />

      </Container>
    </>
  );
}
