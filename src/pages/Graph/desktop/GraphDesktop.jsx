import ControlPanel from "../components/ControlPanel";
import CenterPanel from "../components/CenterPanel"; // Ez a keret maradt
import InfoPanel from "../components/InfoPanel";
import GraphControls from "../components/GraphControls";
import GraphCenterPanel from "../components/GraphCenterPanel"; // Ezt már elvileg eltávolítottuk/kommenteltük
import { GraphContent } from "../components/GraphContent"; // Named import helyes
import GraphInfoContent from "../components/GraphInfoContent";

// Fogadja az ÚJ propokat, régiek eltávolítva
const GraphDesktop = ({
  config,          // ÚJ: Az egységes konfigurációs objektum
  displayedData,   // ÚJ: A feldolgozott, megjelenítendő adatok
  graphdatasource, // Marad: A vezérlők konfigurációja
  message,         // Marad: Az üzenet objektum
  handleClick,     // Marad: Az updateConfig függvény (ezen a néven)
  sumObject
}) => {
  return (
    <div
      className={`flex flex-row w-full relative z-50 border-2 border-sky-400`}
    >
    
      <div className="border-2 border-red-400 w-80">
        <ControlPanel>
          <GraphControls
            graphdatasource={graphdatasource}
            handleClick={handleClick} // Az updateConfig függvényt kapja
            config={config}
         />
        </ControlPanel>
      </div>

    
      <div className="border-2 lg:relative lg:top-5 flex-1">
        <CenterPanel>
          <GraphContent
            config={config}             // <<<--- ÚJ prop átadása
            displayedData={displayedData} // <<<--- ÚJ prop átadása
            // Régi propok (statusTable, filterTable, filteredData) eltávolítva
            sumObject={sumObject} 
          />
        </CenterPanel>
      </div>

     
      <div className="w-64 border-2">
        <InfoPanel>
          <GraphInfoContent
             message={message}
             config={config} // <<<--- ÚJ prop átadása (statusTable helyett)
          />
        </InfoPanel>
      </div>
    </div>
  );
};

export default GraphDesktop;

