import { Container } from "@mantine/core";
import MainTopMenu from "../components/MainTopMenu/MainTopMenu";
import { MainFooter } from "../components/MainFooter/MainFooter";

export default function MainLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <Container>
            {/* Include shared UI here e.g. a header or sidebar */}
            <MainTopMenu />

            {children}

        </Container>
    );
}