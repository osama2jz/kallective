import { Tabs } from "@mantine/core";
import PageHeader from "../../components/PageHeader";
import ManagerDetails from "./ManagerDetails";
import ShopProfile from "./ShopProfile";
import ChangePassword from "./ChangePassword";

const Settings = () => {
  return (
    <Tabs defaultValue={"Manager Details"}>
      <PageHeader title={`Settings`} />
      <Tabs.List my="md">
        <Tabs.Tab value="Manager Details">Manager Details</Tabs.Tab>
        <Tabs.Tab value="Profile">Profile</Tabs.Tab>
        <Tabs.Tab value="Password">Password</Tabs.Tab>
        <Tabs.Tab value="Plans">Plans</Tabs.Tab>
        <Tabs.Tab value="Billing">Billing</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Manager Details">
        <ManagerDetails />
      </Tabs.Panel>
      <Tabs.Panel value="Profile">
        <ShopProfile />
      </Tabs.Panel>
      <Tabs.Panel value="Password">
        <ChangePassword />
      </Tabs.Panel>
    </Tabs>
  );
};

export default Settings;
