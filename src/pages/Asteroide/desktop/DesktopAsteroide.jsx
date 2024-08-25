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
      <div className="border-0 border-red-400 w-64">
        <LeftConsolesAside />
      </div>
      <div className="border-0 flex-1">
        <MainConsole />
      </div>
      <div className="w-64 border-0">
        <RightConsolesAside />
      </div>
    </div>
  );
};

export default DesktopAsteroide;
//IIT HIBA VAN MERT A MAIN CONSOLE MAGA IS FOG DÖNTÉST HOZNI WIDTH
// ÉS HEIGHT ALAPJÁN DE EZ AZ AreaChartComponent BEN IS MEG VAN