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
    nameconsole,
    setNameConsole,
    subButtons,
    setSubButtons,
    united,
  } = MyConsoleContext();

  const [consoleContent, setConsoleContent] = useState(() => (
    <DashboardContent />
  ));

  useEffect(() => {
    setConsoleContent(<DashboardContent />);
//EZ RONTJA EL A DOLGOKAT
// MERT CSAK A SUBBTONS VÁLTOZÁSAKOR FUTHATNA LE
//DE ÍGY MINDIG LEFUT HISZEN MINDEN AZON VAN AMIKOR A DASHBOARD GRAPH
//HISZEN CSAK GENERAL ÉS GRAPH VAN!!!
    if (statusTable.dashboard === "graph") {
      handleMenuChange("graph");
    }
  }, [info, statusTable, filterTable]);

  const handleMenuChange = (name) => {
    const selectedItem = united.find((item) => item.name === name);
    if (selectedItem) {
      setSubButtons(selectedItem.data);
      setNameConsole(name);
    }
  };

  const handleClick = (nameconsole, newValues) => {
    console.log(
      "useDataVisualization: ",
      "nameconsole: ",
      nameconsole,
      "newValues: ",
      newValues
    );
    const { title, sign = statusTable.sign } = newValues;
    //console.log("useDataVisualization handleClick most A",statusTable.dashboard );
 
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

  return { consoleContent, handleClick, handleMenuChange };
};

/*
   if (statusTable.dashboard === "graph") {
      handleMenuChange("graph")
    }
*/

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
