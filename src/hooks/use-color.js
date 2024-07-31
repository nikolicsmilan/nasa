import { useEffect, useState } from "react";
import { MyConsoleContext } from "../context/ConsoleContext";

export const useColor = (nameconsole) => {
  const { statusTable, filterTable, graphConfigurations } = MyConsoleContext();
  const [config, setConfig] = useState(() => graphConfigurations.find(config => config.name === statusTable.graph));

  useEffect(() => {
    setConfig(graphConfigurations.find(config => config.name === statusTable.graph));
  }, [statusTable.graph, graphConfigurations]);

  const disabled = "bg-stone-500 cursor-not-allowed";
  const chosen = "bg-600";
  const defaultColor = "bg-950";

  const colorIze = (item) => {
    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" || nameconsole === "filter" || nameconsole === "datatype")
    ) {
      return disabled;
    } else if (nameconsole === "filter" && (item.title === "plusone" || item.title === "minusone")) {
      if (config) {
        if (item.title === "plusone" && filterTable.piece >= config.max) {
          return disabled;
        } else if (item.title === "minusone" && filterTable.piece <= config.min) {
          return disabled;
        }
      }
      return defaultColor;
    } else if (nameconsole === "filter" && filterTable.displayMode === item.title) {
      return chosen;
    } else if (statusTable[nameconsole] === item.title) {
      return chosen;
    } else {
      return defaultColor;
    }
  };

  return { colorIze };
};






