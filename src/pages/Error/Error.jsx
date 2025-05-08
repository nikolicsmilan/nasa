// src/pages/Error/Error.jsx
import { useNavigate } from "react-router-dom";
import RotatingSatellite from "./RotatingSatellite";
import StyledButton from "../../components/buttons/StyledButton";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-black text-primary p-6 font-mono relative overflow-hidden z-10">
      <RotatingSatellite />
      <div className=" rounded-2xl p-8 md:p-12 z-10 text-center max-w-2xl w-full border-0 border-primary/30 relative bg-black/50 backdrop-blur-sm">
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
        <div className="text-center w-full max-w-xs mx-auto my-0">
          <StyledButton
            onClick={handleClick}
            variant="glowing" // <<< Itt adjuk meg a stílustípust ('bordered' helyett 'neutral')
            className="w-full my-3 py-3 px-6 uppercase lg:text-xl" // Méret, margó, szöveg stílusok
          >
            Vissza a bázisra {/* A label helyett children-ként adjuk át */}
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Error;
