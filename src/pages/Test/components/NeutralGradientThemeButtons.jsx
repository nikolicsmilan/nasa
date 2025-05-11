// src/pages/Test/components/NeutralGradientThemeButtons.jsx
// React import nem szükséges, ha nincs state vagy lifecycle

const NeutralGradientThemeButtons = () => {
  const buttonBaseClasses = `
    h-32 rounded-xl backdrop-blur-md 
    flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer 
    transition-all duration-300 ease-in-out relative overflow-hidden
    gradient-neutral-static /* Ez a közös háttér */
    w-full  /* Mobilon teljes szélesség */
    sm:w-40 /* sm breakpointtól */
    md:w-48 /* md breakpointtól */
  `;

  return (
    <div className="p-4">
      <h1 className="text-primary text-xl mb-6 text-center">
        Neutral Gradient Themed Border (Static Test)
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

        {/* --- Gomb 1: Plasma --- */}
        <div className={`${buttonBaseClasses} border border-[#22d3ee]/40 hover:border-[#22d3ee]/70 hover:shadow-[0_0_15px_#22d3ee99]`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base sm:text-lg text-[#22d3ee]" style={{ filter: `drop-shadow(0 0 5px #22d3ee)` }}>
              Plasma
            </span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 2: Ion --- */}
        <div className={`${buttonBaseClasses} border border-[#a3e635]/40 hover:border-[#a3e635]/70 hover:shadow-[0_0_15px_#a3e63599]`}>
           <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base sm:text-lg text-[#a3e635]" style={{ filter: `drop-shadow(0 0 5px #a3e635)` }}>
              Ion
            </span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

         {/* --- Gomb 3: Fusion --- */}
         <div className={`${buttonBaseClasses} border border-[#4ade80]/40 hover:border-[#4ade80]/70 hover:shadow-[0_0_15px_#4ade8099]`}>
           <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base sm:text-lg text-[#4ade80]" style={{ filter: `drop-shadow(0 0 5px #4ade80)` }}>
              Fusion
            </span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 4: Quantum --- */}
        <div className={`${buttonBaseClasses} border border-[#60a5fa]/40 hover:border-[#60a5fa]/70 hover:shadow-[0_0_15px_#60a5fa99]`}>
           <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base sm:text-lg text-[#60a5fa]" style={{ filter: `drop-shadow(0 0 5px #60a5fa)` }}>
              Quantum
            </span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NeutralGradientThemeButtons;
