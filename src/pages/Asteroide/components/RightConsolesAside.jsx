import React from "react";
import AsideConsole from "./AsideConsole";
import { MyConsoleContext } from "../../../context/ConsoleContext";
// It only separates the data, indicating which component receives it
const RightConsolesAside = () => {
  const { rightasideconsole,statusTable } = MyConsoleContext();
  return (
    <div className="border-0 border-red-400 bg-sky-40">
      <AsideConsole source={rightasideconsole} 
    />
      <div className="flex flex-col w-96 text-primary relative top-[40px]">
          {Object.entries(statusTable).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value.toString()}
            </div>
          ))}
        </div>
    </div>
  );
};

export default RightConsolesAside;
