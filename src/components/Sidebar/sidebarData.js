import { Graph } from "tabler-icons-react";
import { routeNames } from "../../routenames";
export const sidebarData = [
  {
    label: "Home",
    icon: "home",
    link: routeNames.general.dashboard,
  },
  {
    label: "Shops",
    icon: "shops",
    links: [
      { label: "Active", link: routeNames.general.activeShops, color: "green" },
      {
        label: "Pending",
        link: routeNames.general.pendingShops,
        color: "yellow",
      },
      {
        label: "Inactive",
        link: routeNames.general.inactiveShops,
        color: "red",
      },
    ],
  },
  {
    label: "Drops",
    icon: "drops",
    links: [
      { label: "Active", link: routeNames.general.activeDrops, color: "green" },
      {
        label: "Pending",
        link: routeNames.general.pendingDrops,
        color: "yellow",
      },
      {
        label: "Inactive",
        link: routeNames.general.inactiveDrops,
        color: "red",
      },
      {
        label: "Add a New Drop",
        link: routeNames.general.addDrop1,
      },
      {
        label: "Claimed Drops",
        link: routeNames.general.claimedDrops,
      },
    ],
  },
  {
    label: "Notifications",
    icon: "notifications",
    links: null,
  },
  {
    label: "Users",
    icon: "users",
    link: null,
  },
];
export const bottomData = [
  {
    label: "Support",
    icon: "support",
    link: routeNames.general.landing,
  },
  {
    label: "Settings",
    icon: "settings",
    link: null,
  },
];
