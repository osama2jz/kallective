import { Anchor, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { routeNames } from "../../routenames";
import classes from "./profiling.module.css";
import logo from "../../assets/logoBlue.png";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      password: (value) => (value.length > 0 ? null : "Invalid Password"),
      confirmPassword: (value, values) =>
        value === values.password ? null : "Password does not match",
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
          <Title order={3}>Forgot Password?</Title>
          <Text>
            No worries! Just enter your email and we’ll send you a reset
            password link.
          </Text>
          <InputField
            placeholder={"Email Address"}
            form={form}
            validateName={"email"}
          />
          <Button
            label={"Send Recovery Email"}
            type={"submit"}
            onClick={() => navigate(routeNames.general.newPassword)}
          />
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

export default ForgetPassword;
