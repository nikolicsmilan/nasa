import { NavLink } from "react-router-dom";
const NavBarSimpleItem = ({ item, index, itemRefs, handleMouseEnter }) => {
  return (
    <div
      onMouseEnter={() => {
        handleMouseEnter(itemRefs.current[index]);
      }}
      className="border-0 p-2 m-0 cursor-pointer"
      ref={(el) => (itemRefs.current[index] = el)}
    >
      <NavLink
        to={item.route} // A link cél útvonala.
        // A className egy függvény, amely megkapja az `isActive` állapotot.
        className={({ isActive }) =>
          // Template literal a class nevek dinamikus összefűzéséhez.
          `p-1 flex items-center space-x-1 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 ${
            // Alap stílusok: padding, flex, térköz, betűméret, betűvastagság, átmenet.
            isActive
              ? "text-white" // Ha az útvonal aktív, a szöveg fehér.
              : "text-primary hover:text-white" // Ha inaktív, a szöveg 'primary', hoverre fehér.
          }`
        }
      >
        {" "}
        {item.title}
      </NavLink>
    </div>
  );
};

export default NavBarSimpleItem;
