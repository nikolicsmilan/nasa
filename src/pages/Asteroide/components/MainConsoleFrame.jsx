import React, { useEffect, useState } from "react";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole";
import MainConsole from "../../../components/consoles/views/MainConsole";
const MainConsoleFrame = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  return (
    <main
      className="w-full h-screen text-white 
    flex flex-col border-r-8 border-l-8 border-primary  "
    >
      <header
        className="h-16 w-full
         bg-gradient shadow flex justify-center 
         items-center border-0 border-red-400"
      >
        <h1 className="text-2xl font-semibold px-2 border-0 text-primary">
          SENTRY
        </h1>
        <p className="text-sky-950"> Earth Impact Monitoring</p>
      </header>

      <div className="h-screen border-0 border-green-400 p-10"><MainConsole/></div>
    </main>
  );
};

export default MainConsoleFrame;
//flex-1
/*

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
      fsdfsdf fdsfsd
    </div>
*/
