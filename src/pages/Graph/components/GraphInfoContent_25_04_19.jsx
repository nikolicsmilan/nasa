//import { MyConsoleContext } from "../../../context/ConsoleContext"; // Ellenőrizd az utat
import TypingAnimation from "../../../components/TypingAnimation/TypingAnimation"; // Ellenőrizd az utat

const GraphInfoContent = ({message,statusTable}) => {
  // Kontextusból származó adatok lekérése
 // const { statusTable, message } = MyConsoleContext();

  return (

    <> 
      <TypingAnimation customcontent={message.description} />
      
      <div className="hidden flex flex-col w-64 text-primary relative top-[40px]">
        {/* Objektum bejárása és megjelenítése */}
        {Object.entries(statusTable).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value.toString()}
          </div>
        ))}
      </div>
    </>
  );
};

export default GraphInfoContent;