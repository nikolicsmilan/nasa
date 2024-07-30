import { useState, useEffect } from "react";
import { calculateStatistics } from "../utils/calculateStatistics";

const initFilterTable = {
  min: "",
  max: "",
  avg: "",
  displayMode: "max",
};

export const useFilterTable = (sumObject) => {
  const [filterTable, setFilterTable] = useState(initFilterTable);

  useEffect(() => {
    const { min, max, avg } = calculateStatistics(sumObject);
    setFilterTable({
      min: min.toFixed(2),
      max: max.toFixed(2),
      avg: avg.toFixed(2),
      displayMode: filterTable.displayMode,
    });
  }, [sumObject]);

  return [filterTable, setFilterTable];
};

/*
  const filterData = (attribute, upOrDown, piece) => {
    // Rendezzük az adatokat a megadott attribútum és irány alapján
    const sortedData = [...sumObject.data].sort((a, b) => {
      if (upOrDown === "up") {
        return a[attribute] - b[attribute];
      } else {
        return b[attribute] - a[attribute];
      }
    });

    // Visszaadjuk az első 'piece' elemet
    const filtered = sortedData.slice(0, piece);

    // Beállítjuk a szűrt adatokat
    setFilteredData(filtered);
  };

*/
