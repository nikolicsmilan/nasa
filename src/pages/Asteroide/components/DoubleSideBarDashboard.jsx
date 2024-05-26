import React, { useEffect, useState } from "react";
import CardConsole1 from "../../../components/consoles/views/CardConsole1";
import { MyDataContext } from "../../../context/DataContext";

const DoubleSidebarDashboard = () => {
  const { toggle } = MyDataContext();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  return (
    <div
      className={`min-h-screen flex  border- border-orange-400 ${
        toggle ? "opacity-20" : ""
      }`}
    >
      <video
        // src={earth}
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-30"
        autoPlay
        loop
        muted
      ></video>
      {/* Bal oldali oldalsáv */}
      <aside className="w-80 bg-black text-white flex flex-col border-r-0 border-primary  justify-between my-5">
        <div
          className="h-16 flex items-center justify-center 
      border-gray-700"
        >
          <span className="text-xl font-semibold text-primary">Menu</span>
        </div>
        <CardConsole1 origin="left center" rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ}/>{" "}
        <CardConsole1 origin="left center" rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ}/>{" "}
        <CardConsole1 origin="left center" rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ}/>
      </aside>

      {/* Fő tartalom */}
      <main className="flex-1 bg-black p-6">
        <header className="h-16 bg-white shadow flex items-center px-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Card 1</h2>
            <p className="text-gray-700">
              Some content... gfd fg sdf sdf sd fsd f sdf sd fsd f sdf sd fwef
              rwe
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Card 2</h2>
            <p className="text-gray-700">Some content...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Card 3</h2>
            <p className="text-gray-700">Some content...</p>
          </div>
        </section>
        
      <div className="flex  w-full  relative text-xl z-10 border-4 border-purple-400 mt-[0px] ">
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
            <span className="mb-1">Rotate Y:</span>
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
      <aside className="w-80 bg-black text-white flex flex-col justify-between my-5 border-l-0 border-primary">
        <div className="h-16 flex items-center justify-center  border-gray-700">
          <span className="text-xl font-semibold text-primary">Details</span>
        </div>
        <CardConsole1 origin="right center" rotateX={rotateX} rotateY={-rotateY} rotateZ={-rotateZ}/>{" "}
        <CardConsole1 origin="right center" rotateX={rotateX} rotateY={-rotateY} rotateZ={-rotateZ}/>{" "}
        <CardConsole1 origin="right center" rotateX={rotateX} rotateY={-rotateY} rotateZ={-rotateZ}/>
      </aside>
    </div>
  );
};

export default DoubleSidebarDashboard;
