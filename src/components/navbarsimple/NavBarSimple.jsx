import { useState, useRef } from "react";
import { navigationData } from "../../locales/navigationData";
import NavBarSimpleItem from "./NavBarSimpleItem";
import { motion } from "framer-motion"; // Framer Motion az aláhúzáshoz
import NavBarSimplePanel from "./NavBarSimplePanel";
const menuItems = [
  {
    id: 1,
    label: "Laptopok",
    submenu: ["Dell", "HP", "Lenovo"],
  },
  {
    id: 2,
    label: "Telefonok",
    submenu: ["iPhone", "Samsung", "OnePlus"],
  },
  {
    id: 3,
    label: "TV-k",
    submenu: ["Samsung", "LG", "Sony"],
  },
];

export default function NavBarSimple() {
  const [hoveredItem, setHoveredItem] = useState(menuItems[0]); // alapértelmezett
  const itemRefs = useRef([]);
  const closeTimeoutRef = useRef(null);
  const [underlineProps, setUnderlineProps] = useState({
    width: 0,
    x: 0,
    opacity: 0,
  });

  const handleMouseEnter = (element) => {
    console.log("handleMouseEnter start");
    if (closeTimeoutRef.current) {
      // Ha van bezárási időzítő...
      console.log("handleMouseEnter   if (closeTimeoutRef.current)");
      clearTimeout(closeTimeoutRef.current); // ...töröljük.
    }
    console.log("ellement: ", element);

    if (element) {
      // const navPaddingLeft = parseFloat(window.getComputedStyle(navElement).paddingLeft) || 0;
      setUnderlineProps({
        width: element.offsetWidth, // Szélesség = gomb szélessége
        x: element.offsetLeft, // X = gomb offsetLeft-je (a nav elemen belül)
        opacity: 1, // Láthatóvá tesszük
      });
      setHoveredItem(true);
    }
  };

  const handleMouseLeave = () => {
    // Késleltetett bezárás indítása
    closeTimeoutRef.current = setTimeout(() => {
      //setActiveItemTitle(null); // Töröljük az aktív elemet
      setUnderlineProps((prev) => ({ ...prev, opacity: 0, width: 0 })); // Aláhúzás eltüntetése
      setHoveredItem(null);
    }, 1000); // 150ms késleltetés
  };

  const handlePanelMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };
  return (
    <div onMouseLeave={handleMouseLeave} className="relative flex border-0">
      {/* Fő menüpontok */}
      <nav className="relative w-full flex items-center  h-full border-0 border-red-400">
        <div className="flex gap-6 relative border-0">
          {navigationData.map((item, index) => (
            <NavBarSimpleItem
              key={item.title} // Kulcs
              item={item} // Adatok átadása
              index={index} // Index átadása
              itemRefs={itemRefs}
              handleMouseEnter={handleMouseEnter}
            />
          ))}
        </div>
        <motion.div
          className="border-0 absolute bottom-[-5px] h-[2px] bg-white rounded-full pointer-events-none" // pointer-events-none, hogy ne zavarja a hovert
          initial={{ width: 0, opacity: 0 }} // Kezdetben nulla széles és láthatatlan
          animate={{
            // Animáció a kontextusban lévő state alapján
            width: underlineProps.width, // Dinamikus szélesség
            x: underlineProps.x, // Dinamikus x pozíció
            opacity: underlineProps.opacity, // Dinamikus láthatóság
          }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }} // Animáció típusa
        />
      </nav>

      {/* Dinamikus lenyíló panel */}

      <div onMouseEnter={handlePanelMouseEnter}>
        {hoveredItem ? <NavBarSimplePanel /> : null}
      </div>
    </div>
  );
}

/*
     <div className="absolute top-[200px] border-2 border-lime-400">
        <p> underlineProps.width: {underlineProps && underlineProps.width}</p>
        <p> underlineProps.x: {underlineProps && underlineProps.x}</p>
        <p>
          {" "}
          underlineProps.opacity: {underlineProps && underlineProps.opacity}
        </p>     
        </div>
*/
