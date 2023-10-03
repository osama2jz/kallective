import { Anchor, Avatar, Box, Flex, Image, Text } from "@mantine/core";
import classes from "../shop.module.css";
import cover from "../../../assets/cover.png";
import avatar from "../../../assets/avatar.svg";
import { ClockHour4 } from "tabler-icons-react";

const Product = () => {
  return (
    <Box className={classes.product}>
      <Box p={"lg"}>
        <Flex gap={"md"} align={"center"}>
          <Avatar src={avatar} size={50} />
          <Box>
            <Text fw={600}>Adidas Spider Silk Shoes Biofrabic | WIRED UK</Text>
            <Text
              c="gray"
              style={{ display: "flex", alignItems: "center", gap: "3px" }}
            >
              <ClockHour4 size={15} />
              05:30:22
            </Text>
          </Box>
        </Flex>
        <Image w={290} height={220} src={cover} radius={"md"} fit="cover" />
        <Text c="gray" ta="center">
          09/23/2023 at 12:00 PM EST
        </Text>
      </Box>
      <Box className={classes.productBottom}>
        <Anchor fw={500}>View Drop</Anchor>
      </Box>
    </Box>
  );
};

export default Product;
