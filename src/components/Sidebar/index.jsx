import {
  Alert,
  Anchor,
  Avatar,
  Box,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { LinksGroup } from "./NavBarLinksGroup";
import classes from "./sidebar.module.css";
import { bottomData, sidebarData } from "./sidebarData";
import logo from "../../assets/logoBlue.png";
import logout from "../../assets/logout.svg";
import avatar from "../../assets/avatar.svg";
import InputField from "../InputField";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../routenames";

export function SideBar({ setOpened, opened }) {
  const [globalOpen, setGlobalOpen] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState(true);
  const links = sidebarData?.map((item, ind) => (
    <LinksGroup
      {...item}
      icon={item.icon}
      key={ind}
      ind={ind + 1}
      link={item.link}
      globalOpen={globalOpen}
      setGlobalOpen={setGlobalOpen}
      setSideOpen={setOpened}
    />
  ));
  const bottoms = bottomData?.map((item, ind) => (
    <LinksGroup
      {...item}
      icon={item.icon}
      key={ind}
      ind={ind + 1}
      link={item.link}
      globalOpen={globalOpen}
      setGlobalOpen={setGlobalOpen}
      setSideOpen={setOpened}
    />
  ));

  return (
    <Box
      h={"100%"}
      pos={"relative"}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Image src={logo} w={150} mx="auto" />
      <InputField
        placeholder={"Search"}
        size="sm"
        leftIcon={"search"}
        my="md"
      />
      <Flex direction={"column"} style={{ position: "relative", flexGrow: 1 }}>
        <Box className={classes.linksInner}>{links}</Box>
        <Box className={classes.bottom}>{bottoms}</Box>
      </Flex>
      <Box w="100%">
        {alert && (
          <Alert
            variant="light"
            color="gray.8"
            title="New features available"
            withCloseButton
            onClose={() => setAlert(false)}
            p={10}
            styles={{ title: { color: "black" }, message: { fontSize: 12 } }}
          >
            You can now drop products at any of our available shared drop spot
            locations.
            <Group>
              <Anchor fw={"bold"} c={"black"} fz={"sm"}>
                Dismiss
              </Anchor>
              <Anchor fw={"bold"} fz={"sm"}>
                Learn More
              </Anchor>
            </Group>
          </Alert>
        )}
        <Group
          style={{ borderTop: "1px solid rgb(0,0,0,0.1)" }}
          pt="md"
          mt="md"
        >
          <Avatar size={"md"} src={avatar} />
          <Stack gap={0}>
            <Text fw={500}>Olivia Ryhe</Text>
            <Text fz={"sm"} c={"gray"}>
              olivia@veme.com
            </Text>
          </Stack>
          <Image
            src={logout}
            style={{ marginLeft: "auto", cursor:'pointer' }}
            onClick={() => navigate(routeNames.general.signin)}
          />
        </Group>
      </Box>
    </Box>
  );
}
