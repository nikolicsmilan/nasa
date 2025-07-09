// Ebben a fájlban definiáljuk a témáink színeit tiszta JavaScript objektumként.
import colors from 'tailwindcss/colors';

// Ez az objektum lesz az egyetlen igazság forrása a primary színekhez.
// A chartok és a tailwind is innen fogja venni az adatot.
export const themeColors = {
  default: colors.sky['400'],
  plasma:  colors.sky['400'], // A te configodban a plasma is sky-400-at használt
  ion:     colors.lime['400'],
  fusion:  colors.green['400'],
  quantum: colors.blue['400'],
};