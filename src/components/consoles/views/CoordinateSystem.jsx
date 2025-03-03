import React from "react";
import SineWave2 from "./SineWave2";
import NeonShape2 from "./NeonShape2";
import * as math from "mathjs";
const CoordinateSystem = ({
  width = 500,
  height = 500,
  gridSize = 30,
  children,
}) => {
  const sugar = 2;
  const angle = math.unit(30, "deg");


  const centerX = width / 2;
  const centerY = height / 2;

  // Grid vonalak generálása
  const gridLines = [];
  const numLinesX = Math.floor(width / gridSize);
  const numLinesY = Math.floor(height / gridSize);

  for (
    let i = -Math.floor(numLinesX / 2);
    i <= Math.floor(numLinesX / 2);
    i++
  ) {
    gridLines.push(
      <line
        key={`v-${i}`}
        x1={centerX + i * gridSize}
        y1={0}
        x2={centerX + i * gridSize}
        y2={height}
        stroke="#ddd"
        strokeWidth="0.5"
      />
    );

    gridLines.push(
      <line
        key={`h-${i}`}
        x1={0}
        y1={centerY + i * gridSize}
        x2={width}
        y2={centerY + i * gridSize}
        stroke="#ddd"
        strokeWidth="0.5"
      />
    );
  }

  // Tengelyek címkéinek generálása
  const axisLabels = [];
  for (
    let i = -Math.floor(numLinesX / 2);
    i <= Math.floor(numLinesX / 2);
    i++
  ) {
    if (i !== 0) {
      axisLabels.push(
        <text
          key={`x-${i}`}
          x={centerX + i * gridSize}
          y={centerY + 20}
          textAnchor="middle"
          fontSize="12"
          fill="orange"
        >
          {i}
        </text>
      );

      axisLabels.push(
        <text
          key={`y-${i}`}
          x={centerX + 20}
          y={centerY - i * gridSize}
          textAnchor="start"
          fontSize="12"
          fill="orange"
        >
          {i}
        </text>
      );
    }
  }

  return (
    <div className="w-full mx-auto">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className=""
      >
        {/* Rácsvonalak */}
        {gridLines}

        {/* X és Y tengelyek */}
        <line
          x1={0}
          y1={centerY}
          x2={width}
          y2={centerY}
          stroke="orange"
          strokeWidth="2"
        />
        <line
          x1={centerX}
          y1={0}
          x2={centerX}
          y2={height}
          stroke="orange"
          strokeWidth="2"
        />

        {/* Tengelyek címkéi */}
        {axisLabels}

        {/* Origó címke */}
        <text x={centerX - 20} y={centerY + 20} fontSize="12" fill="orange">
          0
        </text>

        {/* Transzformált koordináta rendszer a children számára */}

        <NeonShape2
          gridSize={30}
          position={1}
          color="orange"
          width={width}
          height={height}
          sugar={sugar}
        />
        {/* Bal felső */}
      </svg>
      A: 0,0 ; B:{math.cos(angle) * sugar}
    </div>
  );
};

export default CoordinateSystem;

/*
   <g transform={`translate(${centerX}, ${centerY}) scale(1, -1)`}>
          <SineWave2
            gridSize={30}
            amplitude={1.5}
            frequency={2} // Kétszer annyi hullám ugyanazon a távon
            color="orange"
            strokeWidth={2}
          />
        </g>
*/

/*
      <NeonShape2 
        gridSize={30} 
        position={2} 
        color="orange"
      />
    
      <NeonShape2 
        gridSize={30} 
        position={3} 
        color="orange"
      />
      
      <NeonShape2 
        gridSize={30} 
        position={4} 
        color="orange"
      />
*/
