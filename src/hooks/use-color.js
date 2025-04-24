// src/hooks/use-color.js
// Nincs többé szükség a MyConsoleContext importra

// A hook most argumentumként kapja a config-ot és a nameconsole-t
export const useColor = (config, nameconsole) => {
  // A graphConfigurations-t már nem itt kezeljük, a config releváns részeit használjuk
  // A régi belső config state és useEffect eltávolítva

  const disabled = "bg-stone-500 cursor-not-allowed"; // Letiltott stílus
  const chosen = "bg-primary text-white";            // Kiemelt/választott stílus (pl. aktív gomb)
  const defaultColor = "bg-tertiary text-info";      // Alapértelmezett gomb stílus

  // A colorIze függvény egy adott gomb item-et kap paraméterként
  const colorIze = (item) => {
    // 1. Ellenőrzés: Van-e érvényes config objektum? Ha nincs, alapértelmezett színt adunk.
    if (!config) {
      console.warn("useColor: Config object is missing!");
      return defaultColor;
    }

    // 2. Letiltási logika (Opcionális - eredeti logika alapján)
    // Tiltsuk le az 'inc'/'desc' gombokat, ha a graphType 'bar'?
    // Ezt át lehet gondolni, lehet, hogy felesleges.
    if (config.graphType === "bar" && nameconsole === "filter" && ["inc", "desc"].includes(item.title)) {
      // return disabled; // Ha szükséges a tiltás
    }

    // 3. Kiválasztott állapot ellenőrzése
    switch (nameconsole) {
      case 'datatype':
        if (config.dataType === item.title) return chosen;
        break;
      case 'graph':
        if (config.graphType === item.title) return chosen;
        break;
      case 'filter': // Itt már csak 'inc' és 'desc' van
        // Ellenőrizzük, hogy a gomb címe megegyezik-e a configban lévő rendezési iránnyal
        // (Figyelem: item.title 'inc'/'desc', config.sortOrder 'asc'/'desc')
        if ((item.title === 'inc' && config.sortOrder === 'asc') || (item.title === 'desc' && config.sortOrder === 'desc')) {
          return chosen;
        }
        break;
      default:
        // Ismeretlen csoport esetén alapértelmezett
        break;
    }

    // 4. Ha egyik fenti feltétel sem teljesült, alapértelmezett színt adunk
    return defaultColor;
  };

  return { colorIze };
};






