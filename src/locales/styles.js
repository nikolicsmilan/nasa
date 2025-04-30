// src/styles.js
import StyleIcon from '../components/misc/StyleIcon'; // Importáljuk az új ikont

// Stílus menü a téma választáshoz, a komponens alapú megközelítéssel
export const styles = [
  {
    title: "plasma",
    iconComponent: StyleIcon, // Referencia a komponensre
    iconData: { // Adatok, amiket a komponens propként kap
      imageUrl: "/images/plasma4.png", // Útvonal a public mappából
      altText: "Plasma Theme Icon",
    },
    // Opcionálisan itt lehetne a description is, ha a GenericConsole felolvasná
    // description: "Cyan based theme"
  },
  {
    title: "ion",
    iconComponent: StyleIcon,
    iconData: {
      imageUrl: "/images/ion10.png",
      altText: "Ion Theme Icon",
    },
  },
  {
    title: "fusion",
    iconComponent: StyleIcon,
    iconData: {
      imageUrl: "/images/fusion8.png",
      altText: "Fusion Theme Icon",
    },
  },
  {
    title: "quantum",
    iconComponent: StyleIcon,
    iconData: {
      imageUrl: "/images/quantum3.png",
      altText: "Quantum Theme Icon",
    },
  },
  // Ha a 'sky-refined' vagy más téma is kell, azt is hasonlóan kell hozzáadni
  // {
  //   title: "sky-refined", // Vagy a megfelelő új név
  //   iconComponent: StyleIcon,
  //   iconData: {
  //     imageUrl: "/images/sky-refined.png", // Győződj meg róla, hogy ez a kép létezik
  //     altText: "Refined Theme Icon"
  //   },
  // },
];