import React from "react";
import IdentityCard from "../Asteroide/components/IdentityCard";

const SpaceKnowledge = () => {
  return (
    <div className="text-center m-2 text-xl  h-screen">
      <h1>SpaceKnowledge</h1>

      <div className="flex items-start justify-center bg-white
       p-2 h-[2000px] w-[1000px]">
        <IdentityCard />
      </div>
    </div>
  );
};

export default SpaceKnowledge;
