import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../../locales/localdata";
import { FaBars } from "react-icons/fa";
import { MyDataContext } from "../../context/GeneralContext";
const Sidebar = () => {
  const{toggle, setToggle} = MyDataContext();
  return (
    <div className="flex flex-col    border-0 flex-grow px-5">

      {menu.map((item) => (
        <NavLink to={item?.link} className={({ isActive }) =>
        `${
          isActive ? "mymenu" : ""
        }   `
      }>
          <div
            id=""
            key={item?.title}
            className="menuctive color-gradient-box-menu flex items-center text-dark 
       border-0 border-red-400  my-2 rounded h-14"
          >
            <p className="mx-2 ">  {<item.icon />}</p>
            <p className="">{item?.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
   
  );
};

export default Sidebar;
// <div className="mt-[20px]  flex m-0 flex-wrap justify-center items-center border-0">
// <div className="flex flex-col  m-0 flex-wrap justify-center  border-0">