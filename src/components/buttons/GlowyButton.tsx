// src/components/GlowyButton.tsx

// Imports the React library and specific hooks/functions: useState for state management, memo for optimization.
import React, { useState, memo } from 'react';

// Defines an interface for the position state object to ensure type safety.
interface Position {
  x: number; // The x-coordinate, must be a number.
  y: number; // The y-coordinate, must be a number.
}

// Defines the component as a memoized React Functional Component (React.FC).
// memo() prevents re-rendering if its props haven't changed.
const GlowyButton: React.FC = memo(() => {
  // Initializes a state variable 'pos' with the Position type and a default value.
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });

  // Defines the event handler for the mouse move event.
  // The event 'e' is explicitly typed as a React MouseEvent on an HTMLDivElement.
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Gets the size and position of the div element relative to the viewport.
    const rect = e.currentTarget.getBoundingClientRect();
    // Updates the state with the new mouse coordinates relative to the div's top-left corner.
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Returns the JSX for the component.
  return (
    <div
      // Assigns CSS classes for styling and layout.
      className="glow-button w-60 h-60 relative top-[114px]"
      // Attaches the mouse move event handler to the div.
      onMouseMove={handleMouseMove}
      // Applies inline styles, using CSS Custom Properties to pass the state to the CSS.
      // We use 'as React.CSSProperties' to tell TypeScript these custom properties are valid.
      style={{ '--x': `${pos.x}px`, '--y': `${pos.y}px` } as React.CSSProperties}
    >
      {/* The text content of the div. */}
      Glowing Button
    </div>
  );
});

// Sets a display name for the component, which is useful for debugging in React DevTools.
GlowyButton.displayName = 'GlowyButton';

// Exports the component as the default export of this file.
export default GlowyButton;
