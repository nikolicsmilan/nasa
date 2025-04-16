import ControlPanel from "../components/ControlPanel";
import CenterPanel from "../components/CenterPanel";
import InfoPanel from "../components/InfoPanel";
import GraphControls from "../components/GraphControls";
import GraphCenterContent from "../components/GraphCenterPanel";

const GraphDesktop = ({ graphdatasource }) => {
  return (
    <div
      className={`flex flex-row  w-full 
       relative z-50 border-0 border-pink-400`}
    >
      <div className="border-0 border-red-400 w-80">
        <ControlPanel>
          <GraphControls graphdatasource={graphdatasource} />
        </ControlPanel>
      </div>
      <div className="border-0 lg:relative lg:top-5 flex-1  ">
        <CenterPanel>
          <GraphCenterContent/>
        </CenterPanel>
      </div>
      <div className="w-64 border-0">
        <InfoPanel />
      </div>
    </div>
  );
};

export default GraphDesktop;
//IIT HIBA VAN MERT A MAIN CONSOLE MAGA IS FOG DÖNTÉST HOZNI WIDTH
// ÉS HEIGHT ALAPJÁN DE EZ AZ AreaChartComponent BEN IS MEG VAN

//GraphDesktop
