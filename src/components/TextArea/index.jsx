import { Textarea as TextareaMantine } from "@mantine/core";

const TextArea = ({
  placeholder,
  required,
  label,
  pb = "sm",
  borderWhite,
  onChange,
  form,
  size = "md",
  rows = "3",
  validateName,
  value,
  readOnly = false,
  ...props
}) => {
  return (
    <TextareaMantine
      withAsterisk={required ? true : false}
      label={label}
      pb={pb}
      minRows={rows}
      size={size}
      readOnly={readOnly}
      onChange={onChange}
      {...form?.getInputProps(validateName)}
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  );
};
export default TextArea;
