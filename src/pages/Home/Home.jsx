import React, { useEffect } from "react";
import { MyDataContext } from "../../context/DataContext";
import BiggerConsoles from "../../components/consoles/views/BiggerConsoles";
import { start } from "../../locales/localdata";

const Home = () => {
  const { setSettings, settingsOpen } = MyDataContext();
  useEffect(() => {
    setSettings;
    setSettings("Navigation");
  }, []);

  return (
    <div
      className={`border-0  border-sky-100 w-full z-40    ${
        settingsOpen ? "opacity-20 " : ""
      } `}
    >
      <div
        className=" flex flex-col md:flex-row border-0 border-red-400 w-full   
  z-50  relative h-screen"
      >
        <div
          className="flex h-96 md:h-screen w-full md:w-1/2
            justify-center items-center  
           z-50 border-0
           border-orange-500  bg-gradient opacity-70"
        >
          <header className="h-full flex items-center justify-center px-6 ]">
            <h1 className="text-7xl font-semibold px-2">SENTRY</h1>
            <p className="text-sky-950 text-xl"> Earth Impact Monitoring</p>
          </header>
        </div>

        <div className="flex w-full h-full md:w-1/2 justify-center
         md:justify-center items-center border-0 ">
          <div><BiggerConsoles menupoint={start} /></div>
        </div>
      </div>
      <video
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-100"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Home;

