import { Box, Divider, Group, SimpleGrid } from "@mantine/core";
import GoogleMapReact from "google-map-react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Card from "./Card";
import Shops from "./Shops";
import Users from "./Users";

const Home = () => {
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
      <Box
        style={{
          height: "360px",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
        my="xl"
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_KEY }}
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
        <Users />
        <Shops />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
