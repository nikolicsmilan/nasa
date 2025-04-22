/*import { useState, useEffect } from 'react';

const useBarChartData = (displayedData, colors, config) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Színek beolvasása (hasonlóan az AreaChart-hoz)
    const primaryColor = colors?.tooltip || 'rgb(34, 211, 238)'; // Türkiz
    // Bar chartnál általában elég egy kicsit átlátszóbb háttér
    const backgroundColor = primaryColor.replace('rgb(', 'rgba(').replace(')', ', 0.7)');
    const borderColor = primaryColor; // Keret lehet ugyanaz, vagy sötétebb/világosabb

    // Label az adatsorhoz
    const dataType = config?.dataType;
    const capitalizedLabel = dataType ? dataType.charAt(0).toUpperCase() + dataType.slice(1) : 'Value';

    // Ellenőrizzük a bemeneti adatokat
    if (!displayedData || displayedData.length === 0 || !config) {
      setChartData({ labels: [], datasets: [] });
      return;
    }

    setChartData({
      // Címkék az X tengelyhez: aszteroidák nevei
      labels: displayedData.map(d => d.fullname?.replace(/^\((.*)\)$/, "$1").trim() || `Item ${d.id || 'N/A'}`),
      // Adatsorok (itt csak egy van)
      datasets: [
        {
          label: capitalizedLabel, // Pl. "Impacts", "Magnitudo"
          // Adatok az Y tengelyhez: a parse-olt értékek
          data: displayedData.map(d => d._parsedValue),
          backgroundColor: backgroundColor, // Oszlopok kitöltőszíne
          borderColor: borderColor,         // Oszlopok keretszíne
          borderWidth: 1,                   // Keret vastagsága
          // Opcionális: oszlopszélesség beállítása
          // barThickness: 30, // Fix szélesség
          // maxBarThickness: 50, // Maximális szélesség
        },
      ],
    });

  }, [displayedData, colors, config]); // Függőségek

  return chartData;
};

export default useBarChartData;*/

// src/hooks/useBarChartData.js
/*
import { useState, useEffect } from 'react';

const useBarChartData = (displayedData, colors, config) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const primaryColor = colors?.tooltip || 'rgb(34, 211, 238)';
    // === VÁLTOZTATÁS: Különböző színek ===
    // Háttér: Kicsit áttetszőbb
    const backgroundColor = primaryColor.replace('rgb(', 'rgba(').replace(')', ', 0.7)');
    // Keret: Lehet maga a primary szín, vagy egy sötétebb/világosabb változat,
    // vagy akár egy fix kontrasztos szín. Próbáljuk ki a primary-t keretnek.
    const borderColor = primaryColor;
    // Esetleg próbáld ki ezt egy finomabb kerethez:
    // const borderColor = primaryColor.replace('rgb(', 'rgba(').replace(')', ', 0.9)');
    // Vagy egy sötétebb verziót (ha van a témádban):
    // const borderColor = colors?.darkerPrimary || primaryColor;
    // ======================================

    const dataType = config?.dataType;
    const capitalizedLabel = dataType ? dataType.charAt(0).toUpperCase() + dataType.slice(1) : 'Value';

    if (!displayedData || displayedData.length === 0 || !config) {
      setChartData({ labels: [], datasets: [] });
      return;
    }

    setChartData({
      // Címkék MOST az Y tengelyhez
      labels: displayedData.map(d => d.fullname?.replace(/^\((.*)\)$/, "$1").trim() || `Item ${d.id || 'N/A'}`),
      datasets: [
        {
          label: capitalizedLabel,
          // Adatok MOST az X tengelyhez
          data: displayedData.map(d => d._parsedValue),
          backgroundColor: backgroundColor, // Háttérszín
          borderColor: borderColor,         // Keretszín (most különbözik a háttértől, vagy lehetne még kontrasztosabb)
          borderWidth: 1,
        },
      ],
    });

  }, [displayedData, colors, config]);

  return chartData;
};

export default useBarChartData;*/
// src/hooks/useBarChartData.js

import { useState, useEffect } from 'react';

const useBarChartData = (displayedData, colors, config) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const primaryColor = colors?.tooltip || 'rgb(34, 211, 238)'; // Türkiz alap

    // --- SZÍNEK FINOMÍTÁSA ---
    // Háttér: Az alap türkiz, kicsit erősebb átlátszósággal
    const backgroundColor = primaryColor.replace('rgb(', 'rgba(').replace(')', ', 0.7)');

    // Keret: Legyen egy világosabb, de még mindig áttetsző változat,
    // vagy egy teljesen más kontrasztos szín.
    // Próbálkozás 1: Világosabb türkiz, kevésbé áttetsző
    const borderColor = primaryColor.replace('rgb(', 'rgba(').replace(')', ', 0.9)');
    // Próbálkozás 2: Finom fehér keret (ha a háttér sötét)
    // const borderColor = 'rgba(255, 255, 255, 0.6)';
    // Próbálkozás 3: Használj egy másik színt a colors objektumból, ha van
    // const borderColor = colors?.legend || '#FFFFFF'; // Pl. a legenda színe
    // ---------------------------

    const dataType = config?.dataType;
    const capitalizedLabel = dataType ? dataType.charAt(0).toUpperCase() + dataType.slice(1) : 'Value';

    if (!displayedData || displayedData.length === 0 || !config) {
      setChartData({ labels: [], datasets: [] });
      return;
    }

    setChartData({
      labels: displayedData.map(d => d.fullname?.replace(/^\((.*)\)$/, "$1").trim() || `Item ${d.id || 'N/A'}`),
      datasets: [
        {
          label: capitalizedLabel,
          data: displayedData.map(d => d._parsedValue),
          backgroundColor: backgroundColor,
          borderColor: borderColor,         // <<< Itt a módosított keretszín
          borderWidth: 1,                   // Keretvastagság (lehet 1.5 vagy 2 is)
          // Hover effektusok hozzáadása (opcionális, de jó)
          hoverBackgroundColor: primaryColor.replace('rgb(', 'rgba(').replace(')', ', 0.9)'), // Majdnem teljesen fedő hover szín
          hoverBorderColor: primaryColor, // Teljesen fedő hover keret
        },
      ],
    });

  }, [displayedData, colors, config]);

  return chartData;
};

export default useBarChartData;