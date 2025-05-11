// src/pages/Test/components/ThemeButtons.jsx
// React import nem szükséges, ha nincs state vagy lifecycle

const ThemeButtons = () => {
  // Reszponzív alaposztályok a gombokhoz/div-ekhez
  // A w-40 h-32 sm:w-48 sm:h-32 részt kivesszük innen, és a grid cellákra bízzuk a méretet,
  // vagy a grid cellán belüli elemre tesszük a w-full-t.
  // Itt most a gombokra tesszük a reszponzív méreteket.
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
      <h1 className="text-primary text-xl mb-6 text-center">ThemeButtons (Static Test)</h1>
      {/* Grid elrendezés */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

        {/* --- Gomb 1: Plasma --- */}
        <div
          className={`${buttonBaseClasses} gradient-neutral-to-plasma border-theme-plasma hover-theme-plasma hover:scale-105`}
        >
          <div className="relative z-10 flex flex-col items-center text-center"> {/* Text-center hozzáadva */}
            <span className="font-bold text-base sm:text-lg text-theme-plasma">Plasma</span> {/* Reszponzív betűméret */}
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 2: Ion --- */}
        <div
          className={`${buttonBaseClasses} gradient-neutral-to-ion border-theme-ion hover-theme-ion hover:scale-105`}
        >
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base sm:text-lg text-theme-ion">Ion</span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 3: Fusion --- */}
         <div
          className={`${buttonBaseClasses} gradient-neutral-to-fusion border-theme-fusion hover-theme-fusion hover:scale-105`}
        >
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base sm:text-lg text-theme-fusion">Fusion</span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

        {/* --- Gomb 4: Quantum --- */}
        <div
          className={`${buttonBaseClasses} gradient-neutral-to-quantum border-theme-quantum hover-theme-quantum hover:scale-105`}
        >
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-bold text-base sm:text-lg text-theme-quantum">Quantum</span>
            <span className="text-neutral-300 text-xs sm:text-sm mt-1">Style Button</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThemeButtons;