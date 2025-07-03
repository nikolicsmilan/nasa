
//import { useNavigate } from "react-router-dom";
//import BiggerConsoles from "./BiggerConsoles";
//import { start } from "../../../locales/localdata";
import InvertedYNeon from "./InvertedYNeon";
const HexagonalIconList2 = ({ items, /*centerItem */}) => {
  const iconCount = items.length;

  // Responsive sugár a képernyő szélessége alapján
  const radius = window.innerWidth < 400 ? 130 : 180; // Kis képernyőn kisebb sugár
  const centerX = radius;
  const centerY = radius;

  return (
    <div
      className="relative mx-auto border-2 border-red-400 flex items-center justify-center"
      style={{
        width: `${2 * radius}px`,
        height: `${2 * radius}px`,
        minWidth: `${2 * radius}px`,
        minHeight: `${2 * radius}px`,
      }}
    >
      {/* Központi ikon */}
      <div
        className="absolute   cursor-pointer text-center border-0 border-lime-400  flex justify-center items-center w-60 h-60"

        // onClick={() => navigate(centerItem.path)} // Központi ikon útvonala
      >
        <InvertedYNeon />
      </div>

      {/* Körben lévő ikonok */}
      {items.map((item, index) => {
        const angle = (index / iconCount) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute cursor-pointer text-center border-red-400  border-0"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)", // Ez is középre igazítja az egyes elemeket
            }}
            //onClick={() => navigate(item.path)} // Navigálás az adott path-ra
          >
            <div className="hidden hexagon rounded- border-primary h-20 w-24 flex items-center justify-center bg-950 opacity-100 hover:bg-600">
              {<item.icon className="text-3xl text-primary" />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HexagonalIconList2;
