import { useContext, createContext, useState, useEffect } from "react";
import { useSave } from "../hooks/use-saveuser";
import { useInfo } from "../hooks/use-info";
import {
  leftasideconsolesource,
  rightasideconsolesource,
} from "../locales/localdata";
import { nasa } from "../locales/nasaapi";
const ConsoleContext = createContext();
const initStatusTable = {
  title:"general",
  dashboard:"general",
  graph: "area",
  information:"nasa",
  filter:"increase",
  type: "dashboards",
  sign: "magnitudo",
  filter: "increase",
  operation:"joystick",
  resorces:"firebase",
  piece: 10,
  sourcetype: "oneside", //twoends
  animations: "no",
};
export const ConsoleContextProvider = ({ children }) => {
  const [sumObject, setSumObject] = useState(nasa);
  const [filteredData, setFilteredData] = useState(nasa);
  const [actualTypeData, setActualtypedata] = useState("h");
  const [statusTable, setStatusTable] = useState(initStatusTable);
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
        actualTypeData,
        setActualtypedata,
        statusTable,
        setStatusTable,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

export const MyConsoleContext = () => {
  return useContext(ConsoleContext);
};
