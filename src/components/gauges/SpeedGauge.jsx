// src/components/misc/SpeedGauge.jsx
import { useState, useEffect } from 'react'; // useEffect és useState kell
import PropTypes from 'prop-types';
import { getComputedStyleColor } from '../../utils/getComputedStyleColor'; // Importáljuk a segédfüggvényt
import { MyDataContext } from '../../context/DataContext'; // Szükség lesz a choosenStyle-ra a dependency miatt

const SpeedGauge = ({
  speed = 0,
  maxSpeed = 1700,
  size = 250,
  numSegments = 60,
  segmentThickness = 12,
  segmentWidth = 4,
  // Nem kell szín propokat fogadni, ha a hookot használjuk
}) => {
  const { choosenStyle } = MyDataContext(); // Lekérdezzük a téma nevét a dependency array-hez
  const [dynamicColors, setDynamicColors] = useState({
    primary: '#22d3ee', // Fallback
    dim: 'rgba(34, 211, 238, 0.15)',
    background: 'rgba(34, 211, 238, 0.05)',
  });

  // useEffect a szín dinamikus lekérdezésére a téma változásakor
  useEffect(() => {
    const primary = getComputedStyleColor("theme-color-ref"); // Kiolvassuk a primary színt
    const dim = `rgba(${hexToRgb(primary)}, 0.15)`; // Származtatjuk a dim színt
    const background = `rgba(${hexToRgb(primary)}, 0.05)`; // Származtatjuk a background színt

    setDynamicColors({ primary, dim, background });

  }, [choosenStyle]); // Újraszámoljuk a színeket, ha a 'choosenStyle' változik

  // Most a state-ből használjuk a színeket
  const primaryColor = dynamicColors.primary;
  const dimColor = dynamicColors.dim;
  const backgroundColor = dynamicColors.background;

  const radius = size / 2;
  const center = radius;

  const currentSpeed = Math.max(0, Math.min(speed, maxSpeed));
  const litSegments = Math.round((currentSpeed / maxSpeed) * numSegments);

  const segments = [];
  for (let i = 0; i < numSegments; i++) {
    const angle = (i / numSegments) * 360;
    const isLit = i < litSegments;

    const strokeColor = isLit ? primaryColor : dimColor;
    const currentStrokeWidth = isLit ? segmentWidth + 1 : segmentWidth;
    const glowFilter = isLit ? `drop-shadow(0 0 3px ${primaryColor})` : 'none';

    const x1 = center;
    const y1 = center - radius + 2;
    const x2 = center;
    const y2 = center - radius + segmentThickness + 2;

    segments.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={strokeColor}
        strokeWidth={currentStrokeWidth}
        strokeLinecap="round"
        transform={`rotate(${angle}, ${center}, ${center})`}
        style={{
          transition: 'stroke 0.3s ease-out',
          filter: glowFilter,
        }}
      />
    );
  }

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={radius - segmentThickness / 2 - 2}
          fill="none"
          stroke={backgroundColor}
          strokeWidth="1"
        />
        {segments}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dy=".35em"
          fill={primaryColor} // Használja a state-ből jövő színt
          className="font-mono font-bold"
          style={{
            fontSize: `${Math.max(16, size * 0.15)}px`,
            filter: `drop-shadow(0 0 5px ${primaryColor})` // Használja a state-ből jövő színt
          }}
        >
          {Math.round(currentSpeed)}
        </text>
        <text
          x={center}
          y={center + size * 0.15}
          textAnchor="middle"
          dy=".35em"
          fill={primaryColor} // Használja a state-ből jövő színt
          fillOpacity={0.7}
          className="font-mono"
          style={{ fontSize: `${Math.max(8, size * 0.06)}px` }}
        >
          km/s
        </text>
      </svg>
    </div>
  );
};

// Egyszerű segédfüggvény a HEX -> RGB konverzióhoz (nagyon alap)
function hexToRgb(hex) {
  if (!hex || typeof hex !== 'string') return '34, 211, 238'; // Fallback, ha nincs vagy nem string
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  // Ha HEX, konvertál
  if (result) {
      return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
  // Ha RGB(A) formátumú
  const rgbMatch = hex.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
      return `${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}`;
  }
  // Ha egyik sem, fallback
  return '34, 211, 238';
}


SpeedGauge.propTypes = {
  speed: PropTypes.number,
  maxSpeed: PropTypes.number,
  size: PropTypes.number,
  numSegments: PropTypes.number,
  segmentThickness: PropTypes.number,
  segmentWidth: PropTypes.number,
  // Nem kell szín prop validálás
};

export default SpeedGauge;