import { Box, Divider, Group, Stack } from "@mantine/core";
import React from "react";
import PageHeader from "../../components/PageHeader";
import InputField from "../../components/InputField";
import DataGrid from "../../components/Table";
import { Columns } from "./TableHeader";
import EditProfile from "./EditProfile";

const Users = () => {
  const data = [
    {
      name: "Olivia Rhye",
      username: "@olivia",
      status:'active',
      email: "olivia@gmail.com",
      claims: 8,
      userLocation: "United Kingdom",
      walletBalance: "25 Tokens",
    },
    {
      name: "Olivia Rhye",
      username: "@olivia",
      status:'offline',
      email: "olivia@gmail.com",
      claims: 8,
      userLocation: "United Kingdom",
      walletBalance: "25 Tokens",
    },
    {
      name: "Olivia Rhye",
      username: "@olivia",
      email: "olivia@gmail.com",
      status:'active',
      claims: 8,
      userLocation: "United Kingdom",
      walletBalance: "25 Tokens",
    },
    {
      name: "Olivia Rhye",
      username: "@olivia",
      email: "olivia@gmail.com",
      claims: 8,
      status:'active',
      userLocation: "United Kingdom",
      walletBalance: "25 Tokens",
    },
    {
      name: "Olivia Rhye",
      username: "@olivia",
      email: "olivia@gmail.com",
      status:'active',
      claims: 8,
      userLocation: "United Kingdom",
      walletBalance: "25 Tokens",
    },
  ];
  return (
    <Stack>
      <Group justify="space-between">
        <PageHeader
          title={`User Management`}
          subTitle={`Track and manage all user data`}
        />
        <InputField placeholder={"Search"} leftIcon={"search"} miw="200px" />
      </Group>
      <Divider color="rgb(0,0,0,0.2)" my="lg" />
      <DataGrid
        columns={Columns("Users")}
        data={data}
        type={"Users"}
        label="App Users"
        subTitle="Manage your app users and their account permissions here."
      />
      <EditProfile />
    </Stack>
  );
};

export default Users;
