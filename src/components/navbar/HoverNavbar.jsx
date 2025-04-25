// src/components/navbar/HoverNavbar.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHoverMenuContext } from "../../context/HoverMenuContext";
import { navigationData } from "../../locales/navigationData"; // Ezt bővíteni kell!
import HoverDropdownPanel from "./HoverDropdownPanel";
import NavbarItem from "./NavbarItem"; // Importáljuk az új komponenst

/**
 * A fő navigációs sáv komponens, amely kezeli a hover effektet,
 * az aláhúzás animációt és a lenyíló panel megjelenítését.
 */
const HoverNavbar = () => {
  const { setHoveredItemTitle } = useHoverMenuContext(); // Kontextusból a setter
  const [hoveredIndex, setHoveredIndex] = useState(null); // Melyik index van hoverelve
  const [underlineProps, setUnderlineProps] = useState({ width: 0, x: 0 }); // Aláhúzás animációhoz
  const menuRefs = useRef([]); // Refek a menüpont divekre
  const navRef = useRef(null); // Ref a fő nav elemre (padding számításhoz)
  const timeoutRef = useRef(null); // Ref a késleltetett eltűnéshez

  // Biztosítjuk, hogy a menuRefs tömb mérete megfelelő legyen
  useEffect(() => {
    menuRefs.current = menuRefs.current.slice(0, navigationData.length);
  }, [navigationData.length]);

  // Egérmutató belépésének kezelése egy menüpontra
  const handleMouseEnter = (index, itemTitle) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Töröljük a bezárási timeout-ot
    }
    setHoveredIndex(index);
    setHoveredItemTitle(itemTitle); // Kontextus frissítése

    // Aláhúzás pozíciójának és szélességének kiszámítása
    if (menuRefs.current[index] && navRef.current) {
      const { offsetWidth, offsetLeft } = menuRefs.current[index];
      const navPaddingLeft =
        parseFloat(window.getComputedStyle(navRef.current).paddingLeft) || 0;
      setUnderlineProps({
        width: offsetWidth,
        x: offsetLeft - navPaddingLeft,
      });
    }
  };

  // Egérmutató elhagyja a teljes navigációs sávot
  const handleMouseLeave = () => {
    // Késleltetett eltűntetés, hogy legyen idő a panel fölé vinni az egeret
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setHoveredItemTitle(null);
      setUnderlineProps((prev) => ({ width: 0, x: prev.x })); // Szélesség nullázása
    }, 150); // 150ms késleltetés
  };

  // Ha a lenyíló panel fölé ér az egér, ne záródjon be a menü
  const handlePanelMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <nav
      ref={navRef}
      className=" " // Padding a nav elemen
      onMouseLeave={handleMouseLeave} // Elhagyás figyelése
    >
      {/* Menüpontok sora */}
      <div className="flex gap-6 relative border-0 border-purple-900">
        {navigationData.map((item, index) => (
          <NavbarItem
            key={item.title}
            ref={(el) => (menuRefs.current[index] = el)} // Ref hozzárendelése
            item={item}
            index={index}
            onMouseEnter={handleMouseEnter} // Callback átadása
            hoveredIndex={hoveredIndex} // Aktuális hover index átadása
          />
        ))}

        {/* Aláhúzás/Csúszka animációja */}
        <motion.div
          className="absolute bottom-[-5px] h-[2px] bg-white rounded-full" // Stílus a NASA témához igazítva
          initial={{ width: 0 }}
          animate={{
            width: underlineProps.width,
            x: underlineProps.x,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />
      </div>

      {/* Lenyíló panel animált megjelenítése */}
      <AnimatePresence>
        {/* Wrapper a panel mouse enter kezeléséhez */}
        <div className="border-0 border-lime-500 w-full absolute top-20 left-[-300px]" onMouseEnter={handlePanelMouseEnter}>
          <HoverDropdownPanel />
        </div>
      </AnimatePresence>
    </nav>
  );
};

export default HoverNavbar;
