import React from "react";
import MainConsole from "../../../components/consoles/views/MainConsole";
import LeftConsolesAside from "../components/LeftConsolesAside";
import RightConsolesAside from "../components/RightConsolesAside";
//import MainConsoleFrame from '../components/MainConsoleFrame'

const DesktopAsteroide = ({}) => {
  return (
    <div
      className={`flex flex-row  w-full 
       relative z-50`}
    >
      <div className="border-0 w-80">
        <LeftConsolesAside />
      </div>
      <div className=" flex-1">
        <MainConsole />
      </div>
      <div className="w-80 border-0">
        <RightConsolesAside />
      </div>
    </div>
  );
};

export default DesktopAsteroide;
