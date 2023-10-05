import { AppShell, Burger, Container, Flex, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/Sidebar";
import logo from '../assets/logoBlue.png'

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      //   header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header hiddenFrom="sm" h={40} style={{display:'flex', alignItems:'center'}}>
        <Flex align={'center'} w={'100%'}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image
            src={logo}
            h={20}
            mx="auto"
          />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <SideBar toggle={toggle}/>
      </AppShell.Navbar>

      <AppShell.Main pt={{ base: "40px", sm: "xs" }}>
        <Container p={0} m={"auto"} maw={1200}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
