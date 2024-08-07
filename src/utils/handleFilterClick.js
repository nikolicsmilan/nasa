export const handleFilterClick = (
  title,
  setFilterTable,
  graphConfigurations,
  statusTable
) => {
  if (
    statusTable.graph === "bar" &&
    (title === "inc" || title === "desc" || title === "all")
  ) {
    return; // Not refresh this is disable mode
  }
  setFilterTable((prevFilterTable) => {
    let newPiece = prevFilterTable.piece;
    const config = graphConfigurations.find(
      (config) => config.name === statusTable.graph
    );
    if (!config) return prevFilterTable;

    if (title === "plusone" && newPiece < config.max) {
      newPiece += 1;
    } else if (title === "minusone" && newPiece > config.min) {
      newPiece -= 1;
    }
    return {
      ...prevFilterTable,
      displayMode:
        title === "plusone" || title === "minusone"
          ? prevFilterTable.displayMode
          : title,
      piece: newPiece,
    };
  });
};
