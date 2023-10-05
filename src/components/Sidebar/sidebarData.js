import { Graph } from "tabler-icons-react";
import { routeNames } from "../../routenames";
export const sidebarData = [
  {
    label: "Home",
    icon: "home",
    showBadge: false,
    link: routeNames.general.dashboard,
  },
  {
    label: "Shops",
    icon: "shops",
    links: [
      {
        label: "Active",
        link: routeNames.general.activeShops,
        color: "green",
        showBadge: true,
      },
      {
        label: "Pending",
        link: routeNames.general.pendingShops,
        showBadge: true,
        color: "yellow",
      },
      {
        label: "Inactive",
        link: routeNames.general.inactiveShops,
        showBadge: true,
        color: "red",
      },
      {
        label: "Add a New Shop",
        link: routeNames.general.addShop,
        showBadge: false,
      },
    ],
  },
  {
    label: "Drops",
    icon: "drops",
    links: [
      {
        label: "Active",
        link: routeNames.general.activeDrops,
        color: "green",
        showBadge: true,
      },
      {
        label: "Pending",
        link: routeNames.general.pendingDrops,
        showBadge: true,
        color: "yellow",
      },
      {
        label: "Inactive",
        link: routeNames.general.inactiveDrops,
        showBadge: true,
        color: "red",
      },
      {
        label: "Add a New Drop",
        link: routeNames.general.addDrop1,
        showBadge: false,
      },
      {
        label: "Claimed Drops",
        showBadge: false,
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
    link: routeNames.general.users,
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
    link: routeNames.general.settings,
  },
];
