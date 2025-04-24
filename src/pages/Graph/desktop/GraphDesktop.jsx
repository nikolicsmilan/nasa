// src/pages/Graph/desktop/GraphDesktop.jsx
import ControlPanel from "../components/ControlPanel"; // Módosított verzió kell!
import CenterPanel from "../components/CenterPanel";   // Módosított verzió kell!
import InfoPanel from "../components/InfoPanel";     // Módosított verzió kell!
import GraphControls from "../components/GraphControls";
import { GraphContent } from "../components/GraphContent"; // Módosított verzió kell!
import GraphInfoContent from "../components/GraphInfoContent";

const GraphDesktop = ({ config, displayedData, graphdatasource, message, handleClick, sumObject }) => {
  return (
    // Ez a div a header alatt kezdődik, kitölti a helyet
    <div className={`flex flex-row w-full h-full relative z-10 `}>
      {/* Bal oldali oszlop - explicit h-full */}
      <div className="w-80 h-full">
        <ControlPanel> {/* Feltételezi, hogy a ControlPanel is h-full */}
          <GraphControls
            graphdatasource={graphdatasource}
            handleClick={handleClick}
            config={config}
         />
        </ControlPanel>
      </div>

      {/* Középső oszlop - flex-1 a szélességért, h-full a magasságért */}
      <div className="flex-1 h-full flex flex-col min-w-0">
         <CenterPanel> {/* Feltételezi, hogy a CenterPanel is h-full */}
          <GraphContent 
            config={config}
            displayedData={displayedData}
            sumObject={sumObject}
          />
        </CenterPanel>
      </div>

      {/* Jobb oldali oszlop - explicit h-full */}
      <div className="w-64 h-full">
        <InfoPanel> {/* Feltételezi, hogy az InfoPanel is h-full */}
          <GraphInfoContent
             message={message}
             config={config}
          />
        </InfoPanel>
      </div>
    </div>
  );
};
export default GraphDesktop;

