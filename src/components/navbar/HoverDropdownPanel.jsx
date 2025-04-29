// src/components/navbar/HoverDropdownPanel.jsx
import React, { useRef } from 'react';         // React és useRef importálása.
import { motion } from 'framer-motion';         // Framer Motion importálása animációkhoz.
import { Link } from 'react-router-dom';        // Link komponens importálása navigációhoz.
import { useHoverMenuContext } from '../../context/HoverMenuContext'; // Saját kontextus hook importálása.
import { navigationData } from '../../locales/navigationData';       // Navigációs adatok importálása (feltételezi a bővített struktúrát!).

/**
 * A lenyíló információs panel, amely hoverre jelenik meg a menüpont alatt.
 * Dinamikusan pozicionálja magát a kontextusból kapott, getBoundingClientRect
 * alapján számított adatok segítségével.
 */
const HoverDropdownPanel = () => {
  // Kontextusból kiolvassuk az állapotokat és a beállító függvényeket.
  const { hoveredItemTitle,      // A hoverelt menüpont címe
          setHoveredItemTitle,   // Függvény a cím törléséhez (elhagyáskor)
          hoveredItemPosition,   // Objektum a hoverelt elem pozíciójával (top, left, itemWidth)
          isPanelVisible,        // Logikai érték, hogy látható legyen-e a panel
          setIsPanelVisible      // Függvény a láthatóság beállításához
        } = useHoverMenuContext();
  // Ref a panel bezárásának késleltetéséhez használt timeout ID tárolására.
  const timeoutRef = useRef(null);

  // Ha a panel nem látható (a kontextus state alapján) vagy nincs hoverelt elem címe,
  // akkor nem renderelünk semmit. Ez vezérli a panel megjelenését/eltűnését.
  if (!isPanelVisible || !hoveredItemTitle) {
    console.log('HoverDropdownPanel: Returning null (not visible or no title)'); // <<< DEBUG
    return null; // Korai visszatérés, a komponens nem jelenik meg.
  }

  // Megkeressük az aktuálisan hoverelt menüpont adatait (leírás, kép, almenük)
  // a navigationData tömbből a kontextusban lévő cím alapján.
  const currentItemData = navigationData.find(
    (item) => item.title === hoveredItemTitle
  );

  // Ha valamilyen okból nem találjuk az adatot (pl. elírás a címben), nem renderelünk semmit.
  if (!currentItemData) {
     console.log('HoverDropdownPanel: Returning null (currentItemData not found for title:', hoveredItemTitle, ')'); // <<< DEBUG
    return null; // Korai visszatérés.
  }

  // Kinyerjük a megjelenítéshez szükséges adatokat a megtalált objektumból.
  const { description, image, submenus } = currentItemData;

  /**
   * Eseménykezelő, ami lefut, ha az egér a panel fölé ér.
   * Megakadályozza, hogy a panel bezáródjon (törli a bezárási időzítőt).
   */
  const handleMouseEnter = () => {
    console.log('HoverDropdownPanel: Mouse Enter - Clearing close timer'); // <<< DEBUG
    if (timeoutRef.current) { // Ha van függőben lévő bezárási időzítő...
      clearTimeout(timeoutRef.current); // ...akkor töröljük azt.
    }
    // Biztosítjuk, hogy a panel látható maradjon a kontextusban.
    setIsPanelVisible(true);
  };

  /**
   * Eseménykezelő, ami lefut, ha az egér elhagyja a panelt.
   * Elindítja az időzítőt, ami késleltetve bezárja a panelt.
   */
  const handleMouseLeave = () => {
    console.log('HoverDropdownPanel: Mouse Leave - Starting close timer'); // <<< DEBUG
    // Elindítjuk az időzítőt.
    timeoutRef.current = setTimeout(() => {
      console.log('HoverDropdownPanel: Close Timeout - Hiding Panel'); // <<< DEBUG
      setHoveredItemTitle(null); // Töröljük a hoverelt címet a kontextusból.
      setIsPanelVisible(false);    // Elrejtjük a panelt a kontextusban.
    }, 150); // 150ms késleltetés (állítható).
  };

  // Dinamikus stílus objektum létrehozása a panel pozicionálásához.
  const dynamicStyle = {
    position: 'absolute', // Abszolút pozicionálás szükséges.
    // Függőleges pozíció: a hoverelt menüpont alsó széle (viewport-hoz képest) + 12 pixel.
    top: `${hoveredItemPosition.top + 12}px`,
    // Vízszintes pozíció: a hoverelt menüpont bal széle (viewport-hoz képest) + a szélességének a fele.
    left: `${hoveredItemPosition.left + hoveredItemPosition.itemWidth / 2}px`,
    // Vízszintes középre igazítás: a panel saját szélességének felével visszatoljuk balra.
    transform: 'translateX(-50%)',
    // Fix szélesség és maximális szélesség (reszponzivitás).
    width: '650px', // Beállíthatod kisebbre/nagyobbbra
    maxWidth: '95vw', // Biztosítja, hogy kisebb képernyőn ne lógjon le.
    zIndex: 50 // Magas z-index, hogy más elemek felett legyen.
  };
  console.log('HoverDropdownPanel: Rendering with style:', dynamicStyle); // <<< DEBUG

  return (
    // motion.div az animációkhoz és a dinamikus stílus alkalmazásához.
    <motion.div
      style={dynamicStyle} // Alkalmazzuk a JavaScriptben kiszámolt stílust.
      initial={{ opacity: 0.8, y: -5, scale: 0.98 }} // Kezdő animáció (fentről, kicsit kicsinyítve, áttetszően).
      animate={{ opacity: 1, y: 0, scale: 1 }}       // Cél animáció (teljesen látható, helyén, normál méret).
      exit={{ opacity: 0, y: -5, scale: 0.98 }}      // Kilépő animáció (eltűnik fentről).
      transition={{ duration: 0.15, ease: "easeOut" }} // Animáció sebessége és típusa.
      // Statikus Tailwind osztályok a kinézethez (NASA projekt stílusához igazítva).
      className="bg-gradient-to-b from-neutral-800/95 to-neutral-900/95 backdrop-blur-md
                 border border-primary/40 rounded-xl shadow-2xl
                 p-5 text-white" // Háttér, keret, árnyék, padding, szövegszín.
      onMouseEnter={handleMouseEnter} // Egér belépésének kezelése ezen a panelen.
      onMouseLeave={handleMouseLeave} // Egér kilépésének kezelése ezen a panelen.
    >
      {/* Panel belső tartalma */}
      <div className="flex gap-5"> {/* Flexbox a bal és jobb oldal elrendezéséhez. */}
        {/* Bal oldal: Leírás és Almenük */}
        <div className="w-3/5 flex flex-col"> {/* Szélesség beállítása, flex oszlop elrendezés. */}
          {/* Cím */}
          <h3 className="text-lg font-semibold text-primary mb-2">
            {hoveredItemTitle} {/* A hoverelt menüpont címének megjelenítése. */}
          </h3>
          {/* Leírás */}
          <p className="text-sm text-neutral-300 mb-4 leading-relaxed"> {/* Stílus a leíráshoz. */}
            {description || "Leírás hamarosan..."} {/* Leírás megjelenítése, vagy placeholder. */}
          </p>
          {/* Almenük szekció (csak ha vannak almenük) */}
          {submenus && submenus.length > 0 && (
            // `mt-auto`-val az aljára tolja, ha van hely; `pt-3` és `border-t` az elválasztáshoz.
            <div className="mt-auto pt-3 border-t border-primary/20">
              <h4 className="text-sm font-medium text-primary mb-1.5">
                Almenük:
              </h4>
              <ul className="space-y-1"> {/* Lista az almenüknek, kis térközzel. */}
                {submenus.map((submenu, index) => ( // Végigmegyünk az almenükön.
                  <li key={index}> {/* Lista elem egyedi kulccsal. */}
                    <Link // Link komponens az almenü útvonalára.
                      to={submenu.route}
                      className="text-sm text-neutral-200 hover:text-white hover:underline transition-colors" // Almenü link stílusa.
                    >
                      {submenu.title} {/* Almenü címe. */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Jobb oldal: Kép */}
        {image && ( // Csak akkor jelenítjük meg a képet, ha van definiálva.
          <div className="w-2/5 flex items-center justify-center"> {/* Szélesség, flex igazítások a képhez. */}
            <img
              src={image} // Kép forrása.
              alt={`${hoveredItemTitle} illusztráció`} // Helyettesítő szöveg.
              className="max-h-[200px] w-auto object-contain rounded shadow-md" // Kép stílusai: max magasság, auto szélesség, illesztés, lekerekítés, árnyék.
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Komponens exportálása.
export default HoverDropdownPanel;