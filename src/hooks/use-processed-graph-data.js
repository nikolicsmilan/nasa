import { useMemo } from 'react';

// Ez a hook felelős a nyers adatok feldolgozásáért, szűréséért, rendezéséért és limitálásáért
// a kapott konfiguráció alapján.
const useProcessedGraphData = (sumObject, config) => {

  const displayedData = useMemo(() => {
    // A sumObject.data tömböt használjuk forrásként
    const sourceData = sumObject?.data;

    // DEBUG logolás (maradhat, vagy törölhető később)
    console.log(`>>> DEBUG [useProcessedGraphData]: Hook running. config:`, config, `sourceData length: ${sourceData?.length ?? 0}`);

    // Ha nincs adat, üres tömböt adunk vissza
    if (!sourceData || sourceData.length === 0) {
        console.log(">>> DEBUG [useProcessedGraphData]: Exiting early - no sourceData.");
        return [];
    }

    // Kiolvassuk a szükséges config értékeket.
    // A totalItems itt nincs felhasználva a további számításokban, ezért kivettük.
    const { dataKey, sortOrder, displayLimit } = config;
    console.log(">>> DEBUG [useProcessedGraphData]: Using config values:", { dataKey, sortOrder, displayLimit }); // DEBUG

    // Adatok feldolgozása: map (érték parse-olása) -> filter (érvénytelenek kiszűrése)
    const processedData = sourceData
      .map((item) => {
        const rawValue = item ? item[dataKey] : undefined;
        let parsedValue;
        if (dataKey === "last_obs") { // Dátum kezelése
          parsedValue = rawValue ? new Date(rawValue) : null;
          if (parsedValue instanceof Date && isNaN(parsedValue.getTime()))
            parsedValue = null;
        } else { // Számok kezelése
          parsedValue =
            rawValue !== null && rawValue !== undefined
              ? parseFloat(rawValue)
              : NaN;
        }
        if (rawValue === undefined) return null; // Ha a kulcs hiányzott
        return { ...item, _parsedValue: parsedValue };
      })
      .filter( // Érvénytelen parse-olt értékek és null elemek kiszűrése
        (item) => item !== null && item._parsedValue !== null && !isNaN(item._parsedValue)
      );

    console.log(`>>> DEBUG [useProcessedGraphData]: processedData length before sort: ${processedData.length}`);

    // Rendezés a config.sortOrder alapján
    processedData.sort((a, b) => {
      const valA = a._parsedValue;
      const valB = b._parsedValue;
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    // Levágás a config.displayLimit alapján
    console.log(`>>> DEBUG [useProcessedGraphData]: Slicing processed data (${processedData.length} items) to max ${displayLimit} items.`);
    const result = processedData.slice(0, displayLimit);
    console.log(`>>> DEBUG [useProcessedGraphData]: Final result length after slice: ${result.length}`);

    return result; // A hook a feldolgozott és limitált adatokat adja vissza

  // A useMemo függőségei továbbra is a bejövő sumObject és config
  }, [sumObject, config]);

  // A custom hook visszatérési értéke maga a memoizált, feldolgozott adat
  return displayedData;
};

export default useProcessedGraphData;