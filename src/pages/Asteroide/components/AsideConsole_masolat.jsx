import React from "react";
import Super3dConsole from "../../../components/consoles/views/Super3dConsole";
//ez csak formát ad neki ledarálja a kapot adatokat
import { MyConsoleContext } from "../../../context/ConsoleContext";
import useWindowSize from "../../../hooks/use-windowsize";
const AsideConsole = ({ source, description,origin }) => {
  const { width, height } = useWindowSize();
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200, 
    "2xl": 1700,
  };
  const {
   
    statusTable,
  } = MyConsoleContext();
  return (
    <aside
      className=" text-primary 
        flex flex-col border-0 border-primary  mx-0
         bg-gradient2 top-20 relative overflow-y-auto"
         style={
          width >= breakpoints["2xl"] 
            ? { width: width - 600, height: height - 150 } // 2XL gets a 150 adjustment
            : width >= breakpoints.xl 
              ? { width: width - 600, height: height - 50 } // XL gets a 50 adjustment
              : { width: width - 20, height: height - 250 } // Other sizes
        }
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
    
    </aside>
  );
};

export default AsideConsole;