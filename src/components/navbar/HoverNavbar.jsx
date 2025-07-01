// src/components/navbar/HoverNavbar.jsx
import { useState, useRef, useEffect } from 'react';         // Import React and core hooks.
import { motion, AnimatePresence } from 'framer-motion';          // Import Framer Motion for animations.
import { useHoverMenuContext } from '../../context/HoverMenuContext'; // Import our custom context hook.
import { navigationData } from '../../locales/navigationData';      // Import the file containing menu item data.
import HoverDropdownPanel from './HoverDropdownPanel';              // Import the dropdown panel component.
import NavbarItem from './NavbarItem';                              // Import the component that renders individual menu items.

/**
 * The main navigation bar. It handles hover states, the underline animation,
 * and the dynamic positioning/visibility of the dropdown panel using getBoundingClientRect
 * and offsetLeft/offsetWidth (this version might still need refinement).
 * @param {object} props - Has no specific props, works from context and locales.
 */
const HoverNavbar = () => {
  // Get the necessary state setters from the context.
  const { setHoveredItemTitle, setHoveredItemPosition, setIsPanelVisible, isPanelVisible } = useHoverMenuContext();
  // Local state: to store the index of the hovered menu item.
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Local state: for the properties of the underline animation (width, x position).
  const [underlineProps, setUnderlineProps] = useState({ width: 0, x: 0 });
  // The calculated 'left' position of the dropdown panel is now stored in the CONTEXT's hoveredItemPosition.
  // const [panelLeftOffset, setPanelLeftOffset] = useState(0); // No longer needed here.

  // An array of refs: to store references to the menu item DOM elements.
  const menuRefs = useRef([]);
  // Ref: for the main <nav> element (for positioning reference).
  const navRef = useRef(null);
  // Ref: to delay closing the panel (timeout ID).
  const closeTimeoutRef = useRef(null);
  // Ref: to delay opening the panel (timeout ID).
  const openTimeoutRef = useRef(null);

  // This effect ensures the size of the menuRefs array matches the number of menu items.
  // It only runs once when the component mounts, as navigationData is a static import.
  useEffect(() => {
    menuRefs.current = menuRefs.current.slice(0, navigationData.length); // Adjusts the size of the ref array.
    // We disable the lint rule here because navigationData is a static import from outside the component's scope.
    // It will not change during the component's lifecycle, so we only need this effect to run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handles the mouse entering a menu item. Calculates the position of the underline
   * and the panel using getBoundingClientRect and offsetLeft/offsetWidth.
   * @param {number} index - The index of the hovered element.
   * @param {string} itemTitle - The title of the hovered element.
   */
  const handleMouseEnter = (index, itemTitle) => {
    const element = menuRefs.current[index]; // Get the ref of the hovered element.
    const navElement = navRef.current;       // Get the ref of the nav element.

    // Clear any potentially running timers.
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);

    setHoveredIndex(index);         // Set the hovered index.
    setHoveredItemTitle(itemTitle); // Set the hovered title (in context).

    // Only perform calculations if both element refs exist.
    if (element && navElement) {
      const itemRect = element.getBoundingClientRect(); // Element's position/size relative to the viewport.
      const navRect = navElement.getBoundingClientRect(); // Nav's position/size relative to the viewport.

      // === CALCULATE UNDERLINE POSITION ===
      // The X position should be relative to the nav element.
      const underlineX = itemRect.left - navRect.left;
      console.log('HoverNavbar: Underline Props Calc:', { width: itemRect.width, x: underlineX }); // <<< DEBUG
      setUnderlineProps({
        width: itemRect.width, // Width = element's width relative to the viewport.
        x: underlineX,         // X position = element's left edge - nav's left edge (relative to nav).
      });
      // =================================

      // === DELAYED SETTING OF PANEL POSITION AND VISIBILITY ===
      openTimeoutRef.current = setTimeout(() => {
        // Position data relative to the viewport (based on getBoundingClientRect).
        const positionData = {
            top: itemRect.bottom,           // Panel top = element bottom (viewport).
            left: itemRect.left,            // Element left edge (viewport).
            itemWidth: itemRect.width,      // Element width (viewport).
        };
        console.log('HoverNavbar: Open Timeout - Setting Panel Visible for:', itemTitle, 'Pos:', positionData); // <<< DEBUG
        setHoveredItemPosition(positionData); // Set position in the context.
        setIsPanelVisible(true);              // Set visibility in the context.
       }, 50); // 50ms delay.
      // =========================================================

    } else { // Error log if a ref is not available.
       console.error('HoverNavbar: Could not get ref for nav item or nav container');
    }
  };

  /**
   * Handles the mouse leaving the entire navigation bar.
   */
  const handleMouseLeave = () => {
     if (openTimeoutRef.current) { // If it's about to open, cancel it.
        clearTimeout(openTimeoutRef.current);
      }
    // Hide the panel and clear the hover state with a delay.
    closeTimeoutRef.current = setTimeout(() => {
      console.log('HoverNavbar: Close Timeout - Hiding Panel'); // <<< DEBUG
      setHoveredIndex(null);         // Clear hover index.
      setHoveredItemTitle(null);     // Clear hover title (in context).
      setIsPanelVisible(false);      // Hide panel (in context).
      setUnderlineProps((prev) => ({ width: 0, x: prev.x })); // Hide the underline.
    }, 150); // 150ms delay.
  };

   /**
    * Handles the mouse entering the dropdown panel (to keep it open).
    */
   const handlePanelMouseEnter = () => {
    console.log('HoverNavbar: Panel Mouse Enter - Clearing close timer'); // <<< DEBUG
    if (closeTimeoutRef.current) { // If it's about to close...
      clearTimeout(closeTimeoutRef.current); // ...cancel the timer.
    }
    setIsPanelVisible(true); // Ensure it's visible.
 };

  return (
    // The main <nav> element.
    <nav
      ref={navRef} // Assign the ref.
      // Styles: relative (for child absolute), w-full, flex alignments, height.
      className="relative w-full flex items-center justify-center h-full"
      onMouseLeave={handleMouseLeave} // Listen for mouse leave.
    >
      {/* Menu items container. Relative position is important for the underline. */}
      <div className="flex gap-6 relative"> {/* Flexbox, gap, relative. */}
        {navigationData.map((item, index) => ( // Loop through the menu items.
          <NavbarItem // Render a NavbarItem for each item.
            key={item.title} // Key.
            ref={el => menuRefs.current[index] = el} // Assign the ref.
            item={item} // Pass the data.
            index={index} // Pass the index.
            onMouseEnter={handleMouseEnter} // Pass the hover handler.
            hoveredIndex={hoveredIndex}     // Pass the current hover index.
          />
        ))}
        {/* Underline/slider. */}
        <motion.div
          className="absolute bottom-[-5px] h-[2px] bg-white rounded-full" // Position and style.
          initial={{ width: 0 }} // Initially zero width.
          animate={{ // Animate based on state.
            width: underlineProps.width, // Dynamic width (itemRect.width).
            x: underlineProps.x,         // Dynamic x position (itemRect.left - navRect.left).
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }} // Animation type.
        />
      </div>

      
      {/* Animated appearance/disappearance of the dropdown panel. */}
      <AnimatePresence>
         {/* Wrapper div to handle panel hover. */}
         <div onMouseEnter={handlePanelMouseEnter}>
           {/* The panel no longer receives props for position; it reads from the context. */}
           <HoverDropdownPanel />
         </div>
      </AnimatePresence>

       {/* === DISPLAY DEBUG TEXT === */}
      {/* Absolute positioning so it doesn't affect the layout */}
      {/* Can be in the bottom left corner, or wherever is convenient */}
      <div className="absolute bottom-1 left-1 z-[99] bg-black/50 text-white text-xs p-1 rounded pointer-events-none">
        <p>Underline X: {underlineProps.x.toFixed(2)}</p>
        <p>Underline W: {underlineProps.width.toFixed(2)}</p>
        {/* The panel's position should be read from context, but if it were in HoverNavbar's state: */}
        {/* <p>Panel Left Target: {panelLeftOffset.toFixed(2)}</p> */}
        {/* Reading the panel's position from context: */}
        {/* <p>Panel Pos Left (vp): {hoveredItemPosition.left.toFixed(2)}</p> */}
        {/* <p>Panel Pos Width (vp): {hoveredItemPosition.itemWidth.toFixed(2)}</p> */}
        {/* <p>Panel Pos Top (vp): {hoveredItemPosition.top.toFixed(2)}</p> */}
        <p>Hover Index: {hoveredIndex}</p>
        <p>Panel Visible: {isPanelVisible ? 'Yes' : 'No'}</p> {/* isPanelVisible comes from context */}
      </div>
    </nav>
  );
};

export default HoverNavbar; 