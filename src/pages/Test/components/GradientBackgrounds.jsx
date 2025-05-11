// src/pages/Test/components/GradientBackgrounds.jsx
// React import nem szükséges
import { oklchToRgba } from '../../../utils/colorUtils';
import { parse, formatHex } from 'culori';

const gradientData = [
  // ... (gradientData változatlan)
  {
    name: "Plasma",
    className: "gradient-bg-plasma",
    oklchFrom: "oklch(29.3% 0.066 243.157 / 0.95)",
    oklchTo: "oklch(44.3% 0.11 240.79 / 0.95)"
  },
  {
    name: "Ion",
    className: "gradient-bg-ion",
    oklchFrom: "oklch(27.4% 0.072 132.109 / 0.95)",
    oklchTo: "oklch(53.2% 0.157 131.589 / 0.95)"
  },
  {
    name: "Fusion",
    className: "gradient-bg-fusion",
    oklchFrom: "oklch(27.4% 0.072 158.8 / 0.95)",
    oklchTo: "oklch(51.4% 0.163 158.4 / 0.95)"
  },
  {
    name: "Quantum",
    className: "gradient-bg-quantum",
    oklchFrom: "oklch(28.2% 0.091 267.935 / 0.95)",
    oklchTo: "oklch(42.4% 0.199 265.638 / 0.95)"
  }
];

const convertToAllFormats = (oklchString) => {
  // ... (convertToAllFormats változatlan) ...
  if (!oklchString) return { oklch: 'N/A', rgba: 'N/A', hex: 'N/A' };
  const rgba = oklchToRgba(oklchString);
  let hex = 'N/A';
  try {
    const oklchWithoutAlpha = oklchString.includes('/')
      ? oklchString.substring(0, oklchString.lastIndexOf('/')).trim() + ')'
      : oklchString;
    const culoriObj = parse(oklchWithoutAlpha);
    if (culoriObj) {
      hex = formatHex(culoriObj);
    }
  } catch (e) {
    console.warn("Error converting to HEX:", e, "Original OKLCH:", oklchString);
  }
  return {
    oklch: oklchString,
    rgba: rgba || 'N/A',
    hex: hex
  };
};

const GradientBackgrounds = () => {
  return (
    <div className="p-4">
      <h1 className="text-primary text-xl mb-6 text-center">
        Gradient Backgrounds (Static Test)
      </h1>
      {/* Grid elrendezés itt is */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {gradientData.map((grad) => {
          const fromColors = convertToAllFormats(grad.oklchFrom);
          const toColors = convertToAllFormats(grad.oklchTo);

          return (
            // Egy grid cella tartalma
            <div key={grad.name} className="flex flex-col items-center gap-2 text-xs text-neutral-400">
              {/* A színminta négyzet */}
              <div className={`
                w-full h-32 /* Mobilon teljes cellaszélesség, fix magasság */
                sm:w-40 sm:h-40 /* sm breakpointtól */
                md:w-48 md:h-48 /* md breakpointtól */
                rounded-xl backdrop-blur-md 
                ${grad.className}`}
              >
              </div>
              {/* A szöveges információk */}
              <div className="text-center w-full sm:w-48 break-words mt-1">
                <p className="font-semibold text-base sm:text-lg text-primary">{grad.name}</p>
                <p className="mt-1 text-xs sm:text-sm">From:</p>
                <p>OKLCH: <span className="text-neutral-200">{fromColors.oklch}</span></p>
                <p>RGBA: <span className="text-neutral-200">{fromColors.rgba}</span></p>
                <p>HEX: <span className="text-neutral-200">{fromColors.hex.toUpperCase()}</span></p>
                <p className="mt-1 text-xs sm:text-sm">To:</p>
                <p>OKLCH: <span className="text-neutral-200">{toColors.oklch}</span></p>
                <p>RGBA: <span className="text-neutral-200">{toColors.rgba}</span></p>
                <p>HEX: <span className="text-neutral-200">{toColors.hex.toUpperCase()}</span></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GradientBackgrounds;
