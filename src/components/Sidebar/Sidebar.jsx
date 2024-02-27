import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../../locales/localdata";
import { FaBars } from "react-icons/fa";
import { MyDataContext } from "../../context/GeneralContext";
const Sidebar = () => {
  const{toggle, setToggle} = MyDataContext();
  return (
    <div className="flex flex-col    border-0 flex-grow p-5">

      {menu.map((item) => (
        <NavLink to={item?.link} className=" text-sky-400 font-semibold my-2">
          <div
            id=""
            key={item?.title}
            className="color-gradient-box-menu flex items-center text-dark 
       border-0 border-red-400  py-2 rounded h-14"
          >
            <img src={item?.icon} className="mx-2 w-12" />
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