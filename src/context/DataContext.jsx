// --- Importok ---
// Alapvető React funkciók importálása: Context létrehozása, állapotkezelés, mellékhatások és optimalizálás.
import { useContext, createContext, useState, useEffect, useMemo, useCallback } from "react";
// Egyedi 'useInfo' hook importálása, ami specifikus adatlekérési logikát tartalmaz.
import { useInfo } from "../hooks/use-info";
// Statikus hangfájl importálása, amit az alkalmazás használni fog.
import clicksound from "../assets/sound/click.mp3";

// --- Context Létrehozása ---
// Létrehoz egy 'Context' objektumot. Ez egy "csatorna", amin keresztül az adatok áramolhatnak.
const DataContext = createContext();

// --- Provider Komponens ---
// Ez egy React komponens, aminek a feladata, hogy a 'DataContext' "csatornát" feltöltse adatokkal.
// A '{ children }' prop reprezentálja az összes komponenst, ami ezen Provider-en belül lesz elhelyezve.
export const DataContextProvider = ({ children }) => {
  // --- Állapotok (State-ek) definiálása Hook-okkal ---
  // Fix értékek, a settert üresen hagyva, hogy a kód ne törjön el, ha egy komponens megpróbálná hívni.
  const windowSize = { width: 1024, height: 768 };
  const setWindowSize = () => {};
  // A 'useState' egy Hook. Létrehoz egy 'toggle' nevű állapotváltozót 'true' kezdőértékkel, és egy 'setToggle' függvényt a módosítására.
  const [toggle, setToggle] = useState(true);
  // Hasonlóan az előzőhöz, egy másik logikai (boolean) állapot.
  const [subscribeToggle, setSubscribeToggle] = useState(false);
  // A beállítások panel nyitott/zárt állapotát tárolja.
  const [settingsOpen, setSettingsOpen] = useState(false);
  // Az aktuálisan kiválasztott menüpont nevét tárolja a beállításokon belül.
  const [settings, setSettings] = useState("Menu");
  // Egy objektum, ami a felhasználó beállításait tárolja (stílus, hang, nyelv).
  const [users, setUsers] = useState({
    style: "sky",
    sound: "on",
    language: "en",
  });
  // A kiválasztott stílus külön állapotban, valószínűleg egy UI elem vezérléséhez.
  const [choosenStyle, setChoosenStyle] = useState("sky");
  // A 'useInfo' egyedi hook meghívása. Visszaad függvényeket, amikkel elindítható az adatgyűjtés.
  const { updateBrowserInfo, updateIpAddress, updateGPS } = useInfo();
  // Állapot a böngészőadatok tárolására, kezdetben 'null'.
  const [browserInfo, setBrowserInfo] = useState(null);
  // Állapot az IP-cím tárolására.
  const [ipAddress, setIPAddress] = useState("");
  // Állapot a GPS szélességi adat tárolására.
  const [latitude, setLatitude] = useState(null);
  // Állapot a GPS hosszúsági adat tárolására.
  const [longitude, setLongitude] = useState(null);
  // Állapot a betöltött Audio objektumok tárolására.
  const [sound, setSound] = useState({});

  // --- Memoizált Függvény (useCallback) ---
  // A 'useCallback' Hook biztosítja, hogy a 'playSoundClick' függvény referenciája ne változzon minden rendereléskor.
  // Csak akkor jön létre újra a függvény, ha a függőségi listában ([sound, users]) lévő értékek egyike megváltozik.
  // Ez optimalizálási szempontból fontos a Context-ben.
  const playSoundClick = useCallback(() => {
    // Ellenőrzi, hogy a hang be van-e kapcsolva és létezik-e a lejátszandó audio objektum.
    if (sound && sound.click && users?.sound === "on") {
      sound.click.currentTime = 0; // Visszatekeri a hangot az elejére.
      sound.click.volume = 0.2; // Beállítja a hangerőt.
      sound.click.play(); // Lejátssza a hangot.
    }
  }, [sound, users]); // Függőségi lista: a függvény ezen értékek változására frissül.

  // --- Mellékhatások Kezelése (useEffect) ---
  // Az 'useEffect' Hook mellékhatások (pl. API hívás, adatbázis-művelet) futtatására való.
  // Ez a hook lefut a komponens első renderelése után, és minden alkalommal, amikor a függőségi listában lévő függvényreferencia megváltozik.
  useEffect(() => {
    updateBrowserInfo(setBrowserInfo); // Elindítja a böngészőadatok lekérését.
    updateIpAddress(setIPAddress);     // Elindítja az IP-cím lekérését.
    updateGPS(setLatitude, setLongitude); // Elindítja a GPS adatok lekérését.
  }, [updateIpAddress, updateGPS, updateBrowserInfo]); // Függőségi lista.

  // Ez a 'useEffect' csak egyszer fut le, a komponens beillesztése (mount) után, mert a függőségi listája üres ('[]').
  useEffect(() => {
    // Aszinkron függvény a hangfájlok betöltésére.
    const loadHangok = async () => {
      try {
        // Létrehoz egy új Audio objektumot a böngészőben.
        const click = new Audio(clicksound);
        // Beállítja a 'sound' állapotot a betöltött Audio objektummal.
        setSound({
          click,
        });
      } catch (error) {
        console.error("Hiba a hangfájlok betöltésekor", error);
      }
    };
    loadHangok(); // Meghívja a betöltő függvényt.
  }, []); // Az üres függőségi lista biztosítja az egyszeri lefutást.

  // --- Memoizált Context Érték (useMemo) ---
  // A 'useMemo' Hook a Provider-nek átadott 'value' objektumot memoizálja (gyorsítótárazza).
  // Ez egy kritikus optimalizációs lépés: az objektum csak akkor jön létre újra, ha valamelyik függősége megváltozik.
  // Enélkül minden rendereléskor új objektum jönne létre, ami az összes Context-et használó komponenst feleslegesen újrarenderelné.
  const contextValue = useMemo(() => ({
    // Itt gyűjtjük össze az összes állapotot és függvényt, amit meg akarunk osztani.
    windowSize,
    setWindowSize,
    toggle,
    setToggle,
    settingsOpen,
    setSettingsOpen,
    settings,
    setSettings,
    users,
    setUsers,
    choosenStyle,
    setChoosenStyle,
    browserInfo,
    setBrowserInfo,
    ipAddress,
    setIPAddress,
    latitude,
    longitude,
    subscribeToggle,
    setSubscribeToggle,
    playSoundClick // Az optimalizált, 'useCallback'-be csomagolt függvény.
  }), [
    // Függőségi lista a 'useMemo'-nak. Ha ezen értékek bármelyike változik, a 'contextValue' újraszámolódik.
    windowSize, toggle, settingsOpen, settings, users, choosenStyle,
    browserInfo, ipAddress, latitude, longitude, subscribeToggle, setWindowSize,
    setToggle, setSettingsOpen, setSettings, setUsers, setChoosenStyle,
    setBrowserInfo, setIPAddress, setSubscribeToggle, playSoundClick
  ]);

  // --- Visszatérési érték (JSX) ---
  // Visszaadja a 'DataContext.Provider' komponenst.
  // A 'value' prop-nak átadja a memoizált 'contextValue' objektumot.
  // A '{children}' biztosítja, hogy a Provider-en belül lévő összes komponens megkapja ezt az értéket.
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

// --- Consumer Hook ---
// Ez egy egyszerűsített, egyedi hook a Context értékének lekérésére.
// Így a komponenseknek nem kell a 'useContext(DataContext)'-ot írniuk, elég a 'MyDataContext()'-ot hívni.
export const MyDataContext = () => {
  // A 'useContext' Hook "bekapcsolódik" a 'DataContext' csatornára és visszaadja annak aktuális értékét ('contextValue').
  return useContext(DataContext);
};

/*const {
  browser: { name: browserName },
 
} = browserInfo;*/
/*
const { browser: { name: browserName } = {} } = browserInfo;

// Ez egy üres karakterláncot ad a browserName-nek, ha a browserInfo null vagy üres*/