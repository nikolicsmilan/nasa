import React from "react";
import {
  FaProjectDiagram,
  FaPalette,
  FaVolumeUp,
  FaDatabase,
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
  FaLanguage,  FaCalendarAlt,
  FaExclamationTriangle,
  FaTachometerAlt, FaChartLine,FaRuler,
  FaStar,
  FaArrowCircleUp, FaArrowCircleDown,
  FaFlag,FaInfoCircle 
} from "react-icons/fa";
import { FaSatelliteDish, FaSatellite,FaArrowUpWideShort,FaArrowDownShortWide    } from "react-icons/fa6";
import { BsJoystick } from "react-icons/bs";


import {
  MdDashboardCustomize,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { MdBrightness6,MdPieChart  } from "react-icons/md";
import { GiLevelEndFlag,GiHorizontalFlip  } from "react-icons/gi";
import { TfiRulerAlt2,TfiBarChart  } from "react-icons/tfi";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TbChartArcs3,TbApi   } from "react-icons/tb";
import { IoMdFunnel } from "react-icons/io";
import { BiScatterChart } from "react-icons/bi";
import { SiNasa,SiFirebase  } from "react-icons/si";

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
    title: "Vissza",
    icon: FaSignInAlt,
    link: "/",
    description: "",
  },
];

export const returnMenu = [
  {
    title: "Vissza",
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
    title: "General",
    icon: MdDashboardCustomize,
    description: "General main information",
    sign: "",
  },
  {
    title: "Magnitudo",
    icon: MdBrightness6,
    description: "Magnitudo",
    sign: "h",
  },
  {
    title: "Potential Impacts",
    icon: FaExclamationTriangle,
    description: "Potential impacts",
    sign: "ip",
  },
  {
    title: "Palermo",
    icon: MdOutlineFormatListNumbered,
    description: "Palermo scale",
    sign: "ps_max",
  },
  {
    title: "Velocity",
    icon: FaTachometerAlt,
    description: "Velocity",
    sign: "v_inf",
  },
  {
    title: "Torino",
    icon: GiLevelEndFlag,
    description: "Torino scale",
    sign: "ts_max",
  },
  {
    title: "Diameter",
    icon: TfiRulerAlt2,
    description: "Diameter",
    sign: "diameter",
  },
  {
    title: "Year",
    icon: FaCalendarAlt,
    description: "Year of observation",
  },
];

// filterconsole source
export const filterconsolesource = [

  {
    title: "Potential Impacts",
    icon: FaArrowUpWideShort,
    description: "Potential impacts",
  },
  {
    title: "Potential Impacts",
    icon: FaArrowDownShortWide ,
    description: "Potential impacts",
  },

];

export const operationsconsolesource = [

  {
    title: "Joystick",
    icon: BsJoystick,
    description: "Joystick",
  },
  {
    title: "Up Consoles",
    icon: FaArrowCircleUp ,
    description: "Potential impacts",
  },
  {
    title: "Down Consoles",
    icon: FaArrowCircleDown  ,
    description: "Down Consoles",
  },
  {
    title: "Horizont",
    icon: GiHorizontalFlip ,
    description: "Horizont Cosnoles",
  },

];

export const graphconsole = [
  {
    title: "Area",
    icon: FaChartArea,
    description: "AreaChart",
  },
  {
    title: "Bar",
    icon: TfiBarChart,
    description: "BarChart",
  },
  {
    title: "Line",
    icon: FaChartLine,
    description: "LineChart",
  },
  {
    title: "Pie",
    icon: MdPieChart,
    description: "PieChart",
  },
  {
    title: "Radar",
    icon: AiOutlineRadarChart,
    description: "RadarChart",
  },
  {
    title: "RadaialBar",
    icon: TbChartArcs3,
    description: "RadaialBarChart",
  },
  {
    title: "Scatter",
    icon: BiScatterChart,
    description: "ScatterChart",
  },
  {
    title: "Funnel",
    icon: IoMdFunnel,
    description: "FunnelChart",
  },
 
];


