import  { useState } from 'react';


const GlowyButton = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="glow-button w-60 h-60 relative top-[114px]" onMouseMove={handleMouseMove} style={{ '--x': `${pos.x}px`, '--y': `${pos.y}px` }}>
      Glowing Button
    </div>
  );
};

export default GlowyButton;
