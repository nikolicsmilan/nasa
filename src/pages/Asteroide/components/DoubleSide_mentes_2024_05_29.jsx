import React, { useEffect, useState } from "react";
import CardConsole1 from "../../../components/consoles/views/CardConsole1";
import { MyDataContext } from "../../../context/DataContext";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole";
import FilterConsole from "../../../components/consoles/views/FilterConsole";
import { filterconsole } from "../../../locales/localdata";
import Super3dConsole from "../../../components/consoles/views/Super3dConsole";
import BiggerConsoles from "../../../components/consoles/views/BiggerConsoles";
import {start} from "../../../locales/localdata"
const DoubleSidebarDashboard = () => {
  const { toggle } = MyDataContext();
  const [rotateX, setRotateX] = useState(21);
  const [rotateY, setRotateY] = useState(28);
  const [rotateZ, setRotateZ] = useState(0);
  return (
    <div
      className={`min-h-screen flex  border-0 border-orange-400  ${
        toggle ? "opacity-20" : ""
      }`}
    >
      <video
        // src={earth}
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border--400  opacity-100"
        autoPlay
        loop
        muted
      ></video>sssssssss
      <div className="flex  w-full border-2 border-purple-400 opacity-70 z-40 ">
        {/* Bal oldali oldalsáv */}
        <header className="h-full w-screen bg-gradient shadow flex items-center px-6">
            <h1 className="text-2xl font-semibold px-2">SENTRY</h1>
            <p className="text-sky-950"> Earth Impact Monitoring</p>
          </header>

          <main className="flex-1 bg-black p-6 border-0 border-sky-400">
          <header className="h-16 bg-gradient shadow flex items-center px-6">
            <h1 className="text-2xl font-semibold px-2">SENTRY</h1>
            <p className="text-sky-950"> Earth Impact Monitoring</p>
          </header>
          <div className="flex flex-col justify-center items-center">
              <BiggerConsoles menupoint={start} className="   lg:hidden " />
              <h2 className="m-1 absolute bottom-20 text-200 text-xl font-bold">
                "It's a small step for the developer, but a huge step against
                the fake news..."
              </h2>
            </div>
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



        {/* Jobb oldali oldalsáv */}
        <aside
          className="w-80 bg-black text-white flex flex-col
       justify-between my-5 border-l-2 border-primary"
        >
          <div className="h-16 flex items-center justify-center  border-gray-700">
            <span className="text-xl font-semibold text-primary">Details</span>
          </div>
          <div className="relative ">
            <Super3dConsole
              nameconsole="Super 3D"
              data={filterconsole}
              origin="left center"
              rotateX={-21}
              rotateY={rotateY}
              rotateZ={rotateZ}
              description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            />
          </div>
          <div className="border-red-400 border-0 relative ">
            <Super3dConsole
              nameconsole="Super 3D"
              data={filterconsole}
              origin="left center"
              rotateX={-21}
              rotateY={rotateY}
              rotateZ={rotateZ}
              description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            />
          </div>
          <Super3dConsole
            nameconsole="Super 3D"
            data={filterconsole}
            origin="left center"
            rotateX={-21}
            rotateY={rotateY}
            rotateZ={rotateZ}
            description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
          />
        </aside>


        
      </div>
    </div>
  );
};

export default DoubleSidebarDashboard;
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
