
import ControlPanel from "../components/ControlPanel";
import CenterPanel from "../components/CenterPanel";
import InfoPanel from "../components/InfoPanel";
import GraphControls from "../components/GraphControls";
import GraphCenterPanel from "../components/GraphCenterPanel";
import GraphInfoContent from "../components/GraphInfoContent";
import GraphContent from "../components/GraphContent"

const GraphDesktop = ({
  statusTable,
  filterTable,
  graphdatasource,
  message,
  handleClick,
  
}) => {


  return (
    <div
      className={`flex flex-row  w-full 
       relative z-50 border-0 border-pink-400`}
    >
      <div className="border-0 border-red-400 w-80">
        <ControlPanel>
          <GraphControls
            graphdatasource={graphdatasource}
            handleClick={handleClick}
          />
        </ControlPanel>
      </div>
      <div className="border-0 lg:relative lg:top-5 flex-1  ">
        <CenterPanel>
        <GraphContent
            statusTable={statusTable}
            filterTable={filterTable}   // <<<--- Add tovább
            filteredData={filteredData} // <<<--- Add tovább
          />
        </CenterPanel>
      </div>
      <div className="w-64 border-0">
        <InfoPanel>
          <GraphInfoContent message={message}  statusTable={statusTable} />
        </InfoPanel>
      </div>
    </div>
  );
};

export default GraphDesktop;
//IIT HIBA VAN MERT A MAIN CONSOLE MAGA IS FOG DÖNTÉST HOZNI WIDTH
// ÉS HEIGHT ALAPJÁN DE EZ AZ AreaChartComponent BEN IS MEG VAN

//GraphDesktop
