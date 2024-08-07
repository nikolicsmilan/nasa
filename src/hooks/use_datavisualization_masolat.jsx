import React, { useEffect, useState, useContext } from "react";
import ReachartsExample from "../pages/Asteroide/components/RechartExample2";
import { MyConsoleContext } from "../context/ConsoleContext";
import TestCharts2 from "../pages/Asteroide/components/TestCharts2";
import GeneralDashboard from "../pages/Asteroide/dashboards/GeneralDashboard";
import {
  AreaCharts,
  AreaChartComponent,
  BarCharts,
  BarChartComponent,
  LineChart,
  LineChartComponent,
  PieChart,
  PieChartComponent,
  RadarChartComponent,
  RadialBarChartComponent,
  ScatterChartComponent,
  FunnelChartComponent,
} from "../components/Charts";
import useWindowSize from "./use-windowsize";

export const useDataVisualization = () => {
  const {
    info,
    actualMainConsole,
    statusTable,
    filterTable,
    setStatusTable,
    setFilterTable,
    graphConfigurations
  } = MyConsoleContext();
  const { width, height } = useWindowSize();

  const updateConsole = () => {
    if (statusTable.dashboard === "general") {
      return (
        <div className="border-0 border-lime-400 w-full">
          <GeneralDashboard />
        </div>
      );
    } else if (statusTable.dashboard === "graph") {
      switch (statusTable.graph) {
        case "area":
          return (
            <div className="w-full border-0 border-orange-400 flex justify-center">
              <AreaChartComponent />
            </div>
          );
        case "bar":
          return <BarChartComponent />;
        case "line":
          return <LineChartComponent />;
        case "pie":
          return <PieChartComponent />;
        case "radar":
          return <RadarChartComponent />;
        case "radialBar":
          return <RadialBarChartComponent />;
        case "scatter":
          return <ScatterChartComponent />;
        case "funnel":
          return <FunnelChartComponent />;
        default:
          return (
            <div className="flex border-0 p-2 border-lime-400 w-full justify-center">
              <h1>This graph type is under development</h1>
            </div>
          );
      }
    } else {
      return (
        <div className="flex border-0 p-2 border-lime-400 w-full justify-center">
          <h1>This console is under development</h1>
        </div>
      );
    }
  };

  const [consoleContent, setConsoleContent] = useState(updateConsole(actualMainConsole));

  useEffect(() => {
    if (info === "animáció 6" && statusTable?.animations === "yes") {
      setConsoleContent(updateConsole(statusTable));
    } else if (!actualMainConsole?.animations) {
      setConsoleContent(updateConsole(statusTable));
    }
  }, [info, statusTable, filterTable]);

  const handleClick = (nameconsole, newValues) => {
    const { title, sign = statusTable.sign } = newValues;

    const isDisabled = () => {
      if (
        statusTable.dashboard === "graph" &&
        statusTable.graph === "bar" &&
        nameconsole === "filter" &&
        ["all", "inc", "desc"].includes(title)
      ) {
        return true;
      }
      if (
        statusTable.dashboard !== "graph" &&
        (nameconsole === "graph" ||
          nameconsole === "filter" ||
          nameconsole === "datatype")
      ) {
        return true;
      }
      if (nameconsole === "filter" && (title === "plusone" || title === "minusone")) {
        const config = graphConfigurations.find(
          (config) => config.name === statusTable.graph
        );
        if (title === "plusone" && filterTable.piece >= config.max) {
          return true;
        } else if (title === "minusone" && filterTable.piece <= config.min) {
          return true;
        }
      }
      return false;
    };

    if (isDisabled()) {
      return;
    }

    if (nameconsole === "graph") {
      const newGraphConfig = graphConfigurations.find(
        (config) => config.name === title
      );
      if (newGraphConfig) {
        setStatusTable((prevStatusTable) => ({
          ...prevStatusTable,
          graph: title,
          sign: sign,
        }));
        setFilterTable((prevFilterTable) => ({
          ...prevFilterTable,
          piece: newGraphConfig.max, // Set piece to the max value of the new graph
          displayMode: title === "bar" ? "max" : prevFilterTable.displayMode // Set displayMode to "max" if the graph is "bar"
        }));
      }
    } else if (nameconsole === "filter") {
      setFilterTable((prevFilterTable) => {
        let newPiece = prevFilterTable.piece;
        const config = graphConfigurations.find(
          (config) => config.name === statusTable.graph
        );
        if (!config) return prevFilterTable;

        if (title === "plusone" && newPiece < config.max) {
          newPiece += 1;
        } else if (title === "minusone" && newPiece > config.min) {
          newPiece -= 1;
        }
        return {
          ...prevFilterTable,
          displayMode: title === "plusone" || title === "minusone" ? prevFilterTable.displayMode : title,
          piece: newPiece,
        };
      });
    } else {
      setStatusTable((prevStatusTable) => ({
        ...prevStatusTable,
        [nameconsole]: title,
        sign: sign,
      }));
    }
  };

  return { updateConsole, consoleContent, handleClick };
};