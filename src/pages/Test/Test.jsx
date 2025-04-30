// src/pages/Test/Test.jsx

import React, { useState } from 'react'; // Import React és useState a dinamikus teszteléshez
import SpeedGauge from '../../components/misc/speedgauge/SpeedGauge'; // Importáljuk a komponenst a megadott helyről

const Test = () => {
  // Opcionális: Hozzáadhatunk state-et, hogy teszteljük a változó sebességet
  const [testSpeed, setTestSpeed] = useState(450); // Kezdő sebesség

  return (
    // Használjunk egy flex konténert a jobb elrendezéshez és sötét hátteret a láthatósághoz
    <div className="flex flex-col items-center justify-center min-h-full w-full p-10 bg-black/80">
      <h1 className="text-primary text-2xl mb-8">SpeedGauge Test Page</h1>

      {/* A SpeedGauge komponens beillesztése példa propokkal */}
      <SpeedGauge
        speed={testSpeed} // Átadjuk a state-ből a sebességet
        maxSpeed={1700}   // Maximum érték
        size={300}        // Méret pixelben
        numSegments={60}  // Szegmensek száma
        // Itt felülírhatod a színeket is, ha akarod, pl.:
        // primaryColor="rgb(var(--color-rgb-primary, 255, 0, 0))" // Piros lenne
      />

      {/* Opcionális: Vezérlők a sebesség változtatásához teszteléshez */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <label htmlFor="speedInput" className="text-primary">
          Teszt sebesség (0-1700): {testSpeed}
        </label>
        <input
          id="speedInput"
          type="range"
          min="0"
          max="1700"
          step="10"
          value={testSpeed}
          onChange={(e) => setTestSpeed(parseInt(e.target.value, 10))}
          className="w-64 accent-primary" // Tailwind stílus a csúszkához
        />
      </div>
    </div>
  );
};

export default Test;