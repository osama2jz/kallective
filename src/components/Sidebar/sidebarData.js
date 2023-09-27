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
      { label: "Active", link: null, color: "green" },
      { label: "Pending", link: null, color: "yellow" },
      { label: "Inactive", link: null, color: "red" },
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
