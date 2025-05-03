
const NeutralGradientThemeButtons = () => {
  return (
    <div>
      <h1 className="text-primary text-xl mb-8 text-center">
        NeutralGradientThemeButtons
      </h1>
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
    </div>
  );
};

export default NeutralGradientThemeButtons;
