import {
  ActionIcon,
  Avatar,
  Box,
  Flex,
  Group,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import classes from "./user.module.css";
import { Pencil, X } from "tabler-icons-react";
import avatar from "../../assets/avatar.svg";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";

const EditProfile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip label="Edit">
        <ActionIcon bg="white" onClick={() => setOpen(true)}>
          <Pencil stroke="gray" />
        </ActionIcon>
      </Tooltip>
      <Modal
        opened={open}
        size={"lg"}
        closeOnClickOutside={false}
        withCloseButton={false}
        styles={{ body: { paddingInline: 0 } }}
      >
        <Group className={classes.modalHeader}>
          <Stack gap={2}>
            <Text fw={600} fz={18}>
              Manage User Profile
            </Text>
            <Text c="gray" fz={14}>
              Using the following to manage user accounts
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
        <Box m="md">
          <Group my="md">
            <Avatar src={avatar} size={"lg"} />
            <Box>
              <Text fw={600} fz={18}>
                Olivia Rhye
              </Text>
              <Text fz={14} c={"gray"}>
                @olivia
              </Text>
            </Box>
          </Group>
          <SimpleGrid cols={2} mb="md">
            <InputField label={"User Location"} />
            <InputField label={"Email Address"} />
            <InputField label={"User Wallet Balance"} />
            <InputField label={"User Drop Claims"} />
          </SimpleGrid>
          <InputField label={"Favourite Organization"} />
          <SimpleGrid cols={2} my="md">
            <InputField label={"Total Funds Donated"} />
            <InputField label={"# of Orgs Supported"} />
          </SimpleGrid>
          <Flex
            pt={"lg"}
            gap={"md"}
            style={{ borderTop: "2px solid rgb(0,0,0,0.2)" }}
          >
            <Button
              label="Cancel"
              fullWidth={true}
              onClick={() => setOpen(false)}
              primary={false}
            />
            <Button label="Update Profile" fullWidth={true} />
          </Flex>
        </Box>
      </Modal>
    </>
  );
};

export default EditProfile;
