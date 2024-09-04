import React from "react";
import {
  FaProjectDiagram,
  FaPalette,
  FaVolumeUp,
  FaRocket,
  FaChartArea,
} from "react-icons/fa";
import {
  FaHome,
  FaShieldAlt,
  FaSpaceShuttle,
  FaImages,
  FaSignInAlt,
  FaToggleOff,
  FaToggleOn,
  FaLanguage,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaTachometerAlt,
  FaChartLine,
  FaRuler,
  FaStar,
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaFlag,
  FaInfoCircle,
  FaPlus,
  FaMinus,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import {
  FaSatelliteDish,
  FaSatellite,
  FaArrowUpWideShort,
  FaArrowDownShortWide,
  FaDatabase,
} from "react-icons/fa6";
import { BsJoystick } from "react-icons/bs";

import {
  MdDashboardCustomize,
  MdOutlineFormatListNumbered,
  MdOutlineSensorOccupied,
} from "react-icons/md";
import {
  MdBrightness6,
  MdPieChart,
  MdDashboard,
  MdAutoGraph,
  MdFilterListAlt,
  MdOutlineAutoGraph,
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
  MdSignalCellularAlt,MdAnalytics 
} from "react-icons/md";
import { GiLevelEndFlag, GiHorizontalFlip } from "react-icons/gi";
import { TfiRulerAlt2, TfiBarChart } from "react-icons/tfi";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TbChartArcs3, TbApi } from "react-icons/tb";
import { IoMdFunnel, IoIosInformationCircleOutline } from "react-icons/io";
import { BiScatterChart } from "react-icons/bi";
import { SiNasa, SiFirebase } from "react-icons/si";
import { GiReactor, GiEnergyArrow } from "react-icons/gi";
import {
  HiMiniArrowsPointingIn,
  HiMiniArrowsPointingOut,
} from "react-icons/hi2";

import { TbDatabaseSearch } from "react-icons/tb";
import { BsGraphDown } from "react-icons/bs";
//Navigation menu Home page
export const homemenu = [
  {
    title: "Home",
    icon: FaHome,
    link: "/",
    description: "Kezdőlap",
  },
  {
    title: "Asteroide",
    icon: FaShieldAlt,
    link: "/asteroide",
    description: "Asteroide",
  },
];
//Navigation menu Asteoride page
export const asteroidemenu = [
  {
    title: "Back",
    icon: FaSignInAlt,
    link: "/",
    description: "",
  },
];

export const returnMenu = [
  {
    title: "Back",
    icon: FaProjectDiagram,
    link: "/",
  },
];

//Settingsbar in Home Page

export const settingshome = [
  {
    title: "Navigation",
    icon: FaProjectDiagram,
  },
  {
    title: "Style",
    icon: FaPalette,
  },
  {
    title: "Sound",
    icon: FaVolumeUp,
  },
  {
    title: "Language",
    icon: FaLanguage,
  },
  {
    title: "Data",
    icon: FaDatabase,
  },
];

//to navigation Button in Home page
export const start = [
  {
    title: "Start",
    icon: FaSatellite,
    link: "/asteroide",
  },
];

//style menu to every page
export const styles = [
  {
    title: "sky",
    icon: FaPalette,
  },
  {
    title: "lime",
    icon: FaPalette,
  },
  {
    title: "city",
    icon: FaPalette,
  },
  {
    title: "space",
    icon: FaPalette,
  },
];

//sounds menu to every page
export const sounds = [
  {
    title: "on",
    icon: FaToggleOn,
  },
  {
    title: "off",
    icon: FaToggleOff,
  },
];

//language menu to every page
export const languages = [
  {
    title: "hu",
    icon: FaLanguage,
  },
  {
    title: "en",
    icon: FaLanguage,
  },
];

// filterconsole source
export const dashboards = [
  {
    title: "general",
    icon: MdDashboardCustomize,
    description: "General information",
    animations: "yes",
  },
  {
    title: "graph",
    icon: MdOutlineAutoGraph,
    description: "Graphs",
    animations: "yes",
  },
];
//MdOutlineAutoGraph
//GiEnergyArrow
// filterconsole source
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
//
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

