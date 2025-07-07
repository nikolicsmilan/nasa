// src/components/consoles/views/BiggerConsoles.tsx
// Imports the React library and specifically the FC (Functional Component) type.
import React from 'react';
// Imports the NavLink component for navigation that knows its active state.
import { NavLink } from "react-router-dom";
// Imports the IconType to define the type for icon components.
import { IconType } from 'react-icons';

// --- Type Definitions ---

// Defines the structure for a single object within the 'menupoint' array.
interface MenuItem {
  id: string | number; // A unique identifier for the key, can be a string or number.
  title: string;       // The text to be displayed, e.g., "Home".
  link: string;        // The URL path for the NavLink, e.g., "/home".
  icon: IconType;      // The icon component to be rendered (e.g., FaHome).
}

// Defines the structure for the component's own props.
interface BiggerConsolesProps {
  // 'menupoint' is an array where each element must match the MenuItem structure.
  menupoint: MenuItem[];
}

// --- The Main Component ---

// Defines the component and types its props using the BiggerConsolesProps interface.
const BiggerConsoles: React.FC<BiggerConsolesProps> = ({ menupoint }) => {
  // The component returns a JSX structure to be rendered.
  return (
    // A flex container that wraps its children.
    <div className="flex flex-wrap max-w-2xl border-0 relative z-50">

      {/* Renders the content only if the 'menupoint' array exists and is not empty. */}
      {menupoint &&
        // Maps over the 'menupoint' array to create a NavLink for each item.
        menupoint.map((item) => (
          // NavLink is a special Link that can style itself if it's the active route.
          <NavLink
            // Uses the stable 'id' from the item as the key, which is best practice.
            key={item.id}
            // Sets the destination path for the navigation.
            to={item.link}
            // A function to dynamically set classes based on the navigation state.
            className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
          >
            {/* The main container for a single hexagonal button. */}
            <div
              // This container holds all visual elements of the button.
              className={`hexagon glowy-button-7 bg-950 shadowactive customshadow3 cursor-pointer 
              rounded-2xl 
              relative flex-col m-0 w-40 h-32 border-r-2 border-b-0 border-t-0
              border-primary hover:border-0`}
            >
              {/* An overlay div, likely for a background glow or color effect. */}
              <div className={`bg-primary rounded-2xl w-96 h-full shadow-2xl
                              opacity-10 mt-[0px] z-40`}></div>
              
              {/* A container for the actual content (icon and title), positioned on top. */}
              <div className="border-0 customshadow rounded-2xl text-2xl opacity-100
                              flex h-32 border-purple-400 shadow-2xl 
                              items-center justify-center bg-dark-800 
                              z-20 mt-[-130px] font-bold">
                
                {/* Renders the icon component passed in the 'item' object. (Currently hidden) */}
                <p className={`text-primary mx-2 transform rotate-90 text-4xl hidden`}> {<item.icon />}</p>
                {/* Displays the title of the menu item. */}
                <h2 className="opacity-100 font-bold text-3xl uppercase">{item.title}</h2>
              </div>

            </div>
          </NavLink>
        ))}
    </div>
  )
}

// Exports the BiggerConsoles component as the default export of this file.
export default BiggerConsoles;
//     border-l-4 border-b-4 border-t-0 border-r-0 

/*

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
