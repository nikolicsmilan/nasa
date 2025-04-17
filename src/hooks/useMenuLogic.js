// pl. hooks/useMenuLogic.js
import { MyConsoleContext } from "../context/ConsoleContext"; // Csak a setSubButtons/setNameConsole miatt!

export const useMenuLogic = (united,setSubButtons) => {
  // Csak azt veszi ki a contextből, ami KELL!
  const { setNameConsole, } = MyConsoleContext();

  const handleMenuChange = (name) => {
    if (!united) return;
    const selectedItem = united.find((item) => item.name === name);
    if (selectedItem) {
      setSubButtons(selectedItem.data);
      setNameConsole(name);
    }
  };

  return { handleMenuChange };
};