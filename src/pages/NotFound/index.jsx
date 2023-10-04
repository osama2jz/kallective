import { Box, Group, Image, Stack, Text } from "@mantine/core";
import notFound from "../../assets/notFound.png";
import Button from "../../components/Button";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../routenames";

const NotFound = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 820px)");
  return (
    <Group
      justify={"space-evenly"}
      h={isMobile ? "80vh" : "100vh"}
      p="md"
      align="center"
    >
      <Stack align="flex-start">
        <Text c="primary.0" fw={600}>
          404 error
        </Text>
        <Text fz={isMobile ? 40 : 60} fw={600}>
          Page Not Found
        </Text>
        <Text c={"gray"} fz={20}>
          Sorry, the page you are looking for doesn't exist or has been moved.
          Try searching our site:
        </Text>
        <Button
          label={"Go to Website"}
          onClick={() => navigate(routeNames.general.dashboard)}
        />
      </Stack>
      <Image src={notFound} />
    </Group>
  );
};

export default NotFound;
