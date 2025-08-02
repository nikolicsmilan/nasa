// src/components/buttons/GlowyButton3.tsx

// Imports React and necessary hooks, plus the ReactNode type for children props.
import React, { useState, useEffect, useRef, memo, ReactNode } from 'react';

// Defines an interface for the component's props.
interface GlowyButton3Props {
  // 'children' can be any valid React node (text, elements, etc.).
  children: ReactNode;
}

// Defines an interface for the mouse position state object for type safety.
interface Position {
  x: number; // The x-coordinate must be a number.
  y: number; // The y-coordinate must be a number.
}

// Defines the component as a memoized React Functional Component, typed with its props.
const GlowyButton3: React.FC<GlowyButton3Props> = memo(({ children }) => { 
  // Initializes the state for the mouse position, typed with the Position interface.
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  
  // Creates a ref. The generic type <HTMLButtonElement | null> specifies that this ref
  // can either hold a button element or be null (its initial value).
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // This effect hook handles adding and cleaning up the mousemove event listener.
  useEffect(() => {
    // Defines the function to be called on mouse move.
    // 'e' is typed as the native DOM MouseEvent, not React's synthetic one,
    // because we are using the native `addEventListener`.
    const updateMousePosition = (e: MouseEvent) => {
      // The type guard ensures that buttonRef.current is not null.
      if (!buttonRef.current) return;
      // Gets the element's position and size.
      const rect = buttonRef.current.getBoundingClientRect();
      // Updates the state with the mouse coordinates relative to the element.
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    // Stores the current value of the ref in a variable.
    // This is important for the cleanup function to work correctly.
    const buttonElement = buttonRef.current;
    
    // Attaches the event listener only if the button element exists.
    if (buttonElement) {
      buttonElement.addEventListener('mousemove', updateMousePosition);
    }
    
    // The cleanup function, which runs when the component unmounts.
    return () => {
      // Removes the event listener from the same element to prevent memory leaks.
      if (buttonElement) {
        buttonElement.removeEventListener('mousemove', updateMousePosition);
      }
    };
  }, []); // The empty dependency array means this effect runs only once, on mount.

  // Creates the style object. We use a type assertion to allow CSS custom properties.
  const glowStyle = {
    '--x': `${mousePosition.x}px`,
    '--y': `${mousePosition.y}px`,
  } as React.CSSProperties;

  return (
    // The ref is attached to the button element, linking buttonRef to this DOM node.
    <button ref={buttonRef} className="glowy-button-3 w-60 h-60" style={glowStyle}>
      {/* Renders the children passed into the component. */}
      {children} 
    </button>
  );
});

// Sets a display name for easier debugging in React DevTools.
GlowyButton3.displayName = 'GlowyButton3';

// Exports the component as the default export.
export default GlowyButton3;