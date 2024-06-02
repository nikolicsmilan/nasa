import React from "react";
import AsideConsole from "./AsideConsole";
import { MyConsoleContext } from "../../../context/ConsoleContext";
// It only separates the data, indicating which component receives it
const LeftConsolesAside = () => {
  const { leftasideconsole } = MyConsoleContext();
  return (
    <>
      <AsideConsole source={leftasideconsole} description="LEFT CONSOLES" />
    </>
  );
};

export default LeftConsolesAside;
