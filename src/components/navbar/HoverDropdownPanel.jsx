// src/components/navbar/HoverDropdownPanel.jsx
import { useRef } from "react"; // useRef importálása
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useHoverMenuContext } from "../../context/HoverMenuContext";
import { navigationData } from "../../locales/navigationData"; // Feltételezi a bővített struktúrát

/**
 * A lenyíló panel, amely megjelenik, ha egy menüpont fölé visszük az egeret.
 * Megjeleníti a menüpont leírását, képét és almenüit.
 */
const HoverDropdownPanel = () => {
  // Kontextusból kiolvassuk a hoverelt elem címét és a beállító függvényt
  const { hoveredItemTitle, setHoveredItemTitle } = useHoverMenuContext();
  // Ref a timeout tárolására
  const timeoutRef = useRef(null);

  // Ha nincs elem hoverelve, ne jelenjen meg semmi
  if (!hoveredItemTitle) {
    return null;
  }

  // Megkeressük a hoverelt elem adatait
  const currentItemData = navigationData.find(
    (item) => item.title === hoveredItemTitle
  );

  // Ha nincs adat (nem fordulhatna elő), ne jelenjen meg semmi
  if (!currentItemData) {
    return null;
  }

  // Adatok kinyerése
  const { description, image, submenus } = currentItemData;

  // Ha a panel fölé visszük az egeret, töröljük a timeout-ot, ami bezárná
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Ha elhagyjuk a panelt, akkor bezárjuk (késleltetéssel)
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItemTitle(null); // Kontextus ürítése -> panel eltűnik
    }, 150); // Ugyanaz a késleltetés, mint a nav-on
  };

  return (
    <motion.div
      initial={{ opacity: 0.8, y: 5, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 5, scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 z-50
                 w-[650px] max-w-[95vw]
                 bg-gradient-to-b from-neutral-800/95 to-neutral-900/95 backdrop-blur-md // NASA stílusú háttér
                 border border-primary/40 rounded-xl shadow-2xl // NASA stílusú keret/árnyék
                 p-5 text-white" // Belső térköz, alap szövegszín
      onMouseEnter={handleMouseEnter} // Egér belépés kezelése
      onMouseLeave={handleMouseLeave} // Egér kilépés kezelése
    >sssss
      <div className="flex gap-5">
        {/* Bal oldal: Leírás és Almenük */}
        <div className="w-3/5 flex flex-col">
          <h3 className="text-lg font-semibold text-primary mb-2">
            {hoveredItemTitle}
          </h3>
          <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
            {description || "Leírás hamarosan..."}
          </p>
          {/* Almenük megjelenítése, ha vannak */}
          {submenus && submenus.length > 0 && (
            <div className="mt-auto pt-3 border-t border-primary/20">
              <h4 className="text-sm font-medium text-primary mb-1.5">
                Almenük:
              </h4>
              <ul className="space-y-1">
                {submenus.map((submenu, index) => (
                  <li key={index}>
                    <Link
                      to={submenu.route}
                      className="text-sm text-neutral-200 hover:text-white hover:underline transition-colors"
                    >
                      {submenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Jobb oldal: Kép */}
        {image && (
          <div className="w-2/5 flex items-center justify-center">
            <img
              src={image}
              alt={`${hoveredItemTitle} illusztráció`}
              className="max-h-[200px] w-auto object-contain rounded shadow-md"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HoverDropdownPanel;
