// locales/chartoptions.js

// Fogadja az ÚJ 'config' objektumot

// locales/chartoptions.js
// locales/chartoptions.js

// Fogadja az ÚJ 'config' objektumot
// locales/chartoptions.js
// src/locales/chartoptions.js

// Fogadja a displayedData-t is!
export const areachartlineoptions = (colors, config, displayedData) => {
  const { dataType } = config || {};
  if (!config || !dataType) { return {}; }

  // Biztonsági ellenőrzés a displayedData-ra is
  const safeDisplayedData = Array.isArray(displayedData) ? displayedData : [];

  return {
    // ... (responsive, maintainAspectRatio, parsing: false - ezt lehet, hogy ki kell venni, ha a data prop már nem objektumokat tartalmaz!) ...
    // FONTOS: Ha visszatérünk ehhez a data access módhoz a tooltipben,
    // akkor a useAreaChartData-nak NEM kell {y, fullname} objektumokat visszaadnia,
    // elég csak a sima _parsedValue számokat! Ellenőrizzük ezt is.
    // Ha a useAreaChartData csak számokat ad, akkor a parsing: false MARADJON!
    responsive: true,
    maintainAspectRatio: false,
    // parsing: false, // Ezt lehet, hogy ki kell venni, ha useAreaChartData csak számokat ad vissza a data tömbben

    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let datasetLabel = context.dataset.label || "";
            const yValue = context.parsed?.y;
            const dataIndex = context.dataIndex; // Index az adatsorban

            // A fullname-et a külső displayedData tömbből vesszük az index alapján
            const originalItem = safeDisplayedData[dataIndex]; // <<<--- VÁLTOZÁS ITT
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
        // ... (Tooltip stílusok maradnak) ...
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        // ...
      },
      // ... (legend, title maradnak az átírt formában) ...
      legend: { /* ... */ },
      title: { /* ... */ },
    },
    // ... (scales, interaction, animation maradnak az átírt formában) ...
    scales: { /* ... */ },
    interaction: { /* ... */ },
    animation: { /* ... */ },
  };
};

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


  