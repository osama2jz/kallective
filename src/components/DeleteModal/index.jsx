import {
  Container,
  Flex,
  Modal as ModalMantine,
  Text
} from "@mantine/core";
import cross from "../../assets/delete.svg";
import Button from "../Button";

const DeleteModal = ({
  opened,
  setOpened,
  onDelete,
  label,
  loading,
  message,
}) => {
  return (
    <ModalMantine
      opened={opened}
      onClose={() => setOpened(false)}
      withCloseButton={false}
      centered
    >
      <Container>
        <img src={cross} alt="icon" width={"50px"} />
        <Text fw={"bold"}>{label}</Text>
        <Text c={'gray'}>{message}</Text>
        <Flex pt={"sm"} gap={"md"}>
          <Button
            label="Cancel"
            disabled={loading}
            fullWidth={true}
            onClick={() => setOpened(false)}
            primary={false}
          />
          <Button
            label="Delete"
            onClick={onDelete}
            loading={loading}
            fullWidth={true}
          />
        </Flex>
      </Container>
    </ModalMantine>
  );
};
export default DeleteModal;
