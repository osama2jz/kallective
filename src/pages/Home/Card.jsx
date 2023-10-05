import { Box, Group, Stack, Text, Title } from "@mantine/core";
import classes from "./home.module.css";
import { ArrowUp, Dots, DotsVertical, ThreeDRotate } from "tabler-icons-react";

const Card = ({
  title = "Total Users",
  value = "14,579",
  rate = "40",
  isUp,
}) => {
  return (
    <Stack className={classes.card}>
      <Group justify="space-between">
        <Text fw={500}>{title}</Text> <DotsVertical cursor={"pointer"} />
      </Group>
      <Title>{value}</Title>
      <Group gap={"xs"}>
        <Text
          c="green"
          display={"flex"}
          style={{ alignItems: "center", gap: "3px" }}
        >
          <ArrowUp size={16} stroke="green" />
          {rate}%
        </Text>
        <Text>vs last month</Text>
      </Group>
    </Stack>
  );
};

export default Card;
