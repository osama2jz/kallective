import { Box, Flex, Grid, Group, Modal, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { X } from "tabler-icons-react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Dropzone from "../../components/Dropzone";
import classes from "./drop.module.css";
import GoogleMapReact from "google-map-react";

const AddDropSpot = ({ open, setOpen }) => {
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
    <Modal
      opened={open}
      size={"lg"}
      closeOnClickOutside={false}
      withCloseButton={false}
      styles={{ body: { paddingInline: 0 } }}
    >
      <Group className={classes.modalHeader}>
        <Stack gap={2}>
          <Text fw={600} fz={18}>
            Create a New Drop Spot
          </Text>
          <Text c="gray" fz={14}>
            Complete the following to add a new drop spot to the network.
          </Text>
          <X
            className={classes.close}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          />
        </Stack>
      </Group>
      <Box p={"md"}>
        <Flex gap={10} wrap={"wrap"}>
          <InputField
            placeholder={"Search"}
            leftIcon={"search"}
            miw="200px"
            style={{ flex: 1 }}
          />
          <Flex gap="sm" ml="auto">
            <Button label={"Clear"} primary={false} />
            <Button label={"Search"} />
          </Flex>
        </Flex>
        <Grid my="md">
          <Grid.Col span={4}>
            <Text>Drop Spot Name</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Drop Spot Name"} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Drop Spot Address</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Drop Spot Address"} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Drop Spot Sponser</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Drop Spot Sponser"} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Sponser Branding</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Dropzone name={"profileImage"} form={form} />
          </Grid.Col>
        </Grid>
        <Box style={{ height: "250px", width: "100%" }}>
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
      </Box>
      <Flex
        p={"md"}
        gap={"md"}
        style={{ borderTop: "2px solid rgb(0,0,0,0.2)" }}
      >
        <Button
          label={"Cancel"}
          primary={false}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          fullWidth={true}
        />
        <Button label={"Confirm & Release"} fullWidth={true} />
      </Flex>
    </Modal>
  );
};

export default AddDropSpot;
