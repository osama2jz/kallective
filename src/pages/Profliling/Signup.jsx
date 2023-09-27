import {
  Anchor,
  Divider,
  Flex,
  Image,
  Button as MyButton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import AppleLogin from "react-apple-login";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { BrandApple } from "tabler-icons-react";
import google from "../../assets/google.png";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PassInput from "../../components/PassInput";
import { routeNames } from "../../routenames";
import classes from "./profiling.module.css";
import logo from "../../assets/logoBlue.png";

const Signup = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length > 0 ? null : "Invalid Password"),
      confirmPassword: (value, values) =>
        value === values.password ? null : "Password does not match",
      name: (value) => (value.length > 0 ? null : "Invalid Name"),
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
      <Text style={{ alignSelf: "flex-end" }}>
        Already have an account?{" "}
        <Anchor onClick={() => navigate(routeNames.general.signin)}>
          Sign In
        </Anchor>
      </Text>
      {/* <Flex direction={'column'}> */}
      <form
        className={classes.inner}
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <Image src={logo} w={150} m="auto" mt="sm" />
        <Stack p="md">
          <Title order={3}>Signup your account</Title>
          <InputField
            placeholder={"Full Name"}
            form={form}
            validateName={"name"}
          />
          <InputField
            placeholder={"Email Address"}
            form={form}
            validateName={"email"}
          />
          <PassInput
            placeholder="Password"
            form={form}
            validateName={"password"}
          />
          <PassInput
            placeholder="Confirm Password"
            form={form}
            validateName={"confrimPassword"}
          />
          <Button label={"Sign Up"} type={"submit"} />
          {/* <Divider label="or" labelPosition="center" />
          <Flex justify={"center"} wrap={"wrap"} gap={"sm"}>
            <GoogleLogin
              render={(renderProps) => (
                <MyButton
                  variant="white"
                  color="black"
                  size="md"
                  p={"xs"}
                  leftSection={<Image src={google} w={18} />}
                  style={{ border: "1px solid rgb(0,0,0,0.2)" }}
                >
                  Sign in with google
                </MyButton>
              )}
              clientId="YOUR_CLIENT_ID"
              buttonText="Sign In with Google"
              //   onSuccess={onGoogleLoginSuccess}
              //   onFailure={onGoogleLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
            <AppleLogin
              render={(renderProps) => (
                <MyButton
                  variant="white"
                  color="black"
                  size="md"
                  p={"xs"}
                  leftSection={<BrandApple fill="black" />}
                  style={{ border: "1px solid rgb(0,0,0,0.2)" }}
                >
                  Sign in with Apple
                </MyButton>
              )}
              clientId="com.react.apple.login"
              redirectURI="https://redirectUrl.com"
            />
          </Flex> */}
        </Stack>
      </form>
    </Flex>
  );
};

export default Signup;
