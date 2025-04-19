import { useState, useEffect } from 'react';

// A hook most már csak a feldolgozott adatokat és a színeket kapja
const useAreaChartData = (displayedData, colors) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Biztonságos hozzáférés a színekhez alapértelmezett értékkel
    const currentColors = colors || {
      area1: 'rgba(136, 132, 216, 0.5)', // Csak egy színre van szükségünk
    };

    // Ellenőrizzük, hogy a displayedData érvényes-e
    if (!displayedData || displayedData.length === 0) {
      setChartData({ labels: [], datasets: [] }); // Üres chart, ha nincs adat
      return;
    }

    // ÚJ, EGYSZERŰSÍTETT LOGIKA:
    // Létrehozunk EGYETLEN datasettet a displayedData alapján.
    setChartData({
      // Label lehet a fullname (ha van) vagy az index
      labels: displayedData.map((d, index) => d.fullname || `Item ${index + 1}`),
      datasets: [
        {
          label: "Value", // TODO: Ezt később a 'config.dataType'-ból kellene venni dinamikusan
          data: displayedData.map((d) => d._parsedValue), // A parse-olt értékeket használjuk
          borderColor: currentColors.area1, // Használunk egy színt a palettáról
          backgroundColor: currentColors.area1,
          fill: true,
          tension: 0.4,
        },
        // NINCS TÖBB max, avg, min dataset!
      ],
    });

  }, [displayedData, colors]); // Függőségek: a bejövő adat és a színek
  console.log("useAreaChartData - Returning:", JSON.stringify(chartData));
  return chartData;
};

export default useAreaChartData;
