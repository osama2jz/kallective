import { useState } from "react";
import { Anchor, Avatar, Box, Flex, Group, Text } from "@mantine/core";
import DataGrid from "../../components/Table";
import ActionIcons from "../../components/ActionIcons";
import EditProfile from "../Users/EditProfile";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../routenames";

const Users = () => {
  const navigate = useNavigate();
  const Columns = [
    {
      name: "Name",
      selector: (row) => row.merchant,
      width:"250px",
      sortable: true,
      cell: (row) => (
        <Flex gap="sm" py="sm">
          <Avatar />
          <Box>
            <Text fw={500}>{row.name}</Text>
            <Text c="gray">{row.email}</Text>
          </Box>
        </Flex>
      ),
    },
    {
      name: "Date Joined",
      selector: (row) => row.dateJoined,
      sortable: true,
      center: true,
      width: "150px",
    },
    {
      name: "",
      center: true,
      width: "100px",
      cell: (row) => (
        <ActionIcons
          rowData={row}
          // view={true}
          del={true}
          edit={<EditProfile />}
          // type="Revenue"
        />
      ),
    },
  ];
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
      <Group justify="space-between" mb="md">
        <Text fw={"bold"}>New Users</Text>
        <Anchor onClick={() => navigate(routeNames.general.users)}>
          All Users
        </Anchor>
      </Group>
      <DataGrid columns={Columns} data={data} type={"Users"} download={false} />
    </Box>
  );
};

export default Users;
