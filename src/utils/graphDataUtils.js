/**
 * Segédfüggvények a Graph komponens adatainak feldolgozásához.
 * Ezek tiszta függvények, nem használnak React hookokat.
 */

/**
 * Értelmez egy nyers értéket a megadott adatkulcs alapján (szám vagy dátum).
 * @param {string | number | undefined | null} rawValue A nyers érték.
 * @param {string} dataKey Az adatkulcs ('last_obs' speciális kezelést kap).
 * @returns {Date | number | null} A parse-olt érték (Date vagy number), vagy null, ha érvénytelen.
 */
export const parseGraphValue = (rawValue, dataKey) => {
    // 1. Gyors kilépés, ha a bemenet eleve hiányzik
    if (rawValue === null || rawValue === undefined) {
      return null;
    }
  
    // 2. Dátumként próbáljuk értelmezni, ha a kulcs 'last_obs'
    if (dataKey === "last_obs") {
      const date = new Date(rawValue);
      // Visszaadjuk a Date objektumot, CSAK HA érvényes dátum lett belőle.
      // Az `!isNaN(date.getTime())` ellenőrzi, hogy nem "Invalid Date"-e.
      return date instanceof Date && !isNaN(date.getTime()) ? date : null;
    }
    // 3. Minden más esetben számként próbáljuk értelmezni
    else {
      const num = parseFloat(rawValue);
      // Visszaadjuk a számot, CSAK HA érvényes szám lett belőle (nem NaN).
      return !isNaN(num) ? num : null;
    }
  };
  
  /**
   * Kiszűri azokat az elemeket egy adat tömbből, amelyeknek van érvényes _parsedValue tulajdonsága.
   * Feltételezi, hogy a map művelet már hozzáadta a _parsedValue kulcsot.
   * @param {Array<Object>} data Az adat tömb, ahol minden objektumnak van _parsedValue kulcsa.
   * @returns {Array<Object>} A szűrt tömb, csak az érvényes elemekkel.
   */
  export const filterValidData = (data) => {
    if (!Array.isArray(data)) return [];
    // A filter már eleve új tömböt ad vissza
    return data.filter(
      (item) => item?._parsedValue !== null && !isNaN(item._parsedValue) // isNaN kezeli a NaN számokat és érvénytelen dátumokat is
    );
  };
  
  /**
   * Rendezi az adathalmazt a _parsedValue alapján, a megadott sorrend szerint.
   * Fontos: Új tömböt ad vissza, nem módosítja az eredetit.
   * @param {Array<Object>} data A szűrt adat tömb (_parsedValue kulccsal).
   * @param {'asc' | 'desc'} sortOrder A rendezési sorrend.
   * @returns {Array<Object>} Az új, rendezett tömb.
   */
  export const sortDataByParsedValue = (data, sortOrder = 'desc') => {
    if (!Array.isArray(data)) return [];
    // Másolat készítése a sort() mellékhatásának elkerülése végett
    return [...data].sort((a, b) => {
      const valA = a._parsedValue;
      const valB = b._parsedValue;
  
      if (valA === null || valB === null) { // null értékek kezelése (lehetőleg a végére)
          return valA === null ? 1 : -1;
      }
  
      // Normál összehasonlítás
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  };
  
  /**
   * Levágja az adathalmazt a megadott limitre.
   * @param {Array<Object>} data A rendezett adat tömb.
   * @param {number} displayLimit A maximálisan megjelenítendő elemek száma.
   * @returns {Array<Object>} A levágott (slice-olt) tömb.
   */
  export const limitData = (data, displayLimit) => {
    if (!Array.isArray(data)) return [];
    // Biztonsági ellenőrzés a limitre
    const limit = typeof displayLimit === 'number' && !isNaN(displayLimit) && displayLimit >= 0
      ? displayLimit
      : data.length; // Ha a limit érvénytelen, ne vágjon semmit
    // A slice már eleve új tömböt ad vissza
    return data.slice(0, limit);
  };