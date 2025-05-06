// src/pages/Test/components/DynamicButtonExamples.jsx
// VERZIÓ 10: HELYESEN a NÉGY statikus példának megfelelő dinamikus gomb

import React from 'react';

const DynamicButtonExamples = () => {
  // Alap osztályok (Témázott keret/hover)
  const baseClasses = `
    w-40 h-32 md:w-48 md:h-32 rounded-xl shadow-xl backdrop-blur-md
    flex flex-col items-center justify-center p-3 md:p-4 cursor-default
    transition-colors duration-300 ease-in-out relative overflow-hidden
    border border-button-theme hover:border-button-theme-hover hover:shadow-button-theme-hover
  `;

  // A szöveg glow osztály a configból
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

      {/* A NÉGY stílustípusú gomb egymás mellett */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">

        {/* 1. Panel Style (GradientBackgrounds megfelelője) */}
        {/* Háttér: téma -> téma sötétebb; Szöveg: téma (NEM világít) */}
        <div className={`${baseClasses} bg-panel-gradient`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base md:text-lg text-primary">
              Panel Style
            </span>
            <span className="text-neutral-300 text-xs md:text-sm mt-1">Theme BG</span>
          </div>
        </div>

        {/* 2. Accent Stílus (ThemeButtons megfelelője) */}
        {/* Háttér: neutral -> téma; Szöveg: téma (NEM világít) */}
        <div className={`${baseClasses} bg-button-accent-gradient`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base md:text-lg text-primary">
              Accent
            </span>
            <span className="text-neutral-300 text-xs md:text-sm mt-1">No Text Glow</span>
          </div>
        </div>

        {/* 3. Glowing Accent Stílus (GlowingButtons megfelelője) */}
        {/* Háttér: neutral -> téma; Szöveg: téma (VILÁGÍT) */}
        <div className={`${baseClasses} bg-button-accent-gradient`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Alkalmazzuk a drop-shadow utility-t */}
            <span className={`font-bold text-base md:text-lg text-primary ${textGlowClass}`}>
              Glowing
            </span>
            <span className="text-neutral-300 text-xs md:text-sm mt-1">Text Glow</span>
          </div>
        </div>

        {/* 4. Neutral Stílus (NeutralGradientThemeButtons megfelelője, átnevezve) */}
        {/* Háttér: neutral -> neutral; Szöveg: téma (VILÁGÍT) */}
        <div className={`${baseClasses} bg-button-neutral-gradient`}>
          <div className="relative z-10 flex flex-col items-center text-center">
             {/* Alkalmazzuk a drop-shadow utility-t */}
            <span className={`font-bold text-base md:text-lg text-primary ${textGlowClass}`}>
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