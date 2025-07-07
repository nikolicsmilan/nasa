// src/components/consoles/views/GeneralCircle.tsx
// Imports the React library to use its features.
import React from 'react';

// Defines the data structure (the types) for the component's properties (props).
interface GeneralCircleProps {
  r: number;       // Declares 'r' (radius) as a number type.
  width: number;   // Declares 'width' of the parent container as a number.
  height: number;  // Declares 'height' of the parent container as a number.
  x: number;       // Declares 'x' coordinate as a number.
  y: number;       // Declares 'y' coordinate as a number.
  fill: string;    // Declares 'fill' (color or class) as a string.
}

// Defines the 'GeneralCircle' functional component with its props typed.
const GeneralCircle: React.FC<GeneralCircleProps> = ({ r, width, height, x, y, fill }) => {
  // The component returns the following JSX structure to be rendered.
  return (
    // This is an SVG 'circle' element, the core of the component.
    <circle
      // Applies the 'fill' string as a CSS class for styling (e.g., with Tailwind).
      className={fill}
      // Calculates the circle's center x-position based on props.
      cx={x * 30 + width / 2}
      // Calculates the circle's center y-position, inverting the y-axis for SVG.
      cy={height - height / 2 - y * 30}
      // Sets the circle's radius using the 'r' prop.
      r={r}
      // Sets the circle's fill color directly using the 'fill' prop.
      fill={fill}
    />
  );
};

// Exports the GeneralCircle component as the default export of this file.
export default GeneralCircle;


