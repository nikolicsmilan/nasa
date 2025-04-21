// import { MyConsoleContext } from "../../../context/ConsoleContext"; // <<<--- ELTÁVOLÍTVA
import TypingAnimation from "../../../components/TypingAnimation/TypingAnimation";

// Fogadja az ÚJ 'config' propot 'statusTable' helyett
const GraphInfoContent = ({ message, config }) => {
  // const { statusTable, message } = MyConsoleContext(); // <<<--- ELTÁVOLÍTVA

  // Null check a message és config objektumokra a biztonság kedvéért
  const description = message?.description || "Loading message...";
  const configEntries = config ? Object.entries(config) : [];

  return (
    <>
      {/* Az üzenet megjelenítése marad */}
      <TypingAnimation customcontent={description} />

      {/* A config objektum kiírása (ha debuggolni akarod) */}
      {/* A 'hidden' class-t eltávolítottam, hogy lásd, de visszaállíthatod */}
      <div className="flex flex-col w-64 text-primary relative top-[40px] text-xs overflow-auto max-h-60 shadow-2xl mt-2 p-2 ">
        <p className="font-bold text-xl mb-1">Current Config:</p>
        {/* Most a 'config' objektumot járjuk be */}
        {configEntries.map(([key, value]) => (
          <div className= "text-lg " key={key}>
            <strong className="text-secondary ">{key}:</strong> {value?.toString() ?? 'N/A'}
          </div>
        ))}
      </div>
    </>
  );
};

export default GraphInfoContent;