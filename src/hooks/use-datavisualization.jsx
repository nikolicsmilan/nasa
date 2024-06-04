import React from "react";
import ReachartsExample from "../pages/Asteroide/components/RechartExample2"
import { MyConsoleContext } from "../context/ConsoleContext";
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
    } else if (actualMainConsole !== "Year") {
      return (
        <div>
          <h1>Ez egy másik ami visszajön</h1>
        </div>
      );
    }
  };

  return { updateConsole };
};
/*&& info==='animáció 7' */