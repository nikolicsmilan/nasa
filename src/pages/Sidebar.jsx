import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../data/localdata";
const Sidebar = () => {
  return (
    <div className="flex flex-col items-center bg-black h-screen border-0 ">
      <div className="flex m-0 flex-wrap justify-center items-center border-0">
        {menu.map((item) => (
          <NavLink to={item?.link} className="text-sky-400 font-semibold my-2">
            <div
              key={item?.title}
              className="flex  text-dark 
        rounded-2xl border-0 border-red-400 w-12 my-2"
            >
              <img src={item?.icon} className="mx-2" />
              <p className="hidden">{item?.title}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;


