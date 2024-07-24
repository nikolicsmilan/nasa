import React from "react";
import { MyConsoleContext } from "../context/ConsoleContext";

const useDatafilter = () => {
  const { sumObject, filteredData, setFilteredData,setActualtypedata,actualTypeData } = MyConsoleContext();


  const filterData = (attribute, upOrDown, piece) => {
    // Rendezzük az adatokat a megadott attribútum és irány alapján
    const sortedData = [...sumObject.data].sort((a, b) => {
      if (upOrDown === 'up') {
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

  // Hookot használó komponenseknek visszaadjuk a szűrő funkciót
  return { filterData };


};

export default useDatafilter;
