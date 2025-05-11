// src/pages/Test/components/DynamicButtonExamples.jsx
// React import nem feltétlenül kell, ha nincs state vagy lifecycle

const DynamicButtonExamples = () => {
  // Alap osztályok (Témázott keret/hover)
  // Kicsit csökkentettem a mobil méretet és a paddingot, hogy jobban elférjenek
  const baseClasses = `
    rounded-xl shadow-xl backdrop-blur-md
    flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 cursor-default
    transition-colors duration-300 ease-in-out relative overflow-hidden
    border border-button-theme hover:border-button-theme-hover hover:shadow-button-theme-hover
    w-full h-32  /* Mobilon teljes szélesség a grid cellán belül, fix magasság */
    sm:w-40 sm:h-32 /* Kisebb képernyőtől (sm) már a w-40 érvényesül */
    md:w-48 md:h-32 /* md breakpointtól a nagyobb méret */
  `;

  const textGlowClass = 'drop-shadow-text-theme';

  return (
    <div className="p-4 w-full">
      <h1 className="text-primary text-xl mb-6 text-center">
        Dynamic Button Examples (Theme Aware)
      </h1>
      <p className="text-center text-neutral-400 text-sm mb-8">
        These buttons use the theme-dependent utility classes from the config. <br/>
        Their appearance should change when you switch the global theme.
      </p>

      {/* GRID ELRENDEZÉS HASZNÁLATA */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">

        {/* 1. Panel Style */}
        <div className={`${baseClasses} bg-panel-gradient`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-sm sm:text-base md:text-lg text-primary">
              Panel Style
            </span>
            <span className="text-neutral-300 text-xs md:text-sm mt-1">Theme BG</span>
          </div>
        </div>

        {/* 2. Accent Stílus */}
        <div className={`${baseClasses} bg-button-accent-gradient`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-sm sm:text-base md:text-lg text-primary">
              Accent
            </span>
            <span className="text-neutral-300 text-xs md:text-sm mt-1">No Text Glow</span>
          </div>
        </div>

        {/* 3. Glowing Accent Stílus */}
        <div className={`${baseClasses} bg-button-accent-gradient`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className={`font-bold text-sm sm:text-base md:text-lg text-primary ${textGlowClass}`}>
              Glowing
            </span>
            <span className="text-neutral-300 text-xs md:text-sm mt-1">Text Glow</span>
          </div>
        </div>

        {/* 4. Neutral Stílus */}
        <div className={`${baseClasses} bg-button-neutral-gradient`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className={`font-bold text-sm sm:text-base md:text-lg text-primary ${textGlowClass}`}>
              Neutral
            </span>
            <span className="text-neutral-300 text-xs md:text-sm mt-1">Text Glow</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DynamicButtonExamples;