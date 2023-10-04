import { Box, Grid, Group, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import DropZone from "../../components/Dropzone";
import SelectMenu from "../../components/SelectMenu";
import { TimeInput } from "@mantine/dates";

const ShopProfile = () => {
  const form = useForm();
  return (
    <Box px="lg">
      <Box style={{ borderBottom: "1px solid rgb(0,0,0,0.1)" }} pb="md">
        <Text fw={"bold"} fz={18}>
          Shop Profile
        </Text>
        <Text c="gray" fz={14}>
          Update your shop information here.
        </Text>
      </Box>
      {/* <Grid gutter={"lg"} my="lg">
        <Grid.Col span={4}>
          <Text>Username</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"First Name"} style={{ flex: 1 }} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Email Address</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"Email Address"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Your Personal Photo</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <DropZone name={"profileImage"} form={form} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Role</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"Role"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Country</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <SelectMenu placeholder={"Country"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Timezone</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <TimeInput placeholder={"Timezone"} />
        </Grid.Col>
      </Grid> */}
      <Group
        justify="flex-end"
        p="lg"
        style={{ borderTop: "1px solid rgb(0,0,0,0.1)" }}
      >
        <Button primary={false} label={"Cancel"} />
        <Button label={"Save"} />
      </Group>
    </Box>
  );
};

export default ShopProfile;
