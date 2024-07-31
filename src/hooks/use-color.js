import { MyConsoleContext } from "../context/ConsoleContext";

export const useColor = (nameconsole) => {
  const { statusTable, filterTable } = MyConsoleContext();

  const colorIze = (item) => {
    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" ||
        nameconsole === "filter" ||
        nameconsole === "datatype")
    ) {
      return "bg-stone-500 cursor-not-allowed";
    } else if (
      nameconsole === "filter" &&
      filterTable.displayMode === item.title
    ) {
      return "bg-600";
    } else if (statusTable[nameconsole] === item.title) {
      return "bg-600";
    } else {
      return "bg-950";
    }
  };

  return { colorIze };
};
