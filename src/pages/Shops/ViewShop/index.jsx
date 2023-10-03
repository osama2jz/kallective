import {
  ActionIcon,
  Avatar,
  Box,
  Center,
  Flex,
  Group,
  Image,
  Pagination,
  Rating,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import avatar from "../../../assets/avatar.svg";
import cover from "../../../assets/cover.png";
import Button from "../../../components/Button";
import { ArrowUpRight, Dots } from "tabler-icons-react";
import Flag from "react-world-flags";
import Product from "./Product";

const ViewShop = () => {
  return (
    <Box>
      <Image src={cover} w={"100%"} h={200} />
      <Box mx="md">
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
                <Avatar src={avatar} size={35} />
                <Avatar src={avatar} size={35} />
                <Avatar src={avatar} size={35} />
                <Avatar src={avatar} size={35} />
                <Avatar src={avatar} size={35} />
                <Avatar styles={{ placeholder: { fontSize: 10 } }} size={35}>
                  +200
                </Avatar>
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
        <SimpleGrid cols={{ base: 1, md: 2 }} my="md">
          <Stack gap={"xs"}>
            <Text fw={500}>About Us</Text>
            <Text c="gray">
              Elementum eu diam nisl id. Id posuere purus amet sollicitudin non
              gravida elit sagittis. Egestas faucibus.
            </Text>
          </Stack>
          <SimpleGrid cols={2} spacing={"xl"}>
            <Box>
              <Text fw={500} fz={14}>
                About Us
              </Text>
              <Text
                fz={16}
                c="gray"
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <Flag
                  code={"IND"}
                  width={20}
                  height={20}
                  style={{
                    borderRadius: "50%",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                />
                Simpsonville, KY
              </Text>
            </Box>
            <Box>
              <Text fw={500} fz={14}>
                Website
              </Text>
              <Text
                fz={16}
                c="gray"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  justifyContent: "space-between",
                }}
              >
                adidasoutlet.com
                <ArrowUpRight />
              </Text>
            </Box>
            <Box>
              <Text fw={500} fz={14}>
                Phone
              </Text>
              <Text
                fz={16}
                c="gray"
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                +1 502-722-8170
              </Text>
            </Box>
            <Box>
              <Text fw={500} fz={14}>
                Email
              </Text>
              <Text
                fz={16}
                c="gray"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  justifyContent: "space-between",
                }}
              >
                johndoe@gmail.com
                <ArrowUpRight />
              </Text>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
        <Group justify="space-evenly">
          <Product />
          <Product />
          <Product />
        </Group>
        <Center my="md">
          <Pagination total={3} radius={"xl"} color="gray" />
        </Center>
      </Box>
    </Box>
  );
};

export default ViewShop;
