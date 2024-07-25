import React from "react";
import { MyDataContext } from "../../context/DataContext";

import DesktopAsteroide from "./desktop/DesktopAsteroide";
import MobileAsteroide from "./mobile/MobileAsteroide";

const Asteroide = () => {
  const { toggle } = MyDataContext();

  return (
    <div
      className={`min-h-screen flex border-0  border-orange-400
       z-50 relative ${toggle ? "opacity-70" : ""}`}
    >
      <video
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-40"
        autoPlay
        loop
        muted
      ></video>

      <div
        className={`hidden lg:flex border-0 border-red-400 w-full   ${
          toggle ? "opacity-0" : "opacity-100"
        }`}
      >
        <DesktopAsteroide toggle={toggle} />
      </div>

      <div
        className={`flex  lg:hidden   ${toggle ? "opacity-0" : "opacity-100"}`}
      >
        <MobileAsteroide />
      </div>
    </div>
  );
};

export default Asteroide;