export const informationconsolesource = [
  {
    title: "Nasa",
    icon: SiNasa,
    description: "Nasa",
  },
  {
    title: "Sentry",
    icon: FaSatellite,
    description: "Sentry",
  },
  {
    title: "API",
    icon: TbApi,
    description: "API",
  },
  {
    title: "Aboutme",
    icon: FaInfoCircle,
    description: "Aboutme",
  },

];

export const resourceconsolesource = [

  {
    title: "Firebase ",
    icon: SiFirebase ,
    description: "Firebase",
  },
  {
    title: "API",
    icon: TbApi,
    description: "API",
  },

];

export const leftasideconsolesource = [
  {
    name: "dashboards",
    icon: FaCalendarAlt,
    description: "Year of observation",
    origin: "right center",
    data: dashboards,
    position: {
      x: "-10",
      y: "20",
      z: "0",
    },
  },
  {
    name: "graphconsole",
    icon: FaCalendarAlt,
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
    name: "information console",
    icon: FaCalendarAlt,
    description: "Year of observation",
    origin: "right center",
    data: informationconsolesource,
    position: {
      x: "-10",
      y: "20",
      z: "0",
    },
  },
];

export const rightasideconsolesource = [
  {
    name: "filterconsole",
    icon: FaCalendarAlt,
    description: "Year of observation",
    origin: "right center",
    data: filterconsolesource,
    position: {
      x: "10",
      y: "20",
      z: "0",
    },
  },
  {
    name: "operations",
    icon: FaCalendarAlt,
    description: "Year of observation",
    origin: "right center",
    data: operationsconsolesource,
    position: {
      x: "10",
      y: "20",
      z: "0",
    },
  },
  {
    name: "resources",
    icon: FaCalendarAlt,
    description: "Year of observation",
    origin: "right center",
    data: resourceconsolesource,
    position: {
      x: "10",
      y: "20",
      z: "0",
    },
  },
];

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

