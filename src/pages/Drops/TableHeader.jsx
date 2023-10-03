import { Anchor, Avatar, Badge, Box, Flex, Text } from "@mantine/core";
import ActionIcons from "../../components/ActionIcons";
export const Columns = (status) => [
  {
    name: "Merchant",
    selector: (row) => row.merchant,
    width: "200px",
    sortable: true,
    cell: (row) => (
      <Flex gap="sm" py="sm">
        <Avatar />
        <Box>
          <Text fw={500}>{row.merchant}</Text>
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
      <Badge variant="dot" color="green">
        {status}
      </Badge>
    ),
  },
  {
    name: "Product Name",
    selector: (row) => row.productName,
    sortable: true,
    // center: true,
    width: "200px",
  },
  {
    name: "Drop Location",
    selector: (row) => row.dropLocation,
    sortable: true,
    // center: true,
    width: "200px",
  },
  {
    name: "Drop Time",
    selector: (row) => row.dropTime,
    sortable: true,
    center: true,
    width: "150px",
  },
  {
    name: "Drop Date",
    selector: (row) => row.dropDate,
    sortable: true,
    center: true,
    width: "150px",
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
        edit={true}
        // type="Revenue"
      />
    ),
  },
];

export const filterbyStatus = [
  { label: "All", value: null },
  { label: "Paid", value: true },
  { label: "Pending", value: false },
];
