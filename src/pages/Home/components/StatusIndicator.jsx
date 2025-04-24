// Color palette for status information
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

// SVG shield component
const Shield = ({ color, glowIntensity, children }) => (
  <g>
    <path
      d="M10 20 
         Q50 0, 90 20 
         L90 80 
         Q50 100, 10 80 
         Z"
      fill="rgba(0,0,0,0.05)"
      stroke={color}
      strokeWidth="1.5"
      style={{ filter: `drop-shadow(0 0 ${glowIntensity} ${color})` }}
    />
   
    {children}
  </g>
);

//SVG center circle component
const CentralCircle = ({ color }) => (
  <g>
    <circle
      cx="50"
      cy="50"
      r="20"
      fill={color}
      opacity="0.2"
      style={{ filter: `drop-shadow(0 0 5px ${color})` }}
    />
    <circle
      cx="50"
      cy="50"
      r="20"
      fill="transparent"
      stroke={color}
      strokeWidth="1"
      style={{ filter: `drop-shadow(0 0 3px ${color})` }}
    />
  </g>
);

const StatusIndicator = ({ color = "#27ae60" }) => {
  const getStateInfo = (color) => {
    const colorLower = color.toLowerCase();
    return colorPalette[colorLower] || { icon: "?", message: "ISMERETLEN", glowIntensity: "6px" };
  };

  const stateInfo = getStateInfo(color);

  return (
    <div className="flex flex-col items-center border-0 w-80">
      <div className="relative border-0 ">
        <svg viewBox="0 0 100 120" className="w-60 h-80" style={{ filter: `drop-shadow(0 0 ${stateInfo.glowIntensity} ${color})` }}>
          <Shield color={color} glowIntensity={stateInfo.glowIntensity}>
            <CentralCircle color={color} />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="26"
              fontWeight="bold"
              fill={color}
            >
              {stateInfo.icon}
            </text>
            <text
              x="50"
              y="115"
              textAnchor="middle"
              fontSize="9"
              fontWeight="bold"
              fill={color}
              className="animate-"
            >
              {stateInfo.message}
            </text>
          </Shield>
        </svg>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'transparent',
            mixBlendMode: 'screen'
          }}
        >
          <svg viewBox="0 0 100 120" className="w-full h-full">
            <Shield color={color} glowIntensity={stateInfo.glowIntensity}>
              <path
                d="M10 20 
                   Q50 0, 90 20 
                   L90 80 
                   Q50 100, 10 80 
                   Z"
                fill="transparent"
                stroke={color}
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              <CentralCircle color={color} />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill={color}
                opacity="0.15"
                className="animate-pulse"
                style={{
                  filter: `blur(8px)`,
                  animationDuration: '3s'
                }}
              />
            </Shield>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusIndicator;

