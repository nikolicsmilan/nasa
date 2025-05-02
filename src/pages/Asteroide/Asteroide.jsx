import { MyDataContext } from "../../context/DataContext";
//import DesktopAsteroide from "./desktop/DesktopAsteroide";
//import MobileAsteroide from "./mobile/MobileAsteroide";

const Asteroide = () => {
  const { toggle } = MyDataContext();

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
     Asteroid page under development Desktop view
      </div>

      <div
        className={`flex  xl:hidden  text-primary ${toggle ? "opacity-0" : "opacity-100"}`}
      >
    Asteroid page under development Mobile view
      </div>
    </div>
  );
};

export default Asteroide;
//    <DesktopAsteroide toggle={toggle} />
//  <MobileAsteroide />