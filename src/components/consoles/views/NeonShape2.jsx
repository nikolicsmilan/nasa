
import GeneralCircle from "./GeneralCircle";

const NeonShape2 = ({ width, height, gridSize = 30,sugar }) => {
  // Pozíció szerinti transzformáció meghatározása
  const color = "fill-neon";
 // const sugar = 2;

  return (
    
    <g>
      {/* Körök */}

      <GeneralCircle
        x={0}
        y={0}
        width={width}
        height={height}
        r={gridSize * 0.25}
        fill={color}
      />

      {/*vektor probléma */}
      <GeneralCircle
        x={Math.cos(30)*sugar}
        y={2}
        width={width}
        height={height}
        r={gridSize * 0.25}
        fill={"red"}
      />
      <GeneralCircle
        x={2}
        y={2}
        width={width}
        height={height}
        r={gridSize * 0.25}
        fill={color}
      />
      <GeneralCircle
        x={0}
        y={-2}
        width={width}
        height={height}
        r={gridSize * 0.25}
        fill={color}
      />
    </g>
  );
};

export default NeonShape2;
/*
  <circle
        cx={0 * 30 + width / 2}
        cy={height - height / 2 - 0 * 30}
        r={gridSize * 0.25}
        fill={`blue`}
      />
*/
