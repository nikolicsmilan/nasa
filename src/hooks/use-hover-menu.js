// src/hooks/use-hover-menu.js
import { useContext } from "react";
import {HoverMenuContext} from "../context/HoverMenuContext"
// Custom hook a kontextus értékének egyszerűbb eléréséhez.
export const useHoverMenuContext = () => {
    const context = useContext(HoverMenuContext); // useContext hook a kontextus értékének kiolvasásához.
    if (context === undefined) { // Ellenőrizzük, hogy a komponenst a Provideren belül használjuk-e.
      // Hiba dobása, ha a kontextus nincs definiálva (a Provider hiányzik a fa felett).
      throw new Error('useHoverMenuContext must be used within a HoverMenuContextProvider');
    }
    return context; // Visszaadjuk a kontextusban tárolt értékeket és függvényeket.
  };