
const BottomConsole = ({ buttons, handleClick, nameconsole }) => {
  return (
    <>
      {buttons?.map((item, index) => ( // Added 'index' as the second parameter
        <div
          key={item.id || index} // Use a unique ID from your item, or fallback to index
          className="glowy-button-5 text-3xl text-info m-1 
          flex  flex-col justify-center items-center shadow-xl text-primary w-20"
          onClick={() => handleClick(nameconsole, item)}
        >
          <p className=" border-0 flex justify-center
            items-center flex-col">
            {<item.icon />}
          </p>
          <p className="text-sm">{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default BottomConsole;
