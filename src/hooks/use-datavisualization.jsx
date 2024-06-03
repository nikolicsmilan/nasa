import React from "react";
import ReachartsExample from "../pages/Asteroide/components/RechartExample2"

export const useDataVisualization = () => {
  const updateConsole = (actualMainConsole) => {
    if (actualMainConsole === "Year") {
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
