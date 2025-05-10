import { useState } from "react";
import SpeedGauge from "./SpeedGauge";

const SpeedGauges = () => {
  const [testSpeed, setTestSpeed] = useState(450); // Kezdő sebesség
  const speedgauges = [1,];
  return (
    <div>
      {" "}
      <h1 className="text-primary text-xl mb-8 text-center">SpeedGauges</h1>
      <div className="border-0 flex justify-between">
        {speedgauges.map((item, index) => (
          <div
            key={index}
            className="mt-8 flex flex-col items-center gap-4 border-0"
          >
            <h2 className="text-primary text-xl mb-8 text-center">
              SpeedGauge Test Page
            </h2>
            <SpeedGauge
              speed={testSpeed} // Átadjuk a state-ből a sebességet
              maxSpeed={1700} // Maximum érték
              size={300} // Méret pixelben
              numSegments={60} // Szegmensek száma
              // Itt felülírhatod a színeket is, ha akarod, pl.:
              // primaryColor="rgb(var(--color-rgb-primary, 255, 0, 0))" // Piros lenne
            />
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
        ))}
      </div>
    </div>
  );
};

export default SpeedGauges;
