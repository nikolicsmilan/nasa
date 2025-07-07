// src/pages/Home/components/ShieldSVG.jsx

import { memo } from 'react';

// The component is wrapped in React.memo.
// It will only re-render if the 'szin' prop actually changes.
const ShieldSVG = memo(({ szin }) => {
  return (
    <svg
      width="100"
      height="120"
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10 L10 30 V80 C10 100 30 110 50 110 C70 110 90 100 90 80 V30 L50 10 Z"
        fill={szin} // The fill color is determined by the 'szin' prop.
      />
      <rect x="40" y="90" width="20" height="30" fill={szin} />
    </svg>
  );
});

// Setting a displayName for better debugging in React DevTools.
ShieldSVG.displayName = 'ShieldSVG';

export default ShieldSVG;
