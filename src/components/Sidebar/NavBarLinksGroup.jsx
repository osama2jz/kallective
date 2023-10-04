import {
  Badge,
  Box,
  Collapse,
  ColorSwatch,
  Flex,
  Group,
  Image,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "tabler-icons-react";
import classes from "./sidebar.module.css";

export function LinksGroup({
  icon,
  label,
  showBadge = true,
  initiallyOpened,
  links,
  ind,
  link,
  globalOpen,
  setGlobalOpen,
  setSideOpen,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useMantineTheme();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = ChevronDown;

  useEffect(() => {
    globalOpen !== label && setOpened(false);
  }, [globalOpen, label]);
  const items = (hasLinks ? links : []).map((link, index) => (
    <Flex
      component={Link}
      gap="sm"
      className={classes.link}
      py={"xs"}
      pr="sm"
      pl={50}
      align={"center"}
      to={link.link}
      bg={location.pathname === link.link ? "#f8f8f8" : "white"}
      // onClick={() => setSideOpen(false)}
      key={link.label}
    >
      {link?.color && <ColorSwatch color={link.color} size={8} />}
      <Text c="black" fw={500}>
        {link.label}
      </Text>
      {link.showBadge && (
        <Badge
          variant="light"
          size="xs"
          ml="auto"
          color="rgb(0,0,0,0.2)"
          styles={{ label: { color: "rgba(0,0,0,0.8)" } }}
        >
          10
        </Badge>
      )}
    </Flex>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          setGlobalOpen(label);
          if (link) {
            link && navigate(link);
          }
          if (label === "Log Out") {
            localStorage.removeItem("userData");
          }
        }}
        bg={location.pathname === link ? "#f8f8f8" : "white"}
        className={classes.mainLink}
      >
        <Group
          justify="space-between"
          spacing={0}
          px={"sm"}
          py={8}
          onClick={() => link && navigate(link)}
        >
          <Group align="center">
            <Image
              src={new URL(`../../assets/${icon}.svg`, import.meta.url).href}
              w={20}
            />
            <Text fw={500}>{label}</Text>
          </Group>
          <Group gap={"xs"}>
            {showBadge && (
              <Badge
                variant="light"
                size="xs"
                color="rgb(0,0,0,0.2)"
                styles={{ label: { color: "rgba(0,0,0,0.8)" } }}
              >
                10
              </Badge>
            )}
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size={12}
                style={{
                  transform: opened ? `rotate(180deg)` : "none",
                }}
              />
            )}
          </Group>
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
