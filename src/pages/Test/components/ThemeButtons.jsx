

const ThemeButtons = () => {
  return (
    <div>
      <h1 className="text-primary text-xl mb-8 text-center">ThemeButtons</h1>

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
    </div>
  );
};

export default ThemeButtons;
