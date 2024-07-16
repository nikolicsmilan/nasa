import React, { useEffect, useState } from "react";
import ReachartsExample from "../pages/Asteroide/components/RechartExample2";
import { MyConsoleContext } from "../context/ConsoleContext";
import TestCharts2 from "../pages/Asteroide/components/TestCharts2";
import GeneralDashboard from "../pages/Asteroide/dashboards/GeneralDashboard";
import AreaCharts from "../components/Charts/AreaCharts";
import BarCharts from "../components/Charts/BarCharts";
export const useDataVisualization = () => {
  const { info, actualMainConsole, sumObject } = MyConsoleContext();

  //ez változtatja a tartalmat
  const updateConsole = (actualMainConsole) => {
    if (actualMainConsole?.title === "Year") {
      return (
        <div className="border-0 border-red-400">
          <ReachartsExample />
        </div>
      );
    } else if (actualMainConsole?.title === "General") {
      return (
        <div className="border-0 border-lime-400">
          <GeneralDashboard />
        </div>
      );
    } else if (actualMainConsole?.title === "Potential Impacts") {
      return (
        <div>
          <TestCharts2 />
        </div>
      );
    } else if (actualMainConsole?.title === "Area") {
      return (
        <div>
          <AreaCharts />
        </div>
      );
    } else if (actualMainConsole?.title === "Bar") {
      return (
        <div>
          <BarCharts />
        </div>
      );
    } else if (actualMainConsole?.title !== "Year") {
      return (
        <div className="flex border-0 p-2 border-lime-400 w-full  justify-center">
          <h1 className="">This console is under development </h1>
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
