import { useDataVisualization } from "../../../hooks/use-datavisualization"; // Ellenőrizd az elérési utat!
import useWindowSize from "../../../hooks/use-windowsize"; // Ellenőrizd az elérési utat!

const GraphCenterContent = () => {
  // Hook-ok és kontextus használata az adatok és állapotok eléréséhez
  const { consoleContent } = useDataVisualization();
  const { width, height } = useWindowSize();

  // Breakpoint definíciók (maradhatnak itt, vagy kiemelhetők egy közös helyre)
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200,
    "2xl": 1700,
  };

  // Dinamikus stílus számítása a konténer méretezéséhez
  const containerStyle =
    width >= breakpoints["2xl"]
      ? { width: width - 600, height: height - 150 } // 2XL
      : width >= breakpoints.xl
      ? { width: width - 600, height: height - 150 } // XL
      : { width: width - 20, height: height - 250 }; // Kisebb méretek



  return (
    // Ez a div felelős a tartalom konténeréért, méretezéssel és görgetéssel
    <div
      className={`glowy-button-10 rounded-2xl z-50 relative p-0 overflow-y-scroll overflow-x-scroll text-white flex flex-col items-center justify-center w-screen xl:w-full md:h-full`}
      style={containerStyle}
    >
      {/* Itt jelenik meg a tényleges vizualizációs tartalom */}
      {consoleContent}
    </div>
  );
};

export default GraphCenterContent;