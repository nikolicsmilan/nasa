import React from 'react';
import CircularProgress from 'react-svg-circular-progress';

const ProgressCircleChart = ({ percentage }) => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <CircularProgress percentage={percentage} strokeWidth={10} />
      <div style={{ textAlign: 'center', marginTop: '-1.5em', fontSize: '24px' }}>
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressCircleChart;
