import { parse, formatRgb } from 'culori';

/**
 * Bármilyen CSS szín stringet megpróbál RGBA stringgé alakítani.
 * @param {string} colorString - A bemeneti szín (pl. hex, rgb).
 * @returns {string} A szín RGBA formátumban.
 */
export function formatColorToRgba(colorString) {
  const fallbackColor = 'rgba(255, 255, 255, 1)';
  if (!colorString) return fallbackColor;

  try {
    if (typeof colorString === 'string' && colorString.startsWith('rgba')) {
      return colorString;
    }
    if (typeof colorString === 'string' && colorString.startsWith('rgb')) {
      return colorString.replace('rgb(', 'rgba(').replace(')', ', 1)');
    }
    
    const parsedColor = parse(colorString);
    if (!parsedColor) return fallbackColor;

    const rgbString = formatRgb(parsedColor);
    const rgbValuesMatch = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    
    if (rgbValuesMatch) {
      return `rgba(${rgbValuesMatch[1]}, ${rgbValuesMatch[2]}, ${rgbValuesMatch[3]}, 1)`;
    }
    return fallbackColor;
  } catch (error) {
    console.error(`[formatColorToRgba] Error converting color: ${colorString}`, error);
    return fallbackColor;
  }
}