export const informationconsole = [
  {
    title: "nasa",
    icon: SiNasa,
    description: "Nasa",
  },
  {
    title: "sentry",
    icon: FaSatellite,
    description: "Sentry",
  },
  {
    title: "api",
    icon: TbApi,
    description: "API",
  },
  {
    title: "aboutme",
    icon: FaInfoCircle,
    description: "Aboutme",
  },
  {
    title: "palermo",
    icon: MdOutlineFormatListNumbered,
    description: "Palermo scale",
    sign: "ps_max",
    animations: "yes",
  },
  {
    title: "torino",
    icon: GiLevelEndFlag,
    description: "Torino scale",
    sign: "ts_max",
    animations: "yes",
  },
];

export const resourceconsole = [
  {
    title: "firebase",
    icon: SiFirebase,
    description: "Firebase",
  },
  {
    title: "api",
    icon: TbApi,
    description: "API",
  },
];

export const dashboradsourceforMobile = [ {
  name: "dashboard",
  icon: MdDashboard,
  description: "Dashboard",
  origin: "right center",
  data: dashboards,
  position: {
    x: "-10",
    y: "20",
    z: "0",
  },
},]

export const leftasideconsolesource = [
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

export const rightasideconsolesource = [
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
    name: "information",
    icon: IoIosInformationCircleOutline,
    description: "Year of observation",
    origin: "right center",
    data: informationconsole,
    position: {
      x: "-10",
      y: "20",
      z: "0",
    },
  },

  {
    name: "resources",
    icon: GiReactor,
    description: "Year of observation",
    origin: "right center",
    data: resourceconsole,
    position: {
      x: "10",
      y: "20",
      z: "0",
    },
  },
];

export const mainconsole = [
  {
    name: "size",
    displayname: "Méret",
    icon: SiNasa,
  },
  {
    name: "color",
    displayname: "Szín",
    icon: SiNasa,
  },

  {
    name: "rotate",
    displayname: "Forgatás",
    icon: SiNasa,
  },
];

export const sizeconsole = [
  {
    name: 1.5,
    property: "size",
    displayname: "Option",
    icon: SiNasa,
  },
  {
    name: 1.8,
    property: "size",
    displayname: "Option",
    icon: SiNasa,
  },
  {
    name: 2.1,
    property: "size",
    displayname: "Option",
    icon: SiNasa,
  },
  {
    name: 2.5,
    property: "size",
    displayname: "Option",
    icon: SiNasa,
  },
];

export const menu = [
  {
    title: "showmenu",
    icon: HiMiniArrowsPointingIn,
    description: "Show the menu",
  },
  {
    title: "dontshow",
    icon: HiMiniArrowsPointingOut,
    description: "Don't show the menu",
    sign: "ps_max",
    animations: "yes",
  },
  {
    title: "sense",
    icon: MdOutlineSensorOccupied,
    description: "Sense the cursor movement on main console",
    sign: "ps_max",
    animations: "yes",
  },
];

export const mobilmenu = [
  {
    title: "showmenu",
    icon: HiMiniArrowsPointingIn,
    description: "Show the menu",
  },
  {
    title: "dontshow",
    icon: HiMiniArrowsPointingOut,
    description: "Don't show the menu",
    sign: "ps_max",
    animations: "yes",
  },
  
];

/*
export const operationsconsole = [
  {
    title: "joystick",
    icon: BsJoystick,
    description: "Joystick",
  },
  {
    title: "upconsoles",
    icon: FaArrowCircleUp,
    description: "Up Consoles",
  },
  {
    title: "downconsoles",
    icon: FaArrowCircleDown,
    description: "Down Consoles",
  },
  {
    title: "horizont",
    icon: GiHorizontalFlip,
    description: "Horizont Cosnoles",
  },
];
*/

/*
export const filterconsole = [
  {
    title: "year",
    icon: FaLanguage,
  },
  {
    title: "Potential Impacts",
    icon: FaToggleOn,
  },
  {
    title: "Velocity",
    icon: FaLanguage,
  },
  {
    title: "Diameter",
    icon: FaLanguage,
  },
  {
    title: "Magnitudo",
    icon: FaLanguage,
  },
  {
    title: "Palermo",
    icon: FaLanguage,
  },
  {
    title: "Torino",
    icon: FaLanguage,
  },
];*/
