import React from "react";
import AddShopContent from "./AddShopContent";
import { useForm } from "@mantine/form";
import PageHeader from "../../components/PageHeader";
import { Divider } from "@mantine/core";

const AddShop = () => {
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
    <>
      <PageHeader
        title={`Add a New Shop`}
        subTitle={`Please complete the following to add a new shop to the network`}
      />
      <Divider my="md" />
      <AddShopContent form={form} />
    </>
  );
};

export default AddShop;
