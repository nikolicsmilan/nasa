import React, { useEffect } from "react";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import BiggerConsoles from "../../components/consoles/views/BiggerConsoles";
import { start } from "../../locales/localdata";

const Home = () => {
  const { setSettings, settingsOpen, choosenSytle } = MyDataContext();
  useEffect(() => {
    setSettings;
    setSettings("Navigation");
  }, []);

  return (
    <div
    className={`border-8  border-sky-100 w-full z-50 relative bg-gradient   ${
      settingsOpen ? "opacity-20 " : ""
    } `}
  >
    <video
     // src={earth}
     src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
      className="background-video border-0 border-red-400  opacity-100"
      autoPlay
      loop
      muted
    ></video>

    <div className="lg:max-w-6xl mx-auto lg:px-4 flex  w-full h-screen relative text-xl z-50 border-r-0 border-l-0 border-black mt-[0px] ">
      <div
        className={` flex flex-col border-0 md:m-0 py-0 md:py-0 text-center lg:w-full  border-orange-400 mt-[30px] ${
          settingsOpen ? "opacity-10 " : ""
        }`}
      >
        <div className="border-0 lg:max-w-6xl mx-auto border-white flex justify-center">
          <div
            className="border-0 mt-5  border-lime-400 flex
           flex-col justify-center flex-wrap lg:p-10 "
          >
            <h1
              className={`text-primary cursor-pointer z-10 p-2
             border-0 text-center lg:text-3xl 
             text-2xl  opacity-100 uppercase font-bold`}
            >
              <span className=" text-200 block">Asteroid impact</span>
              <span className="text-600 rounded p-2">warning </span>{" "}
              <span className="text-200 block">systems</span>
            </h1>

            <div className="flex flex-col justify-center items-center">
              <BiggerConsoles menupoint={start} className="   lg:hidden " />
              <h2 className="m-1 absolute bottom-20 text-200 text-xl font-bold">
                "It's a small step for the developer, but a huge step against
                the fake news..."
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
/*

<header className="h-full bg-gradient shadow flex items-center px-6">
            <h1 className="text-2xl font-semibold px-2">SENTRY</h1>
            <p className="text-sky-950"> Earth Impact Monitoring</p>
          </header>
*/


/*
  <h1
                className={`text-primary cursor-pointer z-10 p-2
               border-0 text-center lg:text-3xl 
               text-2xl  opacity-100 uppercase font-bold`}
              >
                <span className=" text-200 block">Asteroid impact</span>
                <span className="text-600 rounded p-2">warning </span>{" "}
                <span className="text-200 block">systems</span>
              </h1>
*/
