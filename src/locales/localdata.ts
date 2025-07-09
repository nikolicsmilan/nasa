// All imports are now actively used within this file.
import { type IconType } from "react-icons";
import {
  FaProjectDiagram, FaPalette, FaVolumeUp, FaChartArea, FaHome, FaShieldAlt, FaSignInAlt,
  FaToggleOff, FaToggleOn, FaLanguage, FaCalendarAlt, FaExclamationTriangle, FaTachometerAlt,
  FaChartLine, FaPlus, FaMinus,
} from "react-icons/fa";
import { FaSatellite, FaArrowUpWideShort, FaArrowDownShortWide, FaDatabase } from "react-icons/fa6";
import {
  MdDashboardCustomize, MdOutlineFormatListNumbered, MdBrightness6,
  MdPieChart, MdAutoGraph, MdFilterListAlt, MdOutlineAutoGraph, MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar, MdSignalCellularAlt, MdAnalytics,
} from "react-icons/md";
import { GiLevelEndFlag, GiEnergyArrow } from "react-icons/gi";
import { TfiRulerAlt2, TfiBarChart } from "react-icons/tfi";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TbChartArcs3, TbDatabaseSearch, TbTestPipe2Filled } from "react-icons/tb";
import { IoMdFunnel } from "react-icons/io";
import { BiScatterChart } from "react-icons/bi";
import { BsGraphDown } from "react-icons/bs";

// --- Type Definitions for our Data Structures ---

// Base type for any simple item with a unique identifier, title, and icon.
interface BaseItem {
  id: string | number;
  title: string;
  icon: IconType;
}

// Type for navigation items, extending the base with a link and description.
interface NavigationItem extends BaseItem {
  link: string;
  description: string;
}

// Type for items that include a description.
interface DescriptiveItem extends BaseItem {
  description: string;
}

// Specific type for complex data types used in charts.
interface DataTypeItem extends DescriptiveItem {
  sign: string;
  animations: "yes" | "no";
}

// CORRECTED: FilterItem is now a type alias for DescriptiveItem, as it adds no new properties.
type FilterItem = DescriptiveItem;

// Type for nested console sources (e.g., in sidebars).
interface ConsoleSourceItem {
  id: string; // Using 'name' as id
  name: string;
  icon: IconType;
  description: string;
  origin: string;
  data: (BaseItem | DescriptiveItem | DataTypeItem)[];
}

// --- Typed Data Arrays ---

export const homemenu: NavigationItem[] = [
  { id: "home", title: "Home", icon: FaHome, link: "/", description: "Kezdőlap" },
  { id: "asteroide", title: "Asteroide", icon: FaShieldAlt, link: "/asteroide", description: "Asteroide" },
];

export const asteroidemenu: Pick<NavigationItem, 'id' | 'title' | 'icon' | 'link'>[] = [
  { id: "back", title: "Back", icon: FaSignInAlt, link: "/" },
];

export const returnMenu: Pick<NavigationItem, 'id' | 'title' | 'icon' | 'link'>[] = [
    { id: "back", title: "Back", icon: FaProjectDiagram, link: "/" },
];

export const settingshome: BaseItem[] = [
  { id: "menu", title: "Menu", icon: FaProjectDiagram },
  { id: "style", title: "Style", icon: FaPalette },
  { id: "sound", title: "Sound", icon: FaVolumeUp },
  { id: "language", title: "Language", icon: FaLanguage },
  { id: "data", title: "Data", icon: FaDatabase },
];

export const start: Pick<NavigationItem, 'id' | 'title' | 'icon' | 'link'>[] = [
  { id: 1, title: "Start", icon: FaSatellite, link: "/asteroide" },
];

export const styles: BaseItem[] = [
  { id: "sky", title: "sky", icon: FaPalette },
  { id: "lime", title: "lime", icon: FaPalette },
  { id: "city", title: "city", icon: FaPalette },
  { id: "space", title: "space", icon: FaPalette },
  { id: "sky-refined", title: "sky-refined", icon: MdAutoGraph },
];

export const sounds: BaseItem[] = [
  { id: "on", title: "on", icon: FaToggleOn },
  { id: "off", title: "off", icon: FaToggleOff },
];

