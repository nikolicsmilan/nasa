// src/components/buttons/GlowyButton3.jsx
import { useState, useEffect, useRef, memo } from 'react';

// A props objektumot kapja, amiből destrukturáljuk a 'children'-t
const GlowyButton3 = memo(({ children }) => { 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    // FONTOS: Az event listenert a gombra tegyük rá, ne a `window`-ra,
    // hogy ne fusson feleslegesen, amikor az egér máshol mozog!
    const buttonElement = buttonRef.current;
    if (buttonElement) {
      buttonElement.addEventListener('mousemove', updateMousePosition);
    }
    
    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener('mousemove', updateMousePosition);
      }
    };
  }, []); // Az üres függőségi tömb marad

  const glowStyle = {
    '--x': `${mousePosition.x}px`,
    '--y': `${mousePosition.y}px`,
  };

  return (
    // A handleMouseMove-t már a useEffect kezeli, innen kivehetjük.
    <button ref={buttonRef} className="glowy-button-3 w-60 h-60" style={glowStyle}>
      {children} 
    </button>
  );
});

GlowyButton3.displayName = 'GlowyButton3';
export default GlowyButton3;