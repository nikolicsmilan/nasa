import { useMemo } from "react";
// Importáljuk az új utility függvényeket
import {
  parseGraphValue,
  filterValidData,
  sortDataByParsedValue,
  limitData,
} from "../utils/graphDataUtils"; // Ellenőrizd az útvonalat!

/**
 * Custom Hook a Graph adatok feldolgozására.
 * Használja a useMemo-t és a graphDataUtils segédfüggvényeit.
 * @param {object | null | undefined} sumObject A teljes API válasz objektum ({ data: [], count: "..." }).
 * @param {object} config Az aktuális konfigurációs objektum.
 * @returns {Array<Object>} A feldolgozott, szűrt, rendezett és limitált adatok tömbje.
 */
const useProcessedGraphData = (sumObject, config) => {
  const displayedData = useMemo(() => {
    const sourceData = sumObject?.data;
    console.log(">>> DEBUG [useProcessedGraphData] sourceData:", sourceData); // <<< IDE!
    const { dataKey, sortOrder, displayLimit } = config || {}; // Biztonságos default értékek

    // DEBUG logolás
    console.log(
      `>>> DEBUG [useProcessedGraphData]: Hook running. config:`,
      config,
      `sourceData length: ${sourceData?.length ?? 0}`
    );

    if (!sourceData || sourceData.length === 0 || !config) {
      console.log(
        ">>> DEBUG [useProcessedGraphData]: Exiting early - no sourceData or config."
      );
      return [];
    }

    // 1. Map + Parse: Hozzáadjuk a _parsedValue-t minden elemhez
    const mappedData = sourceData.map((item) => ({
      ...item,
      _parsedValue: parseGraphValue(item ? item[dataKey] : undefined, dataKey),
    }));

    // 2. Filter: Kiszűrjük az érvényteleneket
    const filteredData = filterValidData(mappedData);
    console.log(
      `>>> DEBUG [useProcessedGraphData]: filteredData length: ${filteredData.length}`
    );

    // 3. Sort: Rendezés
    const sortedData = sortDataByParsedValue(filteredData, sortOrder);

    // 4. Limit: Levágás
    const limitedData = limitData(sortedData, displayLimit);
    console.log(
      `>>> DEBUG [useProcessedGraphData]: limitedData length after slice: ${limitedData.length}`
    );

    return limitedData;
  }, [sumObject, config]); // Függőségek: sumObject és config

  return displayedData;
};

export default useProcessedGraphData;
