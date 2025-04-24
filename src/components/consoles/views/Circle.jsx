function Circle() {
  const width = 300;
  const height = 300;
  const radius = 100; // A kör sugara
  const centerX = width / 2;
  const centerY = height / 2;

  const generatePathData = () => {
    let pathData = "";

    for (let i = 0; i <= 360; i += 1) { // 0-tól 360 fokig iterálunk
      const angle = (i * Math.PI) / 180; // Fokból radiánba konvertálunk
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      if (i === 0) {
        pathData += `M ${x} ${y}`; // Kezdőpont
      } else {
        pathData += `L ${x} ${y}`; // Következő pont
      }
    }
    return pathData;
  };

  return (
    <svg width={width} height={height} className="bg-black">
      <path d={generatePathData()} stroke="orange" strokeWidth="2" fill="#FBBF24" />
    </svg>
  );
}

export default Circle;