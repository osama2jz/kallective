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
const Signin = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length > 0 ? null : "Invalid Password"),
    },
  });
  return (
    <Flex
      direction="column"
      // justify={"center"}
      align={"center"}
      gap={20}
      p={20}
      className={classes.outlet}
    >
      <Text style={{ alignSelf: "flex-end" }}>
        Don’t have an account?{" "}
        <Anchor onClick={() => navigate(routeNames.general.signup)}>
          Sign Up
        </Anchor>
      </Text>
      {/* <Flex direction={'column'}> */}
      <form
        onSubmit={form.onSubmit((values) => navigate(routeNames.general.dashboard))}
        className={classes.inner}
      >
        <Image src={logo} w={150} m="auto" mt="sm"/>
        <Stack p="md">
          <Title order={3}>Login to your account</Title>
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
          <Anchor onClick={() => navigate(routeNames.general.forgetPassword)}>
            Forgot Password?
          </Anchor>
          <Button label={"Sign In"} type={"submit"} />
          <Divider label="or" labelPosition="center" />
          <Flex justify={"center"} gap={"sm"}>
            <GoogleLogin
              render={(renderProps) => (
                <MyButton
                  variant="white"
                  color="black"
                  size="md"
                  p={"xs"}
                  leftSection={<Image src={google} w={12} />}
                  style={{ border: "1px solid rgb(0,0,0,0.2)", fontSize: 12 }}
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
                  style={{ border: "1px solid rgb(0,0,0,0.2)", fontSize: 12 }}
                >
                  Sign in with Apple
                </MyButton>
              )}
              clientId="com.react.apple.login"
              redirectURI="https://redirectUrl.com"
            />
          </Flex>
        </Stack>
      </form>
      {/* </Flex> */}
    </Flex>
  );
};

export default Signin;
