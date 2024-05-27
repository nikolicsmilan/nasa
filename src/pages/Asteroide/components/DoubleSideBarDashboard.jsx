import React, { useEffect, useState } from "react";
import CardConsole1 from "../../../components/consoles/views/CardConsole1";
import { MyDataContext } from "../../../context/DataContext";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole";
import FilterConsole from "../../../components/consoles/views/FilterConsole";

const DoubleSidebarDashboard = () => {
  const { toggle } = MyDataContext();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  return (
    <div
      className={`min-h-screen flex  border-0 border-orange-400 ${
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

      <div className="flex w-full border-2 border-purple-400">
        {/* Bal oldali oldalsáv */}
        <aside className="w-80 bg-black text-white flex flex-col border-r-0 border-primary  justify-between my-5">
          <div
            className="h-16 flex items-center justify-center 
      border-gray-700"
          >
            <span className="text-xl font-semibold text-primary">Information</span>
          </div>
          <FilterConsole
            origin="left center"
            rotateX={rotateX}
            rotateY={rotateY}
            rotateZ={rotateZ}
            description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
          />{" "}
          <CardConsole1
            origin="left center"
            rotateX={rotateX}
            rotateY={rotateY}
            rotateZ={rotateZ}
            description=" Ide ugyanazok a szűrők kellenek de itt nem grafikont fog mutatni
            hanem az egyes elemeket és azt is lehet sorba rendezni le fel aztán
            rákattintani de már konkrétan az eggyes objektumról infó
            vagy itt helyben ezt még eldöntom"
          />{" "}
          <CardConsole1
            origin="left center"
            rotateX={rotateX}
            rotateY={rotateY}
            rotateZ={rotateZ}
            description="Alapavető információk gombokkal magyarázatok wikipédiáról nasatól"
          />
        </aside>

        {/* Fő tartalom */}
        <main className="flex-1 bg-black p-6">
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
        </main>

        {/* Jobb oldali oldalsáv */}
        <aside
          className="w-80 bg-black text-white flex flex-col
       justify-between my-5 border-l-0 border-primary"
        >
          <div className="h-16 flex items-center justify-center  border-gray-700">
            <span className="text-xl font-semibold text-primary">Details</span>
          </div>
          <CardConsole1
            origin="right center"
            rotateX={rotateX}
            rotateY={-rotateY}
            rotateZ={-rotateZ}
            description="Kinyit bezár gombok kinyitáskor megnő a főkonzolon 
            lévő charts döntött forgatott minden variációra külön"
          />{" "}
          <CardConsole1
            origin="right center"
            rotateX={rotateX}
            rotateY={-rotateY}
            rotateZ={-rotateZ}
            description="charts variációk kör terület stb amit el tudsz képzelni"
          />{" "}
          <CardConsole1
            origin="right center"
            rotateX={rotateX}
            rotateY={-rotateY}
            rotateZ={-rotateZ}
            description="Elhasznált API kérések száma körcik szerű"
          />
        </aside>
      </div>
    </div>
  );
};

export default DoubleSidebarDashboard;
