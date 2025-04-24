import { NavLink } from "react-router-dom";
import { MyDataContext } from "../../../context/DataContext";
const Consoles = ({ menupoint }) => {
  const { setSettingsOpen,playSoundClick } = MyDataContext();
  const handleClick = () => {
    playSoundClick();
    setSettingsOpen(false);
  };
  return (
   <div
      className=" border-2 h-full  border-red-400  p-0 w-full flex 
    flex-wrap  overflow-y-auto  items-start center justify-center  "
    >
      {menupoint &&
        menupoint?.map((item) => (
          <NavLink onClick={handleClick} key={item?.title} to={item?.link}>
            <div
              key={item?.id}
              className={`text-3xl glowy-button- 
             cursor-pointer rou*nded relative flex-col my-0  border-0 border-orange-400 `}
            >
              <div
                className={`flex flex-col  items-center justify-center
               glowy-button-5 group relative border-2 border-red-400  p-0 rounded m-2
                hover:bg-600 h-16 w-20
            text-primary cursor-pointer`}
              >
                {<item.icon />}
                <div
                  className=" ml-2 hidde group-hover:block  text-white 
            text-sm rounded  z-50"
                >
                  {item.title}fggdfgd
                </div>
              </div>
              {/*The shadow inside the button as a line. Its differ to the other consoles */}
            </div>
          </NavLink>
        ))}
    </div>
  );
};

export default Consoles;
