// src/locales/testPageComponents.js
import DynamicButtonExamples from "../pages/Test/components/DynamicButtonExamples";
import GradientBackgrounds from "../pages/Test/components/GradientBackgrounds";
import ThemeButtons from "../pages/Test/components/ThemeButtons";
import GlowingButtons from "../pages/Test/components/GlowingButtons";
import NeutralGradientThemeButtons from "../pages/Test/components/NeutralGradientThemeButtons";
import ThemeColorPaletteShowcase from "../pages/Test/components/ThemeColorPaletteShowcase";
import SpeedGauges from "../pages/Test/components/SpeedGauges";

// Ikon importok (példák, cseréld le a neked tetszőkre)
import { FaPalette, FaTachometerAlt, FaSquareFull, FaRegLightbulb, FaAdjust, FaObjectUngroup, FaShieldAlt } from 'react-icons/fa';
import { BsCircleHalf } from "react-icons/bs";


export const testPageComponentsData = [
  {
    key: "dynamicButtons",
    name: "Dynamic Buttons",
    Component: DynamicButtonExamples,
    Icon: FaObjectUngroup, // Példa ikon
    description: "Theme-aware buttons using utility classes."
  },
  {
    key: "gradients",
    name: "Static Gradients",
    Component: GradientBackgrounds,
    Icon: BsCircleHalf, // Példa ikon
    description: "Static gradient backgrounds for reference."
  },
  {
    key: "themeButtons",
    name: "Static Theme Buttons",
    Component: ThemeButtons,
    Icon: FaShieldAlt, // Példa ikon
    description: "Buttons with neutral-to-theme static gradients."
  },
  {
    key: "glowingButtons",
    name: "Static Glowing Buttons",
    Component: GlowingButtons,
    Icon: FaRegLightbulb, // Példa ikon
    description: "Buttons with neutral-to-theme static gradients and text glow."
  },
  {
    key: "neutralButtons",
    name: "Static Neutral Buttons",
    Component: NeutralGradientThemeButtons,
    Icon: FaAdjust, // Példa ikon
    description: "Buttons with neutral-to-neutral static gradients and text glow."
  },
  {
    key: "palette",
    name: "Color Palette",
    Component: ThemeColorPaletteShowcase,
    Icon: FaPalette, // Példa ikon
    description: "Showcase of semantic colors for each theme."
  },
  {
    key: "speedGauges",
    name: "Speed Gauges",
    Component: SpeedGauges,
    Icon: FaTachometerAlt, // Példa ikon
    description: "Speed gauge component test."
  },
  // Ha a SpeedGauges-ból kettő kell, akkor kétszer vedd fel, vagy oldd meg a komponensen belül
  // {
  //   key: "speedGauges2",
  //   name: "Speed Gauges (Copy)",
  //   Component: SpeedGauges,
  //   Icon: FaTachometerAlt,
  //   description: "Another instance of the speed gauge."
  // },
];