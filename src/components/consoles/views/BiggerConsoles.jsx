import React from 'react'
import { NavLink } from "react-router-dom";
import { MyDataContext } from '../../../context/DataContext';
const BiggerConsoles = ({menupoint}) => {
  const {choosenStyle } = MyDataContext();
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
            className={`glowy-button-6  shadowactive customshadow3 cursor-pointer 
            rounded-2xl 
            relative flex-col m-0 w-52  h-52 
            border-0 border-orange-400`}
          >
            <div className={`  bg-primary  rounded-2xl
           w-96 h-full shado-2xl border-2 border-lime-400
                opacity-10 mt-[0px] z-40`}></div>

            <div className="border-  customshadow rounded-2xl text-2xl opacity-100
             flex h-56 border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-210px] font-bold">
              <p className={`text-primary mx-2 transform rotate-90 text-4xl `}> {<item.icon />}</p>
              <h2 className="text-red-600 opacity-100 font-bold text-4xl uppercase ">{item.title}</h2>
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
import { MyDataContext } from '../../../context/DataContext';
const BiggerConsoles = ({menupoint}) => {
  const {choosenStyle } = MyDataContext();
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
            className={`glowy-button-5 shadowactive customshadow3 cursor-pointer 
            rounded-2xl 
            relative flex-col m-3 w-48  h-28 
            border-0 border-orange-400`}
          >
            <div className={`bg-primary customshadow2 rounded-2xl
           w-48 h-full shadow-2xl border-0
                opacity-10 mt-[0px] z-40`}></div>

            <div className="  customshadow2 rounded-2xl text-2xl opacity-100
             flex h-28 border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-110px] font-bold">
              <p className={`text-primary mx-2 transform rotate-90 text-3xl`}> {<item.icon />}</p>
              <h2 className="text-red-600 opacity-100 font-bold text-3xl uppercase">{item.title}</h2>
            </div>
          </div>
        </NavLink>
      ))}
     
  </div>
  )
}

export default BiggerConsoles


*/
