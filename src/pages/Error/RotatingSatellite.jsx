// src/pages/Error/RotatingSatellite.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Konstansok a műhold méretéhez
const SATELLITE_SIZE = 128;

const RotatingSatellite = () => {
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [duration, setDuration] = useState(20); // Mozgás időtartama
  const [windowDims, setWindowDims] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Ablakméret figyelése
  useEffect(() => {
    const handleResize = () => {
      setWindowDims({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Kezdő és célpozíciók + időtartam beállítása (méretváltozáskor is)
  useEffect(() => {
    const screenW = windowDims.width;
    const screenH = windowDims.height;

    // Véletlen kezdő pozíció
    const startX = Math.random() * (screenW - SATELLITE_SIZE);
    const startY = Math.random() * (screenH - SATELLITE_SIZE);
    setInitialPos({ x: startX, y: startY });

    // Célpozíció - pl. átellenes sarokhoz közelítve, vagy egyszerűen a képernyő másik oldala
    // Maradjunk az egyszerűbb oda-vissza mozgásnál az ellentétes oldalig
    const endX = screenW - startX - SATELLITE_SIZE;
    const endY = screenH - startY - SATELLITE_SIZE;
    setTargetPos({ x: endX, y: endY });

    // Véletlen időtartam az egyediséghez
    setDuration(20 + Math.random() * 20); // 20-40 mp közötti mozgási idő

  }, [windowDims]); // Újraszámol, ha az ablakméret változik

  return (
    <motion.img
      src="/images/lost-signal-satellite.png" // Ellenőrizd az útvonalat!
      alt="Mozgó és forgó műhold"
      className="z-50 absolute w-48 h-48 opacity-100 pointer-events-none" // Absolute pozícionálás
      style={{
        // Kezdő pozíció beállítása
        left: `${initialPos.x}px`,
        top: `${initialPos.y}px`,
      }}
      animate={{
        // Folyamatos forgás
        rotate: 360,
        // Egyenletes mozgás a célpozíció felé és vissza
        x: [0, targetPos.x - initialPos.x], // Relatív elmozdulás a cél X-ig
        y: [0, targetPos.y - initialPos.y], // Relatív elmozdulás a cél Y-ig
      }}
      transition={{
        // Forgás beállításai (marad ugyanaz)
        rotate: {
          repeat: Infinity,
          duration: 15, // Gyorsítottam a forgást (15s)
          ease: 'linear',
        },
        // X és Y mozgás beállításai - EGYÜTT mozognak
        x: {
          duration: duration, // A kiszámolt véletlen időtartam
          repeat: Infinity,
          repeatType: 'mirror', // Oda-vissza
          ease: 'easeInOut',   // Finom lassítás a széleken
        },
        y: {
          duration: duration, // Ugyanaz az időtartam, mint X-nél
          repeat: Infinity,
          repeatType: 'mirror', // Oda-vissza
          ease: 'easeInOut',   // Finom lassítás a széleken
        },
      }}
      initial={{ rotate: 0 }} // Kezdő forgás explicit beállítása
    />
  );
};

export default RotatingSatellite;