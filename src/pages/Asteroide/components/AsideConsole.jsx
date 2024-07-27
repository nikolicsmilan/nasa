import React from "react";
import Super3dConsole from "../../../components/consoles/views/Super3dConsole";
//ez csak formát ad neki ledarálja a kapot adatokat
import { MyConsoleContext } from "../../../context/ConsoleContext";
const AsideConsole = ({ source, description,origin }) => {

  const {
   
    statusTable,
  } = MyConsoleContext();
  return (
    <aside
      className="  h-screen text-primary 
        flex flex-col border-0 border-primary  mx-2 bg-gradient2 top-20 relative "
    >
     
      <div className="flex flex-col  h-full bg-red-40  ">
        {source.map((item, index) => (
          <div key={index} className="relative border-400  my-1 border-0 p-2 ">
            <Super3dConsole
              nameconsole={item.name}
              data={item.data}
              origin={origin}
            // rotateX={0 ||item.position.x}
             // rotateY={0 ||item.position.y}
             // rotateZ={0 ||item.position.z}
              description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col w-96 text-primary relative top-[-100px]">
          {Object.entries(statusTable).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value.toString()}
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
