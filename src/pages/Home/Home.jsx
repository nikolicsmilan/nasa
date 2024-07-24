import React, { useEffect } from "react";
import { MyDataContext } from "../../context/DataContext";
import BiggerConsoles from "../../components/consoles/views/BiggerConsoles";
import { start } from "../../locales/localdata";
import { SiNasa } from "react-icons/si";
const Home = () => {
  const { setSettings, settingsOpen } = MyDataContext();
  useEffect(() => {
    setSettings;
    setSettings("Navigation");
  }, []);

  return (
    <div
      className={`border-0  border-red-500 w-full z-40    ${
        settingsOpen ? "opacity-20 " : ""
      } `}
    >
      <div
        className={` flex flex-col md:flex-row border-0 border-red-400 w-full   
  z-50  relative h-screen  ${settingsOpen ? "opacity-20 " : ""} `}
      >
        <div
          className="flex flex-col lg:flex h-full md:h-screen w-full md:w-1/2
            justify-center items-center  
           z-50 border-0
           border-orange-500  bg-gradient opacity-70"
        >
          <header className="h-full lg:flex items-center justify-center px-6 relative top-20 lg:top-0">
            <div className="flex flex-col justify-center items-center px-2">
              <h1 className="text-4xl lg:text-7xl font-semibold px-2 border-b-2 border-primary">
                {" "}
                SENTRY
              </h1>
              <p className="border-0 h-24 m-0 p-0 mt-[-25px]">
                {" "}
                <SiNasa className="text-8xl lg:text-9xl px-0 text-red-500" />{" "}
              </p>
            </div>

          <div>  <p className="lg:text-950 text-xl text-center 
           text-primary ">Earth Impact Monitoring </p></div>
          </header>
        </div>

        <div
          className="flex w-full h-full md:w-1/2 justify-center
         md:justify-center items-center border-0 "
        >
          <div>
            <BiggerConsoles menupoint={start} />
          </div>
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
/*
  <div className="flex flex-col text-center">
            <span className="bg-dark p-1 text-primary">Earth</span>{" "}
            <span className="bg-dark p-1 my-2 text-primary">Impact</span>
            <span className="bg-dark p-1 my-2 text-primary">Monitoring</span>
            </div>
*/