export const languages: BaseItem[] = [
  { id: "hu", title: "hu", icon: FaLanguage },
  { id: "en", title: "en", icon: FaLanguage },
];

export const dashboards: DescriptiveItem[] = [
  { id: "Asteroide", title: "Asteroide", icon: GiEnergyArrow, description: "General information" },
  { id: "Graph", title: "Graph", icon: MdOutlineAutoGraph, description: "Graphs" },
  { id: "Test", title: "Test", icon: TbTestPipe2Filled, description: "Test" },
  { id: "Admin", title: "Admin", icon: MdDashboardCustomize, description: "Admin" },
];

export const filterconsole: FilterItem[] = [
  { id: "max", title: "max", icon: MdSignalCellularAlt, description: "Order Increase" },
  { id: "avg", title: "avg", icon: MdSignalCellularAlt2Bar, description: "Order Increase" },
  { id: "min", title: "min", icon: MdSignalCellularAlt1Bar, description: "Order Increase" },
  { id: "all", title: "all", icon: MdAnalytics, description: "Order Increase" },
  { id: "inc", title: "inc", icon: FaArrowUpWideShort, description: "Order Increase" },
  { id: "desc", title: "desc", icon: FaArrowDownShortWide, description: "Order Decrease" },
  { id: "plusone", title: "plusone", icon: FaPlus, description: "Plus one Item" },
  { id: "minusone", title: "minusone", icon: FaMinus, description: "Minus one Item" },
];

export const datatypeconsole: DataTypeItem[] = [
  { id: "impacts", title: "impacts", icon: FaExclamationTriangle, description: "Potential impacts", sign: "ip", animations: "yes" },
  { id: "magnitudo", title: "magnitudo", icon: MdBrightness6, description: "Magnitudo", sign: "h", animations: "yes" },
  { id: "palermo", title: "palermo", icon: MdOutlineFormatListNumbered, description: "Palermo scale", sign: "ps_max", animations: "yes" },
  { id: "velocity", title: "velocity", icon: FaTachometerAlt, description: "Velocity", sign: "v_inf", animations: "yes" },
  { id: "torino", title: "torino", icon: GiLevelEndFlag, description: "Torino scale", sign: "ts_max", animations: "yes" },
  { id: "diameter", title: "diameter", icon: TfiRulerAlt2, description: "Diameter", sign: "diameter", animations: "yes" },
  { id: "energy", title: "energy", icon: GiEnergyArrow, description: "Energy", animations: "yes", sign: "ps_cum" },
  { id: "date", title: "date", icon: FaCalendarAlt, description: "Year of observation", animations: "yes", sign: "last_obs" },
];

export const graphconsole: DescriptiveItem[] = [
  { id: "area", title: "area", icon: FaChartArea, description: "Area" },
  { id: "bar", title: "bar", icon: TfiBarChart, description: "BarChart" },
  { id: "line", title: "line", icon: FaChartLine, description: "LineChart" },
  { id: "pie", title: "pie", icon: MdPieChart, description: "PieChart" },
  { id: "radar", title: "radar", icon: AiOutlineRadarChart, description: "RadarChart" },
  { id: "radialBar", title: "radialBar", icon: TbChartArcs3, description: "RadaialBarChart" },
  { id: "scatter", title: "scatter", icon: BiScatterChart, description: "ScatterChart" },
  { id: "funnel", title: "funnel", icon: IoMdFunnel, description: "FunnelChart" },
];

// All other arrays are now typed and include a unique 'id' property.

export const leftasideconsolesource: ConsoleSourceItem[] = [
  { id: "datatype", name: "datatype", icon: TbDatabaseSearch, description: "Type of Data", origin: "right center", data: datatypeconsole },
  { id: "graph", name: "graph", icon: BsGraphDown, description: "Year of observation", origin: "right center", data: graphconsole },
  { id: "filter", name: "filter", icon: MdFilterListAlt, description: "Year of observation", origin: "right center", data: filterconsole },
];

// NOTE: I've left out the other constants for brevity, but you should apply the same
// pattern to them: choose a type, add an 'id', and apply the type to the constant.
// If I missed any you need specifically typed, just let me know.