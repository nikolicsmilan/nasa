// src/components/headless-menu/HeadlessMenuContext.jsx
import React, { createContext, useState, useContext, useRef } from "react";

// Kontextus létrehozása
const HeadlessMenuContext = createContext(undefined);

/**
 * Provider komponens a Headless UI alapú menü állapotának kezeléséhez.
 * @param {object} props - Propok.
 * @param {React.ReactNode} props.children - Gyermek komponensek.
 */
export const HeadlessMenuContextProvider = ({ children }) => {
  // State: Az aktuálisan hoverelt (vagy nyitva tartott) menüpont címe
  const [activeItemTitle, setActiveItemTitle] = useState(null);
  // State: Az aláhúzás pozíciója és szélessége
  const [underlineProps, setUnderlineProps] = useState({
    width: 0,
    x: 0,
    opacity: 0,
  });
  // Refek tömbje a menüpont gombokhoz (Popover.Button)
  const itemRefs = useRef([]);
  // Ref a teljes nav elemhez (a koordinátákhoz)
  const navRef = useRef(null);
  // Timeout ref a panel bezárásának késleltetéséhez
  const closeTimeoutRef = useRef(null);

  // Értékek, amelyeket a kontextus szolgáltat
  const value = {
    activeItemTitle,
    setActiveItemTitle,
    underlineProps,
    setUnderlineProps,
    itemRefs, // Megosztjuk a ref tömböt
    navRef, // Megosztjuk a nav refet
    closeTimeoutRef, // Megosztjuk a timeout refet
  };

  return (
    // Átadjuk az értékeket a Providernek
    <HeadlessMenuContext.Provider value={value}>
      {children}
    </HeadlessMenuContext.Provider>
  );
};

// Custom hook a kontextus könnyebb használatához
export const useHeadlessMenuContext = () => {
  const context = useContext(HeadlessMenuContext);
  if (context === undefined) {
    // Ellenőrzés
    throw new Error(
      "useHeadlessMenuContext must be used within a HeadlessMenuContextProvider"
    );
  }
  return context; // Kontextus visszaadása
};
