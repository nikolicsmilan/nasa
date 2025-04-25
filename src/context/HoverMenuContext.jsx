// src/context/HoverMenuContext.jsx
import  { createContext, useState, useContext } from 'react';

// Kontextus létrehozása
const HoverMenuContext = createContext(undefined);

/**
 * Provider komponens a menü hover állapotának kezeléséhez.
 * @param {object} props - Komponens propok.
 * @param {React.ReactNode} props.children - A becsomagolt gyermek komponensek.
 */
export const HoverMenuContextProvider = ({ children }) => {
  // State a hoverelt menüpont címének tárolására
  const [hoveredItemTitle, setHoveredItemTitle] = useState(null);

  return (
    <HoverMenuContext.Provider value={{ hoveredItemTitle, setHoveredItemTitle }}>
      {children}
    </HoverMenuContext.Provider>
  );
};

// Custom hook a kontextus egyszerűbb eléréséhez
export const useHoverMenuContext = () => {
  const context = useContext(HoverMenuContext);
  if (context === undefined) {
    throw new Error('useHoverMenuContext must be used within a HoverMenuContextProvider');
  }
  return context;
};