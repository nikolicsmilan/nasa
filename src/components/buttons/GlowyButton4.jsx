import React, { useState, useEffect, useRef } from 'react';


const GlowyButton4 = ({ children }) => {
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

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const glowStyle = {
    '--x': `${mousePosition.x}px`,
    '--y': `${mousePosition.y}px`,
  };

  return (
    <button ref={buttonRef} className="glowy-button-4 w-screen h-screen " style={glowStyle}>
      {children}
    </button>
  );
};

export default GlowyButton4;