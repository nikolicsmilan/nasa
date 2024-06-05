import React from "react";
import ReachartsExample from "../pages/Asteroide/components/RechartExample2"
import { MyConsoleContext } from "../context/ConsoleContext";
import TestCharts2 from "../pages/Asteroide/components/TestCharts2"
export const useDataVisualization = () => {
  const { info } =
  MyConsoleContext();
  const updateConsole = (actualMainConsole) => {
    if (actualMainConsole === "Year" ) {
      return (
        <div>
        <ReachartsExample/>
        </div>
      );
    } else if (actualMainConsole === "Potential Impacts") {
      return (
        <div>
        <TestCharts2/>
        </div>
      );
    }else if (actualMainConsole === "Potential Impacts") {
      return (
        <div>
        <TestCharts2/>
        </div>
      );
    }else if (actualMainConsole !== "Year") {
      return (
        <div>
          <h1>Ez egy másik ami visszajön</h1>
        </div>
      );
    }
  };

  return { updateConsole };
};
