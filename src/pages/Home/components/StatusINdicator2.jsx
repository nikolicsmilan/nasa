import React from 'react';

// Színpaletta az állapotinformációkhoz
const colorPalette = {
  "#27ae60": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#2ecc71": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "green":   { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#f39c12": { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "#f1c40f": { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "yellow":  { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "#e67e22": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#d35400": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "orange":  { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#e74c3c": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "#c0392b": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "red":     { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
};

// SVG pajzs komponens
const Pajzs = ({ szin, glowIntensity, children }) => (
  <g>
    <path
      d="M10 20 
         Q50 0, 90 20 
         L90 80 
         Q50 100, 10 80 
         Z"
      fill="rgba(0,0,0,0.05)"
      stroke={szin}
      strokeWidth="1.5"
      style={{ filter: `drop-shadow(0 0 ${glowIntensity} ${szin})` }}
    />
   
    {children}
  </g>
);

// SVG központi kör komponens
const KozepsoKor = ({ szin }) => (
  <g>
    <circle
      cx="60"
      cy="75"
      r="20"
      fill={szin}
      opacity="0.2"
      style={{ filter: `drop-shadow(0 0 5px ${szin})` }}
    />
    <circle
      cx="60"
      cy="75"
      r="20"
      fill="transparent"
      stroke={szin}
      strokeWidth="1"
      style={{ filter: `drop-shadow(0 0 3px ${szin})` }}
    />
  </g>
);

const StatusIndicator = ({ szin = "#27ae60" }) => {
  const getStateInfo = (szin) => {
    const szinLower = szin.toLowerCase();
    return colorPalette[szinLower] || { icon: "?", message: "ISMERETLEN", glowIntensity: "6px" };
  };

  const stateInfo = getStateInfo(szin);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg viewBox="0 0 120 150" className="w-64 h-80" style={{ filter: `drop-shadow(0 0 ${stateInfo.glowIntensity} ${szin})` }}>
          <Pajzs szin={szin} glowIntensity={stateInfo.glowIntensity}>
            <KozepsoKor szin={szin} />
            <text
              x="60"
              y="83"
              textAnchor="middle"
              fontSize="26"
              fontWeight="bold"
              fill={szin}
            >
              {stateInfo.icon}
            </text>
            <text
              x="60"
              y="115"
              textAnchor="middle"
              fontSize="9"
              fontWeight="bold"
              fill={szin}
              className="animate-"
            >
              {stateInfo.message}
            </text>
          </Pajzs>
        </svg>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'transparent',
            mixBlendMode: 'screen'
          }}
        >
          <svg viewBox="0 0 120 150" className="w-full h-full">
            <Pajzs szin={szin} glowIntensity={stateInfo.glowIntensity}>
              <path
                d="M10 20 
                   Q50 0, 90 20 
                   L90 80 
                   Q50 100, 10 80 
                   Z"
                fill="transparent"
                stroke={szin}
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              <KozepsoKor szin={szin} />
              <circle
                cx="60"
                cy="75"
                r="25"
                fill={szin}
                opacity="0.15"
                className="animate-pulse"
                style={{
                  filter: `blur(8px)`,
                  animationDuration: '3s'
                }}
              />
            </Pajzs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusIndicator;

import React from 'react';

const colorPalette = {
  "#27ae60": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#2ecc71": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "green":   { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#f39c12": { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "#f1c40f": { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "yellow":  { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "#e67e22": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#d35400": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "orange":  { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#e74c3c": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "#c0392b": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "red":     { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
};

const Pajzs = ({ szin, glowIntensity, children }) => (
  <g>
    <path
      d="M10 30 
         Q50 0, 90 30 
         L85 75 
         Q50 105, 15 75 
         Z"
      fill="rgba(0,0,0,0.05)"
      stroke={szin}
      strokeWidth="1.5"
      style={{ filter: `drop-shadow(0 0 ${glowIntensity} ${szin})` }}
    />
    {children}
  </g>
);

const KozepsoKor = ({ szin }) => (
  <g>
    <circle
      cx="50"
      cy="60"
      r="20"
      fill={szin}
      opacity="0.2"
      style={{ filter: `drop-shadow(0 0 5px ${szin})` }}
    />
    <circle
      cx="50"
      cy="60"
      r="20"
      fill="transparent"
      stroke={szin}
      strokeWidth="1"
      style={{ filter: `drop-shadow(0 0 3px ${szin})` }}
    />
  </g>
);

