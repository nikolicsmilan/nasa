// src/utils/colorUtils.js

/**
 * Egyszerű segédfüggvény egy RGB szín világosítására/sötétítésére.
 * FIGYELEM: Jelenleg nem tökéletes, főleg az RGB string input miatt.
 * Jobb lenne egy dedikált színkezelő könyvtárat használni (pl. chroma-js), ha pontosabb árnyalatok kellenek.
 * @param {string} color - Bemeneti RGB szín (pl. "rgb(34, 211, 238)") vagy HEX (#rrggbb).
 * @param {number} percent - A változtatás mértéke (-100 és 100 között). Negatív sötétít, pozitív világosít.
 * @returns {string} Az új RGB szín string.
 */
function lightenDarkenColor(color, percent) {
    let R, G, B; // RGB komponensek tárolására
  
    // Próbálkozás HEX formátummal (#rrggbb)
    if (color.startsWith('#')) {
      R = parseInt(color.substring(1, 3), 16);
      G = parseInt(color.substring(3, 5), 16);
      B = parseInt(color.substring(5, 7), 16);
    } else {
      // Próbálkozás RGB formátummal (rgb(r, g, b))
      const rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); // Reguláris kifejezés az RGB értékek kinyerésére
      if (rgbMatch) {
        R = parseInt(rgbMatch[1]); // R komponens
        G = parseInt(rgbMatch[2]); // G komponens
        B = parseInt(rgbMatch[3]); // B komponens
      } else {
        console.warn(`[lightenDarkenColor] Invalid color format: ${color}. Returning original.`);
        return color; // Visszatér az eredetivel, ha nem ismeri fel a formátumot
      }
    }
  
    // Százalékos változtatás alkalmazása
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);
  
    // Értékek korlátozása 0 és 255 közé
    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;
    R = (R > 0) ? R : 0;
    G = (G > 0) ? G : 0;
    B = (B > 0) ? B : 0;
  
    // Visszaalakítás RGB stringgé
    return `rgb(${R}, ${G}, ${B})`;
  }
  
  
  /**
   * Generál egy színskála tömböt egy alapszínből, különböző világossági szintekkel (vagy fix palettából).
   * @param {string} baseColor - Az alapszín (pl. "rgb(34, 211, 238)").
   * @param {number} count - Hány színt generáljon.
   * @returns {Array<string>} A generált színek tömbje (RGBA formátumban az átlátszósággal).
   */
  export const generateColorShades = (baseColor, count) => {
    // Ha nincs alapszín vagy darabszám, üres tömböt ad vissza
    if (!baseColor || count <= 0) return [];
    const shades = []; // Tömb a generált színeknek
  
    // --- FIGYELEM: Dinamikus árnyalatgenerálás helyett FIX PALETTA ---
    // A lightenDarkenColor függvény implementációja egyszerűsített, és az RGB->RGBA konverzió
    // bonyolultabb lenne. Ezért egyelőre egy előre definiált palettát használunk ciklikusan.
    // Ha később pontosabb, dinamikus árnyalatok kellenek, ezt a részt kell lecserélni
    // egy robosztusabb színkezelő logikára (pl. chroma-js használatával).
    const fixedPalette = [ // Előre definiált színek (RGBA az átlátszóság miatt)
        'rgba(34, 211, 238, 0.8)', // Türkiz 1
        'rgba(96, 165, 250, 0.8)',  // Kék (Space) 1
        'rgba(163, 230, 53, 0.8)', // Lime 1
        'rgba(74, 222, 128, 0.8)', // Zöld (City) 1
        'rgba(34, 211, 238, 0.5)', // Türkiz 2
        'rgba(96, 165, 250, 0.5)',  // Kék (Space) 2
        'rgba(163, 230, 53, 0.5)', // Lime 2
        'rgba(74, 222, 128, 0.5)', // Zöld (City) 2
        'rgba(34, 211, 238, 0.3)', // Türkiz 3
        'rgba(96, 165, 250, 0.3)',  // Kék (Space) 3
     ];
     for (let i = 0; i < count; i++) {
         shades.push(fixedPalette[i % fixedPalette.length]); // Ciklikusan veszi a színeket a palettából
     }
    // -----------------------------------------------------------------
  
    return shades; // Visszaadja a színek tömbjét
  };