import { NavLink  } from "react-router-dom";
//import { useColor } from "../../../hooks/use-color";

const DesktopMenuAsteroide = ({ navigationData }) => {
  //const { colorIze } = useColor("dashboard");

  return (
    <div
      className={` border-0 pt-2 border-sky-400  
      text-dark flex flex-col items-center text-3xl 
        `}
    >
      <div className="w-full glowy-button-   flex flex-row flex-wrap 
       border-0 border-lime-400 relative z-10 cursor-pointer h-20 ">
        {navigationData.map((item, index) => (
          <NavLink
            key={index}
            to={item.route} // Használjuk a route mezőt
            className={({ isActive }) =>
              `flex flex-col items-center justify-center 
               glowy-button-5 group relative border-0 p-0 rounded m-2
               hover:bg-600 h-16 w-20 text-primary cursor-pointer 
               ${isActive ? "bg-600 " : ""}`
            }
          >
            {<item.icon />}
            <div className=" ml-2 hidde group-hover:block  text-white 
            text-sm rounded  z-50">
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenuAsteroide;
//w-full glowy-button-   flex flex-row flex-wrap text-3xl my-0 border-2 border-lime-400 relative z-10 cursor-pointer
