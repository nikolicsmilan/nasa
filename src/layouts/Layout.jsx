import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="  border-0 border-red-400 bg-black text-sky-400">
      <main className=" flex border-0 border-red-400">
      {/* lg  flex de mobilon nem látszik mert ott kinyitható
      motion nal */}
      <div className="hidden w-12 border-0 relative z-30 h-screen flex flex-col m-0 lg:hidden">
      <Sidebar />
      </div>

        <div className="w-full border-0 border-lime-400 z-10">
        <Outlet />
        </div>
       
      </main>

      
    </div>
  );
};

export default Layout;
// z-30 relative w-full h-screen
