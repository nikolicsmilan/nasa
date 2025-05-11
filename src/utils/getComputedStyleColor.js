// src/utils/getComputedStyleColor.js
import { parse, formatRgb } from 'culori'; // Importáljuk a szükséges culori funkciókat

/**
 * Segédfüggvény egy DOM elem számított (computed) szövegszínének lekérdezéséhez
 * és annak RGBA formátumra alakításához, ha szükséges (pl. OKLCH esetén).
 * @param {string} elementId - Az elem ID-ja, aminek a színét ki kell olvasni.
 * @returns {string} A szín RGBA formátumban (pl. "rgba(34, 211, 238, 1)"), vagy egy fallback szín hiba esetén.
 */
export const getComputedStyleColor = (elementId) => {
  console.log(`[getComputedStyleColor] Called for element ID: "${elementId}"`); // Log 1: Függvény hívás
  const fallbackColor = 'rgba(255, 255, 255, 1)'; // Alapértelmezett fehér, ha baj van

  // 1. Elem lekérdezése
  const tempDiv = document.getElementById(elementId);
  if (!tempDiv) {
    console.warn(`[getComputedStyleColor] Element with ID "${elementId}" not found.`);
    return fallbackColor;
  }
  console.log(`[getComputedStyleColor] Element found:`, tempDiv); // Log 2: Elem megtalálva

  try {
    // 2. Számított szín kiolvasása
    const computedStyle = window.getComputedStyle(tempDiv);
    const colorString = computedStyle.color;
    console.log(`[getComputedStyleColor] Raw computed color string for "${elementId}":`, colorString); // Log 3: Nyers szín string

    if (!colorString) {
        console.warn(`[getComputedStyleColor] Could not get computed color for ID "${elementId}".`);
        return fallbackColor;
    }

    // 3. Formátum ellenőrzése és konverzió (ha OKLCH)
    if (colorString.startsWith('oklch')) {
      console.log(`[getComputedStyleColor] Detected OKLCH format.`); // Log 4: OKLCH észlelve
      // Próbáljuk meg culori-val parse-olni és RGB-re formázni
      const parsedColor = parse(colorString); // culori megpróbálja értelmezni
      console.log(`[getComputedStyleColor] culori parse result:`, parsedColor); // Log 5: Parse eredmény

      if (parsedColor) {
        // Sikeres parse, most formázzuk RGB stringgé
        const rgbString = formatRgb(parsedColor); // Pl. "rgb(34, 211, 238)"
        console.log(`[getComputedStyleColor] Formatted to RGB string:`, rgbString); // Log 6: Formázott RGB

        // Alakítsuk át RGBA-ra (feltételezzük, hogy az alpha 1, ha nincs megadva)
        // Próbáljuk meg kinyerni az alfát az eredeti oklch stringből, ha van
        let alpha = 1;
        const alphaMatch = colorString.match(/oklch\(.+?\/\s*([0-9.]+)\s*\)/);
        if (alphaMatch && alphaMatch[1]) {
            const parsedAlpha = parseFloat(alphaMatch[1]);
            if (!isNaN(parsedAlpha)) {
                alpha = Math.max(0, Math.min(1, parsedAlpha)); // Biztosítjuk, hogy 0 és 1 között legyen
            }
        }
        console.log(`[getComputedStyleColor] Extracted/Default alpha:`, alpha); // Log 7: Alpha érték

        // Vegyük ki az R, G, B értékeket az rgbString-ből és rakjuk össze az RGBA-t
        const rgbValuesMatch = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        console.log(`[getComputedStyleColor] RGB values match result:`, rgbValuesMatch); // Log 8: RGB regex match

        if (rgbValuesMatch) {
          const finalRgba = `rgba(${rgbValuesMatch[1]}, ${rgbValuesMatch[2]}, ${rgbValuesMatch[3]}, ${alpha})`;
          console.log(`[getComputedStyleColor] Returning final RGBA:`, finalRgba); // Log 9: Visszatérő RGBA (OKLCH ág)
          return finalRgba;
        } else {
             console.warn(`[getComputedStyleColor] Could not format parsed OKLCH to RGB: ${colorString}`);
             return fallbackColor; // Fallback, ha az RGB formázás nem sikerül
        }
      } else {
        console.warn(`[getComputedStyleColor] culori could not parse OKLCH: ${colorString}`);
        return fallbackColor; // Fallback, ha a culori nem tudja parse-olni
      }
    }
    // Ha már RGB vagy RGBA, akkor (majdnem) jók vagyunk, de biztosítsuk az RGBA formátumot
    else if (colorString.startsWith('rgb')) {
        console.log(`[getComputedStyleColor] Detected RGB/RGBA format.`); // Log 10: RGB/RGBA észlelve
        // Ha 'rgb(', akkor hozzáadjuk az alpha 1-et
        if (!colorString.startsWith('rgba')) {
            const finalRgba = colorString.replace('rgb(', 'rgba(').replace(')', ', 1)');
            console.log(`[getComputedStyleColor] Converted RGB to RGBA, returning:`, finalRgba); // Log 10a: RGB->RGBA konverzió
            return finalRgba;
        }
        console.log(`[getComputedStyleColor] Already RGBA, returning:`, colorString); // Log 10b: Már RGBA
        return colorString; // Már RGBA volt
    }
    // TODO: Kezelhetnénk a HEX formátumot is, ha szükséges, de a computedStyle ritkán adja azt vissza.
    else {
       console.log(`[getComputedStyleColor] Detected unhandled/unknown format: ${colorString}. Attempting parse...`); // Log 11: Ismeretlen formátum
       // Ha ismeretlen formátum, megpróbáljuk parse-olni culorival és visszaadni RGBA-ként
       const parsedUnknown = parse(colorString);
       console.log(`[getComputedStyleColor] culori parse result for unknown format:`, parsedUnknown); // Log 11a: Ismeretlen parse
       if (parsedUnknown) {
           const rgbString = formatRgb(parsedUnknown);
           console.log(`[getComputedStyleColor] Formatted unknown to RGB string:`, rgbString); // Log 11b: Ismeretlen formázás
           const rgbValuesMatch = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (rgbValuesMatch) {
              const finalRgba = `rgba(${rgbValuesMatch[1]}, ${rgbValuesMatch[2]}, ${rgbValuesMatch[3]}, 1)`; // Alpha=1
              console.log(`[getComputedStyleColor] Returning final RGBA from unknown format:`, finalRgba); // Log 11c: Ismeretlen -> RGBA
              return finalRgba;
            }
       }
        console.warn(`[getComputedStyleColor] Unhandled color format and parse failed: ${colorString}. Returning fallback.`);
        return fallbackColor;
    }

  } catch (error) {
    console.error(`[getComputedStyleColor] Error processing color for ID "${elementId}":`, error); // Log 12: Hiba
    return fallbackColor; // Fallback hiba esetén
  }
};







/*


// Segédfüggvény egy DOM elem számított (computed) szövegszínének lekérdezéséhez
export const getComputedStyleColor = (elementId) => {
  // Megkeresi a DOM-ban az adott ID-jű elemet (az App.jsx-ben lévő rejtett 'ezaz' divet)
  const tempDiv = document.getElementById(elementId);
  // Ha nem található az elem, hibát dobhat, vagy adjon vissza alapértelmezett színt (itt nincs hibakezelés)
  // Lekérdezi az elem számított stílusát (ami figyelembe veszi az összes CSS szabályt)
  const computedStyle = window.getComputedStyle(tempDiv);
  // Kiolvassa a számított 'color' (szövegszín) tulajdonságot
  const color = computedStyle.color;
  // Visszaadja a kiolvasott színt (pl. "rgb(34, 211, 238)" a türkiz 'text-primary' esetén)
  return color;
};*/