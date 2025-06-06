import AsideConsole from "./AsideConsole";
import { MyConsoleContext } from "../../../context/ConsoleContext";
// It only separates the data, indicating which component receives it
const LeftConsolesAside = () => {
  const { leftasideconsole,filterTable } = MyConsoleContext();
  return (
    <div>
      <AsideConsole source={leftasideconsole} 
      />
       <div className="hidden flex flex-col w-96 text-primary relative top-[80px] px-10">
          {Object.entries(filterTable).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value.toString()}
            </div>
          ))}
        </div>
    </div>
  );
};

export default LeftConsolesAside;
