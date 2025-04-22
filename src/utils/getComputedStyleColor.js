// Segédfüggvény egy DOM elem számított (computed) szövegszínének lekérdezéséhez
export const getComputedStyleColor = (elementId) => {
  // Megkeresi a DOM-ban az adott ID-jű elemet (az App.jsx-ben lévő rejtett 'ezaz' divet)
  const tempDiv = document.getElementById(elementId);
  // Ha nem található az elem, hibát dobhat, vagy adjon vissza alapértelmezett színt (itt nincs hibakezelés)
  // Lekérdezi az elem számított stílusát (ami figyelembe veszi az összes CSS szabályt)
  const computedStyle = window.getComputedStyle(tempDiv);
  // Kiolvassa a számított 'color' (szövegszín) tulajdonságot
  const color = computedStyle.color;
  // Visszaadja a kiolvasott színt (pl. "rgb(34, 211, 238)" a türkiz 'text-primary' esetén)
  return color;
};