const StatusIndicator = ({ szin = "#27ae60" }) => {
  const getStateInfo = (szin) => {
    const szinLower = szin.toLowerCase();
    return colorPalette[szinLower] || { icon: "?", message: "ISMERETLEN", glowIntensity: "6px" };
  };

  const stateInfo = getStateInfo(szin);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg viewBox="0 0 120 150" className="w-64 h-80" style={{ filter: `drop-shadow(0 0 ${stateInfo.glowIntensity} ${szin})` }}>
          <Pajzs szin={szin} glowIntensity={stateInfo.glowIntensity}>
            <KozepsoKor szin={szin} />
            <text
              x="50"
              y="68"
              textAnchor="middle"
              fontSize="26"
              fontWeight="bold"
              fill={szin}
            >
              {stateInfo.icon}
            </text>
            <text
              x="50"
              y="115"
              textAnchor="middle"
              fontSize="9"
              fontWeight="bold"
              fill={szin}
            >
              {stateInfo.message}
            </text>
          </Pajzs>
        </svg>
      </div>
    </div>
  );
};

export default StatusIndicator;

/*import React from 'react';

// Színpaletta az állapotinformációkhoz
const colorPalette = {
  "#27ae60": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#2ecc71": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "green":   { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#f39c12": { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "#f1c40f": { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "yellow":  { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "#e67e22": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#d35400": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "orange":  { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#e74c3c": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "#c0392b": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "red":     { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
};

// SVG pajzs komponens
const Pajzs = ({ szin, glowIntensity, children }) => (
  <g>
    <path
      d="M60,10 L110,40 L110,95 C110,125 85,140 60,140 C35,140 10,125 10,95 L10,40 L60,10Z"
      fill="rgba(0,0,0,0.05)"
      stroke={szin}
      strokeWidth="1.5"
      style={{ filter: `drop-shadow(0 0 ${glowIntensity} ${szin})` }}
    />
   
    {children}
  </g>
);

// SVG központi kör komponens
const KozepsoKor = ({ szin }) => (
  <g>
    <circle
      cx="60"
      cy="75"
      r="20"
      fill={szin}
      opacity="0.2"
      style={{ filter: `drop-shadow(0 0 5px ${szin})` }}
    />
    <circle
      cx="60"
      cy="75"
      r="20"
      fill="transparent"
      stroke={szin}
      strokeWidth="1"
      style={{ filter: `drop-shadow(0 0 3px ${szin})` }}
    />
  </g>
);

const StatusIndicator = ({ szin = "#27ae60" }) => {
  const getStateInfo = (szin) => {
    const szinLower = szin.toLowerCase();
    return colorPalette[szinLower] || { icon: "?", message: "ISMERETLEN", glowIntensity: "6px" };
  };

  const stateInfo = getStateInfo(szin);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg viewBox="0 0 120 150" className="w-64 h-80" style={{ filter: `drop-shadow(0 0 ${stateInfo.glowIntensity} ${szin})` }}>
          <Pajzs szin={szin} glowIntensity={stateInfo.glowIntensity}>
            <KozepsoKor szin={szin} />
            <text
              x="60"
              y="83"
              textAnchor="middle"
              fontSize="26"
              fontWeight="bold"
              fill={szin}
            >
              {stateInfo.icon}
            </text>
            <text
              x="60"
              y="115"
              textAnchor="middle"
              fontSize="9"
              fontWeight="bold"
              fill={szin}
              className="animate-"
            >
              {stateInfo.message}
            </text>
          </Pajzs>
        </svg>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'transparent',
            mixBlendMode: 'screen'
          }}
        >
          <svg viewBox="0 0 120 150" className="w-full h-full">
            <Pajzs szin={szin} glowIntensity={stateInfo.glowIntensity}>
              <path
                d="M60,10 L110,40 L110,95 C110,125 85,140 60,140 C35,140 10,125 10,95 L10,40 L60,10Z"
                fill="transparent"
                stroke={szin}
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              <KozepsoKor szin={szin} />
              <circle
                cx="60"
                cy="75"
                r="25"
                fill={szin}
                opacity="0.15"
                className="animate-pulse"
                style={{
                  filter: `blur(8px)`,
                  animationDuration: '3s'
                }}
              />
            </Pajzs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusIndicator; */
import React from 'react';

// Színpaletta az állapotinformációkhoz
const colorPalette = {
  "#27ae60": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#2ecc71": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "green":   { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#f39c12": { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "#f1c40f": { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "yellow":  { icon: "",  message: "KÖVETENDŐ", glowIntensity: "8px"  },
  "#e67e22": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#d35400": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "orange":  { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#e74c3c": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "#c0392b": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "red":     { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
};

// SVG pajzs komponens
const Pajzs = ({ szin, glowIntensity, children }) => (
  <g>
    <path
      d="M10 20 
         Q50 0, 90 20 
         L90 80 
         Q50 100, 10 80 
         Z"
      fill="rgba(0,0,0,0.05)"
      stroke={szin}
      strokeWidth="1.5"
      style={{ filter: `drop-shadow(0 0 ${glowIntensity} ${szin})` }}
    />
   
    {children}
  </g>
);

