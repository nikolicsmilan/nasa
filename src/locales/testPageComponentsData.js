// src/locales/testPageComponentsData.js
import DynamicButtonExamples from "../pages/Test/components/DynamicButtonExamples";
//import GradientBackgrounds from "../pages/Test/components/GradientBackgrounds";
import ThemeButtons from "../pages/Test/components/ThemeButtons";
import GlowingButtons from "../pages/Test/components/GlowingButtons";
import NeutralGradientThemeButtons from "../pages/Test/components/NeutralGradientThemeButtons";
import ThemeColorPaletteShowcase from "../pages/Test/components/ThemeColorPaletteShowcase";
import SpeedGauges from "../../components/gauges/SpeedGauges"; // Javított import
import ComingSoonCard from "../pages/Test/components/ComingSoonCard";

import {
  FaMousePointer,
  FaPalette,
  FaTachometerAlt,
  FaChartBar,
  FaClone,
  FaTable,
  FaTasks,
  FaSlidersH,
  FaBell,
  FaWindowMaximize,
  FaAlignLeft,
  FaProjectDiagram,
  FaMapMarkedAlt,
  FaListUl,
  FaCommentDots,
  FaTags,
  FaBars,
  FaHourglassHalf,
  //FaRegSun,
} from "react-icons/fa";
import {/* BsCircleHalf, BsCardText,*/ BsKanban } from "react-icons/bs";
import { IoToggle } from "react-icons/io5";

const cs = (name, description = "This component is under development.") => ({
  key: name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, ""),
  name: name,
  Component: ComingSoonCard,
  status: "coming_soon",
  props: { name, description },
});

