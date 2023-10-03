import { Group, Modal as ModalMantine, Text, Container } from "@mantine/core";
import cross from "../../assets/cross.svg";
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
        <img src={cross} alt="icon" width={"40px"} />
        <Text fw={"bold"}>{label}</Text>
        <Text align="center">{message}</Text>
        <Group pt={"sm"} position="center">
          <Button
            label="Cancel"
            disabled={loading}
            onClick={() => setOpened(false)}
            variant="outline"
          />
          <Button label="Delete" onClick={onDelete} loading={loading} />
        </Group>
      </Container>
    </ModalMantine>
  );
};
export default DeleteModal;
