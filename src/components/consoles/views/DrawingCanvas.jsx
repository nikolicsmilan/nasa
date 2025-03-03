/*import React from 'react';

function DrawingCanvas({ width = 300, height = 300 }) {
  const gridLines = [];
  for (let i = 0; i <= 10; i++) {
    gridLines.push(<line key={`x-${i}`} x1={i * 30} y1="0" x2={i * 30} y2={height} stroke="gray" strokeWidth="0.5" />);
    gridLines.push(<line key={`y-${i}`} x1="0" y1={i * 30} x2={width} y2={i * 30} stroke="gray" strokeWidth="0.5" />);
  }

  return (
    <svg width={width} height={height} className="">
      {gridLines}
      <line x1="50" y1="50" x2="200" y2="100" stroke="red" strokeWidth="2" />
    </svg>
  );
}

export default DrawingCanvas;*/
/*import React from 'react';

function DrawingCanvas({ width = 300, height = 300 }) {
  const gridLines = [];
  for (let i = 0; i <= 10; i++) {
    gridLines.push(<line key={`x-${i}`} x1={i * 30} y1="0" x2={i * 30} y2={height} stroke="gray" strokeWidth="0.5" />);
    gridLines.push(<line key={`y-${i}`} x1="0" y1={i * 30} x2={width} y2={i * 30} stroke="gray" strokeWidth="0.5" />);
  }

  const axisLabels = [];
  for (let i = 0; i <= 10; i++) {
    axisLabels.push(<text key={`x-label-${i}`} x={i * 30} y={height + 15} textAnchor="middle" fontSize="12" fill="orange">{i}</text>);
    axisLabels.push(<text key={`y-label-${i}`} x={-10} y={height - i * 30 + 5} textAnchor="middle" fontSize="12" fill="orange">{i}</text>);
  }

  return (
    <svg width={width} height={height + 20} className=""> 
      {gridLines}sss
      {axisLabels}
      <line x1="50" y1="50" x2="200" y2="100" stroke="red" strokeWidth="2" />
    </svg>
  );
}

export default DrawingCanvas;*/

/*
import React from 'react';

function DrawingCanvas({ width = 300, height = 300 }) {
  const gridLines = [];
  for (let i = 0; i <= 10; i++) {
    gridLines.push(<line key={`x-${i}`} x1={i * 30} y1="0" x2={i * 30} y2={height} stroke="gray" strokeWidth="0.5" />);
    gridLines.push(<line key={`y-${i}`} x1="0" y1={i * 30} x2={width} y2={i * 30} stroke="gray" strokeWidth="0.5" />);
  }

  const axisLabels = [];
  for (let i = 0; i <= 10; i++) {
    axisLabels.push(<text key={`x-label-${i}`} x={i * 30} y={height + 15} textAnchor="middle" fontSize="12" fill="orange">{i}</text>);
    axisLabels.push(<text key={`y-label-${i}`} x={-5} y={height - i * 30 + 5} textAnchor="end" fontSize="12" fill="orange">{i}</text>); // Changed x and textAnchor
  }

  return (
    <svg width={width} height={height + 20} className=""> 
      {gridLines}
      {axisLabels}
      <line x1="50" y1="50" x2="200" y2="100" stroke="red" strokeWidth="2" />
    </svg>
  );
}

export default DrawingCanvas;*/
/*
import React from 'react';

function DrawingCanvas({ width = 300, height = 300 }) {
  const gridLines = [];
  for (let i = 0; i <= 10; i++) {
    gridLines.push(<line key={`x-${i}`} x1={i * 30} y1="0" x2={i * 30} y2={height} stroke="gray" strokeWidth="0.5" />);
    gridLines.push(<line key={`y-${i}`} x1="0" y1={i * 30} x2={width} y2={i * 30} stroke="gray" strokeWidth="0.5" />);
  }

  const axisLabels = [];
  for (let i = 0; i <= 10; i++) {
    axisLabels.push(<text key={`x-label-${i}`} x={i * 30} y={height + 15} textAnchor="middle" fontSize="12" fill="orange">{i}</text>);
    axisLabels.push(<text key={`y-label-${i}`} x={-5} y={height - i * 30 + 5} textAnchor="end" fontSize="12" fill="orange">{i}</text>);
  }

  return (
    <svg width={width} height={height + 20} className="">
      {gridLines}
      {axisLabels}
      <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="blue" strokeWidth="2" /> 
      <line x1={width / 2} y1="0" x2={width / 2} y2={height} stroke="green" strokeWidth="2" /> 
      <line x1="50" y1="50" x2="200" y2="100" stroke="red" strokeWidth="2" />
    </svg>
  );
}

export default DrawingCanvas;*/

import React from 'react';

function DrawingCanvas({ width = 300, height = 300 }) {
  const gridLines = [];
  for (let i = 0; i <= 10; i++) {
    gridLines.push(<line key={`x-${i}`} x1={i * 30} y1="0" x2={i * 30} y2={height} stroke="gray" strokeWidth="0.5" />);
    gridLines.push(<line key={`y-${i}`} x1="0" y1={i * 30} x2={width} y2={i * 30} stroke="gray" strokeWidth="0.5" />);
  }

  const axisLabels = [];
  for (let i = 0; i <= 10; i++) {
    axisLabels.push(<text key={`x-label-${i}`} x={i * 30} y={height + 15} textAnchor="middle" fontSize="12" fill="orange">{i}</text>);
    axisLabels.push(<text key={`y-label-${i}`} x={-15} y={height - i * 30 + 5} textAnchor="end" fontSize="12" fill="orange" transform={`rotate(-90) translate(${-height + i*30 -5} , ${15})`}>{i}</text>);
  }

  return (
    <svg width={width} height={height + 20} className="">
      {gridLines}
      {axisLabels}
      <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="blue" strokeWidth="2" /> {/* X tengely */}
      <line x1={width / 2} y1="0" x2={width / 2} y2={height} stroke="green" strokeWidth="2" /> {/* Y tengely */}
      <line x1="50" y1="50" x2="200" y2="100" stroke="red" strokeWidth="2" />
    </svg>
  );
}

export default DrawingCanvas;