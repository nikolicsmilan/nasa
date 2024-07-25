import React from "react";
import Super3dConsole from "../../../components/consoles/views/Super3dConsole";
//ez csak formát ad neki ledarálja a kapot adatokat
const AsideConsole = ({ source, description,origin }) => {
  return (
    <aside
      className="  h-screen text-primary 
        flex flex-col border-0 border-primary  mx-2 bg-gradient2 top-20 relative "
    >
     
      <div className="flex flex-col  h-full bg-red-40  shadow-2xl">
        {source.map((item, index) => (
          <div key={index} className="relative border-400  my-1 border-0 p-2">
            <Super3dConsole
              nameconsole={item.name}
              data={item.data}
              origin={origin}
             // rotateX={item.position.x}
             // rotateY={item.position.y}
             // rotateZ={item.position.z}
              description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AsideConsole;

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
