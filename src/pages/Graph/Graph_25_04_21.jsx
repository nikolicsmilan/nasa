import { useState, useEffect, useCallback, useMemo } from "react";
import { MyDataContext } from "../../context/DataContext";
import GraphDesktop from "./desktop/GraphDesktop";
import GraphMobile from "./mobile/GraphMobile";
import { graphControlConfiguration } from "../../locales/graphdata";

// Kezdeti konfiguráció, totalItems 0-val indul
const initialConfig = {
  dataType: "impacts",
  dataKey: "ip",
  graphType: "area",
  sortOrder: "desc",
  totalItems: 0, // Kezdeti érték 0, frissülni fog
};

// A komponens fogadja a 'sumObject' prop-ot, ami a teljes adatobjektumot tartalmazza (data és count)
const Graph = ({ sumObject }) => {
  // DEBUG: Komponens indításakor logoljuk a kapott prop struktúráját
  try {
    console.log('>>> DEBUG: Graph component received sumObject structure:', sumObject ? { count: sumObject.count, dataLength: sumObject.data?.length } : sumObject);
  } catch (e) {
    console.error(">>> DEBUG: Error stringifying sumObject", e);
    console.log('>>> DEBUG: Graph component received sumObject (raw):', sumObject);
  }

  const [config, setConfig] = useState(initialConfig);
  const [message, setMessage] = useState("");
  const { toggle } = MyDataContext();

  // useEffect hook a totalItems dinamikus beállítására
  useEffect(() => {
    console.log('>>> DEBUG: useEffect for totalItems running. Checking sumObject.count:', sumObject?.count); // DEBUG
    // Ellenőrizzük, hogy a sumObject és annak count mezője létezik-e
    if (sumObject?.count) {
      const countStr = String(sumObject.count); // Biztonság kedvéért stringgé alakítjuk
      const count = parseInt(countStr, 10);
      console.log('>>> DEBUG: useEffect - Parsed count:', count); // DEBUG
      // Csak akkor frissítünk, ha érvényes szám
      if (!isNaN(count)) {
        setConfig((prevConfig) => {
          // Csak akkor adjunk vissza új objektumot, ha tényleg változott az érték
          if (prevConfig.totalItems !== count) {
            console.log(">>> DEBUG: useEffect - Updating config.totalItems from", prevConfig.totalItems, "to:", count); // DEBUG
            return { ...prevConfig, totalItems: count };
          }
          // Ha nem változott, adjuk vissza az előző state-et
          console.log(">>> DEBUG: useEffect - config.totalItems already up-to-date:", prevConfig.totalItems); // DEBUG
          return prevConfig;
        });
      } else {
         console.warn(">>> DEBUG: useEffect - Parsed count is NaN. Original sumObject.count:", sumObject.count); // DEBUG
      }
    } else {
        console.log(">>> DEBUG: useEffect - sumObject or sumObject.count is missing or invalid."); // DEBUG
    }
  }, [sumObject]); // Ez a hook lefut, ha a sumObject prop megváltozik

  // Állapotfrissítő függvény a vezérlőgombokhoz (változatlan)
  const updateConfig = useCallback((controlGroupName, itemData) => {
    const { title, sign } = itemData;
    setConfig((prevConfig) => {
      console.log(
        `>>> DEBUG: updateConfig called. group='${controlGroupName}', title='${title}'. Prev config:`, // DEBUG
        prevConfig
      );
      switch (controlGroupName) {
        case "datatype":
          return { ...prevConfig, dataType: title, dataKey: sign, sortOrder: "desc" };
        case "graph":
          return { ...prevConfig, graphType: title };
        case "filter":
          if (title === "inc" || title === "desc") {
            return { ...prevConfig, sortOrder: title === "inc" ? "asc" : "desc" };
          }
          return prevConfig;
        default:
          console.warn(">>> DEBUG: updateConfig - Unknown control group:", controlGroupName); // DEBUG
          return prevConfig;
      }
    });
  }, []); // Nincs külső függősége

  // Adatok feldolgozása és szűrése useMemo-val
  const displayedData = useMemo(() => {
    // A sumObject.data tömböt használjuk forrásként
    const sourceData = sumObject?.data;
    // DEBUG: Logoljuk a useMemo futását és a releváns értékeket
    console.log(`>>> DEBUG: useMemo running. config.totalItems: ${config.totalItems}, sourceData length: ${sourceData?.length ?? 0}`); // DEBUG

    // Ha nincs adat, üres tömböt adunk vissza
    if (!sourceData || sourceData.length === 0) {
        console.log(">>> DEBUG: useMemo exiting early - no sourceData."); // DEBUG
        return [];
    }

    // Kiolvassuk a szükséges konfigurációs értékeket
    const { dataKey, sortOrder, totalItems } = config;

    // Adatok feldolgozása (map, filter, sort)
    const processedData = sourceData
      .map((item) => {
        // Érték kinyerése és parse-olása
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
        if (rawValue === undefined) return null;
        return { ...item, _parsedValue: parsedValue };
      })
      .filter( // Kiszűrjük a null elemeket és azokat, ahol a parse-olás nem sikerült
        (item) => item !== null && item._parsedValue !== null && !isNaN(item._parsedValue)
      );

    // DEBUG: Logoljuk a feldolgozott adatmennyiséget rendezés előtt
    console.log(`>>> DEBUG: useMemo - processedData length before sort: ${processedData.length}`); // DEBUG

    // Rendezés a config.sortOrder alapján
    processedData.sort((a, b) => {
      const valA = a._parsedValue;
      const valB = b._parsedValue;
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    // A feldolgozott és rendezett adatok levágása a config.totalItems alapján
    // DEBUG: Logoljuk a slice előtti állapotot
    console.log(`>>> DEBUG: useMemo - Slicing processed data (${processedData.length} items) to max ${totalItems} items.`); // DEBUG
    const result = processedData.slice(0, totalItems);
    // DEBUG: Logoljuk a slice utáni eredmény hosszát
    console.log(`>>> DEBUG: useMemo - Final displayedData length after slice: ${result.length}`); // DEBUG
    return result;

  }, [sumObject, config]); // Újraszámolódik, ha a sumObject vagy a config változik

  // DEBUG: Logoljuk a rendereléskor elérhető displayedData hosszát
  console.log('>>> DEBUG: Component rendered. Final displayedData length:', displayedData.length); // DEBUG

  // Message state frissítése useEffect-ben
  useEffect(() => {
      console.log(`>>> DEBUG: useEffect for message running. config.totalItems: ${config.totalItems}, displayedData.length: ${displayedData.length}`); // DEBUG
      if (config.totalItems > 0) {
        setMessage({
          description: `Viewing ${config.graphType} chart. Displaying ${displayedData.length} out of ${config.totalItems} items, sorted by ${config.dataType} (${
            config.sortOrder === "asc" ? "ascending" : "descending"
          }).`,
        });
      } else {
        setMessage({ description: "Loading data..." });
      }
  }, [config, displayedData.length]); // Figyeljük a config és a displayedData hosszának változását

  // JSX renderelés
  return (
    <div
      className={`min-h-screen flex border-0 border-lime-400 z-50 relative ${
        toggle ? "opacity-70" : ""
      }`}
    >
      <video
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400 opacity-40"
        autoPlay
        loop
        muted
      ></video>

      <div
        className={`hidden xl:flex border-0 border-red-400 w-full ${
          toggle ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Propok átadása a GraphDesktop komponensnek */}
        <GraphDesktop
          config={config}
          displayedData={displayedData}
          graphdatasource={graphControlConfiguration}
          message={message}
          handleClick={updateConfig}
        />
      </div>

      <div
        className={`flex xl:hidden ${toggle ? "opacity-0" : "opacity-100"}`}
      >
        {/* Mobil nézet - TODO: Megfelelő propok átadása */}
        <GraphMobile
          graphdatasource={graphControlConfiguration}
          // Itt is valószínűleg szükség lesz a config, displayedData, message, handleClick propokra
        />
      </div>
    </div>
  );
};

export default Graph;