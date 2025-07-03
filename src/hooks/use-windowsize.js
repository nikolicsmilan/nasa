/*import { useState, useEffect } from "react";
import { MyDataContext } from "../context/DataContext";

const useWindowSize = () => {
  const { windowSize, setWindowSize } = MyDataContext();
  
  // 1. HELYES useState hívás:
  // Az állapot neve 'isLandscape', a beállítója 'setIsLandscape'.
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth || 800,
        height: window.innerHeight || 600,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowSize]);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const handleOrientationChange = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
      };
      window.addEventListener("resize", handleOrientationChange);
      handleOrientationChange();
      return () => {
        window.removeEventListener("resize", handleOrientationChange);
      };
    }
  // 2. A FÜGGŐSÉG hozzáadása
  }, [setIsLandscape]);

// 3. A VISSZATÉRÉSI ÉRTÉK javítása
// Visszaadjuk mindkét értéket, valószínűleg erre volt szükséged.
 return { windowSize, isLandscape };
};

export default useWindowSize;*/
// --- Importok ---
// 'useState' az állapot tárolására, 'useEffect' a mellékhatás (eseményfigyelő) kezelésére.
import { useState, useEffect } from "react";
// Egy másik egyedi hook importálása, ami a "debounce" logikát valósítja meg (késleltetett frissítés).
import { useDebounce } from "./use-debounce"; 

// --- Egyedi Hook Definiálása ---
// Egy függvény, aminek a neve "use"-zal kezdődik. Ez jelzi a React-nek, hogy ez egy Hook.
const useWindowSize = () => {
  // --- Belső Állapot ---
  // Ez a state tárolja az ablakméretet, ami a 'resize' esemény hatására azonnal, folyamatosan frissül.
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth || 800,   // Kezdőérték az aktuális ablak szélessége, vagy egy alapértelmezett érték.
    height: window.innerHeight || 600, // Kezdőérték az aktuális ablak magassága, vagy egy alapértelmezett érték.
  });

  // --- Hook Kompozíció ---
  // A 'useDebounce' hookot használjuk, hogy a gyorsan változó 'windowSize' értékből egy lassított, "nyugodt" értéket kapjunk.
  // A komponensek ezt a debounced értéket fogják megkapni, elkerülve a túl sűrű újrarenderelést átméretezés közben.
  // A '150' a késleltetés ideje ezredmásodpercben.
  const debouncedWindowSize = useDebounce(windowSize, 150);

  // --- Mellékhatás (Eseményfigyelő) ---
  // Ez az 'useEffect' felelős a böngésző 'resize' eseményfigyelőjének beállításáért és eltávolításáért.
  useEffect(() => {
    // Ez a függvény fut le minden alkalommal, amikor a böngészőablakot átméretezik.
    const handleResize = () => {
      // Frissíti a belső, 'live' állapotot az ablak aktuális méretével.
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Hozzáadja az eseményfigyelőt a 'window' objektumhoz.
    window.addEventListener("resize", handleResize);
    // Lefuttatja egyszer a függvényt a hook első használatakor, hogy a kezdeti méret biztosan beálljon.
    handleResize();
    // Visszaad egy "cleanup" (takarító) függvényt. Ez a függvény akkor fut le, amikor a hookot használó komponens eltávolításra kerül (unmount).
    // Ezzel megakadályozzuk a memóriaszivárgást, mert az eseményfigyelő nem marad ott a háttérben.
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Az üres függőségi tömb ('[]') biztosítja, hogy az eseményfigyelő csak egyszer legyen hozzáadva és egyszer eltávolítva.

  // --- Visszatérési Érték ---
  // A hook a "nyugodt", debounced értéket adja vissza. A hookot használó komponens ezt az értéket kapja meg.
  return debouncedWindowSize;
};

// A hook exportálása, hogy más fájlokban is importálható és használható legyen.
export default useWindowSize;


