// src/components/navbar/HoverNavbar.jsx
import { useState, useRef, useEffect } from 'react';        // React és alap hookok importálása.
import { motion, AnimatePresence } from 'framer-motion';         // Framer Motion importálása animációkhoz.
import { useHoverMenuContext } from '../../context/HoverMenuContext'; // Saját kontextus hook importálása.
import { navigationData } from '../../locales/navigationData';     // A menüpontok adatait tartalmazó fájl importálása.
import HoverDropdownPanel from './HoverDropdownPanel';             // A lenyíló panel komponens importálása.
import NavbarItem from './NavbarItem';                             // Az egyes menüpontokat megjelenítő komponens importálása.

/**
 * Fő navigációs sáv. Kezeli a hover állapotot, az aláhúzás animációt
 * és a lenyíló panel dinamikus pozicionálását/láthatóságát getBoundingClientRect
 * és offsetLeft/offsetWidth alapján (ez a verzió még finomításra szorulhat).
 * @param {object} props - Nincsenek specifikus propjai, a kontextusból és a locales-ból dolgozik.
 */
const HoverNavbar = () => {
  // Kontextusból a szükséges állapotbeállítók.
  const { setHoveredItemTitle, setHoveredItemPosition, setIsPanelVisible,isPanelVisible } = useHoverMenuContext();
  // Lokális state: a hoverelt menüpont indexének tárolására.
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Lokális state: az aláhúzás animációjának tulajdonságaihoz (szélesség, x pozíció).
  const [underlineProps, setUnderlineProps] = useState({ width: 0, x: 0 });
  // Lokális state: a lenyíló panel számított 'left' pozíciója (a hoverelt elem közepéhez igazítva).
  // Ezt most a KONTEXTUSBAN lévő hoveredItemPosition fogja tárolni.
  // const [panelLeftOffset, setPanelLeftOffset] = useState(0); // Erre már nincs szükség itt

  // Refek tömbje: a menüpont DOM elemek referenciáinak tárolására.
  const menuRefs = useRef([]);
  // Ref: a fő <nav> elemhez (referencia a pozicionáláshoz).
  const navRef = useRef(null);
  // Ref: a panel bezárásának késleltetéséhez (timeout ID).
  const closeTimeoutRef = useRef(null);
  // Ref: a panel megnyitásának késleltetéséhez (timeout ID).
  const openTimeoutRef = useRef(null);

  // Biztosítja, hogy a menuRefs tömb mérete kövesse a menüpontok számát.
  useEffect(() => {
    menuRefs.current = menuRefs.current.slice(0, navigationData.length); // Igazítja a ref tömb méretét.
  }, [navigationData.length]); // Csak akkor fut, ha a menüpontok száma változik.

  /**
   * Kezeli az egér belépését egy menüpontra. Kiszámolja az aláhúzás
   * és a panel pozícióját getBoundingClientRect és offsetLeft/offsetWidth alapján.
   * @param {number} index - A hoverelt elem indexe.
   * @param {string} itemTitle - A hoverelt elem címe.
   */
  const handleMouseEnter = (index, itemTitle) => {
    const element = menuRefs.current[index]; // Kiolvassuk a hoverelt elem ref-jét.
    const navElement = navRef.current;       // Kiolvassuk a nav elem ref-jét.

    // Töröljük az esetlegesen futó időzítőket.
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);

    setHoveredIndex(index);         // Beállítjuk a hover indexet.
    setHoveredItemTitle(itemTitle); // Beállítjuk a hover címet (kontextus).

    // Csak akkor számolunk, ha mindkét elem ref-je létezik.
    if (element && navElement) {
      const itemRect = element.getBoundingClientRect(); // Elem pozíciója/mérete a viewport-hoz képest.
      const navRect = navElement.getBoundingClientRect(); // Nav pozíciója/mérete a viewport-hoz képest.

      // === ALÁHÚZÁS POZÍCIÓ SZÁMÍTÁSA ===
      // Az X pozíció a nav elemen belülre kerüljön.
      const underlineX = itemRect.left - navRect.left;
      console.log('HoverNavbar: Underline Props Calc:', { width: itemRect.width, x: underlineX }); // <<< DEBUG
      setUnderlineProps({
        width: itemRect.width, // Szélesség = elem szélessége a viewport-hoz képest.
        x: underlineX,         // X pozíció = elem bal széle - nav bal széle (relatív a nav-hoz).
      });
      // =================================

      // === PANEL POZÍCIÓ ÉS LÁTHATÓSÁG KÉSLELTETETT BEÁLLÍTÁSA ===
      openTimeoutRef.current = setTimeout(() => {
        // Pozíció adatok a viewport-hoz képest (getBoundingClientRect alapján).
        const positionData = {
            top: itemRect.bottom,           // Panel teteje = elem alja (viewport).
            left: itemRect.left,            // Elem bal széle (viewport).
            itemWidth: itemRect.width,      // Elem szélessége (viewport).
        };
        console.log('HoverNavbar: Open Timeout - Setting Panel Visible for:', itemTitle, 'Pos:', positionData); // <<< DEBUG
        setHoveredItemPosition(positionData); // Pozíció beállítása a kontextusban.
        setIsPanelVisible(true);              // Láthatóvá tétel a kontextusban.
       }, 50); // 50ms késleltetés.
      // =========================================================

    } else { // Hiba log, ha valamelyik ref nem elérhető.
       console.error('HoverNavbar: Could not get ref for nav item or nav container');
    }
  };

  /**
   * Kezeli az egér kilépését a teljes navigációs sávról.
   */
  const handleMouseLeave = () => {
     if (openTimeoutRef.current) { // Ha épp nyitna, töröljük.
        clearTimeout(openTimeoutRef.current);
      }
    // Késleltetve elrejtjük a panelt és töröljük a hover állapotot.
    closeTimeoutRef.current = setTimeout(() => {
      console.log('HoverNavbar: Close Timeout - Hiding Panel'); // <<< DEBUG
      setHoveredIndex(null);         // Hover index törlése.
      setHoveredItemTitle(null);     // Hover cím törlése (kontextus).
      setIsPanelVisible(false);      // Panel elrejtése (kontextus).
      setUnderlineProps((prev) => ({ width: 0, x: prev.x })); // Aláhúzás eltüntetése.
    }, 150); // 150ms késleltetés.
  };

   /**
    * Kezeli az egér belépését a lenyíló panelre (hogy nyitva maradjon).
    */
   const handlePanelMouseEnter = () => {
    console.log('HoverNavbar: Panel Mouse Enter - Clearing close timer'); // <<< DEBUG
    if (closeTimeoutRef.current) { // Ha épp be akarna záródni...
      clearTimeout(closeTimeoutRef.current); // ...töröljük az időzítőt.
    }
    setIsPanelVisible(true); // Biztosítjuk, hogy látható.
 };

  return (
    // A fő <nav> elem.
    <nav
      ref={navRef} // Ref hozzárendelése.
      // Stílusok: relative (gyerek absolute-hoz), w-full, flex igazítások, magasság.
      className="relative w-full flex items-center justify-center h-full"
      onMouseLeave={handleMouseLeave} // Egér elhagyás figyelése.
    >
      {/* Menüpontok konténere. Relative pozíció fontos az aláhúzáshoz. */}
      <div className="flex gap-6 relative"> {/* Flexbox, gap, relative. */}
        {navigationData.map((item, index) => ( // Végigmegyünk a menüpontokon.
          <NavbarItem // Minden elemhez egy NavbarItem komponenst renderelünk.
            key={item.title} // Kulcs.
            ref={el => menuRefs.current[index] = el} // Ref hozzárendelés.
            item={item} // Adatok átadása.
            index={index} // Index átadása.
            onMouseEnter={handleMouseEnter} // Hover kezelő átadása.
            hoveredIndex={hoveredIndex}     // Aktuális hover index átadása.
          />
        ))}
        {/* Aláhúzás/csúszka. */}
        <motion.div
          className="absolute bottom-[-5px] h-[2px] bg-white rounded-full" // Pozíció és stílus.
          initial={{ width: 0 }} // Kezdetben nulla széles.
          animate={{ // Animáció a state alapján.
            width: underlineProps.width, // Dinamikus szélesség (itemRect.width).
            x: underlineProps.x,         // Dinamikus x pozíció (itemRect.left - navRect.left).
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }} // Animáció típusa.
        />
      </div>

      
      {/* Lenyíló panel animált megjelenítése/eltűnése. */}
      <AnimatePresence>
         {/* Wrapper div a panel hover kezeléséhez. */}
         <div onMouseEnter={handlePanelMouseEnter}>
           {/* A panel már nem kap propot a pozícióhoz, a kontextusból olvassa. */}
           <HoverDropdownPanel />
         </div>
      </AnimatePresence>

       {/* === DEBUG SZÖVEG KIÍRÁSA === */}
      {/* Abszolút pozicionálás, hogy ne befolyásolja a layoutot */}
      {/* Lehet a bal alsó sarokban, vagy ahol kényelmes */}
      <div className="absolute bottom-1 left-1 z-[99] bg-black/50 text-white text-xs p-1 rounded pointer-events-none">
        <p>Underline X: {underlineProps.x.toFixed(2)}</p>
        <p>Underline W: {underlineProps.width.toFixed(2)}</p>
        {/* A panel pozícióját a kontextusból kellene olvasni, de ha a HoverNavbar state-jében van: */}
        {/* <p>Panel Left Target: {panelLeftOffset.toFixed(2)}</p> */}
        {/* Ha a kontextusból olvasod a panel pozícióját: */}
        {/* <p>Panel Pos Left (vp): {hoveredItemPosition.left.toFixed(2)}</p> */}
        {/* <p>Panel Pos Width (vp): {hoveredItemPosition.itemWidth.toFixed(2)}</p> */}
        {/* <p>Panel Pos Top (vp): {hoveredItemPosition.top.toFixed(2)}</p> */}
        <p>Hover Index: {hoveredIndex}</p>
        <p>Panel Visible: {isPanelVisible ? 'Yes' : 'No'}</p> {/* isPanelVisible a kontextusból jön */}
      </div>
    </nav>
  );
};

export default HoverNavbar; // Exportálás.