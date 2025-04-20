// locales/chartoptions.js

// Fogadja az ÚJ 'config' objektumot

// locales/chartoptions.js
// locales/chartoptions.js

// Fogadja az ÚJ 'config' objektumot
// locales/chartoptions.js
// src/locales/chartoptions.js

// Fogadja a displayedData-t is!
// src/locales/chartoptions.js

export const areachartlineoptions = (colors, config, displayedData) => {
  const { dataType } = config || {};
  if (!config || !dataType) { return { responsive: true, maintainAspectRatio: false }; } // Minimal defaults on error

  const safeDisplayedData = Array.isArray(displayedData) ? displayedData : [];
  const tooltipColor = colors?.tooltip || '#FFFFFF';
  const legendColor = colors?.legend || '#FFFFFF';

  return {
    responsive: true,
    maintainAspectRatio: false,
    parsing: false, // Maradjon false, ha useAreaChartData csak számokat ad

    plugins: {
      // --- TOOLTIP RÉSZ (ELLENŐRIZD, HOGY AKTÍV!) ---
      tooltip: {
        enabled: true, // Legyen engedélyezve
        callbacks: {
          label: function (context) {
            let datasetLabel = context.dataset.label || "";
            const yValue = context.parsed?.y;
            const dataIndex = context.dataIndex;

            const originalItem = safeDisplayedData[dataIndex];
            const fullname = originalItem?.fullname || 'Unknown Asteroid';
            const cleanedFullname = fullname.replace(/^\((.*)\)$/, "$1").trim();

            if (yValue !== null && yValue !== undefined) {
              return [
                `${cleanedFullname}`,
                `${dataType}: ${yValue}`,
              ];
            }
            return datasetLabel ? `${datasetLabel}: N/A` : 'N/A';
          },
        },
        // Tooltip stílusok
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14, weight: 'bold'},
        bodyFont: { size: 12, lineHeight: 1.4 },
        footerFont: { size: 10 },
        padding: 8,
        displayColors: false,
        borderColor: tooltipColor,
        borderWidth: 1,
        caretSize: 6,
        cornerRadius: 4,
        xAlign: "center",
        yAlign: "bottom", // Alul jelenjen meg a ponthoz képest
      },
      // -------------------------------------------
      legend: {
         display: true,
         labels: { color: legendColor, boxWidth: 12, padding: 15, font: { size: 12 } },
         position: 'top',
         align: 'center'
      },
      title: {
        display: true,
        text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`,
        color: legendColor,
        font: { size: 16, weight: 'bold' },
        position: 'top',
        align: 'center',
        padding: { top: 10, bottom: 20 },
      },
    },
    scales: {
       x: { ticks: { color: legendColor, maxRotation: 45, minRotation: 0, autoSkip: true, maxTicksLimit: 15 }, grid: { color: 'rgba(128, 128, 128, 0.2)', borderColor: 'rgba(128, 128, 128, 0.4)'} },
       y: { ticks: { color: legendColor, padding: 5 }, title: { display: true, text: `${dataType}`, color: legendColor, font: { size: 12 } }, grid: { color: 'rgba(128, 128, 128, 0.2)', borderColor: 'rgba(128, 128, 128, 0.4)'} },
    },
    interaction: {
      mode: 'index',
      intersect: false,
      axis: 'x',
    },
    animation: {
      duration: 400,
      easing: 'easeInOutQuad'
    },
  };
};

// Itt jönnének a többi options függvények (barchartOptions stb.)

// TODO: A többi options függvényt is hasonlóan kell átírni, ha szükségük van az adatokra!

// Itt kellene lennie a többi chart options függvénynek is (barchartOptions, linechartoptions stb.),
// amelyeket hasonlóan át kell majd írni, hogy a 'config' objektumot használják.
// export const barchartOptions = (colors, config) => { ... };
// export const linechartoptions = (colors, config) => { ... }; // Ez valószínűleg ugyanaz lehet, mint az areachartlineoptions
/*export const areachartlineoptions = (colors, config) => {
  // A régi statusTable és filterTable helyett a config-ból vesszük az értékeket
  const { dataType, itemCount } = config; // Vegyük ki a szükségeseket

  // Ellenőrizzük, hogy a config és a dataType létezik-e
  if (!config || !dataType) {
    console.error("Config or dataType is missing for chart options!");
    return {}; // Visszaadunk egy üres opciós objektumot hiba esetén
  }

  return {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += " ";
            }
            if (context.parsed.y !== null) {
              const dataIndex = context.dataIndex;
              // Most a 'context.chart.data.datasets[0].data[dataIndex]'
              // tartalmazza a formázott adatot, amiben lehet pl. 'fullname'
              // VAGY ha a useAreaChartData/displayedData tartalmazza:
              // A kontextusból nehézkes lehet elérni az eredeti 'displayedData'-t itt.
              // Egyszerűbb lehet, ha a 'useAreaChartData' a 'fullname'-et is beleteszi a labelbe.
              // Vagy csak az értéket és a dataType-ot mutatjuk:

              // Példa fullname kinyerésére, HA a useAreaChartData beleteszi a data objektumba:
              // const pointData = context.chart.data.datasets[context.datasetIndex].data[dataIndex];
              // const fullname = pointData?.fullname || ''; // Feltételezve, hogy van ilyen
              // const cleanedFullname = fullname.replace(/^\((.*)\)$/, "$1").trim();

              return [
                //`${cleanedFullname}`, // Ezt vagy a useAreaChartData-ban, vagy itt kell megoldani
                `${label}`,
                `${dataType}:`, // Mértékegység/Adattípus neve
                `${context.parsed.y}`, // Az érték
              ];
            }
            return label;
          },
        },
        // ... többi tooltip beállítás ...
        bodyColor: colors?.tooltip || '#fff', // Null check
        bodyFont: { size: 16, lineHeight: 1.5 },
        titleFont: { size: 16, color: colors?.tooltip || '#fff' },
        footerFont: { size: 20 },
        padding: 10,
        displayColors: false,
        caretSize: 16,
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        xAlign: "center",
        yAlign: "center",
      },
      legend: {
        labels: { color: colors?.legend || '#fff' }, // Null check
      },
      title: {
        display: true,
        // A dataType első betűje nagybetűvel
        text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`,
        color: colors?.legend || '#fff', // Null check
        font: { size: 20 },
        position: 'top',
        align: 'center',
        padding: { bottom: 10 },
      },
    },
    scales: {
      x: {
        ticks: { color: colors?.legend || '#fff' }, // Null check
      },
      y: {
        ticks: { color: colors?.legend || '#fff' }, // Null check
        title: {
          display: true,
          text: `${dataType}`, // Y tengely címe az adattípus
          color: colors?.legend || '#fff', // Null check
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    // Esetleg a performanciához kapcsolódó opciók?
    animation: false, // Animáció kikapcsolása gyorsíthat
    parsing: false, // Ha az adat már előre formázott
  };
};*/

// Fontos: Hasonlóan módosítani kell a barchartOptions, linechartoptions stb. függvényeket is,
// hogy azok is a 'config' objektumot fogadják és használják!

  // barchartoptions.js

export const barchartOptions = (colors, statusTable, filterTable, filteredData) => {
  return {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += " ";
            }
            if (context.parsed.y !== null) {
              const { dataIndex } = context;
              const fullname = filteredData[dataIndex]?.fullname || "Unknown";
              const cleanedFullname = fullname
                .replace(/^\((.*)\)$/, "$1")
                .trim();
              return [
                `${cleanedFullname}`,
                `${label}`,
                `${statusTable.datatype}`, // Measurement unit
                `${context.parsed.y}`, // Value
              ];
            }
            return label;
          },
        },
        bodyColor: colors.tooltip,
        bodyFont: {
          size: 16,
          lineHeight: 1.5,
        },
        titleFont: {
          size: 16,
          color: colors.tooltip,
        },
        footerFont: {
          size: 20,
        },
        padding: 10,
        displayColors: false,
        caretSize: 16,
        backgroundColor: "#000",
      //  borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        xAlign: "center",
        yAlign: "center",
      },
      legend: {
        labels: {
          color: colors.legend,
          boxWidth: 0,
          font: {
            size: 20,
          },
        }
  
      },
      title: {
        display: true,
        text: `${statusTable.datatype.charAt(0).toUpperCase() + statusTable.datatype.slice(1)}`,
        color: colors.legend,
        font: {
          size: 20,
        },
        position: 'top',
        align: 'center',
        padding: {
          bottom: 10,
        },
      },
    },

    
    scales: {
      x: {
        ticks: {
          color: colors.legend,
        },
      },
      y: {
        ticks: {
          color: colors.legend,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };
};

export const linechartoptions = (colors, statusTable, filterTable, filteredData) => {
  return {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += " ";
            }
            if (context.parsed.y !== null) {
              const { dataIndex } = context;
              const { displayMode } = filterTable;
              const fullname =
                filteredData[dataIndex][displayMode]?.name || "Unknown";
              const cleanedFullname = fullname
                .replace(/^\((.*)\)$/, "$1")
                .trim();

              return [
                `${cleanedFullname}`,
                `${label}`,
                `${statusTable.datatype}`, // Mértékegység
                `${context.parsed.y}`, // Az érték
              ];
            }
            return label;
          },
        },
        bodyColor: colors.tooltip,
        bodyFont: {
          size: 16,
          lineHeight: 1.5,
        },
        titleFont: {
          size: 16,
          color: colors.tooltip,
        },
        footerFont: {
          size: 20,
        },
        padding: 10,
        displayColors: false,
        caretSize: 16,
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        xAlign: "center",
        yAlign: "center",
      },
      legend: {
        labels: {
          color: colors.legend,
        },
      },
      title: {
        display: true,
        text: `${
          statusTable.datatype.charAt(0).toUpperCase() + statusTable.datatype.slice(1)
        }`,
        color: colors.legend,
        font: {
          size: 20,
        },
        position: "top",
        align: "center",
        padding: {
          bottom: 10,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: colors.legend,
        },
      },
      y: {
        ticks: {
          color: colors.legend,
        },
        title: {
          display: true,
          text: `${statusTable.datatype}`, // Mértékegység az y-tengelyen
          color: colors.legend,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };
};


  