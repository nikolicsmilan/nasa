// src/pages/Test/Test.jsx
import { useState, useEffect } from 'react';
import { testCategoriesData } from '../../locales/testCategoriesData';
import TestComponentCard from './components/TestComponentCard'; // Ezt továbbra is használjuk a többi kategóriához

const Test = () => {
  // ... (useState és useEffect hookok változatlanok) ...
  const [activeCategoryKey, setActiveCategoryKey] = useState(
    () => (testCategoriesData && testCategoriesData.length > 0 ? testCategoriesData[0].key : null)
  );

  const activeCategory = testCategoriesData && Array.isArray(testCategoriesData)
    ? testCategoriesData.find(cat => cat.key === activeCategoryKey)
    : null;

  const handleCategoryClick = (key) => {
    setActiveCategoryKey(key);
  };

  return (
    <div className="flex flex-col h-full w-full bg-black/90 items-center overflow-y-auto">
    {/* Felső Navigációs Sáv a Kategória Gombokkal */}
    {(testCategoriesData && testCategoriesData.length > 0) && (
      <div className="w-full sticky top-0 z-30 bg-neutral-900/80 backdrop-blur-md shadow-lg print:hidden shrink-0">
        {/* Konténer a gomboknak, ami görgethető lesz mobilon */}
        <div className="
          max-w-7xl mx-auto px-2 py-3 
          flex flex-nowrap gap-x-3 overflow-x-auto  /* VÍZSZINTES GÖRGETÉS, NINCS TÖRDELÉS */
          scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800/50 /* Opcionális: egyedi görgetősáv stílus */
          md:flex-wrap md:justify-center md:overflow-x-visible /* MD breakpointtól visszaáll a többsoros, nem görgethető */
        ">
            {testCategoriesData.map(({ key, name, Icon }) => (
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
      )}

      {/* Aktív Kategória Tartalmának Megjelenítése */}
      <main className="w-full flex-grow px-4 pb-8"> {/* Itt már nem kell overflow-y-auto, mert a szülő kezeli */}
        {activeCategory ? (
          <div className="max-w-7xl mx-auto"> {/* Ez a konténer adja a maximális szélességet */}
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              {activeCategory.name}
            </h2>

            {/* FELTÉTELES RENDERELÉS */}
            {(activeCategory.key === 'buttons' || activeCategory.key === 'colorPalette'|| activeCategory.key === 'apiTests') ? (
              // Teljes szélességű megjelenítés a "Buttons" és "Color Palette" kategóriáknak
              activeCategory.components && activeCategory.components.length > 0 ? (
                // Minden komponenst külön div-be rakunk a teljes szélességű megjelenítéshez
                activeCategory.components.map(comp => {
                  const ComponentToRender = comp.Component;
                  const propsToPass = comp.status === "coming_soon" ? { name: comp.name, description: comp.description, ...comp.props } : comp.props;
                  return (
                    // Ennek a div-nek kellene a témázott háttér és keret, ha akarod
                    <div
                      key={comp.key}
                      className={`
                        mb-8 p-4 md:p-6 rounded-xl shadow-xl 
                        bg-base-100/90 /* Sötét háttér a tartalomnak */
                        border-0 border-primary/20 /* Finom, témázott keret */
                        transition-all duration-300 ease-in-out
                        /* Hover effektek, ha kellenek a teljes szélességű blokkra */
                        /* hover:border-primary/40 hover:shadow-primary/20 */
                      `}
                    >
                      {/* Itt nem feltétlenül kell a komponens neve újra, ha a komponens maga kiírja */}
                      {/* <h3 className="text-xl font-semibold text-primary mb-4 text-center">{comp.name}</h3> */}
                      <ComponentToRender {...propsToPass} />
                    </div>
                  );
                })
              ) : (
                <div className="text-center text-neutral-500 py-6">No components in this category.</div>
              )
            ) : (
              // Kártyás megjelenítés az összes többi kategóriához
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.components && activeCategory.components.length > 0 ? (
                  activeCategory.components.map(comp => (
                    <TestComponentCard
                      key={comp.key}
                      name={comp.name}
                      status={comp.status}
                      Component={comp.Component}
                      props={comp.props}
                      description={comp.description}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center text-neutral-500 py-6">No components in this category.</div>
                )}
              </div>
            )}
          </div>
        ) : (
          activeCategoryKey && <div className="text-center text-error py-10">Error: Category with key "{activeCategoryKey}" not found.</div>
        )}
        {!activeCategoryKey && testCategoriesData && testCategoriesData.length > 0 && (
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
