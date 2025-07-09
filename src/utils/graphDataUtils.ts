/**
 * Adattípus, ami a nyers, feldolgozás előtti elemeket reprezentálja.
 * Bármilyen kulcsot tartalmazhat, de a feldolgozáshoz használtak itt vannak definiálva.
 */
type RawDataItem = {
  // A 'h' vagy 'designation' mezők és a többi opcionális, mivel nem mindenhol használjuk őket.
  h?: string | number | null;
  designation?: string | null;
  // Index aláírás, ami megengedi, hogy bármilyen más, nem definiált kulcs is létezzen az objektumon.
  [key: string]: unknown; 
};

/**
 * Adattípus, ami a parse-olás utáni, de még a végső formázás előtti elemeket reprezentálja.
 * Kiterjeszti a RawDataItem-et egy belső, feldolgozást segítő mezővel.
 */
export type ProcessedDataItem = RawDataItem & {
  _parsedValue: Date | number | null;
};

/**
 * Értelmez egy nyers értéket a megadott adatkulcs alapján (szám vagy dátum).
 * @param rawValue A nyers érték.
 * @param dataKey Az adatkulcs ('last_obs' speciális kezelést kap).
 * @returns A parse-olt érték (Date vagy number), vagy null, ha érvénytelen.
 */
export const parseGraphValue = (rawValue: unknown, dataKey: string): Date | number | null => {
  if (rawValue === null || rawValue === undefined) {
    return null;
  }

  if (dataKey === "last_obs") {
    const date = new Date(rawValue as string | number);
    return date instanceof Date && !isNaN(date.getTime()) ? date : null;
  } else {
    const num = parseFloat(rawValue as string);
    return !isNaN(num) ? num : null;
  }
};

/**
 * Kiszűri azokat az elemeket egy adat tömbből, amelyeknek van érvényes _parsedValue tulajdonsága.
 * @param data Az adat tömb, ahol minden objektumnak van _parsedValue kulcsa.
 * @returns A szűrt tömb, csak az érvényes elemekkel.
 */
export const filterValidData = (data: ProcessedDataItem[]): ProcessedDataItem[] => {
  if (!Array.isArray(data)) return [];
  return data.filter(
    (item) => item._parsedValue !== null && !isNaN(Number(item._parsedValue))
  );
};

/**
 * Rendezi az adathalmazt a _parsedValue alapján, a megadott sorrend szerint.
 * @param data A szűrt adat tömb (_parsedValue kulccsal).
 * @param sortOrder A rendezési sorrend.
 * @returns Az új, rendezett tömb.
 */
export const sortDataByParsedValue = (data: ProcessedDataItem[], sortOrder: 'asc' | 'desc' = 'desc'): ProcessedDataItem[] => {
  if (!Array.isArray(data)) return [];
  return [...data].sort((a, b) => {
    // A Number() konstruktor kezeli a Date objektumokat (átalakítja őket timestamp-re) és a számokat is.
    const valA = a._parsedValue !== null ? Number(a._parsedValue) : -Infinity;
    const valB = b._parsedValue !== null ? Number(b._parsedValue) : -Infinity;

    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });
};

/**
 * Levágja az adathalmazt a megadott limitre.
 * @param data A rendezett adat tömb.
 * @param displayLimit A maximálisan megjelenítendő elemek száma.
 * @returns A levágott tömb.
 */
export const limitData = (data: ProcessedDataItem[], displayLimit: number): ProcessedDataItem[] => {
  if (!Array.isArray(data)) return [];
  const limit = typeof displayLimit === 'number' && !isNaN(displayLimit) && displayLimit >= 0
    ? displayLimit
    : data.length;
  return data.slice(0, limit);
};