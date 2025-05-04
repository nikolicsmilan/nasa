// src/pages/Test/components/NeutralGradientThemeButtons.jsx
import React from 'react';

const NeutralGradientThemeButtons = () => {
  return (
    <div className="p-4">
      <h1 className="text-primary text-xl mb-6 text-center">
        Neutral Gradient Themed Border (Static Test)
      </h1>
      <div className="flex flex-wrap justify-center gap-4"> {/* Added flex-wrap */}

        {/* --- Gomb 1: Plasma --- */}
        <div className="w-40 h-32 sm:w-48 sm:h-32 rounded-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden
                       gradient-neutral-static  /* <-- ÚJ HÁTTÉR OSZTÁLY */
                       border border-[#22d3ee]/40 /* Marad (HEX) */
                       hover:border-[#22d3ee]/70 hover:shadow-[0_0_15px_#22d3ee99] /* Marad (HEX) */
                       ">
          <div className="relative z-10 flex flex-col items-center">
            <span className="font-bold text-lg text-[#22d3ee]" style={{ filter: `drop-shadow(0 0 5px #22d3ee)` }}> {/* Marad (HEX) */}
              Plasma
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span> {/* Marad (Tailwind neutral, de ez általában működik) */}
          </div>
        </div>

        {/* --- Gomb 2: Ion --- */}
        <div className="w-40 h-32 sm:w-48 sm:h-32 rounded-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden
                       gradient-neutral-static  /* <-- ÚJ HÁTTÉR OSZTÁLY */
                       border border-[#a3e635]/40 /* Marad (HEX) */
                       hover:border-[#a3e635]/70 hover:shadow-[0_0_15px_#a3e63599] /* Marad (HEX) */
                       ">
           <div className="relative z-10 flex flex-col items-center">
            <span className="font-bold text-lg text-[#a3e635]" style={{ filter: `drop-shadow(0 0 5px #a3e635)` }}> {/* Marad (HEX) */}
              Ion
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

         {/* --- Gomb 3: Fusion --- */}
         <div className="w-40 h-32 sm:w-48 sm:h-32 rounded-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden
                       gradient-neutral-static  /* <-- ÚJ HÁTTÉR OSZTÁLY */
                       border border-[#4ade80]/40 /* Marad (HEX) */
                       hover:border-[#4ade80]/70 hover:shadow-[0_0_15px_#4ade8099] /* Marad (HEX) */
                       ">
           <div className="relative z-10 flex flex-col items-center">
            <span className="font-bold text-lg text-[#4ade80]" style={{ filter: `drop-shadow(0 0 5px #4ade80)` }}> {/* Marad (HEX) */}
              Fusion
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 4: Quantum --- */}
        <div className="w-40 h-32 sm:w-48 sm:h-32 rounded-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden
                       gradient-neutral-static  /* <-- ÚJ HÁTTÉR OSZTÁLY */
                       border border-[#60a5fa]/40 /* Marad (HEX) */
                       hover:border-[#60a5fa]/70 hover:shadow-[0_0_15px_#60a5fa99] /* Marad (HEX) */
                       ">
           <div className="relative z-10 flex flex-col items-center">
            <span className="font-bold text-lg text-[#60a5fa]" style={{ filter: `drop-shadow(0 0 5px #60a5fa)` }}> {/* Marad (HEX) */}
              Quantum
            </span>
            <span className="text-neutral-300 text-sm mt-1">Style Button</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NeutralGradientThemeButtons;
