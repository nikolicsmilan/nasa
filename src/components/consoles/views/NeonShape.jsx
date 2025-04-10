

const NeonShape = ({ 
  gridSize = 30,
  position = 1, // 1: jobb felső, 2: bal felső, 3: bal alsó, 4: jobb alsó
  color = "orange"
}) => {
  // Pozíció szerinti transzformáció meghatározása
  const getTransform = () => {
    switch(position) {
      case 1: // jobb felső
        return "";
      case 2: // bal felső
        return "scale(-1, 1)";
      case 3: // bal alsó
        return "scale(-1, -1)";
      case 4: // jobb alsó
        return "scale(1, -1)";
      default:
        return "";
    }
  };

  return (
    <g transform={getTransform()}>
      {/* Vonalak */}
      <line 
        x1={0} 
        y1={0} 
        x2={0} 
        y2={gridSize * 1.5} 
        stroke={color} 
        strokeWidth="2"
      />
      <line 
        x1={0} 
        y1={gridSize * 1.5} 
        x2={gridSize * -1.5} 
        y2={gridSize * 3} 
        stroke={color} 
        strokeWidth="2"
      />
      <line 
        x1={0} 
        y1={gridSize * 1.5} 
        x2={gridSize * 1.5} 
        y2={gridSize * 3} 
        stroke={color} 
        strokeWidth="2"
      />
      
      {/* Körök */}
      <circle 
        cx={0} 
        cy={0} 
        r={gridSize * 0.25} 
        fill={color}
      />
      <circle 
        cx={gridSize * -1.5} 
        cy={gridSize * 3} 
        r={gridSize * 0.25} 
        fill={color}
      />
      <circle 
        cx={gridSize * 1.5} 
        cy={gridSize * 3} 
        r={gridSize * 0.25} 
        fill={color}
      />
      <circle 
        cx={gridSize * -3} 
        cy={gridSize * 0.5} 
        r={gridSize * 0.4} 
        fill={color}
      />
    </g>
  );
};

export default NeonShape;