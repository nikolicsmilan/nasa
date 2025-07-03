
const InvertedYNeon = () => {

const canvaswidth=300;
const canvasheight=300;

    return (
        <div className="flex justify-center items-center bg-black">
        <svg width={canvaswidth} height={canvasheight} viewBox="0 0 300 300" className="drop-shadow-neon">
            {/* Coordinate Grid */}
            <g className="stroke-grid">
                {[...Array(11)].map((_, i) => (
                    <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="300" />
                ))}
                {[...Array(11)].map((_, i) => (
                    <line key={i} x1="0" y1={i * 30} x2="300" y2={i * 30} />
                ))}
            </g>

            {/* X és Y tengelyek beszámozása */}
            {[...Array(11)].map((_, i) => (
                <text 
                    key={`x-${i}`} 
                    x={i * 30} 
                    y="290" 
                    className="text-lg" 
                    textAnchor="middle"
                    fill="#FFFFFF" // Szín beállítása fehérre
                >
                    {i}
                </text>
            ))}

            {/* Y tengely helyes számozása */}
            {[...Array(11)].map((_, i) => (
                <text 
                    key={`y-${i}`} 
                    x="5" 
                    y={300 - (i * 30)} // Az y koordinátát úgy módosítjuk, hogy felfelé növekedjen
                    className="text-lg" 
                    textAnchor="middle"
                    fill="#FBBF24" // Szín beállítása sárgára
                >
                    {i}
                </text>
            ))}

            {/* Lines */}
            <line className="stroke-neon" x1="150" y1="150" x2="150" y2="100" />
            <line className="stroke-neon" x1="150" y1="100" x2="100" y2="50" />
            <line className="stroke-neon" x1="150" y1="100" x2="200" y2="50" />
            
            {/* Circles */}
            <circle className="fill-neon" cx="60" cy={(canvasheight/10)*9} r="12" /> {/* Center circle */}
            <circle className="fill-neon" cx="150" cy="150" r="8" /> {/* Bottom circle */}
            <circle className="fill-neon" cx="100" cy="50" r="8" /> {/* Left circle */}
            <circle className="fill-neon" cx="200" cy="50" r="8" /> {/* Right circle */}
        </svg>

        
    </div>
    );
};

export default InvertedYNeon;


/* Tailwind CSS classes 
<style>
.stroke-neon {
    stroke: #00FFFF;
    stroke-width: 10;
    stroke-linecap: round;
}
.fill-neon {
    fill: #00FFFF;
}
.drop-shadow-neon {
    filter: drop-shadow(0 0 10px #00FFFF);
}
</style>*/

/*
  <div className="flex justify-center items-center  bg-black">
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-neon">
             
                <line className="stroke-neon" x1="150" y1="150" x2="150" y2="100" />
                <line className="stroke-neon" x1="150" y1="100" x2="100" y2="50" />
                <line className="stroke-neon" x1="150" y1="100" x2="200" y2="50" />
                
             
                <circle className="fill-neon" cx="150" cy="100" r="12" /> 
                <circle className="fill-neon" cx="150" cy="150" r="8" /> 
                <circle className="fill-neon" cx="100" cy="50" r="8" /> 
                <circle className="fill-neon" cx="200" cy="50" r="8" /> 
            </svg>
        </div>
*/