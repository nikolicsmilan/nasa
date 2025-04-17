import{useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { myAnimation3 } from "../../../utils/motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import BottomConsole from "../../../components/consoles/BottomConsole";
import { useDataVisualization } from "../../../hooks/use-datavisualization";
import MainConsole from "../../../components/consoles/views/MainConsole";
import useWindowSize from "../../../hooks/use-windowsize";
import { leftasideconsolesource,dashboradsourceforMobile } from "../../../locales/localdata";
import { useMenuLogic } from "../../../hooks/useMenuLogic";
const MobileAsteroide = () => {
  const { width, height } = useWindowSize();
  const [united,setUnited] = useState([...dashboradsourceforMobile,...leftasideconsolesource, ]);
    const [subButtons, setSubButtons] = useState(dashboradsourceforMobile.data);
  const { nameconsole,  mobiletoggle,  } = MyConsoleContext();

  const { handleClick } = useDataVisualization();
  const {  handleMenuChange } = useMenuLogic(united,setSubButtons);
  console.log(united.map((item) => item.name));
  return (
    <main className="app transition-all ease-in border-0 border-lime-400 relative z-50 w-screen">
      <AnimatePresence>
        <div className="relative  border-0 p-2 border-sky-400 flex flex-col items-center justify-center my-1 rounded-2xl w-full h-full">
          <div className=" flex justify-center items-center my-0 w-full h-full border-0 border-purple-400">
            <div className="relative border-0 border-sky-400 h-full w-full">
              {mobiletoggle && (
                <motion.div
                  className=" absolute top-0   z-50   rounded m-2 flex flex-col 
                   items-center justify-start border-0 border-red-400"
                  {...myAnimation3("right", width, height)}
                >
                  {united.map((item, index) => (
                    <div
                      key={item.name || index} 
                      className="cursor-pointer text-3xl text-info m-2 flex flex-col justify-center"
                      onClick={() => handleMenuChange(item.name)}
                    >
                      <span className="glowy-button-5 border-0 border-primary  shadow flex justify-center items-center h-12 w-12 text-4xl text-primary">
                        {<item.icon />}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
              <div className="border-0 h-full p-4 border-orange-400 flex flex-col  justify-center items-center  w-full ">
                <MainConsole />
              </div>
            </div>
          </div>

          {mobiletoggle && (
            <div className=" absolute flex flex-col  items-center  border-0 h-32 border-sky-400  w-96 my-0">
              <motion.div
                className=" cursor-pointer realtive  z-50"
                {...myAnimation3("up", width, height)}
              >
                <div className="  w-80 h-28 rounded mx-2 flex flex-wrap flex-row items-center justify-center border-0">
                  <BottomConsole
                    buttons={subButtons}
                    handleClick={handleClick}
                    nameconsole={nameconsole}
                  />
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </AnimatePresence>
    </main>
  );
};

export default MobileAsteroide;
