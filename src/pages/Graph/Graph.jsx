import { MyDataContext } from "../../context/DataContext";
import GraphDesktop from "./desktop/GraphDesktop";
import GraphMobile from "./mobile/GraphMobile";
import { graphdatasource } from "../../locales/graphdata";
const Graph = () => {
  const { toggle } = MyDataContext();
console.log('graphdatasource: ',graphdatasource)
  return (
    <div
      className={`min-h-screen flex border-0  border-lime-400
       z-50 relative ${toggle ? "opacity-70" : ""}`}
    >
      <video
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-40"
        autoPlay
        loop
        muted
      ></video>
      {/*Ha elrejtem a consoleconetnt eta DesktopAsteroide ba be van ágyazva akkor 
hiába csatlom a MobilAstreodi ába bele */}
      <div
        className={`hidden xl:flex border-0 border-red-400 w-full   ${
          toggle ? "opacity-0" : "opacity-100"
        }`}
      >
        <GraphDesktop graphdatasource={graphdatasource}/>
        
      </div>

      <div
        className={`flex  xl:hidden   ${toggle ? "opacity-0" : "opacity-100"}`}
      >
        <GraphMobile graphdatasource={graphdatasource}/>
      </div>
    </div>
  );
};

export default Graph;
