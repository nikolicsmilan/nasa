import React from "react";
import MainConsole from "../../../components/consoles/views/MainConsole";

const MainConsoleFrame = () => {
  return (
    <main
      className="w-full h-screen text-white 
    flex flex-col border-r-0 border-l-0 border-primary  relative z-0 "
    >
      <header
        className="h-16 w-full
         bg-gradien shadow flex justify-center 
         items-center border-0 border-red-400"
      >
        <h1 className="text-2xl font-semibold px-2 border-0 text-primary">
          SENTRY
        </h1>
        <p className="text-primary"> Earth Impact Monitoring</p>
      </header>
      <div className="h-screen border-0 border-green-400 p-2">
        <MainConsole />
      </div>
    </main>
  );
};

export default MainConsoleFrame;