export const ip1000 = [
  {
    method: "IOBS",
    sigma_vi: "1.8050",
    ps: "-3.26",
    ip: "2.329e-03",
    date: "2024-12-17.26",
    energy: "2.060e-03",
    ts: "0",
    fullname: "(2022 YO1)",
    des: "2022 YO1",
    id: "bK22Y01O",
  },
  {
    ip: "4.844e-03",
    ts: "0",
    energy: "8.066e-03",
    date: "2074-05-03.03",
    method: "IOBS",
    ps: "-4.17",
    sigma_vi: "1.0179",
    des: "2006 JY26",
    id: "bK06J26Y",
    fullname: "(2006 JY26)",
  },
  {
    des: "2021 FM2",
    id: "bK21F02M",
    fullname: "(2021 FM2)",
    ip: "1.085e-03",
    date: "2070-03-21.38",
    ts: "0",
    energy: "1.033e-03",
    method: "IOBS",
    sigma_vi: "0.3669",
    ps: "-5.50",
  },
  {
    des: "2022 SX55",
    id: "bK22S55X",
    fullname: "(2022 SX55)",
    ip: "4.016e-03",
    ts: "0",
    energy: "1.208e-03",
    date: "2035-09-17.83",
    method: "IOBS",
    ps: "-4.29",
    sigma_vi: "0.3303",
  },
  {
    ip: "4.504e-03",
    ts: "0",
    energy: "4.731e-03",
    date: "2070-02-03.19",
    method: "IOBS",
    ps: "-4.35",
    sigma_vi: "0.2710",
    des: "2020 CQ1",
    id: "bK20C01Q",
    fullname: "(2020 CQ1)",
  },
  {
    ip: "1.042e-03",
    ts: "0",
    energy: "2.271e-03",
    date: "2069-05-01.93",
    method: "IOBS",
    ps: "-5.24",
    sigma_vi: "0.2823",
    des: "2014 JR24",
    id: "bK14J24R",
    fullname: "(2014 JR24)",
  },
  {
    fullname: "(2022 NX1)",
    id: "bK22N01X",
    des: "2022 NX1",
    method: "IOBS",
    ps: "-4.30",
    sigma_vi: "1.3408",
    ip: "2.723e-03",
    ts: "0",
    energy: "1.177e-02",
    date: "2075-12-03.94",
  },
  {
    sigma_vi: "0.4504",
    ps: "-4.11",
    method: "IOBS",
    date: "2074-11-02.87",
    energy: "1.381e-02",
    ts: "0",
    ip: "3.629e-03",
    fullname: "(2020 VW)",
    des: "2020 VW",
    id: "bK20V00W",
  },
  {
    id: "bK20V01N",
    des: "2020 VN1",
    fullname: "(2020 VN1)",
    ip: "1.705e-03",
    date: "2115-11-03.20",
    ts: "0",
    energy: "1.507e-02",
    method: "IOBS",
    sigma_vi: "0.8970",
    ps: "-4.67",
  },
  {
    id: "bK20V00W",
    des: "2020 VW",
    fullname: "(2020 VW)",
    ts: "0",
    energy: "1.378e-02",
    date: "2074-11-02.86",
    ip: "3.348e-03",
    ps: "-4.15",
    sigma_vi: "0.3711",
    method: "IOBS",
  },
  {
    id: "bK06RC0H",
    des: "2006 RH120",
    fullname: "(2006 RH120)",
    ip: "1.242e-03",
    ts: "0",
    energy: "1.267e-03",
    date: "2069-01-28.46",
    method: "IOBS",
    ps: "-5.35",
    sigma_vi: "0.2428",
  },
  {
    fullname: "(2006 RH120)",
    id: "bK06RC0H",
    des: "2006 RH120",
    sigma_vi: "0.1666",
    ps: "-4.89",
    method: "IOBS",
    date: "2067-07-10.93",
    ts: "0",
    energy: "1.266e-03",
    ip: "3.524e-03",
  },
  {
    fullname: "(2006 RH120)",
    id: "bK06RC0H",
    des: "2006 RH120",
    ps: "-5.23",
    sigma_vi: "2.1276",
    method: "IOBS",
    ts: "0",
    energy: "1.266e-03",
    date: "2058-02-08.11",
    ip: "1.239e-03",
  },
  {
    method: "IOBS",
    sigma_vi: "0.8616",
    ps: "-3.13",
    ip: "1.036e-03",
    date: "2071-09-16.04",
    ts: "0",
    energy: "1.047e+00",
    fullname: "(2000 SG344)",
    id: "bK00SY4G",
    des: "2000 SG344",
  },
  {
    fullname: "(2017 WT28)",
    des: "2017 WT28",
    id: "bK17W28T",
    method: "IOBS",
    sigma_vi: "0.8426",
    ps: "-3.86",
    ip: "1.098e-02",
    date: "2104-11-24.69",
    ts: "0",
    energy: "1.273e-02",
  },
  {
    ip: "1.133e-03",
    ts: "0",
    energy: "6.839e-05",
    date: "2084-01-14.26",
    method: "IOBS",
    ps: "-6.53",
    sigma_vi: "0.6600",
    id: "bK20C03D",
    des: "2020 CD3",
    fullname: "(2020 CD3)",
  },
  {
    energy: "6.839e-05",
    ts: "0",
    date: "2084-01-14.20",
    ip: "2.506e-03",
    ps: "-6.19",
    sigma_vi: "1.4931",
    method: "IOBS",
    id: "bK20C03D",
    des: "2020 CD3",
    fullname: "(2020 CD3)",
  },
  {
    date: "2083-08-16.85",
    ts: "0",
    energy: "6.840e-05",
    ip: "1.382e-03",
    sigma_vi: "0.4626",
    ps: "-6.45",
    method: "IOBS",
    des: "2020 CD3",
    id: "bK20C03D",
    fullname: "(2020 CD3)",
  },
  {
    ip: "1.117e-03",
    date: "2083-07-20.25",
    energy: "6.847e-05",
    ts: "0",
    method: "IOBS",
    sigma_vi: "0.7834",
    ps: "-6.54",
    des: "2020 CD3",
    id: "bK20C03D",
    fullname: "(2020 CD3)",
  },
  {
    ps: "-5.83",
    sigma_vi: "0.4894",
    method: "IOBS",
    ts: "0",
    energy: "6.843e-05",
    date: "2083-06-09.36",
    ip: "5.768e-03",
    fullname: "(2020 CD3)",
    id: "bK20C03D",
    des: "2020 CD3",
  },
  {
    fullname: "(2020 CD3)",
    des: "2020 CD3",
    id: "bK20C03D",
    method: "IOBS",
    ps: "-6.45",
    sigma_vi: "0.9078",
    ip: "1.363e-03",
    energy: "6.846e-05",
    ts: "0",
    date: "2083-02-21.68",
  },
  {
    ps: "-5.65",
    sigma_vi: "1.8337",
    method: "IOBS",
    ts: "0",
    energy: "6.840e-05",
    date: "2082-09-09.46",
    ip: "8.509e-03",
    fullname: "(2020 CD3)",
    des: "2020 CD3",
    id: "bK20C03D",
  },
  {
    ps: "-4.39",
    sigma_vi: "0.0981",
    method: "IOBS",
    ts: "0",
    energy: "1.267e-03",
    date: "2044-02-08.23",
    ip: "5.048e-03",
    fullname: "(2006 RH120)",
    des: "2006 RH120",
    id: "bK06RC0H",
  },
  {
    des: "2010 RF12",
    id: "bK10R12F",
    fullname: "(2010 RF12)",
    ip: "1.024e-01",
    date: "2095-09-05.99",
    energy: "8.569e-03",
    ts: "0",
    method: "IOBS",
    sigma_vi: "1.1219",
    ps: "-2.98",
  },
  {
    ip: "1.429e-03",
    energy: "2.155e-02",
    ts: "0",
    date: "2087-10-07.05",
    method: "IOBS",
    ps: "-4.46",
    sigma_vi: "1.3486",
    des: "2010 VQ",
    id: "bK10V00Q",
    fullname: "(2010 VQ)",
  },
  {
    fullname: "(2024 BY15)",
    des: "2024 BY15",
    id: "bK24B15Y",
    sigma_vi: "1.3409",
    ps: "-3.25",
    method: "IOBS",
    date: "2070-03-22.75",
    ts: "0",
    energy: "7.560e-02",
    ip: "6.208e-03",
  },
];

export const ipteszt = [
  {
    ps: "-5.65",
    sigma_vi: "1.8337",
    method: "IOBS",
    ts: "0",
    energy: "6.840e-05",
    date: "2082-09-09.46",
    ip: "8.509e-03",
    fullname: "(2020 CD3)",
    des: "2020 CD3",
    id: "bK20C03D",
  },
  {
    ps: "-4.39",
    sigma_vi: "0.0981",
    method: "IOBS",
    ts: "0",
    energy: "1.267e-03",
    date: "2044-02-08.23",
    ip: "5.048e-03",
    fullname: "(2006 RH120)",
    des: "2006 RH120",
    id: "bK06RC0H",
  },
  {
    des: "2010 RF12",
    id: "bK10R12F",
    fullname: "(2010 RF12)",
    ip: "1.024e-01",
    date: "2095-09-05.99",
    energy: "8.569e-03",
    ts: "0",
    method: "IOBS",
    sigma_vi: "1.1219",
    ps: "-2.98",
  },
];

//  { path: "spaceknowledge", element: <SpaceKnowledge /> },
