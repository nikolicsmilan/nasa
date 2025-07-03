// src/pages/Test/components/ThemeColorPaletteShowcase.jsx

import { oklchToRgba } from '../../../utils/colorUtils';
import { parse, formatHex } from 'culori';

const staticThemeColorData = [
  {
    themeName: 'plasma',
    colors: [
      { name: 'primary', value: 'oklch(74.6% 0.16 232.661)' },
      { name: 'primary-content', value: 'oklch(20.5% 0 0)' },
      { name: 'secondary', value: 'oklch(55.6% 0 0)' },
      { name: 'secondary-content', value: 'oklch(97% 0 0)' },
      { name: 'accent', value: 'oklch(58.8% 0.158 241.966)' },
      { name: 'accent-content', value: '#ffffff' },
      { name: 'neutral', value: 'oklch(92.2% 0 0)' },
      { name: 'base-100', value: 'oklch(20.5% 0 0)' },
      { name: 'base-200', value: 'oklch(26.9% 0 0)' },
      { name: 'base-300', value: 'oklch(37.1% 0 0)' },
      { name: 'base-content', value: 'oklch(92.2% 0 0)' },
      { name: 'info', value: 'oklch(68.5% 0.169 237.323)' }, // defaultTheme info
      { name: 'success', value: 'oklch(67.2% 0.213 156.48)' }, // defaultTheme success
      { name: 'warning', value: 'oklch(76.1% 0.201 89.53)' },
      { name: 'error', value: 'oklch(62.8% 0.222 29.15)' },
    ]
  },
  {
    themeName: 'ion',
    colors: [
      { name: 'primary', value: 'oklch(84.1% 0.238 128.85)' },
      { name: 'primary-content', value: 'oklch(20.5% 0 0)' },
      { name: 'secondary', value: 'oklch(55.6% 0 0)'},
      { name: 'secondary-content', value: 'oklch(97% 0 0)'},
      { name: 'accent', value: 'oklch(64.8% 0.2 131.684)'},
      { name: 'accent-content', value: 'oklch(20.5% 0 0)'},
      { name: 'neutral', value: 'oklch(92.2% 0 0)'},
      { name: 'base-100', value: 'oklch(20.5% 0 0)'},
      { name: 'base-200', value: 'oklch(26.9% 0 0)'},
      { name: 'base-300', value: 'oklch(37.1% 0 0)'},
      { name: 'base-content', value: 'oklch(92.2% 0 0)'},
      { name: 'info', value: 'rgb(191, 191, 191)'}, // ion specifikus
      { name: 'success', value: 'rgb(63, 178, 121)'}, // ion specifikus
      { name: 'warning', value: 'oklch(76.1% 0.201 89.53)'},
      { name: 'error', value: 'oklch(62.8% 0.222 29.15)'},
    ]
  },
  {
    themeName: 'fusion',
    colors: [
      { name: 'primary', value: 'oklch(76.2% 0.196 154.8)'},
      { name: 'primary-content', value: 'oklch(20.5% 0 0)'},
      { name: 'secondary', value: 'oklch(55.6% 0 0)'},
      { name: 'secondary-content', value: 'oklch(97% 0 0)'},
      { name: 'accent', value: 'oklch(58.6% 0.195 157.8)'},
      { name: 'accent-content', value: '#ffffff'},
      { name: 'neutral', value: 'oklch(92.2% 0 0)'},
      { name: 'base-100', value: 'oklch(20.5% 0 0)'},
      { name: 'base-200', value: 'oklch(26.9% 0 0)'},
      { name: 'base-300', value: 'oklch(37.1% 0 0)'},
      { name: 'base-content', value: 'oklch(92.2% 0 0)'},
      { name: 'info', value: 'rgb(191, 191, 191)'}, // fusion specifikus
      { name: 'success', value: 'rgb(63, 178, 121)'}, // fusion specifikus
      { name: 'warning', value: 'oklch(76.1% 0.201 89.53)'},
      { name: 'error', value: 'oklch(62.8% 0.222 29.15)'},
    ]
  },
  {
    themeName: 'quantum',
    colors: [
      { name: 'primary', value: 'oklch(70.7% 0.165 254.624)'}, // blue-400
      { name: 'primary-content', value: '#ffffff'},             // white
      { name: 'secondary', value: 'oklch(55.6% 0 0)'},            // neutral-500
      { name: 'secondary-content', value: 'oklch(97% 0 0)'},    // neutral-100
      { name: 'accent', value: 'oklch(54.6% 0.245 262.881)'},      // blue-600
      { name: 'accent-content', value: '#ffffff'},              // white
      { name: 'neutral', value: 'oklch(92.2% 0 0)'},              // neutral-200
      { name: 'base-100', value: 'oklch(20.5% 0 0)'},           // neutral-900
      { name: 'base-200', value: 'oklch(26.9% 0 0)'},           // neutral-800
      { name: 'base-300', value: 'oklch(37.1% 0 0)'},           // neutral-700
      { name: 'base-content', value: 'oklch(92.2% 0 0)'},       // neutral-200
      { name: 'info', value: 'rgb(40, 164, 241, 0.938)'},      // quantum specifikus
      { name: 'success', value: 'rgb(237, 237, 237)'},          // quantum specifikus
      { name: 'warning', value: 'oklch(76.1% 0.201 89.53)'},    // Ez ugyanaz, mint a többinél, lehet, hogy a defaultot használja
      { name: 'error', value: 'oklch(62.8% 0.222 29.15)'},       // Ez is ugyanaz
    ]
  },
];

