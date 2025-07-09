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