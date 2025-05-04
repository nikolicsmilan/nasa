// src/pages/Test/components/ThemeButtons.jsx

const ThemeButtons = () => {
  return (
    <div className="p-4">
      <h1 className="text-primary text-xl mb-6 text-center">ThemeButtons (Static Test)</h1>
      <div className="flex flex-wrap justify-center gap-4">

        {/* --- Gomb 1: Plasma --- */}
        <div
          className="w-40 h-32 sm:w-48 sm:h-32 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden
                     gradient-neutral-to-plasma border-theme-plasma hover-theme-plasma hover:scale-105" // <-- Új/Kombinált osztályok
        >
          <span className="font-bold text-lg text-theme-plasma">Plasma</span> {/* <-- Új osztály */}
          <span className="text-neutral-300 text-sm mt-1">Style Button</span>
        </div>

        {/* --- Gomb 2: Ion --- */}
        <div
          className="w-40 h-32 sm:w-48 sm:h-32 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden
                     gradient-neutral-to-ion border-theme-ion hover-theme-ion hover:scale-105" // <-- Új/Kombinált osztályok
        >
          <span className="font-bold text-lg text-theme-ion">Ion</span> {/* <-- Új osztály */}
          <span className="text-neutral-300 text-sm mt-1">Style Button</span>
        </div>

        {/* --- Gomb 3: Fusion --- */}
         <div
          className="w-40 h-32 sm:w-48 sm:h-32 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden
                     gradient-neutral-to-fusion border-theme-fusion hover-theme-fusion hover:scale-105" // <-- Új/Kombinált osztályok
        >
          <span className="font-bold text-lg text-theme-fusion">Fusion</span> {/* <-- Új osztály */}
          <span className="text-neutral-300 text-sm mt-1">Style Button</span>
        </div>

        {/* --- Gomb 4: Quantum --- */}
        <div
          className="w-40 h-32 sm:w-48 sm:h-32 rounded-xl shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden
                     gradient-neutral-to-quantum border-theme-quantum hover-theme-quantum hover:scale-105" // <-- Új/Kombinált osztályok
        >
          <span className="font-bold text-lg text-theme-quantum">Quantum</span> {/* <-- Új osztály */}
          <span className="text-neutral-300 text-sm mt-1">Style Button</span>
        </div>

      </div>
    </div>
  );
};

export default ThemeButtons;