// Segédfüggvény a színek konvertálásához (változatlan)
const convertToAllFormats = (colorString) => {
  if (!colorString || typeof colorString !== 'string') return { original: 'N/A', rgba: 'N/A', hex: 'N/A' };
  const rgba = oklchToRgba(colorString);
  let hex = 'N/A';
  try {
    let parseableColor = colorString;
    if (colorString.startsWith('oklch') && colorString.includes('/')) {
      parseableColor = colorString.substring(0, colorString.lastIndexOf('/')).trim() + ')';
    } else if (colorString.startsWith('rgba')) {
      const match = colorString.match(/rgba\((\d+,\s*\d+,\s*\d+),/);
      if (match) parseableColor = `rgb(${match[1]})`;
    }
    const culoriObj = parse(parseableColor);
    if (culoriObj) {
      hex = formatHex(culoriObj);
    }
  } catch (error) {
    console.log(error)
    // console.warn("Error converting to HEX for display:", e, "Original:", colorString);
  }
  return {
    original: colorString,
    rgba: rgba || 'N/A',
    hex: hex,
  };
};

const ThemeColorPaletteShowcase = () => {
  return (
    <div className="p-4 w-full">
      <h1 className="text-primary text-2xl mb-8 text-center">
        Theme Color Palette Showcase (Static)
      </h1>
      <p className="text-center text-neutral-400 text-sm mb-8">
        Showing semantic colors defined in `tailwind.config.js` for each theme.
        <br />
        The color swatch itself is rendered using the direct value from the config.
      </p>

      {staticThemeColorData.map((theme) => (
        <div key={theme.themeName} className="mb-10 p-4 border border-neutral-700 rounded-lg bg-base-200/70">
          <h2 className={`text-xl font-semibold mb-6 capitalize text-neutral-300`}>
            Theme: <span className="text-primary">{theme.themeName}</span>
          </h2>
          {theme.colors && theme.colors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
              {theme.colors.map((colorDef) => {
                if (!colorDef || !colorDef.name || typeof colorDef.value === 'undefined') {
                  console.warn('Invalid color definition in staticThemeColorData:', colorDef, 'for theme:', theme.themeName);
                  return null;
                }
                const formats = convertToAllFormats(colorDef.value);
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
          ) : (
            <p className="text-neutral-500 text-center py-4">
              No colors defined in `staticThemeColorData` for the theme: {theme.themeName}.
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThemeColorPaletteShowcase;