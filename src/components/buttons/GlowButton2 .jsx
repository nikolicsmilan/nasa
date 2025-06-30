import { useState } from "react";

const GlowButton2 = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      className="glow-button2 w-60 h-60"
      onMouseMove={handleMouseMove}
      style={{ "--x": `${pos.x}px`, "--y": `${pos.y}px` }}
    >
      Glowing Button 2
    </button>
  );
};

export default GlowButton2;
