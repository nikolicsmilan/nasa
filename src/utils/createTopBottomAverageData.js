// depend by displayMode return all array or one by one: all || max | avg | min
/*export const createTopBottomAverageData = (
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
};*/

//el kell döntenem azt hogy kikapcsolom az aggregálást baron vagy
// megváltoztatom a Bar t hogy 3objektumú tömböt fogadjon
//ha így döntök el kell döntenem hogy az adatokat maipuláló
// fügvényeket változtatom meg vagy a BarChart komponenst ami
//fogadja ezen adatokat
/*

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
    maxFullname: displayMode === "max" || displayMode === "all" ? item.fullname : null,
    avg:
      displayMode === "avg" || displayMode === "all"
        ? average10[index]
          ? average10[index][sign]
          : null
        : null,
    avgFullname:
      displayMode === "avg" || displayMode === "all"
        ? average10[index]
          ? average10[index].fullname
          : null
        : null,
    min:
      displayMode === "min" || displayMode === "all"
        ? bottom10[index]
          ? bottom10[index][sign]
          : null
        : null,
    minFullname:
      displayMode === "min" || displayMode === "all"
        ? bottom10[index]
          ? bottom10[index].fullname
          : null
        : null,
  }));
};*/

export const createTopBottomAverageData = (
  top10,
  bottom10,
  average10,
  displayMode,
  sign
) => {
  return top10.map((item, index) => ({
    name: (index + 1).toString(),
    max: displayMode === "max" || displayMode === "all"
      ? item[sign]
        ? { name: item.fullname || "No Fullname", value: item[sign] }
        : null
      : null,
    avg: displayMode === "avg" || displayMode === "all"
      ? average10[index]
        ? { name: average10[index].fullname || "No Fullname", value: average10[index][sign] }
        : null
      : null,
    min: displayMode === "min" || displayMode === "all"
      ? bottom10[index]
        ? { name: bottom10[index].fullname || "No Fullname", value: bottom10[index][sign] }
        : null
      : null,
  }));
};

