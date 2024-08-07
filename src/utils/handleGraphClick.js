export const handleGraphClick = (
  title,
  sign,
  graphConfigurations,
  setStatusTable,
  setFilterTable
) => {
  const newGraphConfig = graphConfigurations.find(
    (config) => config.name === title
  );
  if (newGraphConfig) {
    setStatusTable((prevStatusTable) => ({
      ...prevStatusTable,
      graph: title,
      sign: sign,
    }));

    setFilterTable((prevFilterTable) => ({
      ...prevFilterTable,
      piece: newGraphConfig.max,
      displayMode: title === "bar" ? "max" : prevFilterTable.displayMode,
    }));
  }
};
