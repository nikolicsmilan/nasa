import { useState, useEffect } from 'react';

const useAreaChartData = (displayedData, colors,config) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Most a tooltip színét használjuk alapértelmezettnek a vonalhoz is, ha nincs más
    const primaryColor = colors?.tooltip || 'rgb(34, 211, 238)'; // Türkiz fallback
    // A háttérhez vehetjük ugyanezt kicsit átlátszóbban
    const backgroundColor = primaryColor.replace('rgb(', 'rgba(').replace(')', ', 0.3)'); // <<<--- ÚJ: Átlátszó verzió generálása
    const dataType = config?.dataType;
    const capitalizedLabel = dataType ? dataType.charAt(0).toUpperCase() + dataType.slice(1) : 'Value'; 
    // Ellenőrizzük, hogy a displayedData érvényes-e
    if (!displayedData || displayedData.length === 0) {
      setChartData({ labels: [], datasets: [] });
      return;
    }

    setChartData({
      labels: displayedData.map((d, index) => d.fullname || `Item ${index + 1}`),
      datasets: [
        {
          label: capitalizedLabel,
          data: displayedData.map((d) => d._parsedValue),
          parsing: { // Maradjon, ha objektumokat adunk vissza a data-ban
             yAxisKey: 'y' // VAGY töröld, ha a data csak számokat tartalmaz
          },
          // --- SZÍNEK MÓDOSÍTVA ---
          borderColor: primaryColor,         // Használjuk a türkiz színt a vonalhoz
          backgroundColor: backgroundColor,  // Használjuk az átlátszó türkizt a kitöltéshez
          // ------------------------
          borderWidth: 1.5, // Kicsit vastagabb vonal lehet szebb
          fill: true,
          tension: 0.4,
          pointRadius: 1, // Nincsenek pontok a vonalon
          pointHoverRadius: 5,
        },
      ],
    });

    // console.log("useAreaChartData - Returning:", JSON.stringify(chartData));

  }, [displayedData, colors]);

  return chartData;
};

export default useAreaChartData;