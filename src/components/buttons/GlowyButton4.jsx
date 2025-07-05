// src/components/buttons/GlowyButton4.jsx
import { useState, useEffect, useRef, memo } from "react";

const GlowyButton4 = memo(({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const buttonElement = buttonRef.current;
    if (buttonElement) {
      buttonElement.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []); // Az üres függőségi tömb marad

  const glowStyle = {
    "--x": `${mousePosition.x}px`,
    "--y": `${mousePosition.y}px`,
  };

  return (
    <button
      ref={buttonRef}
      className="glowy-button-4 w-40 h-40 "
      style={glowStyle}
    >
      {children}
    </button>
  );
});
GlowyButton4.displayName = "GlowyButton4";
export default GlowyButton4;
