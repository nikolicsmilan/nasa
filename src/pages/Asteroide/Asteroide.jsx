import { MyDataContext } from "../../context/DataContext";
//import DesktopAsteroide from "./desktop/DesktopAsteroide";
//import MobileAsteroide from "./mobile/MobileAsteroide";
import StyledButton from "../../components/buttons/StyledButton";
import { useNavigate } from "react-router-dom";
const Asteroide = () => {
  const { toggle } = MyDataContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/asteroide");
  };
  return (
    <div
      className={`min-h-screen flex border-0 items-center justify-center  border-lime-400
       z-50 relative ${toggle ? "opacity-70" : ""}`}
    >
      <div
        className={`hidden xl:flex border-0 border-red-400    ${
          toggle ? "opacity-0" : "opacity-100"
        }`}
      >
        <StyledButton
          onClick={handleClick}
          variant="neutral" // <<< Itt adjuk meg a stílustípust ('bordered' helyett 'neutral')
          className="w-full my-3 py-3 px-6 uppercase lg:text-lg" // Méret, margó, szöveg stílusok
        >
          Asteroid page under development Desktop view{" "}
          {/* A label helyett children-ként adjuk át */}
        </StyledButton>
      </div>

      <div
        className={`flex  xl:hidden  text-primary ${
          toggle ? "opacity-0" : "opacity-100"
        }`}
      >
        <StyledButton
          onClick={handleClick}
          variant="neutral" // <<< Itt adjuk meg a stílustípust ('bordered' helyett 'neutral')
          className="w-full my-3 py-3 px-6 uppercase lg:text-lg" // Méret, margó, szöveg stílusok
        >
          Asteroid page under development Mobile view{" "}
          {/* A label helyett children-ként adjuk át */}
        </StyledButton>
      </div>
    </div>
  );
};

export default Asteroide;
//    <DesktopAsteroide toggle={toggle} />
//  <MobileAsteroide />
