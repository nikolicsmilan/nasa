import { useEffect, useState } from "react";
import { MyConsoleContext } from "../context/ConsoleContext";
import { DashboardContent } from "../pages/Asteroide/dashboards/DashboardContent";
import { handleGraphClick } from "../utils/handleGraphClick";
import { handleFilterClick } from "../utils/handleFilterClick";

export const useDataVisualization = (united) => {
  const {
    info,
    statusTable,
    filterTable,
    setStatusTable,
    setFilterTable,
    graphConfigurations,
    nameconsole,
    setNameConsole,
    setSubButtons,
    //united már nem jön contextből
  } = MyConsoleContext();

  const [consoleContent, setConsoleContent] = useState(() => (
    <DashboardContent />
  ));

  useEffect(() => {
    setConsoleContent(<DashboardContent />);
    if (statusTable.dashboard === "graph" && nameconsole === "graph") {
      handleMenuChange("graph");
    }
  }, [info, statusTable, filterTable]);
/*
  const handleMenuChange = (name) => {
 //console.log("handleMenuChange: ", name);
  //  console.log(united.map((item) => item.name));
    const selectedItem = united.find((item) => item.name === name);
   // console.log("selectedItem: ", selectedItem);
    if (selectedItem) {
      setSubButtons(selectedItem.data);
      setNameConsole(name);
    }
  };*/

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

  return { consoleContent, handleClick};
};

