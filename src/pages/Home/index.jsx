import { Box, Divider, Group, SimpleGrid } from "@mantine/core";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Card from "./Card";
import GoogleMapReact from "google-map-react";
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
      <Box style={{ height: "360px", width: "100%", borderRadius:'20px', overflow:'hidden' }} my="xl">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 10.99835602,
            lng: 77.01502627,
          }}
          defaultZoom={11}
        >
          {/* <Marke
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
        </GoogleMapReact>
      </Box>
      <SimpleGrid cols={{ base: 1, lg: 2 }} my="md" spacing={"xl"}>
        <Users data={data} />
        <Users data={data} />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
