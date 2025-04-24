/*import { MyConsoleContext } from "../../../context/ConsoleContext";

import TypingAnimation from "../../../components/TypingAnimation/TypingAnimation";
const InfoPanel = () => {
  const { statusTable, message } = MyConsoleContext();

  return (
    <div className="border-0 p-1 border-red-400 top-20 relative">
      <TypingAnimation customcontent={message.description} />
      <div className="hidde flex flex-col w-64 text-primary relative top-[40px]">
        {Object.entries(statusTable).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value.toString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPanel;*/


// src/pages/Graph/components/InfoPanel.jsx

const InfoPanel = ({ children }) => {
  return (
    // Kitölti a szülőjét (GraphDesktop jobb oldali div)
    // Eltávolítva: top-20 relative
    <div className="border-0 p-1 w-full h-full flex flex-col"> {/* w-full h-full flex flex-col hozzáadva */}
      {children}
    </div>
  );
};
export default InfoPanel;




//InfoPanel