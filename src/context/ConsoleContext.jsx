import { useContext, createContext, useState, useEffect } from "react";
import { useSave } from "../hooks/use-saveuser";
import { useInfo } from "../hooks/use-info";
import {
  leftasideconsolesource,
  rightasideconsolesource,
} from "../locales/localdata";
import { sentry } from "../locales/nasadummy";
import { useStatusTable } from "../hooks/use-statustable";
import { useFilterTable } from "../hooks/use-filterTable";
import { createFilteredData } from "../utils/createFilteredData";
const ConsoleContext = createContext();
const graphConfigInit = [
  { name: "area", min: 5, max: 12 },
  { name: "bar", min: 5, max: 10  },
  { name: "line", min: 5, max: 10 },
  { name: "pie", min: 5, max: 10  },
  { name: "radar", min: 5, max: 10  },
  { name: "radialBar", min: 5, max: 10 },
  { name: "scatter", min: 5, max: 10 },
  { name: "funnel", min: 5, max: 10 },
];
export const ConsoleContextProvider = ({ children }) => {
  const [sumObject, setSumObject] = useState(sentry.data);
  const [filteredData, setFilteredData] = useState(sentry.data);
  const [statusTable, setStatusTable] = useStatusTable();
  //const [filterTable, setFilterTable] = useState(initFilterTable);
  const [filterTable, setFilterTable] = useFilterTable(sumObject);
  const [leftasideconsole, setLeftasideconsole] = useState(
    leftasideconsolesource
  );
  const [rightasideconsole, setRightasideconsole] = useState(
    rightasideconsolesource
  );
  const [actualMainConsole, setActualMainConsole] = useState("Year");
  const [acitveMainConsole, setActiveMainConsole] = useState(false);
  const [animationVariants, setAnimationVariants] = useState({});
  const [info, setInfo] = useState("");
  const [graphConfigurations, setGraphConfigurations] =
    useState(graphConfigInit);
  // Amikor vissza váltok areara valamilyen paramétert nem kap meg valószinleg és
  //ezért üres lesz
  //a táblázat kixcsi az elején
  useEffect(() => {
    const newFilteredData = createFilteredData({
      sumObject,
      statusTable,
      displayMode: filterTable.displayMode,
      piece: filterTable.piece,
    });
  
    setFilteredData(newFilteredData);
  }, [sumObject, statusTable, filterTable]);

  useEffect(() => {
    setStatusTable((prevFilterTable) => ({
      ...prevFilterTable,
      graph: "radar",
    }));
  }, []);
console.log("ConsoleContext filteredData: ",filteredData)
  return (
    <ConsoleContext.Provider
      value={{
        leftasideconsole,
        setLeftasideconsole,
        rightasideconsole,
        setRightasideconsole,
        actualMainConsole,
        setActualMainConsole,
        info,
        setInfo,
        acitveMainConsole,
        setActiveMainConsole,
        animationVariants,
        setAnimationVariants,
        sumObject,
        setSumObject,
        filteredData,
        setFilteredData,
        statusTable,
        setStatusTable,
        filterTable,
        setFilterTable,
        graphConfigurations
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

export const MyConsoleContext = () => {
  return useContext(ConsoleContext);
};
/*
  console.log(
      "newFilteredData in Context",
      newFilteredData,
      "FilterTable: ",
      filterTable
    );
*/
