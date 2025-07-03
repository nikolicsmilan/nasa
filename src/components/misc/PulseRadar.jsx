// src/misc/PulseRadar.jsx
import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getComputedStyleColor } from '../utils/getComputedStyleColor'; // Feltételezve, hogy ez a utils mappában van
import { MyDataContext } from '../context/DataContext'; // Szükség lehet a témaváltás figyelésére

// Segédfüggvény (ugyanaz, mint a SpeedGauge-ban, vagy importálható közös helyről)
/*function hexToRgb(hex) {
    if (!hex || typeof hex !== 'string') return '34, 211, 238';
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
    }
    const rgbMatch = hex.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
        return `${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}`;
    }
    return '34, 211, 238'; // Fallback
}*/


const PulseRadar = ({
  value = 0, // Aktuális érték (pl. észlelt objektumok száma, veszély szintje)
  maxValue = 100, // Maximális érték
  size = 250, // Teljes méret
  numRings = 5, // Hány koncentrikus kör legyen
  maxStrokeWidth = 4, // A legbelső/legaktívabb kör vastagsága
  baseOpacity = 0.1, // A legkülső/legkevésbé aktív kör átlátszósága
  // Színek lekérdezése, mint a SpeedGauge-nál
}) => {
  const { choosenStyle } = MyDataContext(); // Téma figyeléséhez
  const [primaryColor, setPrimaryColor] = useState('#22d3ee'); // State a színnek

  useEffect(() => {
    const color = getComputedStyleColor("theme-color-ref");
    setPrimaryColor(color || '#22d3ee'); // Frissítjük a state-et
  }, [choosenStyle]); // Csak akkor, ha a téma változik

  const center = size / 2;
  const maxRadius = size / 2 - maxStrokeWidth; // A legkülső kör sugara

  // Biztosítjuk, hogy az érték a 0 és maxValue között legyen
  const currentValue = Math.max(0, Math.min(value, maxValue));
  // Normalizált érték 0 és 1 között
  const normalizedValue = maxValue > 0 ? currentValue / maxValue : 0;

  const rings = [];
  for (let i = 0; i < numRings; i++) {
    // A sugár a legkülsőtől (i=0) a legbelsőig (i=numRings-1) csökken
    const radius = maxRadius * (1 - i / numRings);
    // Az átlátszóság a legkülsőtől (baseOpacity) nő a legbelső felé (1)
    // A stroke vastagsága is nőhet
   // const targetOpacity = baseOpacity + (1 - baseOpacity) * normalizedValue;
    //const targetStrokeWidth = 1 + (maxStrokeWidth - 1) * normalizedValue;

    // Az adott kör akkor "aktívabb", ha az i/numRings kisebb, mint a normalizált érték
    // vagy használhatunk egyenletesebb eloszlást is
    const activityLevel = Math.max(0, Math.min(1, (normalizedValue * numRings - i)));

    const opacity = baseOpacity + (1 - baseOpacity) * activityLevel;
    const strokeWidth = 1 + (maxStrokeWidth - 1) * activityLevel;
    // A glow erőssége is függhet az aktivitástól
    const glowIntensity = Math.round(activityLevel * 5); // 0-tól 5px-ig terjedő glow

    rings.push(
      <circle
        key={i}
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={primaryColor} // Használja a state-ből jövő színt
        strokeWidth={strokeWidth}
        strokeOpacity={opacity}
        style={{
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Finomabb átmenet
          filter: glowIntensity > 0 ? `drop-shadow(0 0 ${glowIntensity}px ${primaryColor})` : 'none' // Glow effekt
        }}
        // Opcionális pulzáló animáció CSS-sel vagy Framer Motionnel
        // className={activityLevel > 0.5 ? 'animate-pulse-radar' : ''}
      />
    );
  }

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {rings}
        {/* Középre lehetne tenni egy ikont vagy a pontos értéket */}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dy=".35em"
          fill={primaryColor} // Használja a state-ből jövő színt
          className="font-mono font-bold"
          style={{
            fontSize: `${Math.max(16, size * 0.12)}px`, // Kicsit kisebb, mint a SpeedGauge-nál
            filter: `drop-shadow(0 0 5px ${primaryColor})`
           }}
        >
          {Math.round(currentValue)}
        </text>
         <text
          x={center}
          y={center + size * 0.12} // Lejjebb tolva
          textAnchor="middle"
          dy=".35em"
          fill={primaryColor} // Használja a state-ből jövő színt
          fillOpacity={0.7}
          className="font-mono text-xs" // Még kisebb betű
          style={{ fontSize: `${Math.max(8, size * 0.05)}px` }}
        >
          Threat {/* Vagy más címke */}
        </text>
      </svg>
       {/* CSS a pulzáláshoz (ha kell) - tedd az App.css-be vagy globális CSS-be */}
       {/*
       <style>
       {\`
          @keyframes pulse-radar {
            0%, 100% { stroke-opacity: \${baseOpacity + (1 - baseOpacity) * normalizedValue}; }
            50% { stroke-opacity: \${Math.min(1, (baseOpacity + (1 - baseOpacity) * normalizedValue) * 1.5)}; } // Kicsit felerősítjük
          }
          .animate-pulse-radar {
            animation: pulse-radar 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
       \`}
       </style>
       */}
    </div>
  );
};

PulseRadar.propTypes = {
  value: PropTypes.number,
  maxValue: PropTypes.number,
  size: PropTypes.number,
  numRings: PropTypes.number,
  maxStrokeWidth: PropTypes.number,
  baseOpacity: PropTypes.number,
  // primaryColor prop már nem szükséges, ha a hook/getComputedStyleColor van használva
};

export default PulseRadar;