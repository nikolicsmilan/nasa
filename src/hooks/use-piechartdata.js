// src/hooks/use-piechartdata.js
import { useMemo } from 'react';
import { generateColorShades } from '../utils/colorUtils'; // Importáljuk a szín generátort

/**
 * Custom Hook a Pie Chart számára szükséges kategorizált adatok előállítására.
 * Feldolgozza a teljes adathalmazt a config.dataType alapján, kategóriákba sorolja,
 * összesíti az elemszámokat, és legenerálja a Chart.js data objektumát színekkel együtt.
 * @param {Array<object> | null | undefined} allProcessedData - A *teljes*, szűrt (_parsedValue már létezik), de NEM limitált adat tömbje.
 * @param {object} config - Az aktuális grafikon konfigurációs objektum ({ dataType, dataKey, ... }).
 * @param {object} colors - A színeket tartalmazó objektum (az alapszínhez).
 * @returns {object} Chart.js data objektum Pie Chart-hoz ({ labels: [], datasets: [] }).
 */
const usePieChartData = (allProcessedData, config, colors) => {

  const chartData = useMemo(() => {
    // === FONTOS: A dataType-ot használjuk a switch-hez ===
    const { dataType, dataKey } = config || {}; // Kiolvassuk mindkettőt, de a dataType alapján döntünk
    // ===================================================
    const baseColor = colors?.tooltip || 'rgb(34, 211, 238)';

    if (!allProcessedData || allProcessedData.length === 0 || !dataType) {
      console.log("[usePieChartData] No data or config provided.");
      return { labels: [], datasets: [] };
    }
    console.log("[usePieChartData] Received dataType for categorization:", dataType); // Logoljuk a dataType-ot

    let labels = [];
    let dataCounts = [];
    let backgroundColors = [];
    let categoryMap = {};

    try {
      // === FONTOS: A switch most a dataType (gomb title) alapján megy ===
      switch (dataType) {
        // === DÁTUM ('date' title -> 'last_obs' dataKey) ===
        case 'date': { // A gomb title-je 'date'
          labels = ["2020 - Present", "2010 - 2019", "2000 - 2009", "< 2000"];
          categoryMap = { "2020 - Present": 0, "2010 - 2019": 0, "2000 - 2009": 0, "< 2000": 0 };
          allProcessedData.forEach(item => {
            const dateValue = item._parsedValue; // _parsedValue itt Date objektum
            if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
              const year = dateValue.getFullYear();
              if (year >= 2020) categoryMap["2020 - Present"]++;
              else if (year >= 2010) categoryMap["2010 - 2019"]++;
              else if (year >= 2000) categoryMap["2000 - 2009"]++;
              else categoryMap["< 2000"]++;
            }
          });
          dataCounts = Object.values(categoryMap);
          break;
        }

        // === TORINO SKÁLA ('torino' title -> 'ts_max' dataKey) ===
        case 'torino': { // A gomb title-je 'torino'
          labels = ["TS=0", "TS=1", "TS=2", "TS=3", "TS=4", "TS=5", "TS=6", "TS=7", "TS=8", "TS=9+"];
          const counts = Array(10).fill(0);
          allProcessedData.forEach(item => {
             // Itt a _parsedValue a ts_max értéke (ami várhatóan 0)
            if (item._parsedValue === 0) {
                counts[0]++;
            }
          });
          dataCounts = counts;
          backgroundColors = [ /* ... (Torino színek) ... */
            'rgba(0, 128, 0, 0.7)', 'rgba(0, 128, 0, 0.7)', 'rgba(255, 255, 0, 0.7)',
            'rgba(255, 255, 0, 0.7)', 'rgba(255, 255, 0, 0.7)', 'rgba(255, 165, 0, 0.7)',
            'rgba(255, 165, 0, 0.7)', 'rgba(255, 165, 0, 0.7)', 'rgba(255, 0, 0, 0.7)',
            'rgba(255, 0, 0, 0.7)'
          ];
          break;
        }

        // === ÁTMÉRŐ ('diameter' title -> 'diameter' dataKey) ===
        case 'diameter': { // A gomb title-je 'diameter'
          labels = ["<0.01", "0.01-0.05", "0.05-0.14", "0.14-0.5", "0.5-1", ">1"]; // km
          categoryMap = { "<0.01": 0, "0.01-0.05": 0, "0.05-0.14": 0, "0.14-0.5": 0, "0.5-1": 0, ">1": 0 };
          allProcessedData.forEach(item => {
            const value = item._parsedValue; // _parsedValue itt az átmérő
            if (typeof value === 'number' && !isNaN(value)) {
              if (value < 0.01) categoryMap["<0.01"]++;
              else if (value < 0.05) categoryMap["0.01-0.05"]++;
              else if (value < 0.14) categoryMap["0.05-0.14"]++;
              else if (value < 0.5) categoryMap["0.14-0.5"]++;
              else if (value < 1) categoryMap["0.5-1"]++;
              else categoryMap[">1"]++;
            }
          });
          dataCounts = Object.values(categoryMap);
          break;
        }

         // === SEBESSÉG ('velocity' title -> 'v_inf' dataKey) ===
         case 'velocity': { // A gomb title-je 'velocity'
          labels = ["<1", "1-5", "5-10", "10-20", "20-30", ">30"]; // km/s
          categoryMap = { "<1": 0, "1-5": 0, "5-10": 0, "10-20": 0, "20-30": 0, ">30": 0 };
          allProcessedData.forEach(item => {
            const value = item._parsedValue; // _parsedValue itt a sebesség
            if (typeof value === 'number' && !isNaN(value)) {
              if (value < 1) categoryMap["<1"]++;
              else if (value < 5) categoryMap["1-5"]++;
              else if (value < 10) categoryMap["5-10"]++;
              else if (value < 20) categoryMap["10-20"]++;
              else if (value < 30) categoryMap["20-30"]++;
              else categoryMap[">30"]++;
            }
          });
          dataCounts = Object.values(categoryMap);
          break;
        }

        // === MAGNITUDÓ ('magnitudo' title -> 'h' dataKey) ===
        case 'magnitudo': { // A gomb title-je 'magnitudo'
          labels = ["<22", "22-24", "24-26", "26-28", "28-30", ">=30"];
          categoryMap = { "<22": 0, "22-24": 0, "24-26": 0, "26-28": 0, "28-30": 0, ">=30": 0 };
          allProcessedData.forEach(item => {
            const value = item._parsedValue; // _parsedValue itt a magnitúdó
            if (typeof value === 'number' && !isNaN(value)) {
              if (value < 22) categoryMap["<22"]++;
              else if (value < 24) categoryMap["22-24"]++;
              else if (value < 26) categoryMap["24-26"]++;
              else if (value < 28) categoryMap["26-28"]++;
              else if (value < 30) categoryMap["28-30"]++;
              else categoryMap[">=30"]++;
            }
          });
          dataCounts = Object.values(categoryMap);
          break;
        }

         // === PALERMO ('palermo' title -> 'ps_max' dataKey) ÉS ENERGY ('energy' title -> 'ps_cum' dataKey) ===
         // Mivel a két Palermo skála értékei hasonló tartományban mozognak, ugyanazt a kategorizálást használhatjuk
         case 'palermo':
         case 'energy': { // A gomb title-je 'palermo' vagy 'energy'
          labels = ["<-8", "-8 to -6", "-6 to -4", "-4 to -2", ">-2"];
          categoryMap = { "<-8": 0, "-8 to -6": 0, "-6 to -4": 0, "-4 to -2": 0, ">-2": 0 };
          allProcessedData.forEach(item => {
            const value = item._parsedValue; // _parsedValue itt ps_max vagy ps_cum
            if (typeof value === 'number' && !isNaN(value)) {
              if (value < -8) categoryMap["<-8"]++;
              else if (value < -6) categoryMap["-8 to -6"]++;
              else if (value < -4) categoryMap["-6 to -4"]++;
              else if (value < -2) categoryMap["-4 to -2"]++;
              else categoryMap[">-2"]++;
            }
          });
          dataCounts = Object.values(categoryMap);
          break;
        }

        // === IMPACTS ('impacts' title -> 'ip' dataKey) ===
        case 'impacts': { // A gomb title-je 'impacts'
          labels = ["<1e-8", "1e-8 to 1e-7", "1e-7 to 1e-6", "1e-6 to 1e-5", "1e-5 to 1e-4", ">1e-4"];
          categoryMap = {"<1e-8": 0, "1e-8 to 1e-7": 0, "1e-7 to 1e-6": 0, "1e-6 to 1e-5": 0, "1e-5 to 1e-4": 0, ">1e-4": 0};
           allProcessedData.forEach(item => {
            const value = item._parsedValue; // _parsedValue itt az 'ip' értéke
            if (typeof value === 'number' && !isNaN(value) && value > 0) {
              if (value < 1e-8) categoryMap["<1e-8"]++;
              else if (value < 1e-7) categoryMap["1e-8 to 1e-7"]++;
              else if (value < 1e-6) categoryMap["1e-7 to 1e-6"]++;
              else if (value < 1e-5) categoryMap["1e-6 to 1e-5"]++;
              else if (value < 1e-4) categoryMap["1e-5 to 1e-4"]++;
              else categoryMap[">1e-4"]++;
            }
          });
          dataCounts = Object.values(categoryMap);
          break;
        }


        // --- Alapértelmezett/Nem implementált adattípusok ---
        default:
          console.warn(`Pie chart categorization not implemented for dataType: ${dataType}. No data to display.`);
          labels = [];
          dataCounts = [];
          break;
      }
    } catch (error) {
        console.error("[usePieChartData] Error during categorization for dataType " + dataType + ":", error);
        labels = []; // Hiba esetén is ürítjük
        dataCounts = [];
    }
    // --- Kategorizálási Logika Vége ---

    // Csak akkor generálunk színeket és állítjuk össze a datasetet, ha van label és adat
    if (labels.length > 0 && dataCounts.length > 0 && dataCounts.some(c => c > 0)) {
      console.log(`[usePieChartData] Categories found for ${dataType}: ${labels.length}, Counts:`, dataCounts);
      // Ha nem a Torino skálához generáltunk fix színt, akkor generálunk újakat
      if (backgroundColors.length === 0) {
          backgroundColors = generateColorShades(baseColor, labels.length);
      }
      const borderColors = Array(labels.length).fill('rgba(255, 255, 255, 0.5)');

      return {
        labels: labels,
        datasets: [
          {
            label: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)} Distribution`,
            data: dataCounts,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      };
    } else {
      console.log("[usePieChartData] No valid categories or counts generated for " + dataType + ".");
      return { labels: [], datasets: [] }; // Üres objektum visszaadása
    }

  }, [allProcessedData, config, colors]); // Függőségek

  return chartData;
};

export default usePieChartData;