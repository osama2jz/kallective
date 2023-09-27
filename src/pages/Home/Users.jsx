import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Checkbox,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./home.module.css";
import { Pencil, Trash } from "tabler-icons-react";

const Users = ({ data }) => {
  return (
    <Box>
      <Group justify="space-between" mb="md">
        <Anchor c="secondary">New Users</Anchor>
        <Anchor>All Users</Anchor>
      </Group>
      <Stack className={classes.users}>
        <Grid className={classes.header} align="center">
          <Grid.Col span={1}>
            <Checkbox size="xs" />
          </Grid.Col>
          <Grid.Col span={"auto"}>
            <Text fw={500}>Name</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text fw={500}>Date Joined</Text>
          </Grid.Col>
          <Grid.Col span={2}></Grid.Col>
        </Grid>
        {data?.map((obj, ind) => (
          <Grid key={ind} className={classes.header} align="center">
            <Grid.Col span={1}>
              <Checkbox size="xs" />
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: "auto" }}>
              <Flex align={"center"} gap={"sm"}>
                <Avatar size={40} />
                <Box>
                  <Text fw={500}>{obj.name}</Text>
                  <Text fz="xs" c="gray">
                    {obj.email}
                  </Text>
                </Box>
              </Flex>
            </Grid.Col>
            <Grid.Col span={3}>
              <Text c="gray">{obj.dateJoined}</Text>
            </Grid.Col>
            <Grid.Col span={2}>
              <Flex gap={"sm"} wrap={"wrap"}>
                <ActionIcon variant="transparent">
                  <Trash color="gray" />
                </ActionIcon>
                <ActionIcon variant="transparent">
                  <Pencil color="gray" />
                </ActionIcon>
              </Flex>
            </Grid.Col>
          </Grid>
        ))}
      </Stack>
    </Box>
  );
};

export default Users;
