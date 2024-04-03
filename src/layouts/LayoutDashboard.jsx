import React from "react";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className=" lg:max-w-6xl mx-auto lg:px-4 bg-black text-sky-400">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutDashboard;
