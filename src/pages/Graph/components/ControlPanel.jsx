/*import useWindowSize from "../../../hooks/use-windowsize";
const ControlPanel = ({ children }) => {
  const { width, height } = useWindowSize();

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200,
    "2xl": 1700,
  };
  return (
    <aside
      className="   text-primary 
        flex flex-col border-0 border-primary  mx-0
         bg-gradient2 top-20 relative overflow-y-auto opacity-100 z-50 rounded"
      style={
        width >= breakpoints["2xl"]
          ? { height: height - 150 } // 2XL gets a 150 adjustment
          : width >= breakpoints.xl
          ? { height: height - 50 } // XL gets a 50 adjustment
          : { height: height - 250 } // Other sizes
      }
    >
      {children}
    </aside>
  );
};

export default ControlPanel;*/

// src/pages/Graph/components/ControlPanel.jsx
// import useWindowSize from "../../../hooks/use-windowsize"; // <<< ELTÁVOLÍTVA

const ControlPanel = ({ children }) => {
  // const { width, height } = useWindowSize(); // <<< ELTÁVOLÍTVA
  // const breakpoints = { ... }; // <<< ELTÁVOLÍTVA
  // const style = ...; // <<< ELTÁVOLÍTVA

  return (
    // Kitölti a szülőjét (GraphDesktop bal oldali div), görgethető
    <aside
      className="text-primary flex flex-col border-0 border-primary w-full h-4/5
                 bg-gradient2 overflow-y-auto opacity-100 z-20 rounded " // Egyszerűsített osztályok, z-index lehet alacsonyabb
      // style={ ... } // <<< ELTÁVOLÍTVA
    >
      {children}
    </aside>
  );
};
export default ControlPanel;
