import React, { useEffect, useState } from "react";
import ReachartsExample from "../pages/Asteroide/components/RechartExample2";
import { MyConsoleContext } from "../context/ConsoleContext";
import TestCharts2 from "../pages/Asteroide/components/TestCharts2";
import GeneralDashboard from "../pages/Asteroide/dashboards/GeneralDashboard";
import {
  AreaCharts,
  BarCharts,
  LineChart,
  PieChart,
  RadarChart,
  RadialBarChart,
  ScatterChart,
  FunnelChart,
} from "../components/Charts";

export const useDataVisualization = () => {
 const { info, actualMainConsole, statusTable }   = MyConsoleContext();

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
  const [consoleContent, setConsoleContent] = useState(
    updateConsole(actualMainConsole)
  );

  useEffect(() => {
    if (info === "animáció 6" && actualMainConsole?.animations === "yes") {
      setConsoleContent(updateConsole(actualMainConsole));
    } else if (!actualMainConsole?.animations) {
      setConsoleContent(updateConsole(actualMainConsole));
    }
  }, [info, actualMainConsole]);

  return { updateConsole, consoleContent };
};
