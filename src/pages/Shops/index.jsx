import { Center, Flex, Group, SegmentedControl, Stack } from "@mantine/core";
import React from "react";
import { List, MapPin } from "tabler-icons-react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PageHeader from "../../components/PageHeader";
import SelectMenu from "../../components/SelectMenu";
import Card from "./Card";
import { useMediaQuery } from "@mantine/hooks";
import { Map, Marker } from "google-maps-react";

const Shops = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  return (
    <Stack>
      <Group justify="space-between" mb="lg">
        <PageHeader
          title={"Active Shops"}
          subTitle={"Review active merchant shops and drop spots"}
        />
        <Button label={"Add"} leftIcon={"plus.svg"} />
      </Group>
      <Group justify="space-between">
        <SelectMenu data={[]} placeholder="Select Country" width={170} />
        <Button
          label={"More Filters"}
          primary={false}
          leftIcon={"filters.svg"}
        />
      </Group>
      <Flex gap={10}>
        <InputField
          placeholder={"Search"}
          leftIcon={"search"}
          style={{ flex: 1 }}
        />
        <Button label={"Clear"} primary={false} />
        <Button label={"Search"} />
      </Flex>
      <Map
        zoom={14}
        google={window.google}
        initialCenter={{
          lat: 37.7749,
          lng: -122.4194,
        }}
      >
        <Marker
          name={"Your Location"}
          position={{ lat: 37.7749, lng: -122.4194 }} // Replace with your desired marker position
        />
      </Map>
      <Group justify="space-between">
        <SegmentedControl
          size={isMobile ? "xs" : "md"}
          data={["Sort by location", "Sort by active drops"]}
          radius={isMobile ? "sm" : "md"}
        />
        <SegmentedControl
          size={isMobile ? "xs" : "md"}
          radius={isMobile ? "sm" : "md"}
          data={[
            {
              value: "",
              label: (
                <Center>
                  <List size={18} />
                </Center>
              ),
            },
            {
              value: "sa",
              label: (
                <Center>
                  <MapPin size={18} />
                </Center>
              ),
            },
          ]}
        />
      </Group>
      <Stack>
        <Card />
        <Card />
        <Card />
        <Card />
      </Stack>
    </Stack>
  );
};

export default Shops;
