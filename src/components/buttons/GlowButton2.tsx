// src/components/GlowyButton2.tsx

// Imports the React library and specific hooks/functions: useState for state management, memo for optimization.
import React, { useState, memo } from 'react';

// Defines an interface for the position state object to ensure type safety.
interface Position {
  x: number; // The x-coordinate, must be a number.
  y: number; // The y-coordinate, must be a number.
}

// Defines the component as a memoized React Functional Component (React.FC).
// memo() prevents re-rendering if its props haven't changed.
const GlowyButton2: React.FC = memo(() => {
  // Initializes a state variable 'pos' with the Position type and a default value.
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });

  // Defines the event handler for the mouse move event.
  // The event 'e' is explicitly typed as a React MouseEvent on an HTMLButtonElement.
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Gets the size and position of the button element relative to the viewport.
    const rect = e.currentTarget.getBoundingClientRect();
    // Updates the state with the new mouse coordinates relative to the button's top-left corner.
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Returns the JSX for the component.
  return (
    <button
      // Assigns CSS classes for styling.
      className="glow-button2 w-60 h-60"
      // Attaches the mouse move event handler.
      onMouseMove={handleMouseMove}
      // Applies inline styles, using CSS Custom Properties to pass the state to the CSS.
      // We use 'as React.CSSProperties' to tell TypeScript these custom properties are valid.
      style={{ '--x': `${pos.x}px`, '--y': `${pos.y}px` } as React.CSSProperties}
    >
      {/* The text content of the button. */}
      Glowing Button 2
    </button>
  );
});

// Sets a display name for the component, which is useful for debugging in React DevTools.
GlowyButton2.displayName = 'GlowyButton2';

// Exports the component as the default export of this file.
export default GlowyButton2;