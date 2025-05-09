// src/pages/Test/components/ThemeColorPaletteShowcase.jsx
import React from 'react';
import { MyDataContext } from '../../../context/DataContext'; // Az aktuális téma nevéhez
import { oklchToRgba } from '../../../utils/colorUtils';
import { parse, formatHex } from 'culori';

// Az előzőleg definiált themeColorData adatstruktúra
// Ezt importálhatod egy külön fájlból is
const themeColorData = [
  // ... (másold be ide a fenti adatstruktúrát, kitöltve a TE színeiddel)
  // Példa kitöltés (csak Plasma, a többit neked kell):
   {
    themeName: 'plasma',
    colors: [
      { name: 'primary', value: 'oklch(74.6% 0.16 232.661)' }, // sky-400
      { name: 'primary-content', value: 'oklch(20.5% 0 0)' }, // neutral-900
      { name: 'secondary', value: 'oklch(55.6% 0 0)' }, // neutral-500
      { name: 'secondary-content', value: 'oklch(97% 0 0)' }, // neutral-100
      { name: 'accent', value: 'oklch(58.8% 0.158 241.966)' }, // sky-600
      { name: 'accent-content', value: '#ffffff' }, // white
      { name: 'neutral (text)', value: 'oklch(92.2% 0 0)' }, // neutral-200
      { name: 'base-100 (bg)', value: 'oklch(20.5% 0 0)' }, // neutral-900
      { name: 'base-200 (bg)', value: 'oklch(26.9% 0 0)' }, // neutral-800
      { name: 'base-300 (bg)', value: 'oklch(37.1% 0 0)' }, // neutral-700
      { name: 'base-content (text)', value: 'oklch(92.2% 0 0)' }, // neutral-200
      { name: 'info', value: 'rgb(191, 191, 191)' },
      { name: 'success', value: 'rgb(63, 178, 121)' },
      { name: 'warning', value: 'oklch(76.1% 0.201 89.53)' }, // amber-500
      { name: 'error', value: 'oklch(62.8% 0.222 29.15)' },   // red-500
      { name: 'dark', value: 'rgb(0,0,0)'},
      { name: 'asidebg', value: 'rgb(129, 171, 178)'}
    ]
  },
  // ... (Ion, Fusion, Quantum témák hasonlóan, a TE configodból vett értékekkel)
  // Példa Ion (csak primary):
  {
    themeName: 'ion',
    colors: [ { name: 'primary', value: 'oklch(84.1% 0.238 128.85)' } ]
  },
  // Példa Fusion (csak primary):
  {
    themeName: 'fusion',
    colors: [ { name: 'primary', value: 'oklch(76.2% 0.196 154.8)' } ]
  },
  // Példa Quantum (csak primary):
  {
    themeName: 'quantum',
    colors: [ { name: 'primary', value: 'oklch(70.7% 0.165 254.624)' } ]
  },
];

// Ugyanaz a konverter, mint a GradientBackgrounds-ban
const convertToAllFormats = (colorString) => {
  if (!colorString || typeof colorString !== 'string') return { original: 'N/A', rgba: 'N/A', hex: 'N/A' };
  const rgba = oklchToRgba(colorString); // Ez kezeli az OKLCH és RGB/RGBA bemenetet is
  let hex = 'N/A';
  try {
    // A HEX konverzióhoz próbáljuk meg az alpha csatorna nélküli részt parse-olni, ha OKLCH
    let parseableColor = colorString;
    if (colorString.startsWith('oklch') && colorString.includes('/')) {
      parseableColor = colorString.substring(0, colorString.lastIndexOf('/')).trim() + ')';
    } else if (colorString.startsWith('rgba')) {
      // RGBA-ból RGB-t csinálunk a HEX-hez
      const match = colorString.match(/rgba\((\d+,\s*\d+,\s*\d+),/);
      if (match) parseableColor = `rgb(${match[1]})`;
    }

    const culoriObj = parse(parseableColor);
    if (culoriObj) {
      hex = formatHex(culoriObj);
    }
  } catch (e) {
    // console.warn("Error converting to HEX for display:", e, "Original:", colorString);
  }
  return {
    original: colorString, // Az eredeti érték a configból
    rgba: rgba || 'N/A',
    hex: hex
  };
};


const ThemeColorPaletteShowcase = () => {
  const { choosenStyle } = MyDataContext(); // Az aktuális téma

  return (
    <div className="p-4 w-full">
      <h1 className="text-primary text-2xl mb-8 text-center">
        Theme Color Palette Showcase
      </h1>
      <p className="text-center text-neutral-400 text-sm mb-8">
        Showing semantic colors defined in `tailwind.config.js` for each theme.
        <br />
        The color swatch itself is rendered using the direct value from the config.
        <br />
        Current active theme: <span className="font-bold text-primary">{choosenStyle}</span>
      </p>

      {themeColorData.map((theme) => (
        <div key={theme.themeName} className="mb-10 p-4 border border-neutral-700 rounded-lg">
          <h2 className={`text-xl font-semibold mb-6 capitalize text-${theme.themeName === choosenStyle ? 'primary' : 'neutral-400'}`}>
            Theme: {theme.themeName} {theme.themeName === choosenStyle && "(Active)"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {theme.colors.map((colorDef) => {
              const formats = convertToAllFormats(colorDef.value);
              // A színminta hátterét az RGBA értékkel állítjuk be, amit az oklchToRgba ad
              const swatchBgColor = formats.rgba !== 'N/A' ? formats.rgba : 'transparent';

              return (
                <div key={colorDef.name} className="p-3 rounded-md bg-neutral-800 shadow">
                  <div
                    className="w-full h-20 rounded mb-2 border border-neutral-600"
                    style={{ backgroundColor: swatchBgColor }}
                    title={`Actual rendered color for ${colorDef.name}`}
                  ></div>
                  <p className="font-semibold text-sm text-primary mb-1 break-all">{colorDef.name}</p>
                  <div className="text-xs text-neutral-400 space-y-0.5 break-all">
                    <p>Config: <span className="text-neutral-300">{formats.original}</span></p>
                    <p>RGBA: <span className="text-neutral-300">{formats.rgba}</span></p>
                    <p>HEX: <span className="text-neutral-300">{formats.hex.toUpperCase()}</span></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeColorPaletteShowcase;