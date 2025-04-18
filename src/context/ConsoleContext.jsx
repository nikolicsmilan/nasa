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
import { mainFilteredData } from "../utils/mainFilteredData";
const ConsoleContext = createContext();
const graphConfigInit = [
  { name: "area", min: 5, max: 12 },
  { name: "bar", min: 5, max: 10 },
  { name: "line", min: 5, max: 11 },
  { name: "pie", min: 5, max: 10 },
  { name: "radar", min: 5, max: 10 },
  { name: "radialBar", min: 5, max: 10 },
  { name: "scatter", min: 5, max: 10 },
  { name: "funnel", min: 5, max: 10 },
];

export const ConsoleContextProvider = ({ children }) => {
 // const [sumObject, setSumObject] = useState(sentry.data);
 // const [filteredData, setFilteredData] = useState(sentry.data);
 // const [statusTable, setStatusTable] = useStatusTable();
  const [nameconsole, setNameConsole] = useState("dashboard");
 // const [filterTable, setFilterTable] = useFilterTable(sumObject);
  const [leftasideconsole, setLeftasideconsole] = useState(
    leftasideconsolesource
  );
  const [rightasideconsole, setRightasideconsole] = useState(
    rightasideconsolesource
  );
 
  const [mobiletoggle, setMobileToggle] = useState(false);
  const [actualMainConsole, setActualMainConsole] = useState("Year");
  const [acitveMainConsole, setActiveMainConsole] = useState(false);
  const [animationVariants, setAnimationVariants] = useState({});
  const [info, setInfo] = useState("");


  const [graphConfigurations, setGraphConfigurations] =
    useState(graphConfigInit);


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
       // sumObject,
       // setSumObject,
      //  filteredData,
       // setFilteredData,
       // statusTable,
       // setStatusTable,
       // filterTable,
       // setFilterTable,
        graphConfigurations,
        nameconsole,
        setNameConsole,
        mobiletoggle,
        setMobileToggle,
       // message,
       // setMessage,
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
