import { Text, Group, rem, Space, List, Grid, Card, Button } from '@mantine/core';
import Link from 'next/link';
import MainLayout from '../layout';
import { IconArrowRight } from '@tabler/icons';


// interface WorkInProgressProps {
//     links: { label: string; link: string; order: number }[];
// }

export default function WorkInProgress() {
    return (
        <MainLayout>
            <Space h="lg" />

            <Group mb="md">
                <Text size={24}>Project Hessdalen Work In Progress</Text>
            </Group>


            <Space h="xl" />
            <Space h="xl" />


        </MainLayout>
    );
}