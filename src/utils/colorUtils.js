// src/utils/colorUtils.js
import { parse, formatRgb } from 'culori'; // Szükséges a színkonverzióhoz

/**
 * Egyszerű segédfüggvény egy RGB szín világosítására/sötétítésére.
 * (Ez a függvény változatlan marad, mivel jelenleg nincs aktívan használva a fő problémakörben)
 */
/*
function lightenDarkenColor(color, percent) {
    let R, G, B;
    if (color.startsWith('#')) {
      R = parseInt(color.substring(1, 3), 16);
      G = parseInt(color.substring(3, 5), 16);
      B = parseInt(color.substring(5, 7), 16);
    } else {
      const rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      if (rgbMatch) {
        R = parseInt(rgbMatch[1]);
        G = parseInt(rgbMatch[2]);
        B = parseInt(rgbMatch[3]);
      } else {
        console.warn(`[lightenDarkenColor] Invalid color format: ${color}. Returning original.`);
        return color;
      }
    }
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);
    R = (R < 255) ? R : 255; G = (G < 255) ? G : 255; B = (B < 255) ? B : 255;
    R = (R > 0) ? R : 0; G = (G > 0) ? G : 0; B = (B > 0) ? B : 0;
    return `rgb(${R}, ${G}, ${B})`;
}*/

/**
 * Generál egy színskála tömböt egy alapszínből (vagy fix palettából).
 * (Ez a függvény változatlan marad, a PieChart használja)
 */
export const generateColorShades = (baseColor, count) => {
    if (!baseColor || count <= 0) return [];
    const shades = [];
    const fixedPalette = [
        'rgba(34, 211, 238, 0.8)', 'rgba(96, 165, 250, 0.8)', 'rgba(163, 230, 53, 0.8)',
        'rgba(74, 222, 128, 0.8)', 'rgba(34, 211, 238, 0.5)', 'rgba(96, 165, 250, 0.5)',
        'rgba(163, 230, 53, 0.5)', 'rgba(74, 222, 128, 0.5)', 'rgba(34, 211, 238, 0.3)',
        'rgba(96, 165, 250, 0.3)',
     ];
     for (let i = 0; i < count; i++) {
         shades.push(fixedPalette[i % fixedPalette.length]);
     }
    return shades;
};


// --- ÚJ FÜGGVÉNY HOZZÁADVA ---
/**
 * Konvertál egy OKLCH (vagy más culori által parse-olható) szín stringet RGBA stringgé.
 * @param {string} colorString - A bemeneti szín string (pl. "oklch(L C H / A)").
 * @param {number} [defaultAlpha=1] - Alapértelmezett alpha érték, ha a string nem tartalmazza.
 * @returns {string} Az RGBA string (pl. "rgba(R, G, B, A)"), vagy egy fallback szín hiba esetén.
 */
export function oklchToRgba(colorString, defaultAlpha = 1) {
  const fallback = `rgba(255, 255, 255, ${defaultAlpha})`; // Fehér fallback
  if (!colorString || typeof colorString !== 'string') {
      console.warn(`[oklchToRgba] Invalid colorString input:`, colorString);
      return fallback;
  }

  try {
    const parsed = parse(colorString); // Culori megpróbálja értelmezni (oklch, rgb, hex, stb.)
    if (!parsed) {
      console.warn(`[oklchToRgba] culori could not parse color: "${colorString}"`);
      return fallback;
    }

    // Az alpha érték kinyerése vagy alapértelmezett használata
    let alpha = defaultAlpha;
    if (parsed.alpha !== undefined) { // Ha a culori parse-olt alpha-t
        alpha = parsed.alpha;
    } else {
        // Próbáljuk meg manuálisan is kinyerni, ha specifikus formátum van (pl. OKLCH-ban a / után)
        const oklchAlphaMatch = colorString.match(/oklch\s*\([^)]+\/\s*([0-9.]+)\s*\)/);
        if (oklchAlphaMatch && oklchAlphaMatch[1]) {
            const parsedOklchAlpha = parseFloat(oklchAlphaMatch[1]);
            if (!isNaN(parsedOklchAlpha)) {
                alpha = Math.max(0, Math.min(1, parsedOklchAlpha));
            }
        }
        // Hasonló regex kellene RGBA-hoz is, ha a parsed.alpha undefined, de a culori.parse ezt általában jól kezeli.
    }
    alpha = Math.max(0, Math.min(1, alpha)); // Biztosítjuk, hogy 0 és 1 között legyen

    const rgbColor = formatRgb(parsed); // Konvertálás RGB stringgé: "rgb(R, G, B)"
    const rgbValuesMatch = rgbColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

    if (rgbValuesMatch) {
      return `rgba(${rgbValuesMatch[1]}, ${rgbValuesMatch[2]}, ${rgbValuesMatch[3]}, ${alpha})`;
    } else {
      console.warn(`[oklchToRgba] Could not format parsed color to RGB string:`, parsed);
      return fallback;
    }
  } catch (error) {
    console.error(`[oklchToRgba] Error converting color "${colorString}":`, error);
    return fallback;
  }
}