import React from "react";

const GeneralCircle = ({ r, width, height, x, y,fill }) => {
  return (
    < >
      <circle  className={fill}
        cx={x * 30 + width / 2}
        cy={height - height / 2 - y * 30}
        r={r}
        fill={fill}
      />

    </>
  );
};

export default GeneralCircle;

/*
  <circle
        cx={x * 30 + width / 2}
        cy={height - height / 2 - y * 30}
        r={r}
        fill={fill}
      />
*/
