import React, { useEffect, useState } from "react";
import { MyConsoleContext } from "../context/ConsoleContext";
import { DashboardContent } from "../pages/Asteroide/dashboards/DashboardContent";
import { handleGraphClick } from "../utils/handleGraphClick";
import { handleFilterClick } from "../utils/handleFilterClick";
export const useDataVisualization = () => {
  const {
    info,
    statusTable,
    filterTable,
    setStatusTable,
    setFilterTable,
    graphConfigurations,
  } = MyConsoleContext();

  const [consoleContent, setConsoleContent] = useState(() => (
    <DashboardContent />
  ));

  useEffect(() => {
    setConsoleContent(<DashboardContent />);
  }, [info, statusTable, filterTable]);

  const handleClick = (nameconsole, newValues) => {

    console.log("useDataVisualization: ","nameconsole: ",nameconsole,"newValues: ",newValues)
    const { title, sign = statusTable.sign } = newValues;

    if (nameconsole === "graph") {
      handleGraphClick(
        title,
        sign,
        graphConfigurations,
        setStatusTable,
        setFilterTable
      );
    } else if (nameconsole === "filter") {
      handleFilterClick(
        title,
        setFilterTable,
        graphConfigurations,
        statusTable
      );
    } else {
      setStatusTable((prevStatusTable) => ({
        ...prevStatusTable,
        [nameconsole]: title,
        sign: sign,
      }));
    }
  };

  return { consoleContent, handleClick };
};


/*
  const handleClick = (nameconsole, newValues) => {
    const { title, sign = statusTable.sign } = newValues;

    if (nameconsole === "graph") {
      handleGraphClick(
        title,
        sign,
        graphConfigurations,
        setStatusTable,
        setFilterTable
      );
    } else if (nameconsole === "filter") {
      handleFilterClick(
        title,
        setFilterTable,
        graphConfigurations,
        statusTable
      );
    } else {
      setStatusTable((prevStatusTable) => ({
        ...prevStatusTable,
        [nameconsole]: title,
        sign: sign,
      }));
    }
  };

*/