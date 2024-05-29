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
    className={`border-0  border-sky-100 w-full z-50 relative bg-gradient   ${
      settingsOpen ? "opacity-20 " : ""
    } `}
  > 
  <div >

    <video
     // src={earth}
     src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
      className="background-video border-0 border-red-400  opacity-100"
      autoPlay
      loop
      muted
    ></video>
     

    <div className="border-0 border-red-400 lg:max-w-6xl mx-auto lg:px-4 flex bg-gradien w-full 
    h-screen relative text-xl z-50 border-r-0 border-l-0 mt-[0px] ">

<header className="h-full w-[160000px] bg-gradient shadow flex items-center px-6 opacity-70 relative left-[-400px]">
      <h1 className="text-7xl font-semibold px-2">SENTRY</h1>
      <p className="text-sky-950 text-xl"> Earth Impact Monitoring</p>
    </header>
      <div
        className={` flex flex-col border-0 md:m-0 py-0 md:py-0 
         text-center lg:w-full  border-orange-400 mt-[30px] ${
          settingsOpen ? "opacity-10 " : ""
        }`}
      >  
        <div className="border-0 lg:max-w-6xl mx-auto border-white flex justify-center ">
       
          <div
            className="border-0 mt-5  border-lime-400 flex
           flex-col justify-center flex-wrap lg:p-10 "
          >
       <div>

       </div>

       <div className="relative right-[100px] top-[330px]">
       <BiggerConsoles menupoint={start} className="   lg:hidden " />
       </div>
        
            <div className="flex flex-col justify-center items-end h-96 border-0"> 
        
       
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

          
        
       
       
  </div>
  );
};

export default Home;