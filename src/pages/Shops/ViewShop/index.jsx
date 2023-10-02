import {
  ActionIcon,
  Avatar,
  Box,
  Flex,
  Group,
  Image,
  Rating,
  Text,
} from "@mantine/core";
import avatar from "../../../assets/avatar.svg";
import cover from "../../../assets/cover.png";
import Button from "../../../components/Button";
import { Dots } from "tabler-icons-react";

const ViewShop = () => {
  return (
    <Box>
      <Image src={cover} w={"100%"} h={200} />
      <Group pos={"relative"}>
        <Image
          src={cover}
          w={170}
          h={170}
          radius={"50%"}
          style={{ marginTop: "-40px", border: "5px solid white" }}
        />
        <Flex direction={"column"} gap={"2px"}>
          <Text fw={600} fz={30}>
            Nike Outlet Shop
          </Text>
          <Group gap={"xs"}>
            <Rating value={4.3} readOnly />
            <Text>4.3</Text>
            <Text c="gray">202 reviews</Text>
          </Group>
          <Text lineClamp={1} fz={16} c="gray">
            1155 Buck Creek Rd #102a, Simpsonville, Kentucky
          </Text>
          <Flex align={"center"} gap={"sm"}>
            <Avatar.Group>
              <Avatar src={avatar} />
              <Avatar src={avatar} />
              <Avatar src={avatar} />
              <Avatar src={avatar} />
              <Avatar src={avatar} />
              <Avatar styles={{ placeholder: { fontSize: 12 } }}>+200</Avatar>
            </Avatar.Group>
            <Text c="gray">Followers</Text>
          </Flex>
        </Flex>
        <Group ml="auto">
          <Button label={"Update Profile"} />
          <ActionIcon color="gray" variant="outline" size={36}>
            <Dots />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
};

export default ViewShop;
