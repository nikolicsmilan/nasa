import React from "react";
import { MyDataContext } from "../../context/DataContext";

import DesktopAsteroide from "./desktop/DesktopAsteroide";
import MobileAsteroide from "./mobile/MobileAsteroide";

const Asteroide = () => {
  const { toggle } = MyDataContext();

  return (
    <div
      className={`min-h-screen flex   border-orange-400
       z-50 relative ${toggle ? "opacity-70" : ""}`}
    >
      <video
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-40"
        autoPlay
        loop
        muted
      ></video>

      <div className="hidden lg:flex">
        <DesktopAsteroide toggle={toggle} />
      </div>

      <div className="flex  lg:hidden relative top-20">
        <MobileAsteroide toggle={toggle} />
      </div>
    </div>
  );
};

export default Asteroide;
