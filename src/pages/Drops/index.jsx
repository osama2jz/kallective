import { Flex, Group, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { routeNames } from "../../routenames";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import DataGrid from "../../components/Table";
import { Columns } from "./TableHeader";
import AddDropSpot from "./AddDropSpot";

const Drops = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const [open, setOpen] = useState(false);
  const data = [
    {
      merchant: "Adidas",
      username: "@adidas",
      status: "Active",
      productName: "Adidas Forum Low",
      dropLocation: "United States",
      dropTime: "12:00 EDT",
      dropDate: "09/04/2023",
    },
    {
      merchant: "Adidas",
      username: "@adidas",
      status: "Active",
      productName: "Adidas Forum Low",
      dropLocation: "United States",
      dropTime: "12:00 EDT",
      dropDate: "09/04/2023",
    },
    {
      merchant: "Adidas",
      username: "@adidas",
      status: "Active",
      productName: "Adidas Forum Low",
      dropLocation: "United States",
      dropTime: "12:00 EDT",
      dropDate: "09/04/2023",
    },
    {
      merchant: "Adidas",
      username: "@adidas",
      status: "Active",
      productName: "Adidas Forum Low",
      dropLocation: "United States",
      dropTime: "12:00 EDT",
      dropDate: "09/04/2023",
    },
    {
      merchant: "Adidas",
      username: "@adidas",
      status: "Active",
      productName: "Adidas Forum Low",
      dropLocation: "United States",
      dropTime: "12:00 EDT",
      dropDate: "09/04/2023",
    },
    {
      merchant: "Adidas",
      username: "@adidas",
      status: "Active",
      productName: "Adidas Forum Low",
      dropLocation: "United States",
      dropTime: "12:00 EDT",
      dropDate: "09/04/2023",
    },
    {
      merchant: "Adidas",
      username: "@adidas",
      status: "Active",
      productName: "Adidas Forum Low",
      dropLocation: "United States",
      dropTime: "12:00 EDT",
      dropDate: "09/04/2023",
    },
  ];
  return (
    <Stack>
      <Group justify="space-between" mb="lg">
        <PageHeader
          title={`${type} Drops`}
          subTitle={`Track and manage ${type.toLowerCase()} drops`}
        />
        <Button
          label={"Add a New Drop Spot"}
          leftIcon={"plusDark.svg"}
          primary={false}
          onClick={() => setOpen(true)}
        />
      </Group>
      <Flex gap={10} wrap={"wrap"}>
        <Button label={"Filters"} primary={false} leftIcon={"filters.svg"} />
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
      <DataGrid
        columns={Columns(type)}
        data={data}
        download={false}
        type={"drops"}
        label="Listed Drops"
        subTitle="Track and manage all  network drops"
      />
      <AddDropSpot open={open} setOpen={setOpen} />
    </Stack>
  );
};

export default Drops;
