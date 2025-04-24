/*import { motion } from 'framer-motion';
import { MyConsoleContext } from '../../../context/ConsoleContext'; // Ellenőrizd az elérési utat!
import useWindowSize from '../../../hooks/use-windowsize';
// Ez a komponens most már csak a külső keret és az animáció.
// A tényleges tartalmat (pl. GraphCenterContent, MobileMenu) children-ként kapja.
const CenterPanel = ({ children }) => {
  // Csak az animációhoz szükséges kontextusra van szüksége (ha van)
  const { animationVariants } = MyConsoleContext();
  const { width, height } = useWindowSize();
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
    <motion.div
      animate={animationVariants} // Az animáció marad, ha szükséges
      className="  flex flex-col items-center justify-center relative z-10 rounded inset-0 border-2 border-orange-400 text-dark w-screen md:w-full h-full shadow-2xl p-2"
      
    >
      <div className={`glowy-button-10 rounded-2xl z-50 relative p-0 overflow-y-scroll overflow-x-scroll
         text-white flex flex-col items-center justify-center w-screen xl:w-full md:h-full`}
      style={containerStyle}>
      {children}
      </div>
    
    </motion.div>
  );
};

export default CenterPanel;

*/

// src/pages/Graph/components/CenterPanel.jsx
import { motion } from "framer-motion";
// import { MyConsoleContext } from '../../../context/ConsoleContext'; // Csak ha kell animáció
// import useWindowSize from '../../../hooks/use-windowsize'; // <<< ELTÁVOLÍTVA

const CenterPanel = ({ children }) => {
  // const { animationVariants } = MyConsoleContext(); // Ha kell
  // const containerStyle = ... // <<< ELTÁVOLÍTVA

  return (
    // Kitölti a szülőt (GraphDesktop középső div)
    <motion.div
      // animate={animationVariants}
      className="w-full h-4/5 flex flex-col relative z-10 rounded inset-0 
      text-dark shadow-2xl p-2 " // Egyszerűsített, items/justify center nélkül
    >
      {/* Belső div: Kitölti a motion.div-et, görgethető, DE NINCS KÖZÉPRE IGAZÍTVA */}
      <div
        className={`glowy-button-10 rounded-2xl z-10 relative p-0 w-full h-full overflow-y-auto overflow-x-hidden
         text-white flex flex-col`} // Csak flex flex-col, nincs items/justify center
      >
        {children}{" "}
        {/* A GraphContent itt jelenik meg, a div tetejéhez igazodva */}
      </div>
    </motion.div>
  );
};
export default CenterPanel;
