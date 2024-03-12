import React from "react";
import { NavLink } from "react-router-dom";
import { homemenu } from "../../locales/localdata";
import { FaBars } from "react-icons/fa";
import { MyDataContext } from "../../context/GeneralContext";
const MobileMenu = ({menupoint}) => {
  const { toggle, setToggle } = MyDataContext();
  return (
    <div className="border-0 p-5 w-full flex 
    flex-wrap justify-between overflow-y-auto  h-full lg:h-96">
      {menupoint.map((item) => (
        <NavLink
          key={item.title}
          to={item?.link}
          className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
        >
          <div
            key={item.id} // Asszumáltam, hogy van egy id az item objektumban
            className={`shadowactive customshadow3
             cursor-pointer rounded relative flex-col my-1 w-40 lg:w-48 md:w-40
             h-14  border-0 border-orange-400`}
          >
            <div className="customshadow2 rounded
             w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
              bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"></div>

            <div className="customshadow2 rounded
            text-base opacity-100 flex h-14
             border-purple-400 shadow-2xl items-center 
              border-0 bg-dark-800 z-20 mt-[-55px]  ">
              <p className="mx-2 text-sky-200"> {<item.icon />}</p>
              <h2 className="text-sky-200 opacity-100">{item.title}</h2>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default MobileMenu;


/*
import React from "react";
import { NavLink } from "react-router-dom";
import { homemenu } from "../../locales/localdata";
import { FaBars } from "react-icons/fa";
import { MyDataContext } from "../../context/GeneralContext";
const SidebarGlass = () => {
  const { toggle, setToggle } = MyDataContext();
  return (
    <div className="border-2 p-5 w-full flex 
    flex-wrap justify-between overflow-y-auto  h-full lg:h-96">
      {homemenu.map((item) => (
        <NavLink
          key={item.title}
          to={item?.link}
          className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
        >
          <div
            key={item.id} // Asszumáltam, hogy van egy id az item objektumban
            className={`shadowactive customshadow3
             cursor-pointer rounded relative flex-col my-1 w-40 lg:w-48 md:w-40
             h-14  border-0 border-orange-400`}
          >
            <div className="customshadow2 rounded
             w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
              bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"></div>

            <div className="customshadow2 rounded
            text-base opacity-100 flex h-14
             border-purple-400 shadow-2xl items-center 
              border-0 bg-dark-800 z-20 mt-[-55px]  ">
              <p className="mx-2 text-sky-200"> {<item.icon />}</p>
              <h2 className="text-sky-200 opacity-100">{item.title}</h2>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarGlass;
*/