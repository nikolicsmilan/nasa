import React from 'react'
import { NavLink } from "react-router-dom";
const BiggerConsoles = ({menupoint}) => {
  return (
    <div className=" flex flex-wrap max-w-2xl  border-0 relative z-50">
      
    {menupoint &&
      menupoint.map((item) => (
        <NavLink
          key={item.title}
          to={item?.link}
          className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
        >
          <div
            key={item.id} // Asszumáltam, hogy van egy id az item objektumban
            className={`shadowactive customshadow3 cursor-pointer 
            rounded-2xl 
            relative flex-col m-3 w-48  h-28 
            border-0 border-orange-400`}
          >
            <div className="customshadow2 rounded-2xl
           w-48 h-full text-sky-400 shadow-2xl border-0
               bg-sky-400  opacity-10 mt-[0px] z-40"></div>

            <div className="customshadow2 rounded-2xl text-2xl opacity-100
             flex h-28 border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-110px] font-bold">
              <p className="mx-2 text-sky-400"> {<item.icon />}</p>
              <h2 className="text-sky-400 opacity-100">{item.title}</h2>
            </div>
          </div>
        </NavLink>
      ))}
     
  </div>
  )
}

export default BiggerConsoles

/*
import React from 'react'
import { NavLink } from "react-router-dom";
const BiggerConsoles = ({menupoint}) => {
  return (
    <div className=" lg:flex flex-wrap lg:max-w-2xl  border-0 relative">
      
    {menupoint &&
      menupoint.map((item) => (
        <NavLink
          key={item.title}
          to={item?.link}
          className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
        >
          <div
            key={item.id} // Asszumáltam, hogy van egy id az item objektumban
            className={`shadowactive customshadow3 cursor-pointer 
            rounded-2xl 
            relative flex-col m-3 w-40 lg:w-48  h-14 lg:h-28 
            border-0 border-orange-400`}
          >
            <div className="customshadow2 rounded-2xl w-40
            lg:w-48 h-full text-sky-400 shadow-2xl border-0
               bg-sky-400 lg:opacity-10 opacity-10 mt-[0px] z-40"></div>

            <div className="customshadow2 rounded-2xl text-2xl opacity-100
             flex h-14 lg:h-28 border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-55px] lg:mt-[-110px] font-bold">
              <p className="mx-2 text-sky-200"> {<item.icon />}</p>
              <h2 className="text-sky-200 opacity-100">{item.title}</h2>
            </div>
          </div>
        </NavLink>
      ))}
     
  </div>
  )
}

export default BiggerConsoles
*/