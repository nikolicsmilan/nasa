// src/context/HoverMenuContext.jsx
import { createContext, useState,/*seContext*/} from'react'; // React és szükséges hookok importálása

// Létrehozzuk a Kontextust. Kezdeti értéke undefined, a Provider fogja feltölteni.
const HoverMenuContext = createContext(undefined);

/**
 * Provider komponens a hover állapottal kapcsolatos adatok megosztásához.
 * @param {object} props - A komponens propjai.
 * @param {React.ReactNode} props.children - A gyermek komponensek, amelyek hozzáférhetnek a kontextushoz.
 */
export const HoverMenuContextProvider = ({ children }) => {
  // State a hoverelt menüpont címének tárolására. Null, ha nincs hover.
  const [hoveredItemTitle, setHoveredItemTitle] = useState(null);
  // State a hoverelt elem pozíciójának tárolására (getBoundingClientRect alapján).
  const [hoveredItemPosition, setHoveredItemPosition] = useState({ top: 0, left: 0, width: 0, bottom: 0 });
  // State a lenyíló panel láthatóságának vezérlésére. Fontos a timeout-ok miatt.
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  // Az érték objektum, amit a Provider átad a fogyasztóknak.
  const contextValue = {
    hoveredItemTitle,       // Jelenleg hoverelt elem címe.
    setHoveredItemTitle,    // Függvény a cím frissítéséhez.
    hoveredItemPosition,    // Jelenleg hoverelt elem pozíciója (top, left, width, bottom).
    setHoveredItemPosition, // Függvény a pozíció frissítéséhez.
    isPanelVisible,         // Logikai érték: látható-e a panel?
    setIsPanelVisible       // Függvény a láthatóság frissítéséhez.
  };

  return (
    // A Provider átadja az 'contextValue' objektumot minden alatta lévő komponensnek, amely használja a kontextust.
    <HoverMenuContext.Provider value={contextValue}>
      {children} {/* A becsomagolt alkalmazásrész (pl. az egész App) renderelése. */}
    </HoverMenuContext.Provider>
  );
};

/*
// Custom hook a kontextus értékének egyszerűbb eléréséhez.
export const useHoverMenuContext = () => {
  const context = useContext(HoverMenuContext); // useContext hook a kontextus értékének kiolvasásához.
  if (context === undefined) { // Ellenőrizzük, hogy a komponenst a Provideren belül használjuk-e.
    // Hiba dobása, ha a kontextus nincs definiálva (a Provider hiányzik a fa felett).
    throw new Error('useHoverMenuContext must be used within a HoverMenuContextProvider');
  }
  return context; // Visszaadjuk a kontextusban tárolt értékeket és függvényeket.
};*/