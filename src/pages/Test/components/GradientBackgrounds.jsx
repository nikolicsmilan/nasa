// src/pages/Test/components/GradientBackgrounds.jsx
import React from 'react';

const GradientBackgrounds = () => {
  return (
    <div className="p-4"> {/* Added padding for better spacing */}
      <h1 className="text-primary text-xl mb-6 text-center"> {/* Adjusted margin */}
        Gradient Backgrounds (Static Test)
      </h1>
      <div className="flex flex-wrap justify-center gap-4"> {/* Added flex-wrap */}
        {/* --- Div 1: Plasma --- */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl backdrop-blur-md gradient-bg-plasma"> {/* Használjuk az új osztályt */}
        </div>

        {/* --- Div 2: Ion --- */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl backdrop-blur-md gradient-bg-ion">   {/* Használjuk az új osztályt */}
        </div>

        {/* --- Div 3: Fusion --- */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl backdrop-blur-md gradient-bg-fusion"> {/* Használjuk az új osztályt */}
        </div>

        {/* --- Div 4: Quantum --- */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl backdrop-blur-md gradient-bg-quantum">{/* Használjuk az új osztályt */}
        </div>
      </div>
    </div>
  );
};

export default GradientBackgrounds;
