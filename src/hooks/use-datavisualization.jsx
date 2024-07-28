import React, { useEffect, useState } from "react";
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

export const useDataVisualization = () => {
  const { info, actualMainConsole, statusTable } = MyConsoleContext();

  //ez változtatja a tartalmat

  //Ezt kell egyenként először kidolgozni
  // először komponens
  //Kell egy Táblázat forma is
  // aztán adat
  //>> 1.Ebből kettős alul felülről
  // 2.illetve darabonként emelni 2-10
  //3. kiegészítés ha a chart megkívánja más értékkel összenhaonlítás
  //ezt mindig chartonként kell eldönteni
  //aztán animáció
  const updateConsole = () => {
    if (statusTable.dashboard === "general") {
      return (
        <div className="border-0 border-lime-400">
          <GeneralDashboard />
        </div>
      );
    } else if (statusTable.dashboard === "graph") {
      switch (statusTable.graph) {
        case "area":
          return (
            <div className="border-0 border-lime-400">
              <AreaChartComponent   />
            </div>
          );
        case "bar":
          return <BarChartComponent />;
        case "line":
          return <LineChartComponent  />;
        case "pie":
          return <PieChartComponent  />;
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
  const [consoleContent, setConsoleContent] = useState(
    updateConsole(actualMainConsole)
  );

  useEffect(() => {
    if (info === "animáció 6" && statusTable?.animations === "yes") {
      setConsoleContent(updateConsole(statusTable));
    } else if (!actualMainConsole?.animations) {
      setConsoleContent(updateConsole(statusTable));
    }
  }, [info, statusTable]);

  return { updateConsole, consoleContent };
};

/*
  const updateConsole = () => {
    if (statusTable.dashboard === "Magnitudo" && statusTable.graph === "Area") {
      return (
        <div className="border-0 border-lime-400">
          <AreaCharts />
        </div>
      );
    } else if (statusTable.dashboard === "General") {
      return (
        <div className="border-0 border-lime-400">
          <GeneralDashboard />
        </div>
      );
    } else if (statusTable.dashboard === "Potential Impacts") {
      return (
        <div>
          <TestCharts2 />
        </div>
      );
    } else if (statusTable.dashboard === "Year") {
      return (
        <div className="border-0 border-red-400">
          <ReachartsExample />
        </div>
      );
    } else if (statusTable.dashboard === "Bar") {
      return (
        <div>
          <BarCharts />
        </div>
      );
    } else {
      return (
        <div className="flex border-0 p-2 border-lime-400 w-full justify-center">
          <h1>This console is under development</h1>
        </div>
      );
    }
  };
*/
/*

  const updateConsole = () => {
    if (statusTable.dashboard === "Magnitudo" && statusTable.graph === "Area") {
      return (
        <div className="border-0 border-lime-400">
          <AreaCharts />
        </div>
      );
    } else if (statusTable.dashboard === "General") {
      return (
        <div className="border-0 border-lime-400">
          <GeneralDashboard />
        </div>
      );
    } else if (statusTable.dashboard === "Potential Impacts") {
      return (
        <div>
          <TestCharts2 />
        </div>
      );
    } else if (statusTable.dashboard === "Year") {
      return (
        <div className="border-0 border-red-400">
          <ReachartsExample />
        </div>
      );
    } else if (statusTable.dashboard === "Bar") {
      return (
        <div>
          <BarCharts />
        </div>
      );
    } else {
      return (
        <div className="flex border-0 p-2 border-lime-400 w-full justify-center">
          <h1>This console is under development</h1>
        </div>
      );
    }
  };
*/
