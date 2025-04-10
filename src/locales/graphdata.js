import {
  FaChartArea,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaTachometerAlt,
  FaChartLine,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { FaArrowUpWideShort, FaArrowDownShortWide } from "react-icons/fa6";
import {
  MdOutlineFormatListNumbered,
  MdBrightness6,
  MdPieChart,
  MdFilterListAlt,
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
  MdSignalCellularAlt,
  MdAnalytics,
} from "react-icons/md";
import { GiLevelEndFlag } from "react-icons/gi";
import { TfiRulerAlt2, TfiBarChart } from "react-icons/tfi";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TbChartArcs3, TbDatabaseSearch } from "react-icons/tb";
import { IoMdFunnel } from "react-icons/io";
import { BiScatterChart } from "react-icons/bi";
import { GiEnergyArrow } from "react-icons/gi";
import { BsGraphDown } from "react-icons/bs";

export const datatypeconsole = [
  {
    title: "impacts",
    icon: FaExclamationTriangle,
    description: "Potential impacts",
    sign: "ip",
    animations: "yes",
  },
  {
    title: "magnitudo",
    icon: MdBrightness6,
    description: "Magnitudo",
    sign: "h",
    animations: "yes",
  },
  {
    title: "palermo",
    icon: MdOutlineFormatListNumbered,
    description: "Palermo scale",
    sign: "ps_max",
    animations: "yes",
  },
  {
    title: "velocity",
    icon: FaTachometerAlt,
    description: "Velocity",
    sign: "v_inf",
    animations: "yes",
  },
  {
    title: "torino",
    icon: GiLevelEndFlag,
    description: "Torino scale",
    sign: "ts_max",
    animations: "yes",
  },
  {
    title: "diameter",
    icon: TfiRulerAlt2,
    description: "Diameter",
    sign: "diameter",
    animations: "yes",
  },
  {
    title: "energy",
    icon: GiEnergyArrow,
    description: "Energy",
    animations: "yes",
    sign: "ps_cum",
  },
  {
    title: "date",
    icon: FaCalendarAlt,
    description: "Year of observation",
    animations: "yes",
    sign: "last_obs",
  },
];

export const graphconsole = [
  {
    title: "area",
    icon: FaChartArea,
    description: "Area",
  },
  {
    title: "bar",
    icon: TfiBarChart,
    description: "BarChart",
  },
  {
    title: "line",
    icon: FaChartLine,
    description: "LineChart",
  },
  {
    title: "pie",
    icon: MdPieChart,
    description: "PieChart",
  },
  {
    title: "radar",
    icon: AiOutlineRadarChart,
    description: "RadarChart",
  },
  {
    title: "radialBar",
    icon: TbChartArcs3,
    description: "RadaialBarChart",
  },
  {
    title: "scatter",
    icon: BiScatterChart,
    description: "ScatterChart",
  },
  {
    title: "funnel",
    icon: IoMdFunnel,
    description: "FunnelChart",
  },
];

export const filterconsole = [
  {
    title: "max",
    icon: MdSignalCellularAlt,
    description: "Order Increase",
  },
  {
    title: "avg",
    icon: MdSignalCellularAlt2Bar,
    description: "Order Increase",
  },
  {
    title: "min",
    icon: MdSignalCellularAlt1Bar,
    description: "Order Increase",
  },
  {
    title: "all",
    icon: MdAnalytics,
    description: "Order Increase",
  },
  {
    title: "inc",
    icon: FaArrowUpWideShort,
    description: "Order Increase",
  },
  {
    title: "desc",
    icon: FaArrowDownShortWide,
    description: "Order Decrease",
  },
  {
    title: "plusone",
    icon: FaPlus,
    description: "Plus one Item",
  },
  {
    title: "minusone",
    icon: FaMinus,
    description: "Minus one Item",
  },
];

export const graphdatasource = [
  {
    name: "datatype",
    icon: TbDatabaseSearch,
    description: "Type of Data",
    origin: "right center",
    data: datatypeconsole,
    position: {
      x: "10",
      y: "20",
      z: "0",
    },
  },
  {
    name: "graph",
    icon: BsGraphDown,
    description: "Year of observation",
    origin: "right center",
    data: graphconsole,
    position: {
      x: "-10",
      y: "20",
      z: "0",
    },
  },
  {
    name: "filter",
    icon: MdFilterListAlt,
    description: "Year of observation",
    origin: "right center",
    data: filterconsole,
    position: {
      x: "10",
      y: "20",
      z: "0",
    },
  },
];