// SVG központi kör komponens
const KozepsoKor = ({ szin }) => (
  <g>
    <circle
      cx="50"
      cy="50"
      r="20"
      fill={szin}
      opacity="0.2"
      style={{ filter: `drop-shadow(0 0 5px ${szin})` }}
    />
    <circle
      cx="50"
      cy="50"
      r="20"
      fill="transparent"
      stroke={szin}
      strokeWidth="1"
      style={{ filter: `drop-shadow(0 0 3px ${szin})` }}
    />
  </g>
);

const StatusIndicator = ({ szin = "#27ae60" }) => {
  const getStateInfo = (szin) => {
    const szinLower = szin.toLowerCase();
    return colorPalette[szinLower] || { icon: "?", message: "ISMERETLEN", glowIntensity: "6px" };
  };

  const stateInfo = getStateInfo(szin);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg viewBox="0 0 120 150" className="w-64 h-80" style={{ filter: `drop-shadow(0 0 ${stateInfo.glowIntensity} ${szin})` }}>
          <Pajzs szin={szin} glowIntensity={stateInfo.glowIntensity}>
            <KozepsoKor szin={szin} />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="26"
              fontWeight="bold"
              fill={szin}
            >
              {stateInfo.icon}
            </text>
            <text
              x="50"
              y="115"
              textAnchor="middle"
              fontSize="9"
              fontWeight="bold"
              fill={szin}
              className="animate-"
            >
              {stateInfo.message}
            </text>
          </Pajzs>
        </svg>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'transparent',
            mixBlendMode: 'screen'
          }}
        >
          <svg viewBox="0 0 120 150" className="w-full h-full">
            <Pajzs szin={szin} glowIntensity={stateInfo.glowIntensity}>
              <path
                d="M10 20 
                   Q50 0, 90 20 
                   L90 80 
                   Q50 100, 10 80 
                   Z"
                fill="transparent"
                stroke={szin}
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              <KozepsoKor szin={szin} />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill={szin}
                opacity="0.15"
                className="animate-pulse"
                style={{
                  filter: `blur(8px)`,
                  animationDuration: '3s'
                }}
              />
            </Pajzs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusIndicator;


import React from 'react';

// Színpaletta az állapotinformációkhoz
const colorPalette = {
  "#27ae60": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#2ecc71": { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "green":   { icon: "✓", message: "NINCS VESZÉLY", glowIntensity: "4px" },
  "#f39c12": { icon: "",   message: "KÖVETENDŐ", glowIntensity: "8px"   },
  "#f1c40f": { icon: "",   message: "KÖVETENDŐ", glowIntensity: "8px"   },
  "yellow":  { icon: "",   message: "KÖVETENDŐ", glowIntensity: "8px"   },
  "#e67e22": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#d35400": { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "orange":  { icon: "!", message: "VESZÉLYES", glowIntensity: "10px" },
  "#e74c3c": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "#c0392b": { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
  "red":     { icon: "✕", message: "VESZÉLYES", glowIntensity: "12px" },
};

// SVG pajzs komponens
const Pajzs = ({ szin, glowIntensity, children }) => (
  <g>
    <path
      d="M10 20 
          Q50 0, 90 20 
          L90 80 
          Q50 100, 10 80 
          Z"
      fill="rgba(0,0,0,0.05)"
      stroke={szin}
      strokeWidth="1.5"
      style={{ filter: `drop-shadow(0 0 ${glowIntensity} ${szin})` }}
    />
    
    {children}
  </g>
);

// SVG központi kör komponens
const KozepsoKor = ({ szin }) => (
  <g>
    <circle
      cx="50"
      cy="50"
      r="20"
      fill={szin}
      opacity="0.2"
      style={{ filter: `drop-shadow(0 0 5px ${szin})` }}
    />
    <circle
      cx="50"
      cy="50"
      r="20"
      fill="transparent"
      stroke={szin}
      strokeWidth="1"
      style={{ filter: `drop-shadow(0 0 3px ${szin})` }}
    />
  </g>
);

const StatusIndicator = ({ szin = "#27ae60" }) => {
  const getStateInfo = (szin) => {
    const szinLower = szin.toLowerCase();
    return colorPalette[szinLower] || { icon: "?", message: "ISMERETLEN", glowIntensity: "6px" };
  };

  const stateInfo = getStateInfo(szin);

  return (
    <div className="flex justify-center items-center border-0 w-60 h-80">
      <svg viewBox="0 0 100 120" className="w-48 h-60" style={{ filter: `drop-shadow(0 0 ${stateInfo.glowIntensity} ${szin})` }}>
        <Pajzs szin={szin} glowIntensity={stateInfo.glowIntensity}>
          <KozepsoKor szin={szin} />
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fontSize="26"
            fontWeight="bold"
            fill={szin}
          >
            {stateInfo.icon}
          </text>
          <text
            x="50"
            y="115"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill={szin}
            className="animate-"
          >
            {stateInfo.message}
          </text>
        </Pajzs>
      </svg>
    </div>
  );
};

export default StatusIndicator;