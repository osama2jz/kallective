import { Anchor, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PassInput from "../../components/PassInput";
import { routeNames } from "../../routenames";
import classes from "./profiling.module.css";
import logo from "../../assets/logoBlue.png";

const NewPassword = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      pas: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Flex
      direction="column"
      justify={"space-between"}
      align={"center"}
      gap={20}
      p={20}
      className={classes.outlet}
    >
      <form
        className={classes.inner}
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <Image src={logo} w={150} m="auto" mt="sm" />
        <Stack p="md">
          <Title order={3}>New Password</Title>
          <Text>Please create a new password for your account.</Text>
          <PassInput
            placeholder="Password"
            form={form}
            validateName={"password"}
          />
          <PassInput
            placeholder="Confirm Password"
            form={form}
            validateName={"confirmPassword"}
          />
          <Button label={"Send Recovery Email"} type={"submit"} />
          <Text ta={"center"}>
            Remember your password?{" "}
            <Anchor onClick={() => navigate(routeNames.general.signin)}>
              Sign In
            </Anchor>
          </Text>
        </Stack>
      </form>

      {/* </Flex> */}
    </Flex>
  );
};

export default NewPassword;
