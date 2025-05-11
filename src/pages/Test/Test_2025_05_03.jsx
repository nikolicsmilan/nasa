// src/pages/Test/Test.jsx

import React, { useState } from "react"; // Import React és useState a dinamikus teszteléshez
import SpeedGauge from "../../components/misc/speedgauge/SpeedGauge"; // Importáljuk a komponenst a megadott helyről
//testComponentsData.js t létre kell hozni

const speedgauges = [1, 2, 3, 4, 5];
const Test = () => {
  // Opcionális: Hozzáadhatunk state-et, hogy teszteljük a változó sebességet
  const [testSpeed, setTestSpeed] = useState(450); // Kezdő sebesség
  // Definiáljuk a témákat és a hozzájuk tartozó színeket/osztályokat
  // Most már a gradienthez szükséges sötét és "kicsit világosabb sötét" színeket is meghatározzuk
  // Ezeket a Tailwind configból vesszük (feltételezve, hogy léteznek 700/800/950 árnyalatok)
  const themes = [
    {
      name: "plasma",
      color: "#22d3ee",
      fromColorClass: "from-sky-950/95",
      toColorClass: "to-sky-800/95",
    }, // Sötét cián átmenet
    {
      name: "ion",
      color: "#a3e635",
      fromColorClass: "from-lime-950/95",
      toColorClass: "to-lime-700/95",
    }, // Sötét lime átmenet
    {
      name: "fusion",
      color: "#4ade80",
      fromColorClass: "from-green-950/95",
      toColorClass: "to-green-700/95",
    }, // Sötét zöld átmenet
    {
      name: "quantum",
      color: "#60a5fa",
      fromColorClass: "from-blue-950/95",
      toColorClass: "to-blue-800/95",
    }, // Sötét kék átmenet
  ];

  // ---- STÍLUSOK LÉTREHOZÁSA ----
  // Alap stílusok, amik minden gombra érvényesek
  const baseClasses = `
    w-48 h-32 rounded-xl shadow-xl backdrop-blur-md /* A blur és árnyék marad */
    flex flex-col items-center justify-center p-4 cursor-pointer
    transition-all duration-300 ease-in-out relative overflow-hidden
  `;

  // Hover effektusok (a glow színe a téma fő színe)
  const hoverClasses = `hover:scale-105 hover:shadow-[0_0_20px_var(--hover-glow-color)]`;
  return (
    // Használjunk egy flex konténert a jobb elrendezéshez és sötét hátteret a láthatósághoz
    <div className="flex flex-col  h-screen  overflow-y-auto w-full p-10 bg-black/80 border-0">
      {/* --- Csak a 4 div, a kért háttérrel --- */}
      <h1 className="text-primary text-xl mb-8 text-center">
        Metallic Background Style Test
      </h1>
      <div className="border-0 flex justify-center gap-4">
        {/* --- Div 1: Plasma (Türkiz Átmenet) --- */}
        <div className="w-48 h-48 rounded-xl backdrop-blur-md bg-gradient-to-b from-sky-950/95 to-sky-800/95">
          {/* NINCS BENNE SEMMI */}
        </div>

        {/* --- Div 2: Ion (Lime Átmenet) --- */}
        <div className="w-48 h-48 rounded-xl backdrop-blur-md  bg-gradient-to-b from-lime-950/95 to-lime-700/95">
          {/* NINCS BENNE SEMMI */}
        </div>

        {/* --- Div 3: Fusion (Zöld Átmenet) --- */}
        <div className="w-48 h-48 rounded-xl backdrop-blur-md overflow-hidden bg-gradient-to-b from-green-950/95 to-green-700/95">
          {/* NINCS BENNE SEMMI */}
        </div>

        {/* --- Div 4: Quantum (Kék Átmenet) --- */}
        <div className="w-48 h-48 rounded-xl backdrop-blur-md overflow-hidden bg-gradient-to-b from-blue-950/95 to-blue-800/95">
          {/* NINCS BENNE SEMMI */}
        </div>
      </div>

      {/* A SpeedGauge komponens beillesztése példa propokkal */}

      {/* Opcionális: Vezérlők a sebesség változtatásához teszteléshez */}

      <div className="border-0 flex flex-col items-center justify-start  w-full p-10 bg-black text-primary font-mono">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* --- Gomb/Div 1: Plasma (Türkiz) Stílus --- */}
          <div
            className="w-48 h-32 rounded-xl shadow-xl border border-[#22d3ee]/40 backdrop-blur-md
                        bg-gradient-to-b from-neutral-800/95 to-sky-950/95
                        flex flex-col items-center justify-center p-4 cursor-pointer
                        hover:shadow-[0_0_15px_#22d3ee] hover:border-[#22d3ee]/70 transition-all duration-300"
          >
            <span className="text-[#22d3ee] font-bold text-lg">Plasma</span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>

          {/* --- Gomb/Div 2: Ion (Lime) Stílus --- */}
          <div
            className="w-48 h-32 rounded-xl shadow-xl border border-[#a3e635]/40 backdrop-blur-md
                        bg-gradient-to-b from-neutral-800/95 to-lime-950/95
                        flex flex-col items-center justify-center p-4 cursor-pointer
                        hover:shadow-[0_0_15px_#a3e635] hover:border-[#a3e635]/70 transition-all duration-300"
          >
            <span className="text-[#a3e635] font-bold text-lg">Ion</span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>

          {/* --- Gomb/Div 3: Fusion (Zöld) Stílus --- */}
          <div
            className="w-48 h-32 rounded-xl shadow-xl border border-[#4ade80]/40 backdrop-blur-md
                        bg-gradient-to-b from-neutral-800/95 to-green-950/95
                        flex flex-col items-center justify-center p-4 cursor-pointer
                        hover:shadow-[0_0_15px_#4ade80] hover:border-[#4ade80]/70 transition-all duration-300"
          >
            <span className="text-[#4ade80] font-bold text-lg">Fusion</span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>

          {/* --- Gomb/Div 4: Quantum (Kék) Stílus --- */}
          <div
            className="w-48 h-32 rounded-xl shadow-xl border border-[#60a5fa]/40 backdrop-blur-md
                        bg-gradient-to-b from-neutral-800/95 to-blue-950/95
                        flex flex-col items-center justify-center p-4 cursor-pointer
                        hover:shadow-[0_0_15px_#60a5fa] hover:border-[#60a5fa]/70 transition-all duration-300"
          >
            <span className="text-[#60a5fa] font-bold text-lg">Quantum</span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>
      </div>

      {/* --- Gomb 1: Plasma (Türkiz) Stílus --- */}
      <div className="flex justify-center gap-4 my-10">
        <div className="w-48 h-32 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden border border-[#22d3ee]/50 bg-gradient-to-b from-neutral-800/95 to-sky-950/95 hover:scale-105 hover:shadow-[0_0_15px_#22d3ee99]">
          {/* Belső tartalom (szöveg) */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-bold text-lg text-[#22d3ee]"
              style={{ filter: `drop-shadow(0 0 5px #22d3ee)` }}
            >
              Plasmáb
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 2: Ion (Lime) Stílus --- */}
        <div className="w-48 h-32 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden border border-[#a3e635]/50 bg-gradient-to-b from-neutral-800/95 to-lime-950/95 hover:scale-105 hover:shadow-[0_0_15px_#a3e63599]">
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-bold text-lg text-[#a3e635]"
              style={{ filter: `drop-shadow(0 0 5px #a3e635)` }}
            >
              Ion
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 3: Fusion (Zöld) Stílus --- */}
        <div className="w-48 h-32 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden border border-[#4ade80]/50 bg-gradient-to-b from-neutral-800/95 to-green-950/95 hover:scale-105 hover:shadow-[0_0_15px_#4ade8099]">
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-bold text-lg text-[#4ade80]"
              style={{ filter: `drop-shadow(0 0 5px #4ade80)` }}
            >
              Fusion
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 4: Quantum (Kék) Stílus --- */}
        <div className="w-48 h-32 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden border border-[#60a5fa]/50 bg-gradient-to-b from-neutral-800/95 to-blue-950/95 hover:scale-105 hover:shadow-[0_0_15px_#60a5fa99]">
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-bold text-lg text-[#60a5fa]"
              style={{ filter: `drop-shadow(0 0 5px #60a5fa)` }}
            >
              Quantumab
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>
      </div>


      
      <div className="flex justify-center gap-4 my-10">
        {/* --- Gomb 1: Plasma (Türkiz Színnel) --- */}
        <div className="w-48 h-32 rounded-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden border border-[#22d3ee]/40 bg-gradient-to-b from-neutral-800/95 to-neutral-900/95 hover:scale-105 hover:border-[#22d3ee]/70 hover:shadow-[0_0_15px_#22d3ee99]">
          {/* A háttér a fix szürke gradient + blur */}
          {/* A keret és a hover a téma színét kapja */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-bold text-lg text-[#22d3ee]"
              style={{ filter: `drop-shadow(0 0 5px #22d3ee)` }}
            >
              Plasma
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 2: Ion (Lime Színnel) --- */}
        <div className="w-48 h-32 rounded-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden border border-[#a3e635]/40 bg-gradient-to-b from-neutral-800/95 to-neutral-900/95 hover:scale-105 hover:border-[#a3e635]/70 hover:shadow-[0_0_15px_#a3e63599]">
          {/* A háttér ugyanaz a szürke gradient + blur */}
          {/* A keret és a hover a téma színét kapja */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-bold text-lg text-[#a3e635]"
              style={{ filter: `drop-shadow(0 0 5px #a3e635)` }}
            >
              Ion
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 3: Fusion (Zöld Színnel) --- */}
        <div className="w-48 h-32 rounded-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden border border-[#4ade80]/40 bg-gradient-to-b from-neutral-800/95 to-neutral-900/95 hover:scale-105 hover:border-[#4ade80]/70 hover:shadow-[0_0_15px_#4ade8099]">
          {/* A háttér ugyanaz a szürke gradient + blur */}
          {/* A keret és a hover a téma színét kapja */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-bold text-lg text-[#4ade80]"
              style={{ filter: `drop-shadow(0 0 5px #4ade80)` }}
            >
              Fusion
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 4: Quantum (Kék Színnel) --- */}
        <div className="w-48 h-32 rounded-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden border border-[#60a5fa]/40 bg-gradient-to-b from-neutral-800/95 to-neutral-900/95 hover:scale-105 hover:border-[#60a5fa]/70 hover:shadow-[0_0_15px_#60a5fa99]">
          {/* A háttér ugyanaz a szürke gradient + blur */}
          {/* A keret és a hover a téma színét kapja */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-bold text-lg text-[#60a5fa]"
              style={{ filter: `drop-shadow(0 0 5px #60a5fa)` }}
            >
              Quantum
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>
      </div>






     
      <div className="border-0 flex justify-between">
        {speedgauges.map((item) => (
          <div className="mt-8 flex flex-col items-center gap-4 border-0">
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

      <div className="border-0 flex justify-between">
        {speedgauges.map((item) => (
          <div className="mt-8 flex flex-col items-center gap-4 border-0">
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

export default Test;
