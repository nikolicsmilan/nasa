import React, { useEffect, useState } from "react";
import ReachartsExample from "../pages/Asteroide/components/RechartExample2";
import { MyConsoleContext } from "../context/ConsoleContext";
import TestCharts2 from "../pages/Asteroide/components/TestCharts2";
import GeneralDashboard from "../pages/Asteroide/dashboards/GeneralDashboard";

export const useDataVisualization = () => {
  const { info, actualMainConsole } = MyConsoleContext();

  const updateConsole = (actualMainConsole) => {
    if (actualMainConsole === "Year") {
      return (
        <div>
          <ReachartsExample />
        </div>
      );
    } else if (actualMainConsole === "General") {
      return (
        <div>
          < GeneralDashboard/>
        </div>
      );
    } else if (actualMainConsole === "Potential Impacts") {
      return (
        <div>
          <TestCharts2 />
        </div>
      );
    } else if (actualMainConsole !== "Year") {
      return (
        <div>
          <h1>Ez egy másik ami visszajön</h1>
        </div>
      );
    }
  };

  const [consoleContent, setConsoleContent] = useState(
    updateConsole(actualMainConsole)
  );

  useEffect(() => {
    if (info === "animáció 6") {
      setConsoleContent(updateConsole(actualMainConsole));
    }
  }, [info, actualMainConsole]);

  return { updateConsole, consoleContent };
};