export const testPageComponentsData = [
  {
    key: "buttons",
    name: "Buttons",
    Icon: FaMousePointer,
    components: [
      {
        key: "dynamicButtons",
        name: "Dynamic Buttons",
        Component: DynamicButtonExamples,
        status: "ready",
        description: "Theme-aware buttons using utility classes.",
      },
      {
        key: "themeButtons",
        name: "Static Theme Buttons",
        Component: ThemeButtons,
        status: "ready",
        description: "Buttons with neutral-to-theme static gradients.",
      },
      {
        key: "glowingButtons",
        name: "Static Glowing Buttons",
        Component: GlowingButtons,
        status: "ready",
        description:
          "Buttons with neutral-to-theme static gradients and text glow.",
      },
      {
        key: "neutralButtons",
        name: "Static Neutral Buttons",
        Component: NeutralGradientThemeButtons,
        status: "ready",
        description:
          "Buttons with neutral-to-neutral static gradients and text glow.",
      },
    ],
  },
  {
    key: "colorPalette",
    name: "Color Palette",
    Icon: FaPalette,
    components: [
      {
        key: "themePalette",
        name: "Theme Color Palette",
        Component: ThemeColorPaletteShowcase,
        status: "ready",
        description: "Showcase of semantic colors for each theme.",
      },
    ],
  },
  {
    key: "gauges",
    name: "Gauges",
    Icon: FaTachometerAlt,
    components: [
      {
        key: "speedGauge",
        name: "Speed Gauge",
        Component: SpeedGauges,
        status: "ready",
        description: "Displays speed on a gauge.",
      },
      cs(
        "Pulse Radar",
        "Concentric circles pulse or illuminate based on a value."
      ),
      cs("Energy Core", "A central core's brightness/color/pulsation changes."),
      cs(
        "Data Stream",
        "Animated lines or dots flow between points or along a path."
      ),
      cs(
        "HexGrid Status",
        "Hexagonal grid where cell color/brightness changes by status."
      ),
      cs(
        "Linear Gauge",
        "Straight bar indicating a value with fill or gradient."
      ),
      cs(
        "Quantum Indicator",
        "Abstract, evolving pattern changing color/intensity."
      ),
      cs(
        "Spectrum Display",
        "Bar chart-like display for frequency or distribution."
      ),
      cs(
        "Orbital Map",
        "Simplified 2D/2.5D view of celestial bodies and orbits."
      ),
      cs("Threat Dial", "Dashboard-style dial pointing to a threat level."),
      cs("Chrono Display", "Futuristic display of time-related data."),
      cs("Resource Bars", "Multiple LinearGauges for different resources."),
      cs("Glyph Status", "Central symbol (glyph) changes based on status."),
      cs(
        "Network Node Graph",
        "Nodes and connecting lines indicating traffic or status."
      ),
      cs("Heatmap Grid", "Grid where cell color shows intensity (heatmap)."),
      cs(
        "Phase Indicator",
        "Point or beam moving along a circle/arc indicating phase."
      ),
    ],
  },
  {
    key: "charts",
    name: "Charts / Graphs",
    Icon: FaChartBar,
    components: [
      cs("Area Chart"),
      cs("Bar Chart"),
      cs("Pie Chart"),
      cs("Radar Chart"),
      cs("Scatter Chart"),
      cs("Heatmap (Chart)"),
    ],
  },
  {
    key: "cards",
    name: "Cards",
    Icon: FaClone,
    components: [cs("Info Card"), cs("Statistic Card"), cs("Action Card")],
  },
  {
    key: "tables",
    name: "Tables",
    Icon: FaTable,
    components: [
      cs("Simple Data Table"),
      cs("Sortable Table"),
      cs("Paginated Table"),
    ],
  },
  {
    key: "kpi",
    name: "KPI Tiles / Stat Boxes",
    Icon: BsKanban,
    components: [cs("Single KPI Tile"), cs("Multi-Stat Box")],
  },
  {
    key: "progress",
    name: "Progress / Spinners",
    Icon: FaHourglassHalf,
    components: [
      cs("Linear Progress Bar"),
      cs("Circular Progress"),
      cs("Loading Spinner"),
    ],
  },
  {
    key: "inputs",
    name: "Input Fields / Forms",
    Icon: FaAlignLeft,
    components: [
      cs("Text Input"),
      cs("Number Input"),
      cs("Date Picker"),
      cs("Search Bar"),
      cs("Full Form Example"),
    ],
  },
  {
    key: "dropdowns",
    name: "Dropdowns / Selects",
    Icon: FaBars,
    components: [cs("Simple Dropdown"), cs("Styled Select")],
  },
  {
    key: "toggles",
    name: "Toggles / Switches",
    Icon: IoToggle,
    components: [cs("Basic Toggle"), cs("Styled Switch")],
  },
  {
    key: "sliders",
    name: "Sliders",
    Icon: FaSlidersH,
    components: [cs("Range Slider"), cs("Value Slider")],
  },
  {
    key: "alerts",
    name: "Alerts / Notifications",
    Icon: FaBell,
    components: [
      cs("Info Alert"),
      cs("Success Alert"),
      cs("Warning Alert"),
      cs("Error Alert"),
      cs("Toast Notification"),
    ],
  },
  {
    key: "modals",
    name: "Modals / Dialogs",
    Icon: FaWindowMaximize,
    components: [cs("Confirmation Modal"), cs("Info Dialog")],
  },
  {
    key: "tabs",
    name: "Tabs",
    Icon: FaTasks,
    components: [cs("Horizontal Tabs"), cs("Vertical Tabs")],
  },
  {
    key: "timelines",
    name: "Timelines",
    Icon: FaProjectDiagram,
    components: [cs("Event Timeline")],
  },
  {
    key: "maps",
    name: "Maps (Styled)",
    Icon: FaMapMarkedAlt,
    components: [cs("Abstract Location Map")],
  },
  {
    key: "lists",
    name: "Lists",
    Icon: FaListUl,
    components: [cs("Simple List"), cs("Interactive List")],
  },
  {
    key: "tooltips",
    name: "Tooltips",
    Icon: FaCommentDots,
    components: [cs("Hover Tooltip")],
  },
  {
    key: "badges",
    name: "Badges / Tags",
    Icon: FaTags,
    components: [cs("Status Badge"), cs("Category Tag")],
  },
  {
    key: "accordions",
    name: "Accordions",
    Icon: FaBars,
    components: [cs("Collapsible Panel")],
  },
];
