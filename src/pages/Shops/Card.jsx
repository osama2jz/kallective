import {
  Anchor,
  Avatar,
  Box,
  Flex,
  Group,
  Image,
  Loader,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import { DotsVertical } from "tabler-icons-react";
import photo from "../../assets/nike.png";
import drops from "../../assets/drops.svg";
import droplet from "../../assets/droplet.svg";
import avatar from "../../assets/avatar.svg";
import classes from "./shop.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import ShopApproval from "./ShopApproval";

const Card = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Group
      className={classes.card}
      justify="center"
      onClick={() => navigate("/shops/view/someidhere")}
    >
      <Image
        src={photo}
        w={200}
        h={150}
        radius={"md"}
        fit="cover"
        loading={<Loader />}
      />
      <Stack gap={"2px"} style={{ flex: 1 }} h={150}>
        <Group justify="space-between">
          <Text c={"red"} fz={"sm"}>
            5 Upcoming Drops
          </Text>
          <DotsVertical
            style={{ position: "absolute", right: "10px", top: "10px" }}
          />
        </Group>
        <Text fw={500} fz="lg">
          Nike Outlet Shop
        </Text>
        <Text lineClamp={1} fz="xs" c="gray">
          Sed arcu nunc faucibus elementum lectus. Aliquet sed purus vulputate
          eget ipsum risus nulla sed. Interdum condimentum, Sed arcu nunc
          faucibus elementum lectus. Aliquet sed purus vulputate eget ipsum
          risus nulla sed. Interdum condimentum
        </Text>
        {type !== "Pending" && (
          <Group gap={"xs"}>
            <Rating value={4.3} readOnly />
            <Text>4.3</Text>
            <Text c="gray">202 reviews</Text>
          </Group>
        )}
        <Group justify="space-between" mt="auto">
          <Flex gap={"md"}>
            <Flex gap={"sm"}>
              <Image src={drops} w={16} fit="content" />
              <Text>Collingwood VIC</Text>
            </Flex>
            {type !== "Pending" && (
              <Flex gap="sm">
                <Image src={droplet} w={20} />
                <Text>3 Active Drops</Text>
              </Flex>
            )}
          </Flex>
          {type === "Pending" ? (
            <Text>
              Pending Approval{" "}
              <Anchor onClick={() => setOpen(true)}>Review?</Anchor>
            </Text>
          ) : (
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
          )}
        </Group>
      </Stack>
      <ShopApproval open={open} setOpen={setOpen} />
    </Group>
  );
};

export default Card;
