// src/components/navbar/NavbarItem.jsx
import  { forwardRef } from 'react';        // React és forwardRef importálása a ref továbbításhoz.
import PropTypes from 'prop-types';             // PropTypes importálása a propok típusellenőrzéséhez.
import { NavLink } from 'react-router-dom';     // NavLink a navigációhoz és az aktív állapot jelzéséhez.
import { FaChevronDown } from 'react-icons/fa'; // Lenyíló nyíl ikon importálása.

/**
 * Egyetlen menüpontot megjelenítő komponens a navigációs sávban.
 * Továbbítja a ref-et és kezeli az egér belépési eseményt.
 * @param {object} props - Komponens propok.
 * @param {object} props.item - A menüpont adatait tartalmazó objektum.
 * @param {string} props.item.title - Menüpont címe.
 * @param {string} props.item.route - Menüpont útvonala.
 * @param {Array<{title: string, route: string}>} [props.item.submenus] - Opcionális almenük tömbje.
 * @param {number} props.index - A menüpont sorszáma (indexe) a listában.
 * @param {function(number, string, HTMLElement): void} props.onMouseEnter - Callback függvény, ami meghívódik, ha az egér a komponens fölé ér. Átadja az indexet, a címet és a DOM elemet.
 * @param {number|null} props.hoveredIndex - Az aktuálisan hoverelt menüpont indexe (null, ha nincs).
 * @param {React.Ref<HTMLDivElement>} ref - A szülőtől kapott ref, amit a fő div elemre kell helyezni.
 */
// forwardRef használata: lehetővé teszi, hogy a szülő komponens (HoverNavbar) ref-et adjon ennek a komponensnek.
const NavbarItem = forwardRef(({ item, index, onMouseEnter, hoveredIndex }, ref) => {
  // Konstansban tároljuk, hogy az aktuális menüpontnak vannak-e almenüi.
  const hasSubmenus = item.submenus && item.submenus.length > 0;

  return (
    // A legkülső div elem kapja meg a ref-et, hogy a szülő le tudja kérdezni a pozícióját.
    <div
      ref={ref} // A kapott ref hozzárendelése ehhez a DOM elemhez.
      className="relative flex flex-col items-center border-0" // Alapvető stílusok: relatív pozíció, flexbox oszlop, középre igazítás.
      // Egér belépési esemény figyelése: meghívja a szülőtől kapott onMouseEnter függvényt.
      onMouseEnter={() => onMouseEnter(index, item.title, ref.current)} // Átadjuk az indexet, címet és a konkrét DOM elemet.
    >
      {/* NavLink a React Router navigációhoz. Kezeli az aktív útvonal stílusozását is. */}
      <NavLink
        to={item.route} // A link cél útvonala.
        // A className egy függvény, amely megkapja az `isActive` állapotot.
        className={({ isActive }) =>
          // Template literal a class nevek dinamikus összefűzéséhez.
          `p-1 flex items-center space-x-1 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 ${ // Alap stílusok: padding, flex, térköz, betűméret, betűvastagság, átmenet.
            isActive
              ? 'text-white' // Ha az útvonal aktív, a szöveg fehér.
              : 'text-primary hover:text-white' // Ha inaktív, a szöveg 'primary', hoverre fehér.
          }`
        }
      >
        <span>{item.title}</span> {/* A menüpont szövegének megjelenítése. */}
        {/* A lenyíló ikon feltételes megjelenítése: csak akkor, ha vannak almenük. */}
        {hasSubmenus && (
          <FaChevronDown
            // Az ikon stílusai, beleértve a dinamikus forgatást hover esetén.
            className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-300 ${ // Méret, margó, alap transzformáció, átmenet.
              hoveredIndex === index ? 'rotate-180' : 'rotate-0' // Ha ez a menüpont hoverelve van, forogjon 180 fokot.
            }`}
          />
        )}
      </NavLink>
    </div>
  );
});

// Prop típusok definiálása a fejlesztést segítő ellenőrzésekhez és a dokumentációhoz.
NavbarItem.propTypes = {
  item: PropTypes.shape({                      // Az 'item' prop egy objektum kell, hogy legyen.
    title: PropTypes.string.isRequired,        // Az objektumon belül a 'title' egy kötelező string.
    route: PropTypes.string.isRequired,        // A 'route' egy kötelező string.
    submenus: PropTypes.arrayOf(               // A 'submenus' egy opcionális tömb.
      PropTypes.shape({                        // A tömb elemei objektumok.
        title: PropTypes.string.isRequired,    // Amelyeknek van kötelező 'title' stringjük.
        route: PropTypes.string.isRequired     // És kötelező 'route' stringjük.
      })
    ) // A 'submenus' tömb nem kötelező.
  }).isRequired,                                // Az 'item' objektum megadása kötelező.
  index: PropTypes.number.isRequired,          // Az 'index' kötelező szám.
  onMouseEnter: PropTypes.func.isRequired,     // Az 'onMouseEnter' kötelező függvény.
  hoveredIndex: PropTypes.number               // A 'hoveredIndex' egy szám (vagy null, amit a .number implicit kezel).
};

// Komponens nevének beállítása a React DevTools és hibaüzenetek számára.
NavbarItem.displayName = 'NavbarItem';

// Az alapértelmezett export a komponens.
export default NavbarItem;