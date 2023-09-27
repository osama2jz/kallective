import { PasswordInput } from "@mantine/core";

const PassInput = ({
  placeholder,
  leftIcon,
  label,
  required,
  pb,
  width,
  form,
  size = "md",
  validateName,
  withAsterisk,
}) => {
  return (
    <PasswordInput
      w={width}
      pb={pb}
      size={size}
      withAsterisk={withAsterisk}
      label={label}
      radius={"md"}
      {...form?.getInputProps(validateName)}
      icon={
        leftIcon ? (
          <img src={require(`../../assets/${leftIcon}.svg`)} alt="icon" />
        ) : (
          ""
        )
      }
      placeholder={placeholder}
    />
  );
};
export default PassInput;
