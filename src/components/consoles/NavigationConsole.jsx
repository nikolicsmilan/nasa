//import React, { useEffect, useState } from "react";
//import { homemenu, returnMenu, asteroidemenu } from "../../locales/localdata";
//import { useLocation } from "react-router-dom";
//import Consoles from "./views/Consoles";
import { navigationData } from "../../locales/navigationData";
import { NavLink } from "react-router-dom";

const NavigationConsole = () => {
  //params: {params}

  return (
    <div className="flex border-0 border-purple-600 mx-0 w-full h-full">
      {navigationData.map((item, index) => (
        <NavLink
          key={index}
          to={item.route} // Használjuk a route mezőt
          className={({ isActive }) =>
            `flex flex-col items-center justify-center 
               glowy-button-5 group relative border-0 p-0 rounded m-2
               hover:bg-600 h-16 w-20 text-primary cursor-pointer 
               ${isActive ? "bg-600 " : ""}`
          }
        >
          {<item.icon />}
          <div
            className=" ml-2 hidde group-hover:block  text-white 
            text-sm rounded  z-50"
          >
            {item.title}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavigationConsole;
