import { Box, Divider, Flex, Grid, Stack, Text } from "@mantine/core";
import { DateInput, DatePicker, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import React from "react";
import Button from "../../../components/Button";
import DropZone from "../../../components/Dropzone";
import InputField from "../../../components/InputField";
import PageHeader from "../../../components/PageHeader";
import TextArea from "../../../components/TextArea";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../../routenames";

const AddDrop = () => {
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
          title={`Add a New Drop - Step 1 of 2`}
          subTitle={`Complete the following to add a new drop.`}
        />
        <Divider color="rgb(0,0,0,0.2)" />
        <Grid gutter={"xs"}>
          <Grid.Col span={4}>
            <Text>Product Image</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <DropZone name={"profileImage"} form={form} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Product Name</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Product Name"} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Short Description</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TextArea placeholder={"Product Name"} rows="2" />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Drop Time</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <TimeInput placeholder={"Drop Time"} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Drop Date</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <DateInput placeholder={"Drop Date"} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Tokens to Claim</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Tokens to Claim"} />
          </Grid.Col>
          <Grid.Col span={12}>
            <Divider color="rgb(0,0,0,0.2)" />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>QR Code for Claiming</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <DropZone name={"profileImage"} form={form} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Website Link</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Website link"} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text>Button Text</Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <InputField placeholder={"Button Text"} />
          </Grid.Col>
        </Grid>
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
        <Button
          label={"Next"}
          fullWidth={true}
          onClick={() => navigate(routeNames.general.addDrop2)}
        />
      </Flex>
    </Box>
  );
};

export default AddDrop;
