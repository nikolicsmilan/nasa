// src/layouts/LayoutSimple.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Vagy közvetlenül a children-t rendereljük
import { MyDataContext } from '../context/DataContext';
// Egy egyszerűsített layout, ami csak az alap stílust és a gyermek komponenst tartalmazza.
const LayoutSimple = ({ children }) => {
  const { choosenStyle } = MyDataContext();
  // Itt is használhatnád a DataContext-et, ha a globális stílus (choosenStyle) kell,
  // de egyszerűbb lehet csak az alap stílusosztályokat megadni.
  // import { MyDataContext } from '../context/DataContext';
  // const { choosenStyle } = MyDataContext();

  return (
    // Alap konténer: teljes képernyő magasság, sötét háttér, alap szövegszín és font
    <div className={`${choosenStyle} min-h-screen w-screen flex flex-col bg-black font-mono`}>
      {/* Nincs header vagy komplex menü */}

      {/* Fő tartalom terület: kitölti a rendelkezésre álló helyet */}
      <main className="flex-grow flex items-center justify-center">
        {/* Itt jelenik meg a gyermek komponens (pl. az Error oldal) */}
        {children}
        {/* Vagy ha Outlet-et használsz a routerben: */}
        {/* <Outlet /> */}
      </main>

      {/* Nincs footer vagy komplex oldalsáv */}
    </div>
  );
};

export default LayoutSimple;