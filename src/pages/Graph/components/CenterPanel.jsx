import { motion } from 'framer-motion';
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
      className="  flex flex-col items-center justify-center relative z-10 rounded inset-0 border-0 border-lime-400 text-dark w-screen md:w-full h-full shadow-2xl p-2"
      
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

//CenterPanel