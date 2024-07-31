import { MyConsoleContext } from "../context/ConsoleContext";

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
