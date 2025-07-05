// src/components/consoles/views/InvertedYNeon.jsx

import { memo, useMemo } from 'react'; // Import React's optimization hooks

/**
 * A static, non-interactive SVG component that displays a neon-style shape.
 * It is wrapped in React.memo to prevent re-renders caused by its parent,
 * and it uses useMemo internally to optimize the expensive generation of SVG elements.
 */
const InvertedYNeon = memo(() => { // 1. The entire component is wrapped in React.memo for external optimization.

  const canvasWidth = 300;
  const canvasHeight = 300;

  // 2. The generation of grid lines is an expensive calculation (looping and creating elements).
  // We wrap it in useMemo with an empty dependency array `[]` so this calculation
  // runs ONLY ONCE during the component's entire lifecycle. The result (the JSX) is cached.
  const gridLines = useMemo(() => (
    <g className="stroke-grid">
      {/* Horizontal grid lines */}
      {[...Array(11)].map((_, i) => (
        <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2={300} />
      ))}
      {/* Vertical grid lines */}
      {[...Array(11)].map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 30} x2={300} y2={i * 30} />
      ))}
    </g>
  ), []); // The empty array `[]` means this memoized value will never be recalculated.

  // 3. Similarly, the axis labels are also expensive to generate.
  // We use useMemo here as well for the same performance reasons.
  const axisLabels = useMemo(() => (
    <>
      {/* X-axis labels */}
      {[...Array(11)].map((_, i) => (
        <text key={`x-${i}`} x={i * 30} y="290" className="text-lg" textAnchor="middle" fill="#FFFFFF">
          {i}
        </text>
      ))}
      {/* Y-axis labels, with inverted coordinates */}
      {[...Array(11)].map((_, i) => (
        <text key={`y-${i}`} x="5" y={300 - (i * 30)} className="text-lg" textAnchor="middle" fill="#FBBF24">
          {i}
        </text>
      ))}
    </>
  ), []); // This also runs only once.

  return (
    <div className="flex justify-center items-center bg-black">
      <svg width={canvasWidth} height={canvasHeight} viewBox="0 0 300 300" className="drop-shadow-neon">
        
        {/* We now render the pre-calculated, memoized JSX elements */}
        {gridLines}
        {axisLabels}

        {/* These are static, simple elements, so they don't need to be memoized separately */}
        {/* Lines */}
        <line className="stroke-neon" x1="150" y1="150" x2="150" y2="100" />
        <line className="stroke-neon" x1="150" y1="100" x2="100" y2="50" />
        <line className="stroke-neon" x1="150" y1="100" x2="200" y2="50" />
        
        {/* Circles */}
        <circle className="fill-neon" cx="60" cy={(canvasHeight/10)*9} r="12" />
        <circle className="fill-neon" cx="150" cy="150" r="8" />
        <circle className="fill-neon" cx="100" cy="50" r="8" />
        <circle className="fill-neon" cx="200" cy="50" r="8" />
      </svg>
    </div>
  );
});

// Setting displayName for easier debugging in React DevTools
InvertedYNeon.displayName = 'InvertedYNeon';

export default InvertedYNeon;

/* Tailwind CSS classes 
<style>
.stroke-neon {
    stroke: #00FFFF;
    stroke-width: 10;
    stroke-linecap: round;
}
.fill-neon {
    fill: #00FFFF;
}
.drop-shadow-neon {
    filter: drop-shadow(0 0 10px #00FFFF);
}
</style>*/

/*
  <div className="flex justify-center items-center  bg-black">
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-neon">
             
                <line className="stroke-neon" x1="150" y1="150" x2="150" y2="100" />
                <line className="stroke-neon" x1="150" y1="100" x2="100" y2="50" />
                <line className="stroke-neon" x1="150" y1="100" x2="200" y2="50" />
                
             
                <circle className="fill-neon" cx="150" cy="100" r="12" /> 
                <circle className="fill-neon" cx="150" cy="150" r="8" /> 
                <circle className="fill-neon" cx="100" cy="50" r="8" /> 
                <circle className="fill-neon" cx="200" cy="50" r="8" /> 
            </svg>
        </div>
*/