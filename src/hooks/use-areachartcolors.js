import { useMemo } from 'react';
import { MyDataContext } from '../context/DataContext';
// A szín-átalakító függvényt továbbra is használjuk
import { formatColorToRgba } from '../utils/colorFormatter';

// A Tailwind színkódokat közvetlenül itt definiáljuk.
// Ezek statikus értékek, nem kell őket a tailwind.config.js-ből olvasni.
const themeHexColors = {
  default: '#38bdf8', // colors.sky['400']
  plasma:  '#38bdf8', // A te configodban a plasma is sky-400-at használt
  ion:     '#a3e635', // colors.lime['400']
  fusion:  '#4ade80', // colors.green['400']
  quantum: '#60a5fa', // colors.blue['400']
};

/**
 * Egyéni hook, amely egy belső objektumból adja vissza az aktuális
 * téma alapján a színeket. NEM OLVAS A DOM-BÓL.
 * @returns {object} Egy objektum, ami a `tooltip` és `legend` színét tartalmazza.
 */
const useAreaChartColors = () => {
  const { users } = MyDataContext();
  const currentTheme = users?.style || 'default';

  // useMemo-t használunk, hogy a szín-objektum csak akkor jöjjön létre újra, ha a téma változik.
  const colors = useMemo(() => {
    // 1. Kikeresi a HEX színt a belső JS objektumból a téma neve alapján
    const primaryHexColor = themeHexColors[currentTheme] || themeHexColors.default;

    // 2. Átalakítja RGBA formátumra a segédfüggvénnyel
    const primaryRgbaColor = formatColorToRgba(primaryHexColor);
    
    return {
      tooltip: primaryRgbaColor,
      legend: primaryRgbaColor,
    };
  }, [currentTheme]);

  return colors;
};

export default useAreaChartColors;
