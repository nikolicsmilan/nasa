import React from "react";
import { MyConsoleContext } from "../context/ConsoleContext";

const useDatafilter = () => {
  const {
    sumObject,
    filteredData,
    setFilteredData,
    setActualtypedata,
    actualTypeData,
    statusTable
  } = MyConsoleContext();

  const filterData = (attribute, upOrDown, piece) => {
   // I NEED TO FIGURE OUT HOW MUCH DATA I WANT TO GRAPH
    //WHICH GRAPH !!!
// area | bar | line | pie | radar | radialBar | scatter | funnel
    // Visszaadjuk az első 'piece' elemet

    //Most csak az Areara koncentrálunk
    //Tulajdonképen 30 adatot jelenítünk meg
    const filtered = 0

    // Beállítjuk a szűrt adatokat
    setFilteredData(filtered);
  };

  // Hookot használó komponenseknek visszaadjuk a szűrő funkciót
  return { filterData };
};

export default useDatafilter;




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