import { Box, Divider, Progress, Title, Text, Space, Button } from '@mantine/core';

export default function FundingProgress() {
    return (
        <Box>
            <Title my="xs" order={2}>Funding progress</Title>
            <Divider my="xs" label="the cost to do it" labelPosition="center" />

            <Progress
                mt="xl"
                size={22}
                radius="xl"
                sections={[
                    { value: 20, color: 'darkblue', tooltip: 'Black Box Upgrade' },
                    { value: 15, color: 'orange', tooltip: 'Web hosting and streaming cost' },
                    { value: 10, color: 'blue', tooltip: 'Automated Alerts & Notifications' },
                    { value: 55, color: 'green', tooltip: 'Triangulation: more equipment' },
                ]}
            />
            <Text color="dimmed" size="sm">
                Collected so far: 10 000 NOK<br />
            </Text>
            <Progress color="yellow" radius="md" size="xl" value={5} />
            <Space h="xl" />

            <Text color="dimmed" size="sm">
                We have made a research plan and a technical plan. Now the process of funding the project has started.
            </Text>
            <Title my="xs" order={4}>This is how you can help</Title>
            <Text color="dimmed" size="sm">
                Project Hessdalen is a non-profit organization. We are dependent on donations and membership fees to fund the project.
            </Text>
            <Space h="xl" />
            <Button radius="md">
                Donate
            </Button>
            <Text color="dimmed" size="sm">
                A lot of work is done on a volunteer basis, but we still need money to buy equipment and pay for web hosting and streaming.
            </Text>
            <Space h="xl" />
            <Divider my="sm" />

            <Button radius="md">
                Membership
            </Button>
            <Text color="dimmed" size="sm">
                A regular income is needed to pay for web hosting and streaming. We also hope to use the membership income
                to fund events and conferences in the future.
            </Text>

        </Box>
    );
}