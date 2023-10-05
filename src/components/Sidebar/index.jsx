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
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logoBlue.png";
import logout from "../../assets/logout.svg";
import { routeNames } from "../../routenames";
import InputField from "../InputField";
import { LinksGroup } from "./NavBarLinksGroup";
import classes from "./sidebar.module.css";
import { bottomData, sidebarData } from "./sidebarData";

export function SideBar({ toggle, opened }) {
  const [globalOpen, setGlobalOpen] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState(true);
  const links = sidebarData?.map((item, ind) => (
    <LinksGroup
      {...item}
      icon={item.icon}
      key={ind}
      ind={ind + 1}
      showBadge={item?.showBadge}
      link={item.link}
      globalOpen={globalOpen}
      setGlobalOpen={setGlobalOpen}
      toggle={toggle}
    />
  ));
  const bottoms = bottomData?.map((item, ind) => (
    <LinksGroup
      {...item}
      icon={item.icon}
      key={ind}
      ind={ind + 1}
      showBadge={false}
      link={item.link}
      globalOpen={globalOpen}
      setGlobalOpen={setGlobalOpen}
      toggle={toggle}
    />
  ));
  return (
    <Box
      h={"100%"}
      pos={"relative"}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image
        src={logo}
        w={150}
        mx="auto"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(routeNames.general.dashboard)}
      />
      {/* <InputField
        placeholder={"Search"}
        size="sm"
        leftIcon={"search"}
        my="md"
      /> */}
      <Flex direction={"column"} style={{ position: "relative", flexGrow: 1 }} mt="lg">
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
            styles={{ title: { color: "#1d3557" }, message: { fontSize: 12 } }}
          >
            You can now drop products at any of our available shared drop spot
            locations.
            <Group>
              <Anchor fw={"bold"} c={"secondary.0"} fz={"sm"}>
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
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={() => navigate(routeNames.general.signin)}
          />
        </Group>
      </Box>
    </Box>
  );
}
