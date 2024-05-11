import React from "react";
import { NavLink } from "react-router-dom";
import { MyAudioContext } from "../../../context/AudioContext";
import { MyDataContext } from "../../../context/DataContext";
//import clickSound from "../../assets/sound/click.mp3";

const Consoles = ({ menupoint }) => {
  const {playSoundClick } = MyAudioContext();
  const {choosenStyle } = MyDataContext();
  return (
    <div
      className="border-0 p-5 w-full flex 
    flex-wrap justify-between overflow-y-auto  h-80 "
    >
      {" "}
      {menupoint &&
        menupoint?.map((item) => (
          <NavLink
            onClick={playSoundClick}
            key={item?.title}
            to={item?.link}
            className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
          >
            <div
              key={item?.id}
              className={`shadowactive customshadow3
             cursor-pointer rounded relative flex-col my-1 w-40 lg:w-48 md:w-40
             h-14  border-0 border-orange-400`}
            >
              <div
                className={` bg-primary customshadow2 rounded
             w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
               md:opacity-10 opacity-10 mt-[0px] z-40`}
              ></div>

              <div
                className="customshadow2 rounded
            text-base opacity-100 flex h-14
             border-purple-400 shadow-2xl items-center 
              border-0 bg-dark-800 z-20 mt-[-55px]  text-sky-100"
              >
                <p className="mx-2 text-primary"> {<item.icon />}</p>
                <h2 className=" opacity-100">{item?.title}</h2>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
  );
};

export default Consoles;
// sky lime red >> a stílusok
//text-sky-200