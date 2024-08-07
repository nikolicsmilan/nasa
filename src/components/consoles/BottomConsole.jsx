import React from "react";

const BottomConsole = ({ buttons, handleClick, nameconsole }) => {
  return (
    <>
      {buttons?.map((item) => (
        <div
          className="glowy-button-5 text-3xl text-info m-2 flex  flex-col justify-center items-center shadow-xl text-primary"
          onClick={() => handleClick(nameconsole, item)}
        >
          <p className=" border-0 flex justify-center items-center flex-col">
            {<item.icon />}
          
          </p>
        </div>
      ))}
    </>
  );
};

export default BottomConsole;
