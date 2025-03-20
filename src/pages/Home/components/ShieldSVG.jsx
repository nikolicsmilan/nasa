import React from "react";

const ShieldSVG = ({ szin }) => {
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
        fill={szin}
      />
      <rect x="40" y="90" width="20" height="30" fill={szin} />
    </svg>
  );
};

export default ShieldSVG;
