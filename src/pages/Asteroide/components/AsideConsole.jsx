import React, { useEffect, useState } from "react";
import Super3dConsole from "../../../components/consoles/views/Super3dConsole";
import FilterConsole from "../../../components/consoles/views/FilterConsole";
import { filterconsole } from "../../../locales/localdata";

//ez csak formát ad neki ledarálja a kapot adatokat
const AsideConsole = ({source}) => {

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [rotateZ, setRotateZ] = useState(0);
  return (
    <aside className="  h-screen text-white 
        flex flex-col border-0 border-primary  ">
          <div
            className="border-0 border-red-400 h-16 flex items-center justify-center 
      border-gray-700 "
          >
          LEFT CONSOLES
          </div>
          <div className="flex flex-col justify-center h-screen">
          {source.map((item, index) => (
            <div key={index}  className="relative border-400 border-r-0 my-5">
          <Super3dConsole
              nameconsole={item.name}
              data={item.data}
              origin="right center"
              rotateX={item.position.x}
              rotateY={item.position.y}
              rotateZ={item.position.z}
              description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            />
          </div>
    ))}
          </div>
    
        
        
        </aside>
  )
}

export default AsideConsole


/*

 <Super3dConsole
              nameconsole="Super 3D"
              data={filterconsole}
              origin="right center"
              rotateX={rotateX}
              rotateY={rotateY}
              rotateZ={rotateZ}
              description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            />
*/

/*
  <div className="relative border-400 border-r-0">
            <Super3dConsole
              nameconsole="Super 3D"
              data={filterconsole}
              origin="right center"
              rotateX={rotateX}
              rotateY={rotateY}
              rotateZ={rotateZ}
              description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            />
          </div>
          <div className="relative border-400 border-r-0">
            <Super3dConsole
              nameconsole="Super 3D"
              data={filterconsole}
              origin="right center"
              rotateX={rotateX}
              rotateY={rotateY}
              rotateZ={rotateZ}
              description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            />
          </div>
*/