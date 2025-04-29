// src/pages/Error/Error.jsx
import { Link } from "react-router-dom";
import RotatingSatellite from "./RotatingSatellite";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-black text-primary p-6 font-mono relative overflow-hidden z-10">
       <RotatingSatellite />
      <div className="z-40 rounded-2xl p-8 md:p-12 z-10 text-center max-w-2xl w-full border-0 border-primary/30 relative bg-black/50 backdrop-blur-sm">
        <h1
          className="text-7xl md:text-9xl font-bold text-red-500/80 mb-4 animate-pulse"
          style={{ animationDuration: "5s" }}
        >
          404
        </h1>

        {/* A forgó műhold beillesztése */}
    
        <h2 className="text-3xl md:text-2xl font-semibold text-primary uppercase tracking-wider">
          Ön illetéktelenül próbált meg adatokat szerezni a Nasatól!
        </h2>

        <p className="text-md text-neutral-300 mt-4 max-w-lg mx-auto">
          Ne menjen sehová, értesítjük a Nasa-t... Vagy térjen vissza a bázisra,
          ellenkező esetben keresse fel kezelőorvosát, gyóygszerészét.
        </p>
      
        <Link
          to="/"
          className="mt-10 inline-block px-8 py-3 border-2 border-primary text-primary rounded-md
                     font-semibold  tracking-wider text-lg
                     hover:bg-primary hover:text-black transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black
                     shadow-[0_0_10px_theme('colors.primary/50%')]"
        >
          Vissza a Bázisra
        </Link>
       
      </div>
    </div>
  );
};

export default Error;
