// src/components/headless-menu/HeadlessMenuItem.jsx
import { useEffect } from "react"; // React import
import PropTypes from "prop-types"; // PropTypes a validációhoz
import { Popover, Transition } from "@headlessui/react"; // Headless UI Popover és Transition importálása
import { NavLink } from "react-router-dom"; // Link és NavLink routinghoz
import { FaChevronDown } from "react-icons/fa"; // Lenyíló ikon
import { useHeadlessMenuContext } from "./HeadlessMenuContext"; // Saját kontextus

/**
 * Egyetlen menüpontot és a hozzá tartozó lenyíló Popover panelt jeleníti meg.
 * @param {object} props - Komponens propok.
 * @param {object} props.item - A menüpont adatait tartalmazó objektum (title, route, description, image, submenus).
 * @param {number} props.index - A menüpont indexe a listában.
 */
const HeadlessMenuItem = ({ item, index }) => {
  // Kontextusból kinyerjük a szükséges állapotokat és refeket
  const {
    activeItemTitle,
    setActiveItemTitle,
    setUnderlineProps,
    itemRefs,
    navRef,
    closeTimeoutRef,
  } = useHeadlessMenuContext();

  // Ellenőrizzük, van-e almenü
  const hasSubmenus = item.submenus && item.submenus.length > 0;
  // Ellenőrizzük, hogy ez a menüpont van-e éppen aktív (hoverelve vagy nyitva)
  const isActive = activeItemTitle === item.title;

  /**
   * Egér belépés kezelő a Popover.Button-ra (a menüpontra).
   */
  const handleMouseEnter = () => {
    console.log("handleMouseEnter start");
    if (closeTimeoutRef.current) {
      // Ha van bezárási időzítő...
      console.log("handleMouseEnter   if (closeTimeoutRef.current)");
      clearTimeout(closeTimeoutRef.current); // ...töröljük.
    }

    setActiveItemTitle(item.title); // Beállítjuk ezt az elemet aktívnak.
    console.log("item.title: ", item.title);
    console.log("item ", item);
    console.log("index ", index);
    console.log("itemRefs: ",itemRefs)
    // Aláhúzás pozíciójának és szélességének frissítése
    const element = itemRefs.current[index]; // Ref az aktuális gombhoz
    console.log("element", element);
    console.log( "element.offsetLeft:",element.offsetLeft)
    const navElement = navRef.current; // Ref a nav elemhez
    if (element && navElement) {
      // const navPaddingLeft = parseFloat(window.getComputedStyle(navElement).paddingLeft) || 0;
      setUnderlineProps({
        width: element.offsetWidth, // Szélesség = gomb szélessége
        x: element.offsetLeft, // X = gomb offsetLeft-je (a nav elemen belül)
        opacity: 1, // Láthatóvá tesszük
      });
    }
  };

  /**
   * Egér kilépés kezelő a Popover komponens egészéről (gomb + panel).
   */
  const handleMouseLeave = () => {
    // Késleltetett bezárás indítása
    closeTimeoutRef.current = setTimeout(() => {
      setActiveItemTitle(null); // Töröljük az aktív elemet
      setUnderlineProps((prev) => ({ ...prev, opacity: 0, width: 0 })); // Aláhúzás eltüntetése
    }, 1500); // 150ms késleltetés
  };

  // useEffect hook, hogy a ref tömböt inicializáljuk/méretezzük
  useEffect(() => {
    if (!itemRefs.current[index]) {
      // Csak ha még nincs ref ehhez az indexhez
      itemRefs.current[index] = null; // Helyőrző beállítása
    }
    // Cleanup nem szükséges itt
  }, [index, itemRefs]);

  return (
    // A Popover komponens kezeli a nyitás/zárás logikát és a panel pozicionálását.
    // A onMouseLeave itt van, hogy a gombról a panelre mozgatva ne záródjon be.

    <Popover  ref={(el) => (itemRefs.current[index] = el)} className="relative border-2 border-orange-400" onMouseLeave={handleMouseLeave}>
      {/* A Popover.Button a trigger elem (maga a menüpont). */}
      <Popover.Button
        // Ref hozzárendelése a tömbhöz
        className={(
          { open } // Az 'open' prop jelzi, hogy a panel nyitva van-e (kattintás után)
        ) =>
          `border-2 border-sky-400 p-1 flex items-center space-x-1 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 focus:outline-none rounded // Alap stílusok + fókusz
           ${
             open || isActive // Ha nyitva van VAGY ez az aktív (hoverelt) elem
               ? "text-white" // Aktív szín
               : "text-primary hover:text-white" // Inaktív és hover szín
           }`
        }
        onMouseEnter={handleMouseEnter} // Egér belépés kezelése
      >
        {/* Használhatunk sima span-t vagy NavLink-et itt. Ha NavLink, az aktív stílus lehet dupla. */}
        {/* Most span-t használok, a routingot a panelben lévő linkek kezelik. */}
        <span>{item.title}</span>
        {hasSubmenus && ( // Ikon csak ha van almenü
          <FaChevronDown
            className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-300 ${
              isActive ? "rotate-180" : "rotate-0" // Forgatás, ha aktív
            }`}
          />
        )} 
      </Popover.Button>

      {/* Transition komponens a panel animált megjelenítéséhez/eltűnéséhez */}
      <Transition
      /*  as={React.Fragment} // Ne adjon hozzá extra DOM elemet
        enter="transition ease-out duration-150" // Belépő animáció osztályai
        enterFrom="opacity-0 translate-y-1 scale-95" // Kezdő állapot
        enterTo="opacity-100 translate-y-0 scale-100" // Végállapot
        leave="transition ease-in duration-100" // Kilépő animáció osztályai
        leaveFrom="opacity-100 translate-y-0 scale-100" // Kezdő állapot
        leaveTo="opacity-0 translate-y-1 scale-95" // Végállapot*/
      >
        {/* Popover.Panel a lenyíló tartalom konténere. Headless UI pozicionálja. */}
        <Popover.Panel
          className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 z-50 // Alap pozicionálás (Headless UI finomíthatja)
                                w-[650px] max-w-[95vw] // Szélesség
                                focus:outline-none"
        >
          {" "}
          {/* Fókusz stílus eltüntetése */}
          {/* Panel belső stílusa */}
          <div
            className="overflow-hidden rounded-xl shadow-2xl border border-primary/40
                        bg-gradient-to-b from-neutral-800/95 to-neutral-900/95 backdrop-blur-md"
            // Egér események itt is kellenek a timeout törléséhez/indításához
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Panel tartalma */}
            <div className="flex gap-5 p-5 text-white">
              {/* Bal oldal: Leírás és Almenük */}
              <div className="w-3/5 flex flex-col">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title} {/* Cím a props.item-ből */}
                </h3>
                <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
                  {item.description || "Leírás hamarosan..."} {/* Leírás */}
                </p>
                {/* Almenük (ha vannak) */}
                {hasSubmenus && (
                  <div className="mt-auto pt-3 border-t border-primary/20">
                    <h4 className="text-sm font-medium text-primary mb-1.5">
                      Almenük:
                    </h4>
                    <ul className="space-y-1">
                      {item.submenus.map((submenu, subIndex) => (
                        <li key={subIndex}>
                          {/* NavLink vagy Link az almenükhöz */}
                          <NavLink
                            to={submenu.route}
                            className="text-sm text-neutral-200 hover:text-white hover:underline transition-colors"
                          >
                            {submenu.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Jobb oldal: Kép */}
              {item.image && ( // Csak ha van kép megadva
                <div className="w-2/5 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={`${item.title} illusztráció`}
                    className="max-h-[200px] w-auto object-contain rounded shadow-md"
                  />
                </div>
              )}
            </div>
           
          </div>
       
         
        
        
 
        </Popover.Panel>
        
      </Transition>
    </Popover>
  );
};

// Prop típusok definiálása
HeadlessMenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired, // Fő menüpont útvonala (lehet '#', ha csak a panelt nyitja)
    description: PropTypes.string,
    image: PropTypes.string,
    submenus: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default HeadlessMenuItem;
