// src/components/headless-menu/HeadlessHoverMenu.jsx
import { motion } from "framer-motion"; // Framer Motion az aláhúzáshoz
import {
  HeadlessMenuContextProvider,
  useHeadlessMenuContext,
} from "./HeadlessMenuContext"; // Saját kontextus importálása
import { navigationData } from "../../locales/navigationData"; // Navigációs adatok
import HeadlessMenuItem from "./HeadlessMenuItem"; // Az új menüpont komponens

/**
 * A belső komponens, ami ténylegesen megjeleníti a menüt és az aláhúzást.
 * Szükség van rá, mert a kontextus hookokat csak a Provider alatt lehet használni.
 */
const MenuContent = () => {
  // Kontextusból kinyerjük a refeket és az aláhúzás adatait
  const { navRef, underlineProps, activeItemTitle, closeTimeoutRef,setActiveItemTitle,setUnderlineProps } =
    useHeadlessMenuContext();


      const handleMouseLeave = () => {
        // Késleltetett bezárás indítása
        closeTimeoutRef.current = setTimeout(() => {
          setActiveItemTitle(null); // Töröljük az aktív elemet
          setUnderlineProps((prev) => ({ ...prev, opacity: 0, width: 0 })); // Aláhúzás eltüntetése
        }, 1500); // 150ms késleltetés
      };
  return (
    // A fő <nav> elem, ref-fel ellátva
    <nav
      ref={navRef}
      className="relative w-full flex items-center justify-center h-full border-4 border-red-400"
      // A mouseLeave-et most az egyes Popover komponensek kezelik
      onMouseLeave={handleMouseLeave}
    >
      {/* Menüpontokat tartalmazó div */}
      <div className="flex gap-6 relative">
        {/* Flexbox, gap a térközhöz, relative az aláhúzáshoz */}
        {navigationData.map(
          (
            item,
            index // Végigmegyünk a menüpontokon
          ) => (
            // Minden elemhez egy HeadlessMenuItem komponenst renderelünk
            <HeadlessMenuItem
              key={item.title} // Kulcs
              item={item} // Adatok átadása
              index={index} // Index átadása
              // A ref kezelése már a HeadlessMenuItem-en belül történik a kontextus ref tömbjével
              // A hover kezelése is a HeadlessMenuItem-en belül történik
            />
          )
        )}
        {/* Aláhúzás/csúszka animált megjelenítése */}
        <motion.div
          className="absolute bottom-[-5px] h-[2px] bg-white rounded-full pointer-events-none" // pointer-events-none, hogy ne zavarja a hovert
          initial={{ width: 0, opacity: 0 }} // Kezdetben nulla széles és láthatatlan
          animate={{
            // Animáció a kontextusban lévő state alapján
            width: underlineProps.width, // Dinamikus szélesség
            x: underlineProps.x, // Dinamikus x pozíció
            opacity: underlineProps.opacity, // Dinamikus láthatóság
          }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }} // Animáció típusa
        />
      </div>
      {/* A lenyíló panel (Popover.Panel) már a HeadlessMenuItem komponensen belül van */}
      <div className="absolute top-[200px] border-2 border-lime-400">
        <p> underlineProps.width: {underlineProps && underlineProps.width}</p>
        <p> underlineProps.x: {underlineProps && underlineProps.x}</p>
        <p>
          {" "}
          underlineProps.opacity: {underlineProps && underlineProps.opacity}
        </p>
        {activeItemTitle ? "active" : "passzív"}
      </div>
    </nav>
  );
};

/**
 * A fő exportált komponens, ami becsomagolja a MenuContent-et a Context Providerbe.
 */
const HeadlessHoverMenu = () => {
  return (
    // Biztosítjuk a kontextust a menü komponensek számára
    <HeadlessMenuContextProvider>
      <MenuContent /> {/* Rendereljük a tényleges menü tartalmat */}
    </HeadlessMenuContextProvider>
  );
};

export default HeadlessHoverMenu; // Exportáljuk a fő komponenst
