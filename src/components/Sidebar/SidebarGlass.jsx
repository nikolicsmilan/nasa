import React from "react";
import { NavLink } from "react-router-dom";
import { homemenu } from "../../locales/localdata";
import { FaBars } from "react-icons/fa";
import { MyDataContext } from "../../context/GeneralContext";
const SidebarGlass = () => {
  const { toggle, setToggle } = MyDataContext();
  return (
    <div className=" h-48  flex flex-wrap flex-row  overflow-y-auto  border-4 border-red-400  flex-grow ">
      {homemenu.map((item) => (
        <NavLink
          key={item.title}
          to={item?.link}
          className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
        >
          <div
            key={item.id} // Asszumáltam, hogy van egy id az item objektumban
            className={`shadowactive customshadow3
             cursor-pointer rounded relative flex-col m-3 w-32 lg:w-48 md:w-40
             h-10  border-2 border-orange-400`}
          >
            <div className="customshadow2 rounded
             w-32 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
              bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"></div>

            <div className="customshadow2 rounded
            text-base opacity-100 flex h-10
             border-purple-400 shadow-2xl items-center 
              border-0 bg-dark-800 z-20 mt-[-40px]  ">
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
