import React, { useEffect, useState } from "react";
import CardConsole1 from "../../../components/consoles/views/CardConsole1";
import { MyDataContext } from "../../../context/DataContext";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole";
import FilterConsole from "../../../components/consoles/views/FilterConsole";
import { filterconsole } from "../../../locales/localdata";
import Super3dConsole from "../../../components/consoles/views/Super3dConsole";
import AsideConsole from "./AsideConsole";
import MainConsole from "./MainConsole";
import LeftConsolesAside from "./LeftConsolesAside";
const DoubleSidebarDashboard = () => {
  const { toggle } = MyDataContext();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  return (
    <div
      className={`min-h-screen flex  border-0 border-orange-400 z-50 relative ${
        toggle ? "opacity-20" : ""
      }`}
    >
      <video
        // src={earth}
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-70"
        autoPlay
        loop
        muted
      ></video>

      <div
        className="flex flex-row  w-full border-0 border-purple-400
       opacity-70 relative z-50"
      >
        <LeftConsolesAside/>
      
        <MainConsole />
        <LeftConsolesAside/>
      </div>
    </div>
  );
};

export default DoubleSidebarDashboard;
//  <AsideConsole />
/* <MainConsole />

        <AsideConsole /> */
/*
SUPER 3D
FILTERCONSOLE GRAPH
FILTERCONSOLE ITEMS
Alapavető információk gombokkal magyarázatok wikipédiáról nasatól

*/

/*
     
        <main className="flex-1 bg-black p-6 border-2 border-red-400">
          <header className="h-16 bg-gradient shadow flex items-center px-6">
            <h1 className="text-2xl font-semibold px-2">SENTRY</h1>
            <p className="text-sky-950"> Earth Impact Monitoring</p>
          </header>

          <section className=" flex justify-center items-center flex-wrap mt-6 w-full border-0">
            <div className="flex  flex-wrap justify-center h-40 m-1 ">
              <SquareminConsole title="Torino skála" />
              <SquareminConsole title="Palermo skála" />
              <SquareminConsole title="Legnagyobb kockázat" />
              <SquareminConsole title="Megfigyelt objektumok" />
            </div>
          </section>

          <div
            className="flex  w-full  relative text-xl z-10 
        border-0 border-purple-400 mt-[0px] "
          >
            <div className="flex flex-col gap-4  relative z-50 my-10">
              <label className="flex flex-col">
                <span className="mb-1">Rotate X:</span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={rotateX}
                  onChange={(e) => setRotateX(e.target.value)}
                  className="w-full"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1">Consoles open</span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={rotateY}
                  onChange={(e) => setRotateY(e.target.value)}
                  className="w-full"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1">Rotate Z:</span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={rotateZ}
                  onChange={(e) => setRotateZ(e.target.value)}
                  className="w-full"
                />
              </label>
            </div>
          </div>
        </main>
*/
