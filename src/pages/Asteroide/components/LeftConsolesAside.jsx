import React from "react";
import AsideConsole from "./AsideConsole";
import { MyConsoleContext } from "../../../context/ConsoleContext";
// It only separates the data, indicating which component receives it
const LeftConsolesAside = () => {
  const { leftasideconsole,filterTable } = MyConsoleContext();
  return (
    <div>
      <AsideConsole source={leftasideconsole} 
      />
       <div className="flex flex-col w-96 text-primary relative top-[40px]">
          {Object.entries(filterTable).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value.toString()}
            </div>
          ))}
        </div>
    </div>
  );
};

export default LeftConsolesAside;
