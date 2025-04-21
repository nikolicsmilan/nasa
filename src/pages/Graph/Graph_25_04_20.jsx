import { useState, useEffect, useCallback, useMemo } from "react"; // useEffect marad a message-hez, useMemo az adathoz
import { MyDataContext } from "../../context/DataContext";
import GraphDesktop from "./desktop/GraphDesktop";
import GraphMobile from "./mobile/GraphMobile";
import { graphControlConfiguration } from "../../locales/graphdata"; // <<<--- Az új, letisztult konfiguráció importálása

// 1. Új, egységes kezdeti konfiguráció
const initialConfig = {
  dataType: "impacts", // Kezdő adattípus
  dataKey: "ip", // Hozzá tartozó kulcs
  graphType: "area", // Kezdő grafikon típus
  sortOrder: "desc", // Kezdő rendezés (desc, mert az első adattípus választás is ezt állítja be)
  totalItems: 1700, // Fix (vagy később állítható) darabszám
};

const Graph = ({ sumObject }) => {
  // 2. Egységes state hook
  const [config, setConfig] = useState(initialConfig);
  const [message, setMessage] = useState(""); // Message state marad
  const { toggle } = MyDataContext(); // DataContext marad

  // 3. Új, egységes állapotfrissítő függvény
  const updateConfig = useCallback((controlGroupName, itemData) => {
    const { title, sign } = itemData; // Gomb adatai

    setConfig((prevConfig) => {
      console.log(
        `Updating config: group='${controlGroupName}', title='${title}', sign='${sign}'`,
        "PREV_CONFIG:",
        prevConfig
      ); // DEBUG

      switch (controlGroupName) {
        case "datatype":
          return {
            ...prevConfig,
            dataType: title,
            dataKey: sign,
            sortOrder: "desc", // Alapértelmezett csökkenő ennél a csoportnál
          };
        case "graph":
          return { ...prevConfig, graphType: title };
        case "filter": // Csak 'inc' és 'desc' van itt
          if (title === "inc" || title === "desc") {
            return {
              ...prevConfig,
              sortOrder: title === "inc" ? "asc" : "desc",
            };
          }
          return prevConfig;
        default:
          console.warn("Unknown control group:", controlGroupName);
          return prevConfig;
      }
    });
  }, []); // Nincs függőség, setConfig stabil

  // 4. Adatok feldolgozása és szűrése useMemo-val
  const displayedData = useMemo(() => {
    //console.log("Recalculating displayedData with config:", config); // Részletesebb debughoz
    if (!sumObject || sumObject.length === 0) return [];

    const { dataKey, sortOrder, totalItems } = config;

    const processedData = sumObject
      .map((item) => {
        const rawValue = item ? item[dataKey] : undefined;
        let parsedValue;
        if (dataKey === "last_obs") {
          // Dátum kezelése
          parsedValue = rawValue ? new Date(rawValue) : null;
          if (parsedValue instanceof Date && isNaN(parsedValue.getTime()))
            parsedValue = null; // Érvénytelen dátum kiszűrése
        } else {
          // Számok kezelése
          parsedValue =
            rawValue !== null && rawValue !== undefined
              ? parseFloat(rawValue)
              : NaN;
        }
        return {
          ...item,
          _parsedValue: parsedValue, // Ezt használjuk a továbbiakban
        };
      })
      .filter(
        (item) => item._parsedValue !== null && !isNaN(item._parsedValue)
      ); // Érvényes, parse-olt értékek

    processedData.sort((a, b) => {
      const valA = a._parsedValue;
      const valB = b._parsedValue;
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return processedData.slice(0, totalItems);
  }, [sumObject, config]); // Újraszámolódik, ha az alap adat vagy a config változik

  // 5. Message frissítése useEffect-ben (az új config alapján)
  useEffect(() => {
    setMessage({
      description: `You are viewing the ${config.graphType} chart, displaying ${
        displayedData.length
      } items sorted by ${config.dataType} (${
        config.sortOrder === "asc" ? "ascending" : "descending"
      }).`,
      // Ide jöhet még több infó a config alapján
    });
  }, [config, displayedData]); // Frissüljön, ha a config vagy a kiszámolt adat változik

  return (
    <div
      className={`min-h-screen flex border-0  border-lime-400
     z-50 relative ${toggle ? "opacity-70" : ""}`}
    >
      <video
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-40"
        autoPlay
        loop
        muted
      ></video>

      <div
        className={`hidden xl:flex border-0 border-red-400 w-full   ${
          toggle ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* 7. Frissített propok átadása */}
        <GraphDesktop
          config={config} // Az új state objektum
          displayedData={displayedData} // A kiszámolt adatok
          graphdatasource={graphControlConfiguration} // A letisztult konfiguráció
          message={message}
          handleClick={updateConfig} // Az új handler, handleClick néven átadva
        />
      </div>

      <div className={`flex xl:hidden ${toggle ? "opacity-0" : "opacity-100"}`}>
        {/* Mobil nézetnek is át kell adni a megfelelő propokat */}
        <GraphMobile
          graphdatasource={graphControlConfiguration}
          // TODO: A mobil verziónak is szüksége lesz valószínűleg a config-ra és az updateConfig-ra
        />
      </div>
    </div>
  );
};

export default Graph;