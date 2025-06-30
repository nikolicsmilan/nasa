//import { format } from 'date-fns';

export const barchartOptions = (colors, config, /*displayedData*/) => {
  const { dataType, dataKey, displayLimit } = config || {};
  if (!config || !dataType || !dataKey) {
    return { responsive: true, maintainAspectRatio: false };
  }

  //const safeDisplayedData = Array.isArray(displayedData) ? displayedData : [];
  const tooltipColor = colors?.tooltip || '#FFFFFF';
  const legendColor = colors?.legend || '#FFFFFF'; // Ezt használjuk a tengelyekhez is

  const isDateAxis = dataKey === 'last_obs';

  return {
    responsive: true,
    maintainAspectRatio: false,
    // === VÁLTOZTATÁS: Vízszintes diagram a jobb olvashatóságért ===
    indexAxis: 'y', // Y tengely lesz a kategória (nevek), X az érték
    // ========================================================

    plugins: {
      tooltip: { /* ... (tooltip változatlan) ... */
         enabled: true,
        // callbacks: { label: function (context) { /*...*/ } },
         backgroundColor: "rgba(0, 0, 0, 0.8)",
         titleFont: { size: 14, weight: 'bold'},
         bodyFont: { size: 12, lineHeight: 1.4 },
         padding: 8,
         displayColors: false,
         borderColor: tooltipColor,
         borderWidth: 1,
         caretSize: 6,
         cornerRadius: 4,
      },
      legend: {
         display: false, // <<< Kikapcsoljuk a legendát
         labels: { color: legendColor, font: { size: 12 } },
         position: 'top',
      },
      title: {
        display: true,
        text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)} - Top ${displayLimit}`,
        color: legendColor,
        font: { size: 16, weight: 'bold' },
        padding: { top: 20, bottom: 20 }, // Megtartjuk a paddingot
      },
    },
    scales: {
      // === VÁLTOZTATÁS: Tengelyek felcserélve (indexAxis: 'y' miatt) ===
      // X tengely: MOST az ÉRTÉKEK (szám vagy dátum)
      x: {
        type: isDateAxis ? 'time' : 'linear', // Típus beállítása
        ticks: { color: legendColor, padding: 5 }, // <<< Szín beállítva!
        title: {
          display: true,
          text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`, // Tengely címe
          color: legendColor,
          font: { size: 12 }
        },
        grid: { // Függőleges rácsvonalak (most ez a fő rács)
          color: 'rgba(128, 128, 128, 0.2)',
          borderColor: 'rgba(128, 128, 128, 0.4)'
        },
        // Időskála beállítások
        time: isDateAxis ? {
          tooltipFormat: 'yyyy-MM-dd',
          unit: 'year',
          displayFormats: { year: 'yyyy' }
        } : undefined
      },
      // Y tengely: MOST a KATEGÓRIÁK (Asteroid nevek)
      y: {
        type: 'category',
        ticks: {
          color: legendColor, // <<< Szín beállítva!
          autoSkip: false,    // Minden név látszik
          // Forgatásra itt valószínűleg nincs szükség
        },
        grid: {
          // Rácsvonalak ezen a tengelyen (ezek a vízszintes rácsok)
          color: "rgba(128, 128, 128, 0.2)", // Rácsvonal színe
          borderColor: "rgba(128, 128, 128, 0.4)", // Tengelyvonal színe
        },
         title: {
            display: true,
            text: 'Asteroid',
            color: legendColor
        }
      },
      // =============================================================
    },
    interaction: {
        mode: 'index',
        intersect: false,
        // === VÁLTOZTATÁS: Most az Y tengellyel interaktálunk ===
        axis: 'y',
        // ==================================================
     },
    animation: { duration: 400, easing: 'easeInOutQuad' },
  };
};