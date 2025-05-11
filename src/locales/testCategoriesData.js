// src/locales/testCategoriesData.js
import DynamicButtonExamples from "../pages/Test/components/DynamicButtonExamples";
import GradientBackgrounds from "../pages/Test/components/GradientBackgrounds";
import ThemeButtons from "../pages/Test/components/ThemeButtons";
import GlowingButtons from "../pages/Test/components/GlowingButtons";
import NeutralGradientThemeButtons from "../pages/Test/components/NeutralGradientThemeButtons";
import ThemeColorPaletteShowcase from "../pages/Test/components/ThemeColorPaletteShowcase";
import SpeedGauges from "../components/gauges/SpeedGauges"; // Globális helyről
import ComingSoonCard from "../pages/Test/components/ComingSoonCard"; // Test oldal specifikus

// Ikon importok
import {
  FaMousePointer, FaPalette, FaTachometerAlt, FaChartBar, FaClone, FaTable,
  FaRegSun, FaTasks, FaSlidersH, FaBell, FaWindowMaximize, FaAlignLeft, FaProjectDiagram,
  FaMapMarkedAlt, FaListUl, FaCommentDots, FaTags, FaBars, FaHourglassHalf, FaSpinner
} from 'react-icons/fa';
import { BsCircleHalf, BsCardText, BsKanban, BsLayoutTextWindowReverse, BsCalendarEvent } from "react-icons/bs";
import { IoToggle, IoChatbubblesOutline } from "react-icons/io5";
import { MdInput, MdOutlineViewDay, MdTimeline } from "react-icons/md";


// Segédfüggvény a "Coming Soon" komponensek gyors létrehozásához
const cs = (name, description = "This component is under development.") => ({
  key: name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
  name: name,
  Component: ComingSoonCard, // Mindig a placeholder komponenst használjuk
  status: "coming_soon",
  props: { name, description } // A placeholdernek átadandó propok
});

