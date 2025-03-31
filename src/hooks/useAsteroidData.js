// hooks/useAsteroidData.js
import { useState, useEffect } from 'react';

function useAsteroidData() {
  const [data, setData] = useState([
    { id: 1, name: 'Asteroid A', diameter: 100 },
    { id: 2, name: 'Asteroid B', diameter: 200 },
    { id: 3, name: 'Asteroid C', diameter: 300 },
  ]);

  useEffect(() => {
    // Itt lenne a valódi adatlekérési logika
    // Például:
    // fetch('https://api.nasa.gov/...')
    //   .then(response => response.json())
    //   .then(data => setData(data));

    // Most csak a dummy adatokat használjuk
  }, []);

  return data;
}

export default useAsteroidData;