import {
  // Fa ikonkészlet (Régebbi vagy általános)
  FaChartArea,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaTachometerAlt,
 // FaChartLine,
} from "react-icons/fa";

import {
  // Fa6 ikonkészlet (Újabb, pl. rendezéshez)
  FaArrowUpWideShort,
  FaArrowDownShortWide,
} from "react-icons/fa6";

import {
  // Md ikonkészlet
  MdOutlineFormatListNumbered,
  MdBrightness6,
  MdPieChart,
  MdFilterListAlt, // filter group icon
} from "react-icons/md";

import {
  // Gi ikonkészlet
  GiLevelEndFlag,
  GiEnergyArrow,
} from "react-icons/gi";

import {
  // Tfi ikonkészlet
  TfiRulerAlt2,
  TfiBarChart,
} from "react-icons/tfi";

import {
  // Ai ikonkészlet
  AiOutlineRadarChart,
} from "react-icons/ai";

import {
  // Tb ikonkészlet
  TbChartArcs3,
  TbDatabaseSearch, // datatype group icon
} from "react-icons/tb";

import {
  // Io ikonkészlet
  IoMdFunnel,
} from "react-icons/io";

import {
  // Bi ikonkészlet
  BiScatterChart,
} from "react-icons/bi";

import {
  // Bs ikonkészlet
  BsGraphDown, // graph group icon
} from "react-icons/bs";

// --- 1. Adattípus Konzol ---
// A felhasználó által választható adatok, amiket megjelenítünk.
export const datatypeConsole = [
  { title: "impacts", icon: FaExclamationTriangle, description: "Potential impacts", sign: "ip" },
  { title: "magnitudo", icon: MdBrightness6, description: "Magnitudo", sign: "h" },
  { title: "palermo", icon: MdOutlineFormatListNumbered, description: "Palermo scale", sign: "ps_max" },
  { title: "velocity", icon: FaTachometerAlt, description: "Velocity", sign: "v_inf" },
  { title: "torino", icon: GiLevelEndFlag, description: "Torino scale", sign: "ts_max" },
  { title: "diameter", icon: TfiRulerAlt2, description: "Diameter", sign: "diameter" },
  { title: "energy", icon: GiEnergyArrow, description: "Energy", sign: "ps_cum" },
  { title: "date", icon: FaCalendarAlt, description: "Observation Date", sign: "last_obs" }, // Leírás pontosítva
];

// --- 2. Grafikon Típus Konzol ---
// A felhasználó által választható megjelenítési formák.
export const graphConsole = [
  { title: "area", icon: FaChartArea, description: "Area Chart" }, // Leírás pontosítva
  { title: "bar", icon: TfiBarChart, description: "Bar Chart" },
 // { title: "line", icon: FaChartLine, description: "Line Chart" },
  { title: "pie", icon: MdPieChart, description: "Pie Chart" },
  { title: "radar", icon: AiOutlineRadarChart, description: "Radar Chart" },
  { title: "radialBar", icon: TbChartArcs3, description: "Radial Bar Chart" }, // Leírás pontosítva
  { title: "scatter", icon: BiScatterChart, description: "Scatter Chart" },
  { title: "funnel", icon: IoMdFunnel, description: "Funnel Chart" },
];

// --- 3. Rendezés Konzol (EGYSZERŰSÍTETT) ---
// A felhasználó által választható rendezési irányok.
export const sortOrderConsole = [
  {
    title: "inc", // Ezt használja a belső logika ('asc')
    icon: FaArrowUpWideShort,
    description: "Ascending Order",
  },
  {
    title: "desc", // Ezt használja a belső logika ('desc')
    icon: FaArrowDownShortWide,
    description: "Descending Order",
  },
];

// --- A Fő Adatforrás Struktúra a Vezérlőkhöz ---
// Ez a tömb határozza meg, melyik gombcsoportok jelennek meg és milyen gombokkal.
export const graphControlConfiguration = [ // Beszédesebb név
  {
    name: "datatype",        // Ezt használja az updateConfig a csoport azonosítására
    icon: TbDatabaseSearch,  // A csoport ikonja (opcionális)
    description: "Select Data Type", // A csoport leírása (opcionális)
    data: datatypeConsole,   // A csoport gombjai
  },
  {
    name: "graph",           // Ezt használja az updateConfig
    icon: BsGraphDown,
    description: "Select Chart Type",
    data: graphConsole,
  },
  {
    name: "filter",          // Ezt használja az updateConfig (az 'inc'/'desc' kezelésére)
    icon: MdFilterListAlt,
    description: "Select Sort Order",
    data: sortOrderConsole,  // Az egyszerűsített rendezési gombokra mutat
  },
];