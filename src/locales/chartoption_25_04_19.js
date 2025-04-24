// chartoptions.js

export const areachartlineoptions = (colors, statusTable, filterTable, filteredData) => {
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
                  filteredData[dataIndex][displayMode].name || "Unknown";
                const cleanedFullname = fullname
                  .replace(/^\((.*)\)$/, "$1")
                  .trim();
  
                return [
                  `${cleanedFullname}`,
                  `${label}`,
                  `${statusTable.datatype}`, // A mértékegység
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
          title: {
            display: true,
            text: `${statusTable.datatype}`, // Hozzáadjuk a mértékegységet az y-tengely címkéjéhez
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




// locales/chartoptions.js

// Fogadja az ÚJ 'config' objektumot

// locales/chartoptions.js
// locales/chartoptions.js

// Fogadja az ÚJ 'config' objektumot
// locales/chartoptions.js
// src/locales/chartoptions.js

// Fogadja a displayedData-t is!
// src/locales/chartoptions.js

// Importáljuk a date-fns formázó függvényét (opcionális, de szép tooltiphez hasznos)
import { format } from 'date-fns';

export const areachartlineoptions = (colors, config, displayedData) => {
  // Biztonságosan kiolvassuk a configból a szükséges értékeket
  const { dataType, dataKey } = config || {};
  // Ha nincs config vagy dataType, alapértelmezett opciókat adunk vissza
  if (!config || !dataType || !dataKey) {
    return { responsive: true, maintainAspectRatio: false };
  }

  const safeDisplayedData = Array.isArray(displayedData) ? displayedData : [];
  const tooltipColor = colors?.tooltip || '#FFFFFF';
  const legendColor = colors?.legend || '#FFFFFF';

  // === DÁTUM ELLENŐRZÉS ===
  const isDateAxis = dataKey === 'last_obs';
  // =======================

  return {
    responsive: true,
    maintainAspectRatio: false,
    // Parsing false marad, a useAreaChartData Date objektumokat/számokat ad
    parsing: false,

    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          // A tooltip címkéjét is formázzuk dátum esetén
          label: function (context) {
            let datasetLabel = context.dataset.label || "";
            const yValue = context.parsed?.y; // Ez a numerikus érték (szám vagy Date.getTime())
            const dataIndex = context.dataIndex;

            const originalItem = safeDisplayedData[dataIndex];
            const fullname = originalItem?.fullname || 'Unknown Asteroid';
            const cleanedFullname = fullname.replace(/^\((.*)\)$/, "$1").trim();

            let formattedValue = 'N/A';
            if (yValue !== null && yValue !== undefined) {
              // Ha dátum tengely, formázzuk a dátumot a tooltiphez
              if (isDateAxis && originalItem?._parsedValue instanceof Date) {
                 try {
                    // Próbáljuk meg formázni a Date objektumot
                    // A _parsedValue-t használjuk, ami a Date objektum
                    formattedValue = format(originalItem._parsedValue, 'yyyy-MM-dd');
                 } catch (e) {
                    console.error("Error formatting date for tooltip:", e);
                    formattedValue = 'Invalid Date';
                 }
              } else {
                // Ha szám, egyszerűen kiírjuk
                formattedValue = yValue;
              }
               return [
                `${cleanedFullname}`,
                `${dataType}: ${formattedValue}`, // Formázott érték használata
              ];
            }
            // Ha nincs érték
             return [
                `${cleanedFullname}`,
                 `${dataType}: N/A`,
            ];
          },
        },
        // Tooltip stílusok (változatlan)
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12, lineHeight: 1.4 },
        footerFont: { size: 10 },
        padding: 8,
        displayColors: false,
        borderColor: tooltipColor,
        borderWidth: 1,
        caretSize: 6,
        cornerRadius: 4,
        xAlign: "center",
        yAlign: "bottom",
      },
      legend: { /* ... (változatlan) ... */
         display: true,
         labels: { color: legendColor, boxWidth: 12, padding: 15, font: { size: 12 } },
         position: 'top',
         align: 'center'
      },
      title: { /* ... (változatlan) ... */
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
      // X tengely: Marad kategória alapú az aszteroida neveknek
      x: {
        ticks: {
          color: legendColor,
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 15 // Vagy a config.displayLimit alapján?
        },
        grid: {
          color: 'rgba(128, 128, 128, 0.2)',
          borderColor: 'rgba(128, 128, 128, 0.4)'
        },
        title: { // Opcionális cím az X tengelyhez
            display: true,
            text: 'Asteroid',
            color: legendColor
        }
      },
      // Y tengely: Típusa függ attól, hogy dátumot vagy számot jelenítünk-e meg
      y: {
        // === TENGELY TÍPUSÁNAK BEÁLLÍTÁSA ===
        type: isDateAxis ? 'time' : 'linear', // Ha dátum, akkor 'time', egyébként 'linear'
        // ==================================
        ticks: {
          color: legendColor,
          padding: 5,
          // Dátum esetén a source: 'auto' vagy 'data' jobban működhet
          source: isDateAxis ? 'auto' : undefined,
        },
        title: { // A tengely címe marad a dataType
          display: true,
          text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`, // Dinamikus cím
          color: legendColor,
          font: { size: 12 }
        },
        grid: {
          color: 'rgba(128, 128, 128, 0.2)',
          borderColor: 'rgba(128, 128, 128, 0.4)'
        },
        // === IDŐSKÁLA BEÁLLÍTÁSAI (csak ha type: 'time') ===
        time: isDateAxis ? {
          tooltipFormat: 'yyyy-MM-dd', // Tooltip formátuma (bár a callback felülírja)
          unit: 'year', // Kezdeti egység (a Chart.js automatikusan válthat)
          displayFormats: {
            year: 'yyyy', // Csak az évet mutatjuk a tengelyen alapból
            // Hozzáadhatsz más formátumokat is, ha szükséges
            // month: 'yyyy MMM',
            // day: 'yyyy-MM-dd'
          }
        } : undefined // Ha nem dátum tengely, nincs szükség time beállításokra
        // ============================================
      },
    },
    interaction: { /* ... (változatlan) ... */
      mode: 'index',
      intersect: false,
      axis: 'x',
    },
    animation: { /* ... (változatlan) ... */
      duration: 400,
      easing: 'easeInOutQuad'
    },
  };
};

// Itt jönnének a többi chart options függvényei...

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
/*
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
};*/

// src/locales/chartoptions.js



// ... (areachartlineoptions függvény itt van) ...

// ÚJ FÜGGVÉNY a BarChart opciókhoz

/*
export const barchartOptions = (colors, config, displayedData) => {
  const { dataType, dataKey } = config || {};
  if (!config || !dataType || !dataKey) {
    return { responsive: true, maintainAspectRatio: false };
  }

  const safeDisplayedData = Array.isArray(displayedData) ? displayedData : [];
  const tooltipColor = colors?.tooltip || '#FFFFFF';
  const legendColor = colors?.legend || '#FFFFFF';
  const primaryColor = colors?.tooltip || 'rgb(34, 211, 238)'; // Ugyanaz a türkiz az oszlopokhoz is jó lesz kezdésnek
  const backgroundColor = primaryColor.replace('rgb(', 'rgba(').replace(')', ', 0.7)'); // Kicsit erősebb átlátszóság az oszlopokhoz

  const isDateAxis = dataKey === 'last_obs'; // Ellenőrizzük, hogy az Y tengely dátum-e

  return {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x', // Oszlopok függőlegesek (lehet 'y' is vízszinteshez)

    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          // Tooltip ugyanúgy működik: aszteroida neve és az érték
          label: function (context) {
            const datasetLabel = context.dataset.label || ""; // pl. "Magnitudo"
            const yValue = context.parsed?.y; // A parse-olt érték (szám vagy Date.getTime())
            const dataIndex = context.dataIndex; // Az elem indexe

            const originalItem = safeDisplayedData[dataIndex];
            const fullname = originalItem?.fullname || 'Unknown Asteroid';
            const cleanedFullname = fullname.replace(/^\((.*)\)$/, "$1").trim();

            let formattedValue = 'N/A';
            if (yValue !== null && yValue !== undefined) {
              if (isDateAxis && originalItem?._parsedValue instanceof Date) {
                 try {
                    formattedValue = format(originalItem._parsedValue, 'yyyy-MM-dd');
                 } catch (e) { formattedValue = 'Invalid Date'; }
              } else {
                formattedValue = yValue.toLocaleString(); // Számoknál használhatunk ezres tagolást
              }
               return [
                `${cleanedFullname}`,
                `${datasetLabel}: ${formattedValue}`,
              ];
            }
            return [ `${cleanedFullname}`, `${datasetLabel}: N/A` ];
          },
        },
        // Tooltip stílusok (ugyanazok, mint AreaChartnál)
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 14, weight: 'bold'},
        bodyFont: { size: 12, lineHeight: 1.4 },
        padding: 8,
        displayColors: false, // Nem kell a szín-négyzet a tooltipbe
        borderColor: tooltipColor,
        borderWidth: 1,
        // ... (többi tooltip stílus)
      },
      legend: {
         // Bar chartnál, ha csak egy adatsor van, a legenda kikapcsolható,
         // a cím úgyis mutatja, mit ábrázolunk. De maradhat is.
         display: true,
         labels: { color: legendColor, font: { size: 12 } },
         position: 'top',
      },
      title: { // A chart címe
        display: true,
        text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)} - Top ${config.displayLimit}`, // Jelezzük a limitet is
        color: legendColor,
        font: { size: 16, weight: 'bold' },
        padding: { top: 10, bottom: 20 },
      },
    },
    scales: {
      // X tengely: Az aszteroidák nevei (kategóriák)
      x: {
        type: 'category', // <<<--- Kategória típusú
        ticks: {
          color: legendColor,
          autoSkip: false, // Jelenjen meg minden címke (mivel kevés van)
          maxRotation: 90, // Forgatás, ha szükséges
          minRotation: 45,
        },
        grid: { display: false }, // Vízszintes rácsvonalak elrejtése
         title: {
            display: true,
            text: 'Asteroid',
            color: legendColor
        }
      },
      // Y tengely: Az értékek (szám vagy dátum)
      y: {
        type: isDateAxis ? 'time' : 'linear', // Típus beállítása
        ticks: { color: legendColor, padding: 5 },
        title: {
          display: true,
          text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`, // Tengely címe
          color: legendColor,
          font: { size: 12 }
        },
        grid: { // Függőleges rácsvonalak stílusa
          color: 'rgba(128, 128, 128, 0.2)',
          borderColor: 'rgba(128, 128, 128, 0.4)'
        },
        // Időskála beállítások (ugyanaz, mint AreaChartnál)
        time: isDateAxis ? {
          tooltipFormat: 'yyyy-MM-dd',
          unit: 'year',
          displayFormats: { year: 'yyyy' }
        } : undefined
      },
    },
    // Interaction és Animation maradhat ugyanaz
    interaction: { mode: 'index', intersect: false, axis: 'x' },
    animation: { duration: 400, easing: 'easeInOutQuad' },
  };
};*/

// src/components/Charts/bar/CustomBarChart.jsx

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,      // <<< Szükséges a regisztrációhoz
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import 'chartjs-adapter-date-fns'; // <<< Adapter importálása
// Az ÚJ barchartOptions függvény importálása
import { barchartOptions } from "../../../locales/chartoptions"; // Ellenőrizd az útvonalat!

// Regisztráció itt is (vagy globálisan)
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,      // <<< Regisztrálva
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Fogadja az ÚJ propokat
const CustomBarChart = ({
  config,         // <<< ÚJ
  data,           // <<< Az új useBarChartData hook eredménye
  colors,         // <<< ÚJ
  width,
  height,
  displayedData   // <<< ÚJ (a tooltiphez kell)
}) => {

  // Az ÚJ barchartOptions függvény hívása a megfelelő propokkal
  const options = barchartOptions(
    colors,
    config,
    displayedData
    // Régi argumentumok (statusTable, filterTable, filteredData) eltávolítva
  );

  // Renderelés változatlan
  return <Bar data={data} options={options} height={height} width={width} />;
};

export default CustomBarChart;

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

  