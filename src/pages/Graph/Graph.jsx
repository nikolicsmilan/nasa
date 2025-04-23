import { useState, useEffect, useCallback } from "react"; // useMemo innen már nem kell
import { MyDataContext } from "../../context/DataContext";
import GraphDesktop from "./desktop/GraphDesktop";
import GraphMobile from "./mobile/GraphMobile";
import { graphControlConfiguration } from "../../locales/graphdata";
import useProcessedGraphData from "../../hooks/use-processed-graph-data"; // <<< ÚJ IMPORT

// Kezdeti konfiguráció (változatlan)
const initialConfig = {
  dataType: "impacts",
  dataKey: "ip",
  graphType: "area",
  sortOrder: "desc",
  totalItems: 0,
  displayLimit: 15,
};

const Graph = ({ sumObject }) => {
  // DEBUG (változatlan)
  try {
    console.log(
      ">>> DEBUG [Graph.jsx]: Component received sumObject structure:",
      sumObject
        ? { count: sumObject.count, dataLength: sumObject.data?.length }
        : sumObject
    );
  } catch (e) {
    console.error(">>> DEBUG [Graph.jsx]: Error stringifying sumObject", e);
    console.log(
      ">>> DEBUG [Graph.jsx]: Component received sumObject (raw):",
      sumObject
    );
  }

  const [config, setConfig] = useState(initialConfig);
  const [message, setMessage] = useState("");
  const { toggle } = MyDataContext();

  // useEffect hook a totalItems beállítására (változatlan)
  useEffect(() => {
    console.log(
      ">>> DEBUG [Graph.jsx]: useEffect for totalItems running. Checking sumObject.count:",
      sumObject?.count
    );
    if (sumObject?.count) {
      const countStr = String(sumObject.count);
      const count = parseInt(countStr, 10);
      console.log(">>> DEBUG [Graph.jsx]: useEffect - Parsed count:", count);
      if (!isNaN(count)) {
        setConfig((prevConfig) => {
          if (prevConfig.totalItems !== count) {
            console.log(
              ">>> DEBUG [Graph.jsx]: useEffect - Updating config.totalItems from",
              prevConfig.totalItems,
              "to:",
              count
            );
            return { ...prevConfig, totalItems: count };
          }
          console.log(
            ">>> DEBUG [Graph.jsx]: useEffect - config.totalItems already up-to-date:",
            prevConfig.totalItems
          );
          return prevConfig;
        });
      } else {
        console.warn(
          ">>> DEBUG [Graph.jsx]: useEffect - Parsed count is NaN. Original sumObject.count:",
          sumObject.count
        );
      }
    } else {
      console.log(
        ">>> DEBUG [Graph.jsx]: useEffect - sumObject or sumObject.count is missing or invalid."
      );
    }
  }, [sumObject]);

  // updateConfig useCallback (változatlan)
  const updateConfig = useCallback((controlGroupName, itemData) => {
    const { title, sign } = itemData;
    setConfig((prevConfig) => {
      console.log(
        `>>> DEBUG [Graph.jsx]: updateConfig called. group='${controlGroupName}', title='${title}'. Prev config:`,
        prevConfig
      );
      switch (controlGroupName) {
        case "datatype":
          return {
            ...prevConfig,
            dataType: title,
            dataKey: sign,
            sortOrder: "desc",
          };
        case "graph":
          return { ...prevConfig, graphType: title };
        case "filter":
          if (title === "inc" || title === "desc") {
            return {
              ...prevConfig,
              sortOrder: title === "inc" ? "asc" : "desc",
            };
          }
          return prevConfig;
        default:
          console.warn(
            ">>> DEBUG [Graph.jsx]: updateConfig - Unknown control group:",
            controlGroupName
          );
          return prevConfig;
      }
    });
  }, []);

  // <<<--- A KISZERVEZETT LOGIKA HASZNÁLATA ---<<<
  // Meghívjuk az új hookot a szükséges adatokkal
  const displayedData = useProcessedGraphData(sumObject, config);
  // Nincs több hosszú useMemo itt!

  // DEBUG log (változatlan)
  console.log(
    ">>> DEBUG [Graph.jsx]: Component rendered. Final displayedData length:",
    displayedData.length
  );

  // Message state frissítése useEffect-ben (változatlan)
  useEffect(() => {
    console.log(
      `>>> DEBUG [Graph.jsx]: useEffect for message running. config.totalItems: ${config.totalItems}, displayedData.length: ${displayedData.length}`
    );
    if (config.totalItems > 0) {
      setMessage({
        description: `Viewing ${config.graphType} chart. Displaying ${
          displayedData.length
        } items (limit: ${config.displayLimit}) out of ${
          config.totalItems
        } total, sorted by ${config.dataType} (${
          config.sortOrder === "asc" ? "ascending" : "descending"
        }).`,
      });
    } else {
      setMessage({ description: "Loading data..." });
    }
  }, [config, displayedData.length]); // Figyeljük a config és a displayedData hosszának változását

  // JSX renderelés (VÁLTOZATLAN)
  return (
    <div
      className={`min-h-screen flex border-0 border-lime-400 z-50 relative ${
        toggle ? "opacity-70" : ""
      }`}
    >
      <video
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className=" hidde background-video border-0 border-red-400 opacity-40"
        autoPlay
        loop
        muted
      ></video>

      <div
        className={`hidden xl:flex border-0 border-red-400 w-full ${
          toggle ? "opacity-0" : "opacity-100"
        }`}
      >
        <GraphDesktop
          config={config}
          displayedData={displayedData}
          graphdatasource={graphControlConfiguration}
          message={message}
          handleClick={updateConfig}
          sumObject={sumObject} 
        />
      </div>

      <div className={`flex xl:hidden ${toggle ? "opacity-0" : "opacity-100"}`}>
        <GraphMobile graphdatasource={graphControlConfiguration} />
      </div>
    </div>
  );
};

export default Graph;
