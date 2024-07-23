import { useContext, useCallback } from "react";
import { MyConsoleContext } from "./path-to-context-file";

const useStatusTable = () => {
  const { statusTable, setSatusTable } = MyConsoleContext();

  const updateStatusTable = useCallback((newItem) => {
    setSatusTable((prevStatusTable) => {
      let hasChanged = false;
      const updatedStatusTable = { ...prevStatusTable };

      // Különböző értékek alapján végrehajtott műveletek
      if (newItem.dashboard !== prevStatusTable.dashboard) {
        updatedStatusTable.dashboard = newItem.dashboard;
        hasChanged = true;
        // Add additional logic here if needed
      }

      if (newItem.graph !== prevStatusTable.graph) {
        updatedStatusTable.graph = newItem.graph;
        hasChanged = true;
        // Add additional logic here if needed
      }

      if (newItem.filter !== prevStatusTable.filter) {
        updatedStatusTable.filter = newItem.filter;
        hasChanged = true;
        // Add additional logic here if needed
      }

      if (newItem.piece !== prevStatusTable.piece) {
        updatedStatusTable.piece = newItem.piece;
        hasChanged = true;
        // Add additional logic here if needed
      }

      if (newItem.sourcetype !== prevStatusTable.sourcetype) {
        updatedStatusTable.sourcetype = newItem.sourcetype;
        hasChanged = true;
        // Add additional logic here if needed
      }

      if (newItem.animations !== prevStatusTable.animations) {
        updatedStatusTable.animations = newItem.animations;
        hasChanged = true;
        // Add additional logic here if needed
      }

      // Csak akkor frissítjük a state-et, ha ténylegesen változott valami
      return hasChanged ? updatedStatusTable : prevStatusTable;
    });
  }, [setSatusTable]);

  return updateStatusTable;
};

export default useStatusTable;
