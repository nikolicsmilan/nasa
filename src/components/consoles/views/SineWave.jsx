function SineWave() {
  const width = 300; // SVG szélessége
  const height = 300; // SVG magassága
  const amplitude = 50; // A szinusz hullám amplitúdója
  const frequency = 1; // A szinusz hullám frekvenciája (hányszor ismétlődik a hullám)

  const generatePathData = () => {
    const xScale = width / (2 * Math.PI * frequency); // Skálázás a frekvenciához
   // const yScale = height / 2; // Skálázás a magassághoz és középre igazítás
    const yOffset = height / 2; // Y tengely középre igazítása

    let pathData = `M 0 ${yOffset - Math.sin(0) * amplitude}`; // Kezdőpont

    for (let x = 0; x <= 2 * Math.PI * frequency; x += 0.01) { // Finomabb felbontás
      //const y = yOffset - Math.sin(x) * amplitude; // f(x) kiszámítása és skálázása
      const y = yOffset - Math.sin(x + Math.PI) * amplitude;
      pathData += ` L ${x * xScale} ${y}`; // Vonal rajzolása a következő ponthoz
    }
    return pathData;
  };

  return (
    <svg width={width} height={height} className='bg-black'>
      <path d={generatePathData()} stroke="orange" strokeWidth="2" fill="#FBBF24" />
    </svg>
  );
}

export default SineWave;

