import React, { useEffect, useState } from "react";
import { homemenu, spaceKnowledgeMenu, returnMenu } from "../locales/localdata";
import { NavLink, useParams, Link, useLocation } from "react-router-dom";

import Consoles from "./Sidebar/Consoles";

// Ide be kell regisztrálni hogy milyen path alatt milyen
//menüpontok jelenjenek meg.
//ide  az összes routat regisztrálni kell
const menus = {
  "/": homemenu,
  "/spaceknowledge": spaceKnowledgeMenu,
  "/asteroide":returnMenu
};

const MainNavigationConsole = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(returnMenu);
  //console.log("location: ", location);

  useEffect(() => {
    const path = location.pathname;
    setMenu(menus[path] || returnMenu);
  }, [location]);

  //params: {params}

  return (
    <div className=" ">
     
      <Consoles menupoint={menu} />
     
    </div>
  );
};

export default MainNavigationConsole;
// <MobileMenu menupoint={menu} />
//<MobileMenu onClose={handleClose} menupoint={homemenu}/>
/*
 <>
      {location.pathname === "/" ? <GlassConsole data={homemenu} /> : ""}
      {location.pathname === "/spaceknowledge" ? (
        <GlassConsole data={spaceKnowledgeMenu} />
      ) : (
        ""
      )}
    </>
*/

/*
ITT AZ ÉN KÖTELESÉGEM FELÍRNI MANUÁLISAN
HA PATHNAME EZ ÉS EZ AKKOR EZ LEGYEN HA NEM AKKOR EZ ÉS EZ
NEM PARAMSOZNI KELL ISMERED A ROUTAKON MILYEN KOMPONENSEK VANNAK
AZ AHHOZ MEGFELELŐ TÖMNBÖT KELL TÁRSÍTANI
AZT LEHET
*/

/*
<p>
  location.pathname: {location.pathname} <br></br>
  path ha nincs params: {params && pathWithoutSlash} <br></br>
  path ha van params: {!params && pathWithoutSlash}
</p>;

*/

/*
 {menu.map((item) => (
        <NavLink
          to={item?.link}
          className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
        >
          <div
            key={item.id} // Asszumáltam, hogy van egy id az item objektumban
            className={`shadowactive customshadow3 cursor-pointer rounded-2xl relative flex-col m-3 w-40 lg:w-48 md:w-40 h-14 md:h-28 border-0 border-orange-400`}
          >
            <div className="customshadow2 rounded-2xl w-40 md:w-40 lg:w-48 h-full text-sky-400 shadow-2xl border-0  bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"></div>

            <div className="customshadow2 rounded-2xl text-2xl opacity-100 flex h-14 md:h-28 border-purple-400 shadow-2xl items-center justify-center border-0 bg-dark-800 z-20 mt-[-55px] md:mt-[-110px] font-bold">
              <p className="mx-2 "> {<item.icon />}</p>
              <h2 className="text-sky-400 opacity-100">{item.title}</h2>
            </div>
          </div>
        </NavLink>
      ))}

*/
