import React, { useEffect, useState } from "react";
import { homemenu, returnMenu, asteroidemenu } from "../../locales/localdata";
import { useLocation } from "react-router-dom";
import Consoles from "./views/Consoles";

// You have to register here under what path
//display menu items.
//all routes must be registered here
const menus = {
  "/": homemenu,
  "/asteroide": asteroidemenu,
};

const NavigationConsole = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(returnMenu);

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

export default NavigationConsole;

