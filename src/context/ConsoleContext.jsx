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
  order: "asc", //desc
  sourcetype: "max", //min |
};

const initFilterTable = {
  min: "",
  max: "",
  avg: "",
  displayMode: "max", //max | avg | min | all
};

const calculateStatistics = (data) => {
  const hValues = data
    .map((item) => parseFloat(item.h))
    .filter((h) => !isNaN(h));
  const min = Math.min(...hValues);
  const max = Math.max(...hValues);
  const avg = hValues.reduce((acc, val) => acc + val, 0) / hValues.length;

  return { min, max, avg };
};

const calculateTopBottomAverage = (data) => {
  const hValues = data
    .map((item) => ({ ...item, h: parseFloat(item.h) }))
    .filter((item) => !isNaN(item.h));
  const sortedByH = [...hValues].sort((a, b) => a.h - b.h);
  const top10 = sortedByH.slice(-10).reverse();
  const bottom10 = sortedByH.slice(0, 10);
  const middleIndex = Math.floor(sortedByH.length / 2);
  const average10 = sortedByH.slice(middleIndex - 5, middleIndex + 5);

  return {
    top10,
    bottom10,
    average10,
  };
};
/*
const createFilteredData = ({ top10, bottom10, average10, displayMode }) => {
  return top10.map((item, index) => ({
    name: (index + 1).toString(),
    max: displayMode === "max" ? item.h : null,
    avg: displayMode === "avg" ? average10[index] ? average10[index].h : null : null,
    min: displayMode === "min" ? bottom10[index] ? bottom10[index].h : null : null,
  }));
};*/

const createFilteredData = ({ top10, bottom10, average10, displayMode }) => {
  console.log(
    "createFilteredData run .......................................",
    "top10: ",
    top10,
    "bottom10: ",
    bottom10,
    "average10: ",
    average10,
    "displayMode: ",
    displayMode
  );
  return top10.map((item, index) => ({
    name: (index + 1).toString(),
    max: displayMode === "max" || displayMode === "all" ? item.h : null,
    avg:
      displayMode === "avg" || displayMode === "all"
        ? average10[index]
          ? average10[index].h
          : null
        : null,
    min:
      displayMode === "min" || displayMode === "all"
        ? bottom10[index]
          ? bottom10[index].h
          : null
        : null,
  }));
};

export const ConsoleContextProvider = ({ children }) => {
  const [sumObject, setSumObject] = useState(sentry.data);
  const [filteredData, setFilteredData] = useState(sentry.data);
  const [statusTable, setStatusTable] = useState(initStatusTable);
  const [filterTable, setFilterTable] = useState(initFilterTable);
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

  useEffect(() => {
    /* const { min, max, avg } = calculateStatistics(sumObject);
    setFilterTable({
      min: min.toFixed(2),
      max: max.toFixed(2),
      avg: avg.toFixed(2),
      displayMode: filterTable.displayMode, // Keep existing display mode
    });*/

    const topBottomAverage = calculateTopBottomAverage(sumObject);

    
    const newFilteredData = createFilteredData({
      ...topBottomAverage,
      displayMode: filterTable.displayMode,
    });

    /*
    const newFilteredData = createFilteredData({
      top10: topBottomAverage.top10,
      bottom10: topBottomAverage.bottom10,
      average10: topBottomAverage.average10,
      displayMode: filterTable.displayMode,
    });*/

    console.log(
      "newFilteredData in Context",
      newFilteredData,
      "FilterTable: ",
      filterTable
    );

    //EDDIG A JÓ CSAK NEM VÁLTOZIK MEG A GARPH
    setFilteredData(newFilteredData);
  }, [sumObject, filterTable]);

  useEffect(() => {
    const { min, max, avg } = calculateStatistics(sumObject);
    setFilterTable({
      min: min.toFixed(2),
      max: max.toFixed(2),
      avg: avg.toFixed(2),
      displayMode: filterTable.displayMode, // Keep existing display mode
    });
  }, [sumObject]);

  //console.log("filteredData in Context", filteredData[0]);

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
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

export const MyConsoleContext = () => {
  return useContext(ConsoleContext);
};