export const testCategoriesData = [ // <<< FIGYELEM: Az exportált név itt HELYES!
  {
    key: "buttons",
    name: "Buttons",
    Icon: FaMousePointer,
    components: [
      { key: "dynamicButtons", name: "Dynamic Buttons", Component: DynamicButtonExamples, status: "ready", description: "Theme-aware buttons using utility classes." },
      { key: "themeButtons", name: "Static Theme Buttons", Component: ThemeButtons, status: "ready", description: "Buttons with neutral-to-theme static gradients." },
      { key: "glowingButtons", name: "Static Glowing Buttons", Component: GlowingButtons, status: "ready", description: "Buttons with neutral-to-theme static gradients and text glow." },
      { key: "neutralButtons", name: "Static Neutral Buttons", Component: NeutralGradientThemeButtons, status: "ready", description: "Buttons with neutral-to-neutral static gradients and text glow." },
    ]
  },
  {
    key: "colorPalette",
    name: "Color Palette",
    Icon: FaPalette,
    components: [
      { key: "themePalette", name: "Theme Color Palette", Component: ThemeColorPaletteShowcase, status: "ready", description: "Showcase of semantic colors for each theme." }
    ]
  },
  {
    key: "gauges",
    name: "Gauges",
    Icon: FaTachometerAlt,
    components: [
      { key: "speedGauge", name: "Speed Gauge", Component: SpeedGauges, status: "ready", description: "Displays speed on a gauge." },
      cs("Pulse Radar", "Concentric circles pulse or illuminate based on a value."),
      cs("Energy Core", "A central core's brightness/color/pulsation changes."),
      cs("Data Stream", "Animated lines or dots flow between points or along a path."),
      cs("HexGrid Status", "Hexagonal grid where cell color/brightness changes by status."),
      cs("Linear Gauge", "Straight bar indicating a value with fill or gradient."),
      cs("Quantum Indicator", "Abstract, evolving pattern changing color/intensity."),
      cs("Spectrum Display", "Bar chart-like display for frequency or distribution."),
      cs("Orbital Map", "Simplified 2D/2.5D view of celestial bodies and orbits."),
      cs("Threat Dial", "Dashboard-style dial pointing to a threat level."),
      cs("Chrono Display", "Futuristic display of time-related data."),
      cs("Resource Bars", "Multiple LinearGauges for different resources."),
      cs("Glyph Status", "Central symbol (glyph) changes based on status."),
      cs("Network Node Graph", "Nodes and connecting lines indicating traffic or status."),
      cs("Heatmap Grid", "Grid where cell color shows intensity (heatmap)."),
      cs("Phase Indicator", "Point or beam moving along a circle/arc indicating phase."),
    ]
  },
  {
    key: "charts",
    name: "Charts / Graphs",
    Icon: FaChartBar,
    components: [
        cs("Area Chart", "Displays data trends over time or categories."),
        cs("Bar Chart", "Compares values across different categories."),
        cs("Pie Chart", "Shows proportions of a whole."),
        cs("Radar Chart", "Multivariate data visualization on a circular grid."),
        cs("Scatter Plot", "Shows relationships between two numerical variables."),
        cs("Heatmap", "Visualizes data magnitude as color in a 2D matrix.")
    ]
  },
  {
    key: "cards",
    name: "Cards",
    Icon: FaClone,
    components: [
        cs("Info Card", "Displays concise information."),
        cs("Statistic Card", "Highlights a key statistic or metric."),
        cs("Action Card", "A card that includes interactive elements or CTAs.")
    ]
  },
  {
    key: "tables",
    name: "Tables",
    Icon: FaTable,
    components: [
        cs("Simple Data Table", "Basic tabular data presentation."),
        cs("Sortable Table", "Table with clickable column headers for sorting."),
        cs("Paginated Table", "Table that breaks down large datasets into pages.")
    ]
  },
  {
    key: "kpi",
    name: "KPI Tiles / Stat Boxes",
    Icon: BsKanban,
    components: [
        cs("Single KPI Tile", "Displays a single Key Performance Indicator."),
        cs("Multi-Stat Box", "A compact box showing multiple related statistics.")
    ]
  },
  {
    key: "progress",
    name: "Progress / Spinners",
    Icon: FaSpinner, // FaHourglassHalf is a good alternative
    components: [
        cs("Linear Progress Bar", "Indicates progress along a line."),
        cs("Circular Progress", "Indicates progress in a circular form."),
        cs("Loading Spinner", "Generic loading animation.")
    ]
  },
  {
    key: "inputs",
    name: "Input Fields / Forms",
    Icon: MdInput,
    components: [
        cs("Text Input", "Basic text entry field."),
        cs("Number Input", "For numerical data entry."),
        cs("Date Picker", "Allows selection of a date."),
        cs("Search Bar", "Input field optimized for search queries."),
        cs("Full Form Example", "A complete form with various input types.")
    ]
  },
  {
    key: "dropdowns",
    name: "Dropdowns / Selects",
    Icon: BsLayoutTextWindowReverse, // FaBars is also good
    components: [
        cs("Simple Dropdown", "Basic dropdown menu for selections."),
        cs("Styled Select", "Custom-styled select element.")
    ]
  },
  {
    key: "toggles",
    name: "Toggles / Switches",
    Icon: IoToggle,
    components: [
        cs("Basic Toggle", "Simple on/off switch."),
        cs("Styled Switch", "A visually enhanced toggle switch.")
    ]
  },
  {
    key: "sliders",
    name: "Sliders",
    Icon: FaSlidersH,
    components: [
        cs("Range Slider", "Allows selection of a range of values."),
        cs("Value Slider", "Allows selection of a single value from a range.")
    ]
  },
  {
    key: "alerts",
    name: "Alerts / Notifications",
    Icon: FaBell,
    components: [
        cs("Info Alert", "Informational message box."),
        cs("Success Alert", "Success message box."),
        cs("Warning Alert", "Warning message box."),
        cs("Error Alert", "Error message box."),
        cs("Toast Notification", "Brief, auto-expiring notification.")
    ]
  },
  {
    key: "modals",
    name: "Modals / Dialogs",
    Icon: FaWindowMaximize,
    components: [
        cs("Confirmation Modal", "Modal asking for user confirmation."),
        cs("Info Dialog", "Dialog box displaying information.")
    ]
  },
  {
    key: "tabs",
    name: "Tabs",
    Icon: MdOutlineViewDay, // FaTasks is good too
    components: [
        cs("Horizontal Tabs", "Content organized into horizontal tabs."),
        cs("Vertical Tabs", "Content organized into vertical tabs.")
    ]
  },
  {
    key: "timelines",
    name: "Timelines",
    Icon: MdTimeline, // FaProjectDiagram is also good
    components: [
        cs("Event Timeline", "Chronological display of events.")
    ]
  },
  {
    key: "maps",
    name: "Maps (Styled)",
    Icon: FaMapMarkedAlt,
    components: [
        cs("Abstract Location Map", "Stylized map for displaying locations.")
    ]
  },
  {
    key: "lists",
    name: "Lists",
    Icon: FaListUl,
    components: [
        cs("Simple List", "Basic item listing."),
        cs("Interactive List", "List with clickable/selectable items.")
    ]
  },
  {
    key: "tooltips",
    name: "Tooltips",
    Icon: IoChatbubblesOutline, // FaCommentDots is also good
    components: [
        cs("Hover Tooltip", "Informational pop-up on hover.")
    ]
  },
  {
    key: "badges",
    name: "Badges / Tags",
    Icon: FaTags,
    components: [
        cs("Status Badge", "Small indicator for status (e.g., New, Active)."),
        cs("Category Tag", "Descriptive tag for categorization.")
    ]
  },
  {
    key: "accordions",
    name: "Accordions",
    Icon: FaBars, // (Could be more specific like FaChevronDown)
    components: [
        cs("Collapsible Panel", "Content panel that can be expanded/collapsed.")
    ]
  }
];