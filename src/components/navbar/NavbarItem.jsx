// src/components/navbar/NavbarItem.jsx
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types'; // PropTypes importálása
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

/**
 * Egyetlen menüpont megjelenítése a navigációs sávban.
 * @param {object} props - Komponens propok.
 * @param {object} props.item - A menüpont adatait tartalmazó objektum.
 * @param {string} props.item.title - Menüpont címe.
 * @param {string} props.item.route - Menüpont útvonala.
 * @param {Array<{title: string, route: string}>} [props.item.submenus] - Opcionális almenük.
 * @param {number} props.index - A menüpont indexe a listában.
 * @param {function(number, string): void} props.onMouseEnter - Callback egér belépésre.
 * @param {number|null} props.hoveredIndex - Az aktuálisan hoverelt elem indexe.
 * @param {React.Ref<HTMLDivElement>} ref - A továbbított ref.
 */
const NavbarItem = forwardRef(({ item, index, onMouseEnter, hoveredIndex }, ref) => {
  // Ellenőrizzük, vannak-e almenük
  const hasSubmenus = item.submenus && item.submenus.length > 0;

  return (
    // A ref-et a külső div-re helyezzük a pozíciószámításhoz
    // ref típusa itt: HTMLDivElement
    <div
      ref={ref}
      className="relative flex flex-col items-center"
      onMouseEnter={() => onMouseEnter(index, item.title)}
      // A mouseLeave-et a szülő nav elemen kezeljük
    >
      <NavLink
        to={item.route}
        // className funkció az aktív állapot stílusozásához
        className={({ isActive }) =>
          `p-1 flex items-center space-x-1 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 ${
            isActive
              ? 'text-white' // Aktív menüpont
              : 'text-primary hover:text-white' // Inaktív és hover
          }`
        }
      >
        <span>{item.title}</span>
        {/* Lenyíló ikon megjelenítése, ha vannak almenük */}
        {hasSubmenus && (
          <FaChevronDown
            className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-300 ${
              hoveredIndex === index ? 'rotate-180' : 'rotate-0'
            }`}
          />
        )}
      </NavLink>
    </div>
  );
});

// Prop típusok definiálása a komponenshez
NavbarItem.propTypes = {
  item: PropTypes.shape({ // Az 'item' egy objektum...
    title: PropTypes.string.isRequired, // ...aminek van egy kötelező 'title' stringje...
    route: PropTypes.string.isRequired, // ...egy kötelező 'route' stringje...
    submenus: PropTypes.arrayOf( // ...és egy opcionális 'submenus' tömbje...
      PropTypes.shape({           // ...ahol minden elem egy objektum...
        title: PropTypes.string.isRequired, // ...kötelező 'title' stringgel...
        route: PropTypes.string.isRequired  // ...és kötelező 'route' stringgel.
      })
    )
  }).isRequired, // Az 'item' objektum maga kötelező.
  index: PropTypes.number.isRequired, // Az 'index' egy kötelező szám.
  onMouseEnter: PropTypes.func.isRequired, // Az 'onMouseEnter' egy kötelező függvény.
  // A hoveredIndex lehet szám vagy null. A number itt általában elég az ESLintnek.
  hoveredIndex: PropTypes.number
};

// Opcionális: Adj hozzá egy displayName-t a jobb debuggolásért
NavbarItem.displayName = 'NavbarItem';

export default NavbarItem;