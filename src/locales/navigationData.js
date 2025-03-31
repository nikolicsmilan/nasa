import { FaHome } from "react-icons/fa";
import { GiEnergyArrow } from "react-icons/gi";
import { MdOutlineAutoGraph, MdDashboardCustomize } from "react-icons/md";
import { TbTestPipe2Filled } from "react-icons/tb";

export const navigationData = [
  {
    title: "Home",
    icon: FaHome,
    description: "General information",
    animations: "yes",
    route: "/"
  },
  {
    title: "Asteroide",
    icon: GiEnergyArrow,
    description: "General information",
    animations: "yes",
    route: "/asteroide"
  },
  {
    title: "Graph",
    icon: MdOutlineAutoGraph,
    description: "Graphs",
    animations: "yes",
    route: "/graph"
  },
  {
    title: "Test",
    icon: TbTestPipe2Filled,
    description: "Test",
    animations: "yes",
    route: "/test"
  },
  {
    title: "Admin",
    icon: MdDashboardCustomize,
    description: "Admin",
    animations: "yes",
    route: "/admin"
  },
];
