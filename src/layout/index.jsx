import { AppShell, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/Sidebar";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      //   header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header hiddenFrom="sm">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <SideBar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container p={0} m={"auto"} maw={1200}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
