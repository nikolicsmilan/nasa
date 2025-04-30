const GenericConsole = ({ data, handleClick, active }) => {
  return (
    <div className="flex border-0 border-purple-600 mx-0 w-full h-full">
      {data?.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(item)}
          className={`flex flex-col items-center justify-center 
               glowy-button-5 group relative border-0 p-0 rounded m-2
               hover:bg-600 h-16 w-20 text-primary cursor-pointer 
              ${active === item.title ? "bg-600" : ""}`} // Aktív állapot összehasonlítás
        >
          {<item.icon />}
          <div
            className=" ml-2 hidde group-hover:block  text-white 
            text-sm rounded  z-50"
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenericConsole;
