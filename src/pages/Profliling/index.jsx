import { Anchor, BackgroundImage, Box, Grid, Image, Text } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import imgg from "../../assets/profiling.png";
import classes from "./profiling.module.css";

const Profiling = () => {
  return (
    <Box h={"100vh"}>
      <Grid h={"100%"} grow>
        <Grid.Col span={4} visibleFrom="sm">
          <BackgroundImage h="100vh" src={imgg}>
            <Image src={logo} w={200} mx="auto" pt={20} />
          </BackgroundImage>
        </Grid.Col>
        <Grid.Col span={8} h="100%" style={{ position: "relative" }}>
          <Outlet />
          <Text w={450} fz={"sm"} ta={"center"} className={classes.tnc}>
            Protected by reCAPTCHA and subject to The Kallective{" "}
            <Anchor>Privacy Policy</Anchor> and
            <Anchor> Terms of Service</Anchor>.
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Profiling;
