import { Group, Image, Modal, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { X } from "tabler-icons-react";
import approval from "../../assets/approval.png";
import AddShopContent from "./AddShopContent";
import classes from "./shop.module.css";

const ShopApproval = ({ open, setOpen }) => {
  const form = useForm({
    initialValues: {
      email: "",
      profileImage: null,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Modal
      opened={open}
      size={"lg"}
      closeOnClickOutside={false}
      withCloseButton={false}
      styles={{ body: { paddingInline: 0 } }}
    >
      <Group className={classes.modalHeader}>
        <Image src={approval} />
        <Stack gap={2}>
          <Text fw={600} fz={18}>
            Shop Approval
          </Text>
          <Text c="gray" fz={14}>
            Please review pending shop before adding to the network.
          </Text>
          <X
            className={classes.close}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          />
        </Stack>
      </Group>
      <AddShopContent form={form} setOpen={setOpen} />
    </Modal>
  );
};

export default ShopApproval;
