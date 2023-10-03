import {
  Box,
  Center,
  Flex,
  Group,
  Pagination,
  SegmentedControl,
  Stack,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import GoogleMapReact from "google-map-react";
import { useNavigate, useParams } from "react-router-dom";
import { List, MapPin } from "tabler-icons-react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PageHeader from "../../components/PageHeader";
import SelectMenu from "../../components/SelectMenu";
import { routeNames } from "../../routenames";
import Card from "./Card";

const Shops = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 500px)");
  return (
    <Stack>
      <Group justify="space-between" mb="lg">
        <PageHeader
          title={`${type} Shops`}
          subTitle={`Review ${type.toLowerCase()} merchant shops and drop spots`}
        />
        <Button
          label={"Add"}
          leftIcon={"plus.svg"}
          onClick={() => navigate(routeNames.general.addShop)}
        />
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
      <Box style={{ height: "360px", width: "100%" }}>
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
      <Group justify="space-between">
        <SegmentedControl
          size={isMobile ? "xs" : "md"}
          data={["Sort by location", "Sort by active drops"]}
          radius={isMobile ? "sm" : "md"}
          bg="#f8f8f8"
        />
        <SegmentedControl
          size={isMobile ? "xs" : "md"}
          radius={isMobile ? "sm" : "md"}
          bg="#f8f8f8"
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
      <Center>
        <Pagination total={10} radius={"xl"} color="gray" />
      </Center>
    </Stack>
  );
};

export default Shops;
