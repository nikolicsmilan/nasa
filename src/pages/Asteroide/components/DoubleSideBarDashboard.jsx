import React from "react";
import { MyDataContext } from "../../../context/DataContext";
import MainConsoleFrame from "./MainConsoleFrame";
import LeftConsolesAside from "./LeftConsolesAside";
import RightConsolesAside from "./RightConsolesAside";

const DoubleSidebarDashboard = () => {
  const { toggle } = MyDataContext();

  return (
    <div
      className={`min-h-screen flex  border-00 border-orange-400
       z-50 relative ${
        toggle ? "opacity-20" : ""
      }`}
    >
      <video
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-40"
        autoPlay
        loop
        muted
      ></video>
      <div
        className="flex flex-row  w-full border-0 border-purple-400
       opacity-70 relative z-50"
      >
        <LeftConsolesAside />
        <MainConsoleFrame />
        <RightConsolesAside />
      </div>
    </div>
  );
};

export default DoubleSidebarDashboard;
