import React from "react";
import AsideConsole from "./AsideConsole";
import { MyConsoleContext } from "../../../context/ConsoleContext";
// It only separates the data, indicating which component receives it
const RightConsolesAside = () => {
  const { rightasideconsole } = MyConsoleContext();
  return (
    <>
      <AsideConsole source={rightasideconsole} description="RIGHT CONSOLES" />
    </>
  );
};

export default RightConsolesAside;
