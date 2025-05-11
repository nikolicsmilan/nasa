// src/pages/Test/components/GlowingButtons.jsx
const GlowingButtons = () => {
  // Reszponzív alaposztályok a gombokhoz/div-ekhez
  const buttonBaseClasses = `
    h-32 rounded-xl shadow-xl backdrop-blur-md 
    flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer 
    transition-all duration-300 ease-in-out relative overflow-hidden
    w-full  /* Mobilon teljes szélesség a grid cellán belül */
    sm:w-40 /* Kisebb képernyőtől (sm) már a w-40 érvényesül */
    md:w-48 /* md breakpointtól a nagyobb méret */
  `;

  return (
    <div className="p-4">
      <h1 className="text-primary text-xl mb-8 text-center">GlowingButtons</h1>
      {/* Grid elrendezés */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-10">
        {/* --- Gomb 1: Plasma Stílus --- */}
        <div className={`${buttonBaseClasses} border border-[#22d3ee]/50 gradient-neutral-to-plasma hover:scale-105 hover:shadow-[0_0_15px_#22d3ee99]`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span
              className="font-bold text-base sm:text-lg text-[#22d3ee]" // Reszponzív betűméret
              style={{ filter: `drop-shadow(0 0 5px #22d3ee)` }}
            >
              Plasmáb
            </span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 2: Ion (Lime) Stílus --- */}
        <div className={`${buttonBaseClasses} border border-[#a3e635]/50 gradient-neutral-to-ion hover:scale-105 hover:shadow-[0_0_15px_#a3e63599]`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span
              className="font-bold text-base sm:text-lg text-[#a3e635]"
              style={{ filter: `drop-shadow(0 0 5px #a3e635)` }}
            >
              Ion
            </span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 3: Fusion (Zöld) Stílus --- */}
        <div className={`${buttonBaseClasses} border border-[#4ade80]/50 gradient-neutral-to-fusion hover:scale-105 hover:shadow-[0_0_15px_#4ade8099]`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span
              className="font-bold text-base sm:text-lg text-[#4ade80]"
              style={{ filter: `drop-shadow(0 0 5px #4ade80)` }}
            >
              Fusion
            </span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 4: Quantum (Kék) Stílus --- */}
        <div className={`${buttonBaseClasses} border border-[#60a5fa]/50 gradient-neutral-to-quantum hover:scale-105 hover:shadow-[0_0_15px_#60a5fa99]`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span
              className="font-bold text-base sm:text-lg text-[#60a5fa]"
              style={{ filter: `drop-shadow(0 0 5px #60a5fa)` }}
            >
              Quantumab
            </span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingButtons;
