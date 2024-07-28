import { useContext, createContext, useState, useEffect } from "react";
import { useSave } from "../hooks/use-saveuser";
import { useInfo } from "../hooks/use-info";
import {
  leftasideconsolesource,
  rightasideconsolesource,
} from "../locales/localdata";
import { sentry } from "../locales/nasadummy";
const ConsoleContext = createContext();
const initStatusTable = {
  dashboard: "graph", // | graph
  graph: "area", //bar | line | pie | radar | radialBar | scatter | funnel
  information: "nasa",
  filter: "increase",
  operation: "joystick",
  resorces: "firebase",
  //All
  animations: "no", //or yes
  // If there is a sign, filter for it
  sign: "magnitudo", //magnitudo |ip | ps_max | v_inf | ts_max | diameter | energy | date
  // Only filter
  piece: 10,
  order:"asc", //desc
  sourcetype: "max", //min |
};
const initFilterTable ={
  
}


export const ConsoleContextProvider = ({ children }) => {
  const [sumObject, setSumObject] = useState(sentry);
  const [filteredData, setFilteredData] = useState(sentry);
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
