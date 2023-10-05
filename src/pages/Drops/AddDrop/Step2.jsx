import { Box, Divider, Flex, Grid, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import GoogleMapReact from "google-map-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import PageHeader from "../../../components/PageHeader";
import SelectMenu from "../../../components/SelectMenu";
import { routeNames } from "../../../routenames";

const AddDropStep2 = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      profileImage: null,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Box>
      <Stack gap={"sm"} p="sm">
        <PageHeader
          title={`Add a New Drop - Step 2 of 2`}
          subTitle={`Complete the following to add a new drop.`}
        />
        <Divider color="rgb(0,0,0,0.2)" />
        <Flex gap={10}>
          <InputField
            placeholder={"Search"}
            leftIcon={"search"}
            style={{ flex: 1 }}
          />
          <Button label={"Clear"} primary={false} />
          <Button label={"Search"} />
        </Flex>
        <Grid gutter={"xs"}>
          <Grid.Col span={4}>
            <Text>Use Network Drop Spot</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <SelectMenu
              data={[]}
              placeholder="Search drop spot network locations"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Drop Area (Radius)</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Drop Area (Radius)"} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Drop Quantity</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Drop Quantity"} />
          </Grid.Col>
        </Grid>
        <Box style={{ height: "300px", width: "100%", borderRadius:'20px', overflow:'hidden' }}>
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
      </Stack>
      <Flex
        p={"md"}
        gap={"md"}
        style={{ borderTop: "2px solid rgb(0,0,0,0.2)" }}
      >
        <Button
          label={"Cancel"}
          primary={false}
          onClick={() => navigate(-1)}
          fullWidth={true}
        />
        <Button label={"Confirm & Release"} fullWidth={true} onClick={()=>navigate(routeNames.general.activeDrops)}/>
      </Flex>
    </Box>
  );
};

export default AddDropStep2;
