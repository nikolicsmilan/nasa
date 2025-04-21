import { useState, useEffect, useCallback } from "react";
import { MyDataContext } from "../../context/DataContext";
import GraphDesktop from "./desktop/GraphDesktop";
import GraphMobile from "./mobile/GraphMobile";
import { graphControlConfiguration } from "../../locales/graphdata";
import { useStatusTable } from "../../hooks/use-statustable";
import { useFilterTable } from "../../hooks/use-filterTable";
import { mainFilteredData } from "../../utils/mainFilteredData";
import { handleGraphClick } from "../../utils/handleGraphClick";
import { handleFilterClick } from "../../utils/handleFilterClick";
import { graphconsole } from "../../locales/localdata";
const Graph = ({ sumObject }) => {
  const graphConfigurations = graphconsole;
  const [statusTable, setStatusTable] = useStatusTable();
  const [filterTable, setFilterTable] = useFilterTable(sumObject);
  const [filteredData, setFilteredData] = useState(sumObject);
  const [message, setMessage] = useState({
    description: `You are viewing the ${statusTable.dashboard} console with a ${statusTable.graph} chart in ${filterTable.displayMode} mode, filtered to show ${filterTable.piece} items, focusing on ${statusTable.datatype}.`,
  });

  const handleClick = useCallback(
    (nameconsole, newValues) => {
      const { title, sign = statusTable?.sign } = newValues;
      console.log("handleClick called with:", { nameconsole, newValues });
      // Itt már a Graph.jsx lokális állapotait és settereit használjuk!
      if (nameconsole === "graph") {
        handleGraphClick(
          title,
          sign,
          graphConfigurations, // A helyben definiált konfig
          setStatusTable, // A helyi useStatusTable-ből
          setFilterTable // A helyi useFilterTable-ből (ha a handleGraphClick használja)
        );
      } else if (nameconsole === "filter") {
        handleFilterClick(
          title,
          setFilterTable, // A helyi useFilterTable-ből
          graphConfigurations, // A helyben definiált konfig
          statusTable // A helyi useStatusTable-ből
        );
      } else {
        setStatusTable((prevStatusTable) => ({
          // A helyi useStatusTable-ből
          ...prevStatusTable,
          [nameconsole]: title,
          sign: sign,
        }));
      }
    },
    [statusTable, setStatusTable, setFilterTable, graphConfigurations]
  );

  const { toggle } = MyDataContext();
  console.log("graphControlConfiguration: ", graphControlConfiguration);

  useEffect(() => {
    const newFilteredData = mainFilteredData({
      sumObject,
      statusTable,
      displayMode: filterTable.displayMode,
      piece: filterTable.piece,
    });

    setFilteredData(newFilteredData);
  }, [sumObject, statusTable, filterTable]);

  useEffect(() => {
    setMessage({
      description: `You are viewing the ${statusTable.dashboard} dashboard with ${statusTable.graph} chart in ${filterTable.displayMode} mode, filtered to show ${filterTable.piece} items, focusing on ${statusTable.datatype}.`,
    });
  }, [statusTable, filterTable]);

  useEffect(() => {
    handleClick("graph", graphconsole[1]);
    handleClick("graph", graphconsole[0]);
  }, []);
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
        <GraphDesktop
          statusTable={statusTable}
          filterTable={filterTable}
          filteredData={filteredData}
          graphdatasource={graphControlConfiguration}
          message={message}
          handleClick={handleClick}
        />
      </div>

      <div
        className={`flex  xl:hidden   ${toggle ? "opacity-0" : "opacity-100"}`}
      >
        <GraphMobile graphdatasource={graphControlConfiguration} />
      </div>
    </div>
  );
};

export default Graph;