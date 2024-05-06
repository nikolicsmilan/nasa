import React, { useEffect } from "react";
import earthdoublemirror2 from "../../assets/video/earth_double_mirror_short.mov"
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import BiggerConsoles from "../../components/consoles/views/BiggerConsoles";
import { start } from "../../locales/localdata";

const Home = () => {
  const { setSettings, settingsOpen,choosenSytle } = MyDataContext();
  useEffect(() => {
    setSettings;
    setSettings("Navigation");
  }, []);

  return (
    <div className={` border-0  border-red-400 w-full z-50 relative   ${settingsOpen ? "opacity-20 " : ""} `}>
      <video
        src={earthdoublemirror2}
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
                className={`text-${choosenSytle ? choosenSytle:"sky"}-400 cursor-pointer z-10 p-2
               border-0 text-center lg:text-3xl 
               text-2xl  opacity-100 uppercase font-bold`}
              >
                <span className=" text-sky-200 block">Asteroid impact</span>
                 <span className="text-sky-600 rounded p-2">warning </span> <span className="text-sky-200 block">systems</span> 
              </h1>
              
              <div className="flex flex-col justify-center items-center">
           
              <BiggerConsoles menupoint={start} className="   lg:hidden " />
              <h2 className="m-1 absolute bottom-0 text-sky-200 text-xl font-bold">
          
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
    <div className="hidden overflow-y-auto h-80 lg:h-auto p-2 flex">
                <h2 className="my-5">
                  {" "}
                  "It's a small step for the developer, but a huge step against
                  the fake news."
                </h2>
              </div>
*/