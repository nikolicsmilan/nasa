import Super3dConsole from "../../../components/consoles/views/Super3dConsole";
import useWindowSize from "../../../hooks/use-windowsize";
const ControlPanel = ({ graphdatasource={name:"hozé"} }) => {
  const { width, height } = useWindowSize();

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200,
    "2xl": 1700,
  };
  return (
    <aside
      className="   text-primary 
        flex flex-col border-0 border-primary  mx-0
         bg-gradient2 top-20 relative overflow-y-auto opacity-100 z-50 rounded"
      style={
        width >= breakpoints["2xl"]
          ? {  height: height - 150 } // 2XL gets a 150 adjustment
          : width >= breakpoints.xl
          ? { height: height - 50 } // XL gets a 50 adjustment
          : {  height: height - 250 } // Other sizes
      }
    >
     <div className="flex flex-col   border-lime-400  ">
   
     {
          graphdatasource.map((item, index) => (
            <div
              key={index}
              className="relative border-400  my-1 border-0 p-2 "
            >
              <Super3dConsole
                nameconsole={item.name}
                data={item.data}
                description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
              />
            </div>
          ))}
      </div>
   
    </aside>
  );
};

export default ControlPanel;
