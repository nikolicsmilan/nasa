import React from "react";

const SquareminConsole = ({ title }) => {
  return (
    <div className="text-center min-w-40 max-w-32 h-32 bg-gradient p-2 rounded-lg shadow m-1 flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-sky-950">{title}</h2>
      <p className="flex-grow flex items-center justify-center text-3xl">0</p>
      <p className="mt-auto">Nincs veszély</p>
    </div>
  );
};

export default SquareminConsole;
