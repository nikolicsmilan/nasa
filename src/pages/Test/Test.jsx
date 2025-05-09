// src/pages/Test/Test.jsx

//testComponentsData.js t létre kell hozni
import GradientBackgrounds from "./components/GradientBackgrounds";
import ThemeButtons from "./components/ThemeButtons";
import GlowingButtons from "./components/GlowingButtons";
import NeutralGradientThemeButtons from "./components/NeutralGradientThemeButtons";
import SpeedGauges from "./components/SpeedGauges";
import DynamicButtonExamples from "./components/DynamicButtonExamples";
import ThemeColorPaletteShowcase from "./components/ThemeColorPaletteShowcase";
const Test = () => {
  // Opcionális: Hozzáadhatunk state-et, hogy teszteljük a változó sebességet

  return (
    // Használjunk egy flex konténert a jobb elrendezéshez és sötét hátteret a láthatósághoz
    <div className="flex flex-col  h-screen  overflow-y-auto w-full gap-10 bg-black/80 border-0">
      <DynamicButtonExamples/>
      <GradientBackgrounds />
      <ThemeButtons />
      <GlowingButtons />
      <NeutralGradientThemeButtons />
      <ThemeColorPaletteShowcase/>
      <SpeedGauges />
      <SpeedGauges />    
    </div>
  );
};

export default Test;
