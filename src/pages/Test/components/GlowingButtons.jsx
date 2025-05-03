const GlowingButtons = () => {
  return (
    <div>
      <h1 className="text-primary text-xl mb-8 text-center">GlowingButtons</h1>
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
    </div>
  );
};

export default GlowingButtons;
