import { Button as ButtonMantine, useMantineTheme } from "@mantine/core";

const Button = ({
  leftIcon,
  label,
  styles,
  onClick,
  w,
  compact,
  loading,
  type,
  iconWidth = "16px",
  disabled,
  size = "md",
  variant = "filled",
  primary = true,
  ...props
}) => {
  return (
    <ButtonMantine
      sx={styles}
      compact={compact}
      disabled={disabled}
      loading={loading}
      w={w}
      color={primary ? "" : "#9399A1"}
      size={size}
      radius={"md"}
      variant={primary ? variant : "outline"}
      leftSection={
        leftIcon ? (
          <img
            src={new URL(`../../assets/${leftIcon}`, import.meta.url).href}
            alt="icon"
            width={iconWidth}
          />
        ) : (
          ""
        )
      }
      type={type}
      onClick={onClick}
      {...props}
    >
      {label}
    </ButtonMantine>
  );
};
export default Button;
