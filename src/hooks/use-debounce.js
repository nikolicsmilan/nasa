import { useState, useEffect } from 'react';

// Ez a hook egy értéket kap, és csak akkor adja vissza a frissített verziót,
// ha 'delay' ideig nem történt változás.
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Timer beállítása, ami 'delay' után frissíti az értéket
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Nagyon fontos: a cleanup függvény törli a timer-t,
    // ha a 'value' vagy a 'delay' megváltozik, mielőtt a timer lejárna.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Csak akkor fut le újra, ha az érték vagy a késleltetés változik

  return debouncedValue;
}