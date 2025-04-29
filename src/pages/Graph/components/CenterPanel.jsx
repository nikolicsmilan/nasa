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
