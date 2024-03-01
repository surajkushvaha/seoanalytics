import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { APP_CONSTANTS } from "./appconstants";
import { Layout } from "react-grid-layout";

interface Sidebar {
  label: string;
  path: string;
  icon: IconProp;
}
interface NamePath {
  label: string;
  path?: string;
  callback?: any;
}

export const DASHBOARD_LAYOUT: Layout[] = [
  { i: "dashboard1", x: 0, y: 0, w: 2, h: 2 },
  { i: "dashboard2", x: 2, y: 0, w: 2, h: 2 },
  { i: "dashboard3", x: 4, y: 0, w: 2, h: 2 },
  { i: "dashboard4", x: 6, y: 0, w: 2, h: 2 },
  { i: "dashboard5", x: 8, y: 0, w: 2, h: 2 },
  { i: "dashboard6", x: 12, y: 0, w: 2, h: 2 },
  { i: "dashboard7", x: 0, y: 0, w: 2, h: 2 },
  { i: "dashboard8", x: 2, y: 0, w: 2, h: 2 },
  { i: "dashboard9", x: 4, y: 0, w: 2, h: 2 },
  { i: "dashboard10", x: 6, y: 0, w: 2, h: 2 },
];
export const SIDEBAR_CONSTANT: Sidebar[] = [
  {
    label: "Home",
    path: APP_CONSTANTS.ROUTE_PATHS.DASHBOARD,
    icon: "house",
  },
  {
    label: "Search",
    path: APP_CONSTANTS.ROUTE_PATHS.SEARCH,
    icon: "search",
  },
];
export const PROFILE_CONSTANTS: NamePath[] = [
  {
    label: "Profile",
    path: APP_CONSTANTS.ROUTE_PATHS.PROFILE,
  },
  {
    label: "Settings",
    path: APP_CONSTANTS.ROUTE_PATHS.SETTING,
  },
  {
    label: "Logout",
    callback: function () {
      const menu = document.getElementById("menu-profile");
      if (menu?.classList.contains("hidden")) {
        menu?.classList.remove("hidden");
      } else {
        menu?.classList.add("hidden");
      }
    },
  },
];
