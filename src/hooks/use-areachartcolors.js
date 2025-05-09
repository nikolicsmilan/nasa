// src/hooks/use-areachartcolors.js (EGYSZERŰSÍTETT VERZIÓ)

import { useState, useEffect } from 'react';
import { getComputedStyleColor } from '../utils/getComputedStyleColor';

const useAreaChartColors = (styleDependency) => {
  console.log("useAreaChartColors styleDependency: ",styleDependency)
  // Kezdetben csak a dinamikusan meghatározandó színeket inicializáljuk
  const [colors, setColors] = useState({
    tooltip: "#FFFFFF", // Alapértelmezett fehér (felülíródik)
    legend: "#FFFFFF",  // Alapértelmezett fehér (felülíródik)
    // A többi fix 'area' szín eltávolítva
  });

  useEffect(() => {
    // Csak a szükséges tooltip és legend színeket állítjuk be dinamikusan
    const primaryColor = getComputedStyleColor("theme-color-ref"); // Kiolvassuk a primary színt
    console.log("useAreaChartColors primaryColor: ",primaryColor)
    setColors({
      tooltip: primaryColor, // Ez lesz az alap színünk a chartokhoz
      legend: primaryColor,  // Ugyanaz a szín a szövegekhez, címkékhez
    });
    // Nincs szükség a fix RGBA értékekre
  }, [styleDependency]);

  return colors; // Csak a tooltip és legend színt tartalmazó objektumot adjuk vissza
};

export default useAreaChartColors;
