import React from "react";
import AsideConsole from "./AsideConsole";
import { MyConsoleContext } from "../../../context/ConsoleContext";
// It only separates the data, indicating which component receives it
const RightConsolesAside = () => {
  const { rightasideconsole } = MyConsoleContext();
  return (
    <div className="border-0 border-red-400 bg-sky-40">
      <AsideConsole source={rightasideconsole} 
    />
    </div>
  );
};

export default RightConsolesAside;
