// depend by displayMode return all array or one by one: all || max | avg | min
export const createTopBottomAverageData = (
  top10,
  bottom10,
  average10,
  displayMode,
  sign
) => {
  return top10.map((item, index) => ({
    name: (index + 1).toString(),
    max: displayMode === "max" || displayMode === "all" ? item[sign] : null,
    avg:
      displayMode === "avg" || displayMode === "all"
        ? average10[index]
          ? average10[index][sign]
          : null
        : null,
    min:
      displayMode === "min" || displayMode === "all"
        ? bottom10[index]
          ? bottom10[index][sign]
          : null
        : null,
  }));
};

