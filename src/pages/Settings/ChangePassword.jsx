import { Box, Grid, Group, Text } from "@mantine/core";
import React from "react";
import Button from "../../components/Button";
import PassInput from "../../components/PassInput";

const ChangePassword = () => {
  return (
    <Box px="lg">
      <Box style={{ borderBottom: "1px solid rgb(0,0,0,0.1)" }} pb="md">
        <Text fw={"bold"} fz={18}>
          Password
        </Text>
        <Text c="gray" fz={14}>
          Please enter your current password to change your password.
        </Text>
      </Box>
      <Grid gutter={"lg"} my="lg">
        <Grid.Col span={4}>
          <Text>Current Password</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <PassInput placeholder={"Current Password"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>New Password</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <PassInput placeholder={"New Password"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Confirm Password</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <PassInput placeholder={"Confirm Password"} />
        </Grid.Col>
      </Grid>
      <Group
        justify="flex-end"
        p="lg"
        style={{ borderTop: "1px solid rgb(0,0,0,0.1)" }}
      >
        <Button primary={false} label={"Cancel"} />
        <Button label={"Update Password"} />
      </Group>
    </Box>
  );
};

export default ChangePassword;
