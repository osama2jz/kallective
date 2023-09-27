import { Box, Divider, Group, SimpleGrid } from "@mantine/core";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Card from "./Card";
import Users from "./Users";

const Home = () => {
  const [data, setData] = useState([
    {
      name: "Natali Craig",
      email: "email@gmail.com",
      dateJoined: "Feb 22, 2023",
    },
    {
      name: "Natali Craig",
      email: "email@gmail.com",
      dateJoined: "Feb 22, 2023",
    },
    {
      name: "Natali Craig",
      email: "email@gmail.com",
      dateJoined: "Feb 22, 2023",
    },
    {
      name: "Natali Craig",
      email: "email@gmail.com",
      dateJoined: "Feb 22, 2023",
    },
    {
      name: "Natali Craig",
      email: "email@gmail.com",
      dateJoined: "Feb 22, 2023",
    },
    {
      name: "Natali Craig",
      email: "email@gmail.com",
      dateJoined: "Feb 22, 2023",
    },
    {
      name: "Natali Craig",
      email: "email@gmail.com",
      dateJoined: "Feb 22, 2023",
    },
  ]);
  return (
    <Box>
      <PageHeader
        title={"Welcome back, Olivia"}
        subTitle={"Track and manage all application data"}
      />
      <Divider my="md" />
      <Group justify={"space-between"}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Group>
      <SimpleGrid cols={{ base: 1, lg: 2 }} my="md" spacing={"xl"}>
        <Users data={data} />
        <Users data={data} />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
