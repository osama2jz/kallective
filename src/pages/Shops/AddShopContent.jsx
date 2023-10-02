import { Divider, Flex, Grid, Group, Image, Stack, Text } from "@mantine/core";
import React from "react";
import InputField from "../../components/InputField";
import DropZone from "../../components/Dropzone";
import TextArea from "../../components/TextArea";
import SelectMenu from "../../components/SelectMenu";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { routeNames } from "../../routenames";

const AddShopContent = ({ form, setOpen }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <form>
      <Grid p={"md"}>
        <Grid.Col span={4}>
          <Text>Account Manager</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"Account Manager"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Email Address</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"Email Address"} />
        </Grid.Col>
        <Grid.Col span={12}>
          <Divider />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Profile Image</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <DropZone name={"profileImage"} form={form} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Website URL</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"Website URL"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Shop Name</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"Shop Name"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Phone Number</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"Phone Number"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Short Description</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <TextArea
            placeholder={"Email Address"}
            style={{ flex: 1 }}
            rows="2"
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Divider />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Country</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <SelectMenu placeholder="Country" data={[]} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>Shop Address</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <InputField placeholder={"Shop Address"} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>City / State</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Flex gap={"md"}>
            <InputField placeholder={"City"} w={'50%'}/>
            <InputField placeholder={"State"} w={'50%'}/>
          </Flex>
        </Grid.Col>
      </Grid>
      <Flex
        p={"md"}
        gap={"md"}
        style={{ borderTop: "2px solid rgb(0,0,0,0.2)" }}
      >
        <Button
          label={pathname.includes("add-shop") ? "Cancel" : "Decline"}
          primary={false}
          onClick={() => pathname.includes("add-shop") ? navigate(-1) : setOpen(false)}
          fullWidth={true}
        />
        <Button
          label={pathname.includes("add-shop") ? "Create Shop" : "Approve"}
          fullWidth={true}
        />
      </Flex>
    </form>
  );
};

export default AddShopContent;
