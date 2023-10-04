import { Anchor, Avatar, Badge, Box, Flex, Text } from "@mantine/core";
import ActionIcons from "../../components/ActionIcons";
import EditProfile from "./EditProfile";
export const Columns = (status) => [
  {
    name: "Name",
    selector: (row) => row.name,
    width: "200px",
    sortable: true,
    cell: (row) => (
      <Flex gap="sm" py="sm">
        <Avatar />
        <Box>
          <Text fw={500}>{row.name}</Text>
          <Text c="gray">{row.username}</Text>
        </Box>
      </Flex>
    ),
  },
  {
    name: "Status",
    selector: (row) => row?.status,
    sortable: true,
    // center: true,
    width: "120px",
    cell: (row) => (
      <Badge
        variant={row.status === "active" ? "dot" : "light"}
        color={row.status === "active" ? "green" : "gray"}
      >
        {row.status}
      </Badge>
    ),
  },
  {
    name: "Email Address",
    selector: (row) => row.email,
    sortable: true,
    // center: true,
    width: "200px",
  },
  {
    name: "User Location",
    selector: (row) => row.userLocation,
    sortable: true,
    // center: true,
    width: "200px",
  },
  {
    name: "Claims",
    selector: (row) => row.claims,
    sortable: true,
    center: true,
    width: "100px",
  },
  {
    name: "Wallet Balance $",
    selector: (row) => row.walletBalance,
    sortable: true,
    center: true,
    width: "200px",
  },
  {
    name: "Actions",
    center: true,
    width: "100px",
    cell: (row) => (
      <ActionIcons
        rowData={row}
        // view={true}
        del={true}
        edit={<EditProfile />}
        type="User"
      />
    ),
  },
];
