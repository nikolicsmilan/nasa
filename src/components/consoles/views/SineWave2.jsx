const SineWave2 = ({ 
  gridSize = 30,
  amplitude = 1,
  frequency = 1,
  color = "orange",
  strokeWidth = 2,
  fill = "none",
  startX // Ha nincs megadva, akkor a teljes szélességben rajzol
}) => {
  const generatePathData = () => {
    // Kiszámoljuk, hogy hány egységnyi hely van az x tengelyen
    const unitsX = Math.floor((500 / gridSize) / 2); // 500 a teljes szélesség
    
    // Kezdőpont meghatározása
    const start = startX !== undefined ? startX : -unitsX;
    const end = unitsX;
    
    let pathData = `M ${start * gridSize} 0`; // Kezdőpont

    // A teljes szélességben rajzoljuk
    for (let x = start; x <= end; x += 0.1) {
      const xPos = x * gridSize;
      const yPos = Math.sin(x * frequency) * amplitude * gridSize;
      pathData += ` L ${xPos} ${yPos}`;
    }
    return pathData;
  };

  return (
    <path
      d={generatePathData()}
      stroke={color}
      strokeWidth={strokeWidth}
      fill={fill}
    />
  );
};

export default SineWave2;