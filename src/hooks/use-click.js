/*import { MyConsoleContext } from "../context/ConsoleContext";

export const useClick = (nameconsole) => {
  const {
    setStatusTable,
    setFilterTable,
    filterTable,
    statusTable,
  }= MyConsoleContext();

  const handleClick = (newValues) => {
    const {
      icon,
      description,
      title,
      sign = statusTable.sign,
      piece,
      ...rest
    } = newValues;

    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" ||
        nameconsole === "filter" ||
        nameconsole === "datatype")
    ) {
      return; // Do nothing if dashboard is not "graph" and this is the "graph", "filter", or "datatype" console
    }

    if (nameconsole === "filter") {
      setFilterTable((prevFilterTable) => {
        let newPiece = prevFilterTable.piece;
        if (title === "plusone") {
          newPiece += 1;
        } else if (title === "minusone") {
          newPiece -= 1;
        }
        return {
          ...prevFilterTable,
          displayMode: title === "plusone" || title === "minusone" ? prevFilterTable.displayMode : title,
          piece: newPiece,
        };
      });
    } else {
      setStatusTable((prevStatusTable) => ({
        ...prevStatusTable,
        [nameconsole]: title,
        sign: sign,
        ...rest,
      }));
    }
  };

  return { handleClick };
};

*/
/*
import { MyConsoleContext } from "../context/ConsoleContext";

const graphConfigurations = [
  { name: "area", min: 5, max: 7 },
  { name: "bar", min: 10, max: 100 },
  { name: "line", min: 10, max: 100 },
  { name: "pie", min: 1, max: 20 },
  { name: "radar", min: 5, max: 30 },
  { name: "radialBar", min: 10, max: 60 },
  { name: "scatter", min: 5, max: 40 },
  { name: "funnel", min: 1, max: 25 },
];

export const useClick = (nameconsole) => {
  const {
    setStatusTable,
    setFilterTable,
    filterTable,
    statusTable,
  } =  MyConsoleContext();

  const handleClick = (newValues) => {
    const {
      icon,
      description,
      title,
      sign = statusTable.sign,
      piece,
      ...rest
    } = newValues;

    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" ||
        nameconsole === "filter" ||
        nameconsole === "datatype")
    ) {
      return; // Do nothing if dashboard is not "graph" and this is the "graph", "filter", or "datatype" console
    }

    if (nameconsole === "filter") {
      setFilterTable((prevFilterTable) => {
        let newPiece = prevFilterTable.piece;
        if (title === "plusone") {
          // Find the corresponding configuration for the graph
          const config = graphConfigurations.find(
            (config) => config.name === statusTable.graph
          );
          if (config && newPiece < config.max) {
            newPiece += 1;
          }
        } else if (title === "minusone") {
          // Find the corresponding configuration for the graph
          const config = graphConfigurations.find(
            (config) => config.name === statusTable.graph
          );
          if (config && newPiece > config.min) {
            newPiece -= 1;
          }
        }
        return {
          ...prevFilterTable,
          displayMode: title === "plusone" || title === "minusone" ? prevFilterTable.displayMode : title,
          piece: newPiece,
        };
      });
    } else {
      setStatusTable((prevStatusTable) => ({
        ...prevStatusTable,
        [nameconsole]: title,
        sign: sign,
        ...rest,
      }));
    }
  };

  return { handleClick };
};*/














import { MyConsoleContext } from "../context/ConsoleContext";



export const useClick = (nameconsole) => {
  const {
    setStatusTable,
    setFilterTable,
    filterTable,
    statusTable,
    graphConfigurations
  } = MyConsoleContext();

  const handleClick = (newValues) => {
    const {
      title,
      sign = statusTable.sign,
    } = newValues;

    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" ||
        nameconsole === "filter" ||
        nameconsole === "datatype")
    ) {
      return; // Do nothing if dashboard is not "graph" and this is the "graph", "filter", or "datatype" console
    }

    if (nameconsole === "filter") {
      setFilterTable((prevFilterTable) => {
        let newPiece = prevFilterTable.piece;
        const config = graphConfigurations.find(
          (config) => config.name === statusTable.graph
        );
        if (!config) return prevFilterTable; // No config found

        if (title === "plusone" && newPiece < config.max) {
          newPiece += 1;
        } else if (title === "minusone" && newPiece > config.min) {
          newPiece -= 1;
        }
        return {
          ...prevFilterTable,
          displayMode: title === "plusone" || title === "minusone" ? prevFilterTable.displayMode : title,
          piece: newPiece,
        };
      });
    } else {
      setStatusTable((prevStatusTable) => ({
        ...prevStatusTable,
        [nameconsole]: title,
        sign: sign
        // Other properties if needed
      }));
    }
  };

  return { handleClick };
};
