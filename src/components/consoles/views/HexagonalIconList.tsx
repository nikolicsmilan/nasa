// src/components/consoles/views/HexagonalIconList.tsx
import React, { useState, useEffect, useMemo, memo } from "react";
// import { useNavigate } from "react-router-dom";
import BiggerConsoles from "./BiggerConsoles";
import { start } from "../../../locales/localdata";
import { IconType } from "react-icons"; // Assuming you use react-icons

// 1. Define the type for the items in the list
interface HexIconItem {
  id: string | number; // A stable ID is crucial for keys
  path: string;
  icon: IconType; // Or React.ComponentType<{ className?: string }> for more general icons
}

// 2. Define the component's props
interface HexagonalIconListProps {
  items: HexIconItem[];
}

// 3. Helper function to calculate radius to avoid repetition
const getRadius = (): number => (window.innerWidth < 400 ? 130 : 180);


const HexagonalIconList: React.FC<HexagonalIconListProps> = ({ items }) => {
  // const navigate = useNavigate();

  // 4. Store radius in state to make it reactive
  const [radius, setRadius] = useState<number>(getRadius());

  // 5. useEffect to listen for window resize events
  useEffect(() => {
    const handleResize = () => {
      setRadius(getRadius());
    };
    window.addEventListener('resize', handleResize);
    
    // Cleanup: remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // 6. Memoize the calculation of icon positions and the resulting JSX
  // This block will only re-run if `items` or `radius` changes.
  const renderedIcons = useMemo(() => {
    const iconCount = items.length;
    const centerX = radius;
    const centerY = radius;

    return items.map((item, index) => {
      const angle = (index / iconCount) * (2 * Math.PI);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      return (
        <div
          key={item.id} // Use the stable ID from the item object
          className="absolute cursor-pointer text-center"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: 'translate(-50%, -50%)',
          }}
          // onClick={() => navigate(item.path)}
        >
          <div className="hexagon rounded- border-primary h-20 w-24 flex items-center justify-center bg-950 opacity-100 hover:bg-600">
            <item.icon className="text-3xl text-primary" />
          </div>
        </div>
      );
    });
  }, [items, radius]); // Dependencies for the memoization

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: `${2 * radius}px`, height: `${2 * radius}px`, minWidth: `${2 * radius}px`, minHeight: `${2 * radius}px` }}
    >
      {/* Center Icon */}
      <div className="absolute cursor-pointer text-center flex justify-center items-center w-60 h-60">
        <BiggerConsoles menupoint={start} />
      </div>

      {/* Surrounding Icons (the memoized result) */}
      {renderedIcons}
    </div>
  );
};

// 7. Wrap the entire component in React.memo for prop-based memoization
export default memo(HexagonalIconList);
