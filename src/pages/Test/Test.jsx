// src/pages/Test/Test.jsx
import { useState, useEffect } from 'react';
import { testCategoriesData } from '../../locales/testCategoriesData'; // HELYES IMPORT NÉV
import TestComponentCard from './components/TestComponentCard';

const Test = () => {
  useEffect(() => {
    console.log("[Test.jsx] Initial testCategoriesData upon mount:", testCategoriesData);
    if (!testCategoriesData || !Array.isArray(testCategoriesData) || testCategoriesData.length === 0) {
      console.error("[Test.jsx] ERROR: testCategoriesData is empty, not an array, or not loaded! Check 'src/locales/testCategoriesData.js'.");
    }
  }, []);

  const [activeCategoryKey, setActiveCategoryKey] = useState(
    () => (testCategoriesData && testCategoriesData.length > 0 ? testCategoriesData[0].key : null)
  );

  useEffect(() => {
    console.log(`[Test.jsx] activeCategoryKey is now: "${activeCategoryKey}"`);
    if (testCategoriesData && Array.isArray(testCategoriesData)) { // HELYES VÁLTOZÓNÉV
        const currentActiveCategory = testCategoriesData.find(cat => cat.key === activeCategoryKey); // HELYES VÁLTOZÓNÉV
        console.log("[Test.jsx] Current activeCategory object corresponding to key:", currentActiveCategory);
        if (currentActiveCategory) {
            if (!currentActiveCategory.components || !Array.isArray(currentActiveCategory.components)) {
                console.error(`[Test.jsx] ERROR: The category "${currentActiveCategory.name}" (key: "${activeCategoryKey}") is MISSING or has an INVALID 'components' array! Value:`, currentActiveCategory.components);
            } else {
                console.log(`[Test.jsx] Components array for category "${currentActiveCategory.name}":`, currentActiveCategory.components);
            }
        } else if (activeCategoryKey) {
          console.warn(`[Test.jsx] No category found for key: "${activeCategoryKey}" in testCategoriesData.`); // HELYES VÁLTOZÓNÉV
        }
    }
  }, [activeCategoryKey]);

  // JAVÍTOTT DEFINÍCIÓ:
  const activeCategory = testCategoriesData && Array.isArray(testCategoriesData)
    ? testCategoriesData.find(cat => cat.key === activeCategoryKey)
    : null;

  const handleCategoryClick = (key) => {
    console.log(`[Test.jsx] Category button clicked. Setting activeCategoryKey to: "${key}"`);
    setActiveCategoryKey(key);
  };

  return (
    <div className="flex flex-col h-full w-full bg-black/90  items-center overflow-y-scroll">
      {/* Felső Navigációs Sáv a Kategória Gombokkal */}

     
      {(testCategoriesData && Array.isArray(testCategoriesData) && testCategoriesData.length > 0) ? ( // HELYES VÁLTOZÓNÉV MINDENHOL
        <div className="w-full sticky top-0 z-30 bg-neutral-900/80 backdrop-blur-md shadow-lg p-3 mb-6 print:hidden shrink-0">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-3 gap-y-2">
            {testCategoriesData.map(({ key, name, Icon }) => ( // HELYES VÁLTOZÓNÉV
              <button
                key={key}
                onClick={() => handleCategoryClick(key)}
                title={name}
                className={`
                  flex items-center justify-center gap-2 px-3 py-1.5 rounded-md
                  text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out
                  border border-transparent
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800
                  ${activeCategoryKey === key
                    ? 'bg-primary text-primary-content shadow-lg scale-105 ring-1 ring-primary'
                    : 'bg-neutral-700/70 text-neutral-300 hover:bg-neutral-600/90 hover:text-white'
                  }
                `}
              >
                {Icon && <Icon className="text-sm sm:text-base flex-shrink-0" />}
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-error py-10">Error: 'testCategoriesData' is not a valid array or is empty. Please check its definition in `locales/testCategoriesData.js`.</div>
      )}

      {/* Aktív Kategória Komponenseinek Megjelenítése Kártyákban */}
      <main className="w-full flex-grow px-4 pb-8 overflow-y-auto">
        {activeCategory ? (
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-primar mb-6 text-center">
              {activeCategory.name}
            </h2>
            {activeCategory.components && Array.isArray(activeCategory.components) && activeCategory.components.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.components.map(comp => (
                  <TestComponentCard
                    key={comp.key}
                    name={comp.name}
                    status={comp.status}
                    Component={comp.Component}
                    props={comp.props}
                    description={comp.description}
                  />
                ))}
              </div>
            ) : (
              <div className="col-span-full text-center text-neutral-500 py-6">
                No components are defined for the category: "{activeCategory.name}".
                <br />
                Please ensure the 'components' array is populated in 'testCategoriesData.js' for the category with key '{activeCategory.key}'.
              </div>
            )}
          </div>
        ) : (
          activeCategoryKey && <div className="text-center text-error py-10">Error: Category with key "{activeCategoryKey}" was not found in 'testCategoriesData'.</div> // HELYES VÁLTOZÓNÉV
        )}
        {!activeCategoryKey && testCategoriesData && testCategoriesData.length > 0 && ( // HELYES VÁLTOZÓNÉV
          <div className="text-center text-neutral-500 py-10">Please select a category from above.</div>
        )}
      </main>
    </div>
  );
};

export default Test;






/*// src/pages/Test/Test.jsx

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

export default Test;